import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 "
    style={{ background: "url('https://i.pinimg.com/originals/e3/2f/ff/e32fffc3585275e96204c66f56c1efb7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <nav className="bg-orange-800 text-white w-full p-4 fixed top-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">PortfolioHub</Link>
          </div>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-20 mt-16">
        <Image
          src="/images/icon-4399701_1280.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-4xl text-white font-bold mt-4">Hi, I'm Alex</h1>
        <p className="text-xl text-white mt-2">I'm a Web Developer by Profession</p>
        <Link href="/projects" className="bg-yellow-500 text-white px-6 py-3 rounded mt-4 hover:bg-orange-600">View My Work</Link>
      </section>
    </main>
  );
}
