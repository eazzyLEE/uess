import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function About() {
  return (
    <div className={poppins.className}>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Empowering Nigeria&apos;s Future: The UESS Vision
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6 text-gray-700">
            <section>
              <p className="leading-relaxed">
                The Undergraduate Empowerment and Sensitization Scheme (UESS) is a transformative platform designed to bridge the gap between 
                academia and industry, empowering Nigerian undergraduates with the skills, knowledge, and mentorship they need to thrive. We believe 
                in building a generation of future leaders and entrepreneurs who can drive positive change in their communities and the nation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h2>
              <p className="leading-relaxed">
                Our core mission is to equip students with practical, in-demand skills through skillset training in product manufacturing, technology, 
                and agriculture. We also provide crucial financial education to ensure students build sustainable financial habits and manage their 
                resources effectively. Recognizing the power of guidance, we facilitate meaningful mentorship connections between students and 
                experienced alumni, offering personalized support and career insights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Purpose</h2>
              <p className="leading-relaxed">
                The purpose behind UESS stems from the need to create a structured and accessible pathway for students to gain real-world experience 
                and build valuable networks. By connecting students with mentors who have walked their path, we provide invaluable guidance and 
                support. We also enable passionate individuals to share their knowledge through course creation, enriching the learning experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h2>
              <p className="leading-relaxed">
                UESS benefits students by providing free access to critical skills training, financial literacy, and mentorship, ultimately boosting their 
                employability and entrepreneurial potential. Mentors gain the satisfaction of giving back to their alma mater and shaping the next 
                generation. Course creators contribute to building a powerful learning community, while expanding their reach and impact.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Goal</h2>
              <p className="leading-relaxed">
                Our goal is to empower 100,000 undergraduates across 20 higher institutions in the next five years, creating a ripple effect of positive 
                change throughout Nigeria.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
