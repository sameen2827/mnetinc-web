const CloudSection = () => {
  const cloudProviders = [
    {
      name: "Amazon Web Services",
      logo: "AWS",
      description: "Leading cloud platform with comprehensive services",
      features: ["EC2", "Lambda", "S3", "RDS", "CloudFormation"]
    },
    {
      name: "Microsoft Azure",
      logo: "Azure",
      description: "Enterprise-grade cloud solutions",
      features: ["Virtual Machines", "Functions", "Blob Storage", "SQL Database", "ARM Templates"]
    },
    {
      name: "Google Cloud Platform",
      logo: "GCP",
      description: "Innovative cloud infrastructure and AI services",
      features: ["Compute Engine", "Cloud Functions", "Cloud Storage", "Cloud SQL", "Deployment Manager"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Certified experts across all major cloud platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cloudProviders.map((provider, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass-effect card-hover"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                  {provider.logo}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {provider.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {provider.description}
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-3">Key Services:</h4>
                {provider.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
                    <span className="text-gray-300">{feature}</span>
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full text-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 p-6 rounded-2xl glass-effect">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Projects Deployed</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CloudSection
