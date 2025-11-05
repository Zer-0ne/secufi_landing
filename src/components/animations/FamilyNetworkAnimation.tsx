import { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  type: 'core' | 'elder' | 'child' | 'asset';
  subtype?: string;
  color: string;
  glowColor: string;
  targetAngle: number;
  targetRadius: number;
  buildProgress: number;
  speedMultiplier: number;
  jitterAmount: number;
  randomWalkPhase: number;
  shapeVertices: number;
  shapeRoundness: number;
}

interface Document {
  id: string;
  fromNode: string;
  toNode: string;
  progress: number;
  speed: number;
  color: string;
  icon: string;
  zipProgress: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

const FamilyNetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [buildProgress, setBuildProgress] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const documentsRef = useRef<Document[]>([]);
  const startTimeRef = useRef<number>(Date.now());
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const centerX = canvas.width / (2 * window.devicePixelRatio);
    const centerY = canvas.height / (2 * window.devicePixelRatio);

    nodesRef.current = [
      {
        id: 'core',
        x: centerX,
        y: centerY,
        label: 'Family Core',
        type: 'core',
        color: '#10d8c4',
        glowColor: 'rgba(16, 216, 196, 0.6)',
        targetAngle: 0,
        targetRadius: 0,
        buildProgress: 0,
        speedMultiplier: 1,
        jitterAmount: 0,
        randomWalkPhase: 0,
        shapeVertices: 8,
        shapeRoundness: 0.6
      },
      {
        id: 'father',
        x: centerX,
        y: centerY,
        label: 'Father',
        type: 'elder',
        color: '#10d8c4',
        glowColor: 'rgba(16, 216, 196, 0.4)',
        targetAngle: 0,
        targetRadius: 130,
        buildProgress: 0,
        speedMultiplier: 0.7,
        jitterAmount: 2,
        randomWalkPhase: 0,
        shapeVertices: 6,
        shapeRoundness: 0.7
      },
      {
        id: 'mother',
        x: centerX,
        y: centerY,
        label: 'Mother',
        type: 'elder',
        color: '#10d8c4',
        glowColor: 'rgba(16, 216, 196, 0.4)',
        targetAngle: Math.PI / 2,
        targetRadius: 130,
        buildProgress: 0,
        speedMultiplier: 0.75,
        jitterAmount: 2,
        randomWalkPhase: Math.PI / 2,
        shapeVertices: 7,
        shapeRoundness: 0.75
      },
      {
        id: 'son',
        x: centerX,
        y: centerY,
        label: 'Son',
        type: 'child',
        color: '#10d8c4',
        glowColor: 'rgba(16, 216, 196, 0.4)',
        targetAngle: Math.PI,
        targetRadius: 130,
        buildProgress: 0,
        speedMultiplier: 1.3,
        jitterAmount: 6,
        randomWalkPhase: Math.PI,
        shapeVertices: 5,
        shapeRoundness: 0.5
      },
      {
        id: 'daughter',
        x: centerX,
        y: centerY,
        label: 'Daughter',
        type: 'child',
        color: '#10d8c4',
        glowColor: 'rgba(16, 216, 196, 0.4)',
        targetAngle: (3 * Math.PI) / 2,
        targetRadius: 130,
        buildProgress: 0,
        speedMultiplier: 1.4,
        jitterAmount: 7,
        randomWalkPhase: (3 * Math.PI) / 2,
        shapeVertices: 5,
        shapeRoundness: 0.5
      },
      {
        id: 'bank',
        x: centerX,
        y: centerY,
        label: 'Bank Accounts',
        type: 'asset',
        subtype: 'bank',
        color: '#3b82f6',
        glowColor: 'rgba(59, 130, 246, 0.4)',
        targetAngle: Math.PI / 4,
        targetRadius: 210,
        buildProgress: 0,
        speedMultiplier: 1,
        jitterAmount: 0,
        randomWalkPhase: Math.PI / 4,
        shapeVertices: 4,
        shapeRoundness: 0.3
      },
      {
        id: 'policies',
        x: centerX,
        y: centerY,
        label: 'Insurance',
        type: 'asset',
        subtype: 'shield',
        color: '#43e97b',
        glowColor: 'rgba(67, 233, 123, 0.4)',
        targetAngle: (3 * Math.PI) / 4,
        targetRadius: 210,
        buildProgress: 0,
        speedMultiplier: 0.9,
        jitterAmount: 0,
        randomWalkPhase: (3 * Math.PI) / 4,
        shapeVertices: 6,
        shapeRoundness: 0.2
      },
      {
        id: 'investments',
        x: centerX,
        y: centerY,
        label: 'Investments',
        type: 'asset',
        subtype: 'coin',
        color: '#2563eb',
        glowColor: 'rgba(37, 99, 235, 0.4)',
        targetAngle: (5 * Math.PI) / 4,
        targetRadius: 210,
        buildProgress: 0,
        speedMultiplier: 1.1,
        jitterAmount: 0,
        randomWalkPhase: (5 * Math.PI) / 4,
        shapeVertices: 8,
        shapeRoundness: 0.5
      },
      {
        id: 'documents',
        x: centerX,
        y: centerY,
        label: 'Documents',
        type: 'asset',
        subtype: 'file',
        color: '#ffab40',
        glowColor: 'rgba(255, 171, 64, 0.4)',
        targetAngle: (7 * Math.PI) / 4,
        targetRadius: 210,
        buildProgress: 0,
        speedMultiplier: 0.95,
        jitterAmount: 0,
        randomWalkPhase: (7 * Math.PI) / 4,
        shapeVertices: 4,
        shapeRoundness: 0.15
      }
    ];

