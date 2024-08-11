import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

      <section className="flex flex-col items-center justify-center text-center py-20 mt-16">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">Hi, I'm Alex</h1>
        <p className="text-xl mt-2">I'm a Web Developer by Profession.</p>
        <Link href="/projects" className="bg-blue-500 text-white px-6 py-3 rounded mt-4 hover:bg-blue-600">View My Work</Link>
      </section>

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
    </main>
  );
}
