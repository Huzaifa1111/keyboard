"use client";
import { useState } from "react";
import Keyboard from "../components/Keyboard";
import CustomGlyphMapper from "../components/CustomGlyphMapper";

export default function Home() {
  const [text, setText] = useState("");
  const [activeTab, setActiveTab] = useState("keyboard");

  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl mb-6 font-bold">Arabic Keyboard & Glyph Analyzer</h1>
      
      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("keyboard")}
          className={`px-4 py-2 rounded ${
            activeTab === "keyboard" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Keyboard
        </button>
        <button
          onClick={() => setActiveTab("glyph-analyzer")}
          className={`px-4 py-2 rounded ${
            activeTab === "glyph-analyzer" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Glyph Analyzer
        </button>
      </div>
      
      {activeTab === "keyboard" ? (
        <>
          <div
            style={{
              fontFamily: "Arabic-Regular",
              fontSize: "48px",
              direction: "rtl",
            }}
            className="p-4 bg-white rounded-lg border shadow-md text-center min-w-[400px] min-h-[100px] mb-6"
          >
            {text || "النص سيظهر هنا..."}
          </div>
          <Keyboard onType={setText} fontFamily="Arabic-Regular" />
        </>
      ) : (
        <CustomGlyphMapper />
      )}
    </main>
  );
}