import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black-100">
    
      <nav className="bg-gray-800 text-white w-full p-4 fixed top-0 left-0">
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

      
      <section className="bg-white py-20 mt-16 shadow-md rounded-lg w-full max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
          <form className="space-y-6 max-w-lg mx-auto">
            <input
             type="text" 
             placeholder="Your Name" 
             className="w-full p-4 border border-gray-300 rounded focus: ouline-none focus:border-blue-500" />
            <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-4 border border-gray-300 rounded focus: ouline-none focus:border-blue-500" />
            <textarea 
            placeholder="Your Message" 
            className="w-full p-4 border border-gray-300 rounded focus: ouline-none focus:border-blue-500"></textarea>
            <button 
            type="submit" 
            className="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-all">Send Message</button>
          </form>  
        </div>
      </section>
    </main>
  );
}


