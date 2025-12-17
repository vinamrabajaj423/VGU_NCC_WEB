import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/photos/329-3290065_ncc-national-cadet-corps-removebg-preview.png" alt="NCC Logo" className="w-20 h-20" />
            <div>
              <h1 className="text-2xl font-bold">VGU NCC Coy</h1>
              <p className="text-sm">Vivekananda Global University National Cadet Corps</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-green-200 transition">About</a>
            <a href="#activities" className="hover:text-green-200 transition">Activities</a>
            <a href="#contact" className="hover:text-green-200 transition">Contact</a>
          </nav>
          <img src="/photos/vgu new logo w.png" alt="VGU Logo" className="w-32 h-32" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Unity • Discipline • Service</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join the National Cadet Corps at Veer Gatha University and be part of India's premier youth development movement.
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Join NCC
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">About VGU NCC Coy</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-green-800">Our Mission</h4>
              <p className="text-gray-600 mb-6">
                The National Cadet Corps (NCC) aims to develop character, comradeship, discipline, leadership, secular outlook,
                spirit of adventure and ideals of selfless service amongst the youth of the country.
              </p>
              <h4 className="text-2xl font-semibold mb-4 text-green-800">What We Offer</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Leadership training and development</li>
                <li>• Adventure activities and camps</li>
                <li>• Community service opportunities</li>
                <li>• Military training and discipline</li>
                <li>• Certificate programs and recognition</li>
              </ul>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">NCC Activities Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Activities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-green-800">Drill & Parade</h4>
              <p className="text-gray-600">
                Learn precision marching, flag ceremonies, and military discipline through regular drill practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-green-800">Adventure Training</h4>
              <p className="text-gray-600">
                Participate in trekking, mountaineering, para-sailing, and other adventure activities to build courage and teamwork.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-green-800">Community Service</h4>
              <p className="text-gray-600">
                Engage in social service activities including blood donation camps, tree plantation, and disaster relief operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h3>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-800">Get In Touch</h4>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Address:</strong> Vivekananda Global University, NCC Coy Office</p>
                  <p><strong>Email:</strong> ncc@vgu.edu.in</p>
                  <p><strong>Phone:</strong> +91-1234567890</p>
                  <p><strong>Lt Krishna Nandan</strong><br />Associate NCC Officer (Armed Wing)<br />Mob: 9828913593</p>
                  <p><strong>Ms Rakshita Rathore</strong><br />CTO, Air Wing<br />Mob: +91 82097 67565</p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-800">Joining Information</h4>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Eligibility:</strong> Students of Vivekananda Global University</p>
                  <p><strong>Wings:</strong> Army Wing and Air Wing</p>
                  <p><strong>Duration:</strong> 3 years commitment</p>
                  <p><strong>Training:</strong> Weekly parades and camps</p>
                  <p><strong>Benefits:</strong> Certificates, leadership skills, adventure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 VGU NCC Coy. All rights reserved.</p>
          <p className="mt-2">Proud to serve the nation through character building and service.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
