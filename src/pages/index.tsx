import Head from 'next/head'
import ParticlesBg from '../components/ParticlesBg'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import CloudSection from '../components/CloudSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>MNet Inc - Innovation Hub | Digital Transformation Solutions</title>
        <meta name="description" content="MNet Inc is a leading technology company specializing in cloud solutions, AI & machine learning, cybersecurity, and digital transformation services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen">
        <ParticlesBg />
        <HeroSection />
        <ServicesSection />
        <CloudSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
