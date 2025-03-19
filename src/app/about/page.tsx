import Navbar from "@/components/ui/Navbar";

export default function Info() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-teal-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 text-transparent bg-clip-text text-center">
            UESS Project - BU Alumni Partnership
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-indigo-800">
              Undergraduate Empowerment and Sensitization Scheme
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="italic">Dear Fellow Babcock Alumnus,</p>

              <p>
                As a proud alumnus of Babcock University (Class of 2015) and nation builder with series of successful impact projects, 
                I&apos;m reaching out to you today with an exciting opportunity to support the development of the next generation of leaders 
                and entrepreneurs from our esteemed institution.
              </p>

              <p>
                The UESS event is a dynamic, one-day experience held in tertiary institutions. It serves as an informal introduction 
                to our life-changing services. Students can attend, learn about the opportunities we offer, and sign up to participate. 
                We plan to bring UESS project to 20 institutions across Nigeria, aiming to empower a minimum of 100,000 undergraduates 
                over the next 5 years.
              </p>

              <p>
                UESS will be launching at our great alma mater. Our goal is to empower Babcock students with essential skills for the 
                ever-evolving job market. We provide workshops, mentorship, and practical training in entrepreneurship, corporate skills, 
                and financial literacy.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Partnership Opportunities:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Becoming a Mentor</li>
                  <li>Become a course creator</li>
                  <li>Goodwill Partnership / Corporate Social Initiative (CSI) Collaboration</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Benefits of Partnership:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Give back to your alma mater</li>
                  <li>Contribute to a worthy cause</li>
                  <li>Access a talent pool</li>
                  <li>Strengthen your brand image (CSI partnership)</li>
                </ul>
              </div>

              <p className="mt-8">
                We believe that with your support, UESS can have a transformative impact on the lives of Babcock students. 
                  Together, let&apos;s empower the next generation of leaders from Babcock University!
              </p>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="italic">Best regards,</p>
                <p className="font-semibold">Eromosele &apos;Eromz&apos; Adene</p>
                <p>Director,</p>
                <p>ABENOL FOUNDATION LTD/GTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