    documentsRef.current = [
      { id: 'doc1', fromNode: 'father', toNode: 'bank', progress: 0, speed: 0.0012, color: '#ffab40', icon: 'file', zipProgress: 0 },
      { id: 'doc2', fromNode: 'mother', toNode: 'policies', progress: 0.25, speed: 0.001, color: '#43e97b', icon: 'shield', zipProgress: 0 },
      { id: 'doc3', fromNode: 'son', toNode: 'investments', progress: 0.5, speed: 0.0015, color: '#3b82f6', icon: 'coin', zipProgress: 0 },
      { id: 'doc4', fromNode: 'daughter', toNode: 'documents', progress: 0.75, speed: 0.0013, color: '#ff784b', icon: 'key', zipProgress: 0 }
    ];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };

      nodesRef.current.forEach((node) => {
        const dist = Math.hypot(mousePos.current.x - node.x, mousePos.current.y - node.y);
        if (dist < 30 && node.buildProgress > 0.5) {
          if (hoveredNode !== node.id) {
            setHoveredNode(node.id);
            createParticleBurst(node.x, node.y, node.color);
          }
        }
      });
    };

    const createParticleBurst = (x: number, y: number, color: string) => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const speed = 1 + Math.random() * 2;
        newParticles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          color
        });
      }
      setParticles((prev) => [...prev, ...newParticles]);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const drawOrganicShape = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, vertices: number, roundness: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i <= vertices; i++) {
        const angle = (i / vertices) * Math.PI * 2 + rotation;
        const nextAngle = ((i + 1) / vertices) * Math.PI * 2 + rotation;

        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          const cpDist = radius * roundness;
          const cp1x = x + Math.cos(angle - Math.PI / vertices) * cpDist;
          const cp1y = y + Math.sin(angle - Math.PI / vertices) * cpDist;
          const cp2x = x + Math.cos(angle + Math.PI / vertices) * cpDist;
          const cp2y = y + Math.sin(angle + Math.PI / vertices) * cpDist;

          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, px, py);
        }
      }
      ctx.closePath();
    };

    const drawNode = (node: Node, time: number) => {
      if (node.buildProgress < 0.01) return;

      const scale = easeOutCubic(node.buildProgress);
      const baseRadius = node.type === 'core' ? 32 : node.type === 'elder' ? 26 : node.type === 'child' ? 22 : 24;
      const scaledRadius = baseRadius * scale;
      const rotation = time * 0.0002 * node.speedMultiplier;

      ctx.save();

      if (node.type === 'core') {
        const heartbeatScale = 1 + Math.sin(time * 0.0008) * 0.05;
        ctx.globalAlpha = 0.5 * node.buildProgress;
        ctx.beginPath();
        ctx.arc(node.x, node.y, scaledRadius * heartbeatScale * 3.5, 0, Math.PI * 2);
        const coreGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, scaledRadius * heartbeatScale * 3.5);
        coreGradient.addColorStop(0, node.glowColor);
        coreGradient.addColorStop(0.5, 'rgba(116, 103, 239, 0.3)');
        coreGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = coreGradient;
        ctx.fill();
        ctx.globalAlpha = 1;
      } else {
        const pulseIntensity = 0.25 + Math.sin(time * 0.0015 + node.randomWalkPhase) * 0.15;
        ctx.globalAlpha = pulseIntensity * node.buildProgress;
        ctx.beginPath();
        ctx.arc(node.x, node.y, scaledRadius * 3, 0, Math.PI * 2);
        const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, scaledRadius * 3);
        nodeGradient.addColorStop(0, node.glowColor);
        nodeGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = nodeGradient;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      const bgGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, scaledRadius);
      if (node.type === 'core') {
        bgGradient.addColorStop(0, '#10d8c4');
        bgGradient.addColorStop(0.5, '#7467ef');
        bgGradient.addColorStop(1, '#10d8c4');
      } else {
        bgGradient.addColorStop(0, node.color);
        bgGradient.addColorStop(1, node.color);
      }
      ctx.fillStyle = bgGradient;

      drawOrganicShape(ctx, node.x, node.y, scaledRadius, node.shapeVertices, node.shapeRoundness, rotation);
      ctx.fill();

      ctx.strokeStyle = hoveredNode === node.id ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = hoveredNode === node.id ? 3 : 2;
      ctx.stroke();

      if (node.buildProgress > 0.7) {
        ctx.fillStyle = 'white';
        ctx.font = '10px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const labelAlpha = (node.buildProgress - 0.7) / 0.3;
        ctx.globalAlpha = labelAlpha;
        ctx.fillText(node.label, node.x, node.y + scaledRadius + 18);
        ctx.globalAlpha = 1;
      }

      ctx.restore();
    };

    const drawConnections = () => {
      nodesRef.current.forEach((node) => {
        if (node.id === 'core' || node.buildProgress < 0.5) return;

        const coreNode = nodesRef.current.find((n) => n.id === 'core');
        if (!coreNode) return;

        ctx.save();
        ctx.globalAlpha = 0.15 * node.buildProgress;
        const gradient = ctx.createLinearGradient(coreNode.x, coreNode.y, node.x, node.y);
        gradient.addColorStop(0, coreNode.color);
        gradient.addColorStop(1, node.color);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 6]);
        ctx.lineDashOffset = Date.now() * 0.015;
        ctx.beginPath();
        ctx.moveTo(coreNode.x, coreNode.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
        ctx.restore();
      });
    };

    const drawDocumentIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, icon: string, size: number, color: string) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1.5;

      if (icon === 'file') {
        ctx.fillRect(x - size/2, y - size/2, size, size * 1.3);
        ctx.strokeRect(x - size/2, y - size/2, size, size * 1.3);
      } else if (icon === 'shield') {
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.quadraticCurveTo(x + size, y - size/2, x + size, y + size/2);
        ctx.quadraticCurveTo(x, y + size, x, y + size);
        ctx.quadraticCurveTo(x, y + size, x - size, y + size/2);
        ctx.quadraticCurveTo(x - size, y - size/2, x, y - size);
        ctx.fill();
        ctx.stroke();
      } else if (icon === 'coin') {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else if (icon === 'key') {
        ctx.beginPath();
        ctx.arc(x - size/2, y, size/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(x, y - size/4, size, size/2);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawDocument = (doc: Document, time: number) => {
      const fromNode = nodesRef.current.find((n) => n.id === doc.fromNode);
      const toNode = nodesRef.current.find((n) => n.id === doc.toNode);

      if (!fromNode || !toNode || fromNode.buildProgress < 0.4 || toNode.buildProgress < 0.4) return;

      const shouldZip = Math.random() < 0.003;
      if (shouldZip && doc.zipProgress === 0) {
        doc.zipProgress = 0.01;
      }

      let x, y;
      let effectiveProgress = doc.progress;

      if (doc.zipProgress > 0 && doc.zipProgress < 1) {
        doc.zipProgress = Math.min(doc.zipProgress + 0.05, 1);
        effectiveProgress = doc.zipProgress;
      } else if (doc.zipProgress >= 1) {
        doc.zipProgress = 0;
      }

      x = fromNode.x + (toNode.x - fromNode.x) * effectiveProgress;
      y = fromNode.y + (toNode.y - fromNode.y) * effectiveProgress;

      const wobble = Math.sin(time * 0.003 + doc.progress * 10) * 5;
      y += wobble;

      ctx.save();

      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      const trailGradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
      trailGradient.addColorStop(0, doc.color);
      trailGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = trailGradient;
      ctx.fill();
      ctx.globalAlpha = 1;

      drawDocumentIcon(ctx, x, y, doc.icon, 6, doc.color);

      ctx.restore();
    };

    const drawParticles = () => {
      setParticles((prev) => {
        return prev
          .map((p) => {
            ctx.save();
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            return {
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              life: p.life - 0.02
            };
          })
          .filter((p) => p.life > 0);
      });
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      const buildDuration = 4000;
      const newBuildProgress = Math.min(elapsed / buildDuration, 1);
      setBuildProgress(newBuildProgress);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / (2 * window.devicePixelRatio);
      const centerY = canvas.height / (2 * window.devicePixelRatio);

      nodesRef.current.forEach((node, index) => {
        const nodeDelay = index * 0.12;
        const nodeProgress = Math.max(0, Math.min((newBuildProgress - nodeDelay) / (1 - nodeDelay), 1));
        node.buildProgress = easeOutCubic(nodeProgress);

        if (node.id === 'core') {
          node.x = centerX;
          node.y = centerY;
        } else {
          const orbitSpeed = 0.00002 * node.speedMultiplier;
          const currentAngle = node.targetAngle + now * orbitSpeed;

          const randomWalkX = Math.sin(now * 0.0008 + node.randomWalkPhase) * node.jitterAmount;
          const randomWalkY = Math.cos(now * 0.0007 + node.randomWalkPhase) * node.jitterAmount;
          const oscillation = Math.sin(now * 0.0005 + index) * 12;

          const targetX = centerX + Math.cos(currentAngle) * (node.targetRadius + oscillation) + randomWalkX;
          const targetY = centerY + Math.sin(currentAngle) * (node.targetRadius + oscillation) + randomWalkY;

          node.x += (targetX - node.x) * 0.012 * node.buildProgress;
          node.y += (targetY - node.y) * 0.012 * node.buildProgress;
        }
      });

      drawConnections();
      drawParticles();

      nodesRef.current.forEach((node) => {
        drawNode(node, now);
      });

      if (newBuildProgress > 0.4) {
        documentsRef.current.forEach((doc) => {
          if (doc.zipProgress === 0) {
            doc.progress = (doc.progress + doc.speed) % 1;
          }
          drawDocument(doc, now);
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hoveredNode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-lvh cursor-pointer"
      style={{ opacity: 0.75 }}
    />
  );
};

export default FamilyNetworkAnimation;
