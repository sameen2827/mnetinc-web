const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Rocket Graphic */}
      <div className="relative mb-6 group">
        {/* Rocket Body */}
        <div className="w-24 h-32 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-full relative transition-transform duration-1000 group-hover:scale-110">
          {/* Rocket Window */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-800 rounded-full"></div>
        </div>
        
        {/* Rocket Trajectory/Exhaust */}
        <div className="absolute -bottom-2 -left-4 w-32 h-16">
          <div className="w-full h-full bg-gradient-to-tr from-purple-600 via-blue-500 to-blue-300 rounded-full opacity-80 transform rotate-12 animate-pulse"></div>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-transparent rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* MNet Text */}
      <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-2">
        <span className="gradient-text">MNet</span>
      </h1>
      
      {/* Innovation Hub Text */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white/90 tracking-wider">
        <span className="gradient-text">INNOVATION HUB</span>
      </h2>
    </div>
  )
}

export default Logo
