const ParticlesBg = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-slate-900 to-dark" />
      <div className="absolute inset-0 opacity-30">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-ping" />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-secondary rounded-full animate-bounce" />
      </div>
    </div>
  )
}

export default ParticlesBg
