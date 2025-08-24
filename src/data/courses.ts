export interface Course {
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

export const courses: Course[] = [
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions Mastery',
    description: 'Comprehensive cloud infrastructure and migration services training program',
    duration: '8-12 weeks',
    level: 'Intermediate to Advanced',
    price: '$2,499',
    features: [
      'AWS, Azure, and GCP platform expertise',
      'Cloud architecture design principles',
      'Migration strategies and best practices',
      'Cost optimization and security implementation',
      'Hands-on labs with real-world scenarios',
      '24/7 mentor support throughout the course'
    ],
    syllabus: [
      'Cloud Fundamentals and Service Models',
      'AWS Core Services (EC2, S3, RDS, Lambda)',
      'Azure Infrastructure and Platform Services',
      'Google Cloud Platform Essentials',
      'Multi-cloud Architecture and Hybrid Solutions',
      'Cloud Security and Compliance',
      'DevOps and CI/CD in the Cloud',
      'Cost Management and Optimization'
    ],
    instructor: 'Dr. Sarah Chen - Cloud Solutions Architect',
    certification: 'MNet Cloud Solutions Professional'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Professional',
    description: 'Advanced artificial intelligence and machine learning certification program',
    duration: '10-14 weeks',
    level: 'Advanced',
    price: '$3,299',
    features: [
      'Deep learning and neural networks',
      'Natural language processing (NLP)',
      'Computer vision and image recognition',
      'Predictive analytics and modeling',
      'Real-world AI project implementation',
      'Access to GPU computing resources'
    ],
    syllabus: [
      'Machine Learning Fundamentals and Mathematics',
      'Supervised and Unsupervised Learning',
      'Deep Learning with TensorFlow and PyTorch',
      'Natural Language Processing and Text Analysis',
      'Computer Vision and Image Processing',
      'Reinforcement Learning and AI Agents',
      'AI Ethics and Responsible AI Development',
      'Capstone Project: Real-world AI Solution'
    ],
    instructor: 'Prof. Michael Rodriguez - AI Research Lead',
    certification: 'MNet AI & ML Professional'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Expert Program',
    description: 'Comprehensive cybersecurity training with hands-on penetration testing',
    duration: '12-16 weeks',
    level: 'Intermediate to Advanced',
    price: '$2,999',
    features: [
      'Threat detection and incident response',
      'Penetration testing and ethical hacking',
      'Security compliance and governance',
      'Network and application security',
      'Cybersecurity tools and frameworks',
      'Real-world security breach simulations'
    ],
    syllabus: [
      'Cybersecurity Fundamentals and Threat Landscape',
      'Network Security and Infrastructure Protection',
      'Web Application Security and OWASP Top 10',
      'Penetration Testing and Ethical Hacking',
      'Incident Response and Digital Forensics',
      'Security Compliance and Risk Management',
      'Cloud Security and Zero Trust Architecture',
      'Advanced Persistent Threats and APT Defense'
    ],
    instructor: 'Alex Thompson - Senior Security Consultant',
    certification: 'MNet Cybersecurity Expert'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Leadership',
    description: 'End-to-end business process optimization and change management',
    duration: '6-10 weeks',
    level: 'All Levels',
    price: '$1,999',
    features: [
      'Business process automation strategies',
      'Legacy system modernization',
      'Change management and stakeholder engagement',
      'Digital strategy development',
      'ROI measurement and success metrics',
      'Industry best practices and case studies'
    ],
    syllabus: [
      'Digital Transformation Strategy and Vision',
      'Business Process Analysis and Optimization',
      'Legacy System Assessment and Modernization',
      'Change Management and Stakeholder Engagement',
      'Digital Tools and Technology Selection',
      'Implementation Planning and Execution',
      'Measuring Success and ROI',
      'Future Trends and Continuous Innovation'
    ],
    instructor: 'Lisa Wang - Digital Transformation Director',
    certification: 'MNet Digital Transformation Leader'
  }
]

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id)
}
