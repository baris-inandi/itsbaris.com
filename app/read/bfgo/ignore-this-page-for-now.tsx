import Image from "next/image";
import Link from "next/link";

export default function BFGO() {
  return (
    <>
      {/* Main Content Container */}
      <div className="max-w-2xl">
        {/* Title */}
        <h1 className="mb-2 text-2xl font-bold">
          BFGO is a comprehensive toolkit for the Brainfuck programming language, written
          in Go.
        </h1>
        <p className="mb-6 text-dimmed">
          A fast, optimizing compiler, interpreter, REPL, formatter, and minifier for the
          esoteric BF language—all in one toolkit.
        </p>
        {/* Project Image */}
        <Image
          src="/cards/bfgo.webp"
          alt="BFGO project card"
          width={400}
          height={300}
          className="mb-6 rounded-lg"
        />
        {/* Features */}
        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">Key Features</h2>
          <ul className="list-disc pl-6 text-base">
            <li>Native, JVM, and JavaScript compilers</li>
            <li>Interpreter and interactive REPL</li>
            <li>Formatter and minifier for BF code</li>
            <li>Multiple optimization levels (Fast, Balanced, Optimized)</li>
            <li>Extensive CLI with advanced flags</li>
          </ul>
        </section>
        {/* Tech Stack */}
        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">Tech Stack</h2>
          <ul className="list-disc pl-6 text-base">
            <li>Go (primary language)</li>
            <li>JVM bytecode generation</li>
            <li>JavaScript codegen for browser support</li>
          </ul>
        </section>
        {/* Challenges & Learnings */}
        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">Challenges & Learnings</h2>
          <p className="mb-2">
            Designing a toolkit for an intentionally minimal and esoteric language was a
            unique challenge. I focused on performance, cross-platform support, and
            developer ergonomics, resulting in a tool that is both overengineered and
            highly practical for enthusiasts.
          </p>
          <p>
            Through this project, I deepened my understanding of compiler design,
            optimization strategies, and multi-target code generation.
          </p>
        </section>
        {/* Links */}
        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">Links</h2>
          <ul className="list-disc pl-6 text-base">
            <li>
              <Link
                href="https://github.com/baris-inandi/bfgo"
                className="underline hover:text-orange-500"
                target="_blank"
              >
                GitHub Repository
              </Link>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Brainfuck"
                className="underline hover:text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Brainfuck (Wikipedia)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
