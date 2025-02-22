import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#1F2937]">
      <section className="container text-center z-10">
        <h1 className="font-semibold text-5xl text-white">Welcome to</h1>
        <h2 className="text-9xl text-white font-light">PriorityAI</h2>
      </section>
      <div
        className="bar w-20 bg-gray-600 h-80 absolute transform rotate-45"
        style={{ top: "10%" }}
      ></div>
      <div
        className="bar w-20 bg-gray-600 h-80 absolute transform rotate-45"
        style={{ top: "30%" }}
      ></div>
      <section className="z-10 mt-10">
        <Button className="p-4" asChild>
          <Link href="/chat">Try it</Link>
        </Button>
      </section>
    </div>
  );
}
