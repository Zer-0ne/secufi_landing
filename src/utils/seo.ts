export const setPageMetadata = ({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical?: string;
}) => {
  if (typeof document === "undefined") {
    return;
  }

  document.title = title;

  const ensureMeta = (name: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", name);
      document.head.appendChild(meta);
    }
    return meta;
  };

  const descriptionMeta = ensureMeta("description");
  descriptionMeta.setAttribute("content", description);

  if (canonical) {
    let canonicalLink = document.querySelector("link[rel=canonical]");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
  }
};
