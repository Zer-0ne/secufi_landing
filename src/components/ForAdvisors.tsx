import { TrendingUp, Eye, Zap, Lock, ArrowRight } from 'lucide-react';

const advisorFeatures = [
  {
    icon: Eye,
    title: 'Full Portfolio Visibility',
    description: 'See all client holdings across banks, insurers, and fund houses in one unified view.',
  },
  {
    icon: TrendingUp,
    title: 'Convert to AUM',
    description: 'Identify outside holdings and convert them into assets under management with contextual insights.',
  },
  {
    icon: Zap,
    title: 'Proactive Opportunities',
    description: 'Get alerts on policy lapses, nominee gaps, and portfolio rebalancing opportunities.',
  },
  {
    icon: Lock,
    title: 'Client Consent-Based',
    description: 'Access granted by clients with full transparency. Build trust through secure, compliant sharing.',
  },
];

const ForAdvisors = () => {
  return (
    <section className="relative py-32 px-6 bg-blue-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-[150px] opacity-30 animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200 rounded-full blur-[150px] opacity-30 animate-pulse" style={{ animationDelay: '3s', animationDuration: '6s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-semibold text-blue-700">For Financial Advisors</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Turn Client Trust Into
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Growing AUM
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              SecuFi gives advisors a complete view of their clients' financial universe. Discover outside holdings,
              identify gaps, and convert opportunities into managed assets.
            </p>

            <div className="space-y-6 mb-10">
              {advisorFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 group"
                  style={{
                    animation: `fadeInLeft 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3">
              Join as an Advisor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-blue-300 transition-all duration-500 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl opacity-50" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Client Portfolio Value</div>
                    <div className="text-3xl font-bold text-gray-900">₹2.4 Cr</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">AUM Opportunity</div>
                    <div className="text-3xl font-bold text-teal-600">₹1.2 Cr</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-sm">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Mutual Funds</div>
                        <div className="text-sm text-gray-600">5 holdings outside</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-teal-600">₹45L</div>
                      <div className="text-xs text-gray-600">Opportunity</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#4f8ff7] flex items-center justify-center">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Insurance</div>
                        <div className="text-sm text-gray-600">3 policies expiring</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-teal-600">₹35L</div>
                      <div className="text-xs text-gray-600">Action needed</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-sm">
                        <Eye className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Fixed Deposits</div>
                        <div className="text-sm text-gray-600">Maturing soon</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-teal-600">₹40L</div>
                      <div className="text-xs text-gray-600">Convert to MF</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Portfolio Completeness</span>
                    <span className="font-semibold text-teal-600">73%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-1000"
                      style={{ width: '73%', animation: 'growWidth 1.5s ease-out' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-300 to-blue-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-300 to-teal-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '3s', animationDuration: '6s' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes growWidth {
          from {
            width: 0%;
          }
          to {
            width: 73%;
          }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default ForAdvisors;
