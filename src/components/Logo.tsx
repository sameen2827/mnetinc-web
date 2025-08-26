import { getLogoPath } from '../utils/assets'

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Rocket Graphic */}
      <div className="relative mb-6 group">
        {/* SVG Logo */}
        <img 
          src={getLogoPath('mnet')} 
          alt="MNet Innovation Hub Logo" 
          className="w-32 h-32 group-hover:scale-110 transition-transform duration-1000"
        />
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
