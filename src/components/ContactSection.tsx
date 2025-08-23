const ContactSection = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "123 Innovation Drive, Tech City, TC 12345"
    },
    {
      icon: "📧",
      title: "Email",
      details: "hello@mnetinc.com"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: "🌐",
      title: "Website",
      details: "www.mnetinc.com"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your digital transformation journey? Let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Send us a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="john@company.com"
              />
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="Your Company"
              />
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <button className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Send Message
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl glass-effect">
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-gray-300">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 rounded-2xl glass-effect">
              <h4 className="text-xl font-bold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
