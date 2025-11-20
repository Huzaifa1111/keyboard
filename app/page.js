"use client";
import { useState } from "react";
import Keyboard from "../components/Keyboard";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl mb-6 font-bold">Arabic Keyboard (Auto Join)</h1>

      {/* Remove the duplicate display here - only show the Keyboard component */}
      <Keyboard onType={setText} />
    </main>
  );
} 