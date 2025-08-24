import { useState, useEffect } from 'react'

interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: string
  price: string
  features: string[]
  syllabus: string[]
  instructor: string
  certification: string
}

interface CourseModalProps {
  isOpen: boolean
  onClose: () => void
  course: Course | null
}

const CourseModal = ({ isOpen, onClose, course }: CourseModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !course) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-dark border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-dark/95 backdrop-blur-md border-b border-white/10 p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{course.title}</h2>
              <p className="text-gray-300">{course.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Course Details */}
        <div className="p-6 space-y-8">
          {/* Course Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
              <p className="text-gray-300">{course.duration}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Level</h3>
              <p className="text-gray-300">{course.level}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Price</h3>
              <p className="text-primary font-semibold">{course.price}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">What You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Course Syllabus</h3>
            <div className="space-y-3">
              {course.syllabus.map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Module {index + 1}</span>
                    <span className="text-primary font-semibold">2-3 hours</span>
                  </div>
                  <h4 className="text-white font-medium mt-1">{item}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor & Certification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Instructor</h3>
              <p className="text-gray-300">{course.instructor}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Certification</h3>
              <p className="text-gray-300">{course.certification}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
            <button className="flex-1 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
            <button className="flex-1 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseModal
