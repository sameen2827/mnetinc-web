const AboutSection = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Team Members" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" }
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace emerging technologies",
      icon: "💡"
    },
    {
      title: "Client Success",
      description: "Your success is our success - we're invested in your growth",
      icon: "🎯"
    },
    {
      title: "Quality Excellence",
      description: "We deliver solutions that exceed expectations",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
      icon: "🤝"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">MNet</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Founded in 2014, MNet has been at the forefront of digital innovation, 
              helping organizations transform their operations through cutting-edge technology solutions.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our team of experts combines deep technical knowledge with industry expertise 
              to deliver solutions that drive real business value and competitive advantage.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl glass-effect">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🏢</div>
                <div className="text-2xl font-bold text-white">Our Headquarters</div>
                <div className="text-gray-300 mt-2">Innovation District, Tech City</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-3xl animate-bounce">
              🚀
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-secondary to-purple-500 rounded-2xl flex items-center justify-center text-2xl animate-pulse">
              💻
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-8">Our <span className="gradient-text">Values</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group p-6 rounded-2xl glass-effect card-hover">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
