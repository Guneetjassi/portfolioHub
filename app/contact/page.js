import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-800 to-gray-900">
    
      <nav className="bg-gray-800 text-white w-full p-4 fixed top-0 left-0 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">portfoliohub</Link>
          </div>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/resume" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Resume</Link>
          </div>
        </div>
      </nav>

      
      <section className="bg-white py-20 mt-16 shadow-lg rounded-lg w-full max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
          <form className="space-y-6 max-w-lg mx-auto">
            <input
             type="text" 
             placeholder="Your Name" 
             className="w-full p-4 border border-gray-300 rounded shadow-sm focus: ouline-none focus:border-blue-500 focus:shadow-lg transition duration-300" />
            <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-4 border border-gray-300 rounded focus: ouline-none focus:border-blue-500 focus:shadow-lg transition duration-300" />
            <textarea 
            placeholder="Your Message" 
            className="w-full p-4 border border-gray-300 rounded focus: ouline-none focus:border-blue-500 focus:shadow-lg transition duration-300"></textarea>
            <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300">Send Message</button>
          </form>  
        </div>
      </section>
    </main>
  );
}


