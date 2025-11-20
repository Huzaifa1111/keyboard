"use client";

export default function Display({ text, onClear }) {
  return (
    <div className="p-4 bg-white rounded-lg border shadow-md text-center">
      <h2 className="text-2xl mb-2">Preview:</h2>
      <div
        style={{
          fontFamily: "HuzaifaArabic",
          fontSize: "48px",
          direction: "rtl",
        }}
      >
        {text}
      </div>
      <button
        onClick={onClear}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear
      </button>
    </div>
  );
}