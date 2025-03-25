import React from 'react'

function Home(){
  return (
    

<div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-6">Discover amazing content and stunning visuals</p>
          <button className="bg-blue-500 px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-blue-600 transition">Get Started</button>
        </div>
      </header>
      
      {/* Features Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-lg rounded-xl p-6">
             
              <h3 className="text-2xl font-semibold mb-2">Feature {item}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className ="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 YourCompany. All rights reserved.</p>
      </footer>
    </div>
     
    
  )
}

export default Home