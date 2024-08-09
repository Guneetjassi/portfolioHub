import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black-100">
<<<<<<< HEAD
      {/* Navigation Bar */}
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
            <Link href="/resume" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Resume</Link>
=======
>>>>>>> origin/main
          </div>
        </div>
      </nav>

<<<<<<< HEAD
      {/* Hero Section */}
=======
>>>>>>> origin/main
      <section className="flex flex-col items-center justify-center text-center py-20 mt-16">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
<<<<<<< HEAD
        <h1 className="text-4xl font-bold mt-4">Hi, I'm [Alex]</h1>
        <p className="text-xl mt-2">I'm a [Your Profession].</p>
        <Link href="/projects" className="bg-blue-500 text-white px-6 py-3 rounded mt-4 hover:bg-blue-600">View My Work</Link>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">JavaScript</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">React</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">Next.js</h3>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <Image
                src="/project1.jpg"
                alt="Project 1"
                width={300}
                height={200}
                className="mb-4 rounded"
              />
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p>A brief description of Project 1.</p>
              <Link href="/projects/project1" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="p-4 border rounded">
              <Image
                src="/project2.jpg"
                alt="Project 2"
                width={300}
                height={200}
                className="mb-4 rounded"
              />
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p>A brief description of Project 2.</p>
              <Link href="/projects/project2" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="p-4 border rounded">
              <Image
                src="/project3.jpg"
                alt="Project 3"
                width={300}
                height={200}
                className="mb-4 rounded"
              />
              <h3 className="text-xl font-semibold">Project 3</h3>
              <p>A brief description of Project 3.</p>
              <Link href="/projects/project3" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-4">A brief introduction about yourself, your journey, and what motivates you.</p>
          <Link href="/about" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Read More</Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <form className="max-w-md mx-auto">
            <input type="text" placeholder="Name" className="border p-3 rounded mb-4 w-full" />
            <input type="email" placeholder="Email" className="border p-3 rounded mb-4 w-full" />
            <textarea placeholder="Message" className="border p-3 rounded mb-4 w-full h-32"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Send Message</button>
          </form>
          <div className="mt-6">
            <p className="text-lg">Connect with me:</p>
            <div className="space-x-4 mt-2">
              <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a>
              <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        </div>
      </footer>
=======
        <h1 className="text-4xl font-bold mt-4">Hi, I'm Alex</h1>
        <p className="text-xl mt-2">I'm a full-stack developer.</p>
      </section>
>>>>>>> origin/main
    </main>
  );
}
