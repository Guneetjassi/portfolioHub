import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-cover bg-center bg-[url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      {/* Navigation Bar */}
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
          </div>
        </div>
      </nav>

      {/* Career Objective Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 mt-16">
        <h1 className="text-4xl font-bold text-white">Career Objective</h1>
        <p className="text-lg mt-4 max-w-3xl text-white">
          Software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. This quality and results-based approach drove me to collaborate with the VP of sales at Squarespace to create a digital marketing campaign that tripled average signups in a single month. Eager to obtain a challenging position at a prestigious company like Dream Version that will expand my learning and build upon my developer skills.
        </p>
      </section>

      {/* Education Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-3xl font-bold text-white">Education</h2>
        <p className="text-lg mt-4 text-white">
          B.S. Computer Science<br />
          University of Georgia<br />
          September 2012 - June 2016<br />
          Athens, GA
        </p>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        
        
        
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">JavaScript</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">HTML</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">CSS</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">React.js</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">Node.js</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">Angular.js</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">MongoDB</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">AWS</h3>
            </div>
          </div>
        </div>
    
        
      </section>

      <Link href="/projects" className="bg-blue-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600">
        View My Work
      </Link>
    </main>
  );
}
