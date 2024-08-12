"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import projects from "../projects/project.json"; 

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLearnMore = (project) => {
    setSelectedProject(project);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black-100 bg-[url('https://i.pinimg.com/originals/e3/2f/ff/e32fffc3585275e96204c66f56c1efb7.jpg')]">
      {/* Navigation Bar */}
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
      
      {/* Project Details */}
      {selectedProject && (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white rounded-lg mt-16 w-10/12">
          <section className="py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8 text-black">{selectedProject.title}</h1>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={600}
                height={400}
                className="mb-4 rounded"
              />
              <p className="mb-8">{selectedProject.description}</p>
              <button onClick={() => setSelectedProject(null)} className="text-blue-500 hover:underline">Back to Projects</button>
            </div>
          </section>
        </main>
      )}

      {/* Projects Section */}
      {!selectedProject && (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white rounded-lg mt-16 w-10/12">
          <section className="py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8 text-black">My Projects</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="p-4 border rounded">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p>{project.description}</p>
                    <button
                      onClick={() => handleLearnMore(project)}
                      className="text-blue-500 hover:underline"
                    >
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}
    </main>
  );
}
