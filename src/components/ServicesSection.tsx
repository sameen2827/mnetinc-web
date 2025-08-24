import { useState } from 'react'
import CourseModal from './CourseModal'
import { courses, Course } from '../data/courses'

const ServicesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openCourseModal = (courseId: string) => {
    const course = courses.find(c => c.id === courseId)
    if (course) {
      setSelectedCourse(course)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCourse(null)
  }

  const services = [
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: "☁️",
      features: ["AWS", "Azure", "GCP", "Hybrid Cloud"],
      courseId: "cloud-solutions"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics",
      icon: "🤖",
      features: ["Predictive Models", "NLP", "Computer Vision", "AutoML"],
      courseId: "ai-ml"
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat protection and compliance",
      icon: "🔒",
      features: ["Threat Detection", "Penetration Testing", "Compliance", "Incident Response"],
      courseId: "cybersecurity"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business process optimization",
      icon: "🚀",
      features: ["Process Automation", "Legacy Modernization", "Change Management", "Training"],
      courseId: "digital-transformation"
    }
  ]

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl glass-effect card-hover"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Course Details Button */}
                <button
                  onClick={() => openCourseModal(service.courseId)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  View Course Details
                </button>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modal */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        course={selectedCourse}
      />
    </>
  )
}

export default ServicesSection
