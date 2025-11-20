"use client";
import { useState } from "react";

// Define your custom glyph mappings
const CUSTOM_GLYPH_MAPPINGS = {
  "نَشْهُ": "hu", // noon-arab.init + arabicshaddacomb + ARABIC FATHA + heh-arab.medi + arabicdammacomb
  // Add more mappings as needed
};

// Unicode to glyph name mapping for your font
const UNICODE_TO_GLYPH = {
  "ن": "noon-arab.init",
  "َ": "ARABIC FATHA", 
  "ش": "sheen-arab.medi",
  "ْ": "arabicshaddacomb",
  "ه": "heh-arab.medi",
  "ُ": "arabicdammacomb",
  // Add more mappings based on your font's glyph names
};

const ARABIC_LETTERS = {
  "ن": "Noon",
  "ش": "Sheen", 
  "ه": "Heh",
  "ب": "Beh",
  "ي": "Yeh",
  "ت": "Teh",
  "ك": "Kaf",
  "ل": "Lam",
  "ا": "Alef",
  "ر": "Reh",
  "د": "Dal",
  "س": "Seen",
  "ص": "Sad",
  "ض": "Dad",
  "ط": "Tah",
  "ظ": "Zah",
  "ع": "Ain",
  "غ": "Ghain",
  "ف": "Feh",
  "ق": "Qaf",
  "م": "Meem",
  "و": "Waw",
  "ة": "Teh Marbuta",
  "ى": "Alef Maksura"
};

const DIACRITICS = {
  "َ": "Fatha",
  "ُ": "Damma", 
  "ِ": "Kasra",
  "ْ": "Sukun",
  "ّ": "Shadda",
  "ٓ": "Maddah",
  "ً": "Tanween Fatha",
  "ٌ": "Tanween Damma", 
  "ٍ": "Tanween Kasra"
};

export default function CustomGlyphMapper() {
  const [inputText, setInputText] = useState("");
  const [detectedGlyph, setDetectedGlyph] = useState("");
  const [sequenceAnalysis, setSequenceAnalysis] = useState([]);

  const analyzeSequence = (text) => {
    setInputText(text);
    
    if (!text) {
      setDetectedGlyph("");
      setSequenceAnalysis([]);
      return;
    }

    // Check for custom glyph mappings
    for (const [sequence, glyphName] of Object.entries(CUSTOM_GLYPH_MAPPINGS)) {
      if (text.includes(sequence)) {
        setDetectedGlyph(glyphName);
        break;
      }
    }

    // Analyze character by character
    const analysis = Array.from(text).map((char, index) => {
      const unicode = `U+${char.charCodeAt(0).toString(16).toUpperCase()}`;
      const glyphName = UNICODE_TO_GLYPH[char] || "unknown";
      const description = ARABIC_LETTERS[char] || DIACRITICS[char] || "Other";
      
      return {
        character: char,
        unicode,
        glyphName,
        description,
        position: index
      };
    });

    setSequenceAnalysis(analysis);
  };

  const testSpecificSequence = () => {
    const testSequence = "نَشْهُ"; // Your specific sequence
    setInputText(testSequence);
    analyzeSequence(testSequence);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Custom Arabic Glyph Mapper</h2>
      <p className="text-gray-600 mb-4">Font: Arabic-Regular.ttf</p>
      
      <div className="mb-4">
        <button 
          onClick={testSpecificSequence}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
        >
          Test: نَشْهُ → "hu" glyph
        </button>
      </div>
      
      <input
        type="text"
        value={inputText}
        onChange={(e) => analyzeSequence(e.target.value)}
        placeholder="Type or paste Arabic text..."
        className="w-full p-3 border border-gray-300 rounded text-right text-xl mb-4"
        style={{ fontFamily: "Arabic-Regular", direction: "rtl" }}
      />
      
      {/* Display with your custom font */}
      <div 
        className="mb-4 p-6 bg-gray-100 rounded text-center text-4xl min-h-[120px] flex items-center justify-center"
        style={{ fontFamily: "Arabic-Regular", direction: "rtl" }}
      >
        {inputText || "Type to see glyph rendering"}
      </div>
      
      {/* Detected Glyph */}
      {detectedGlyph && (
        <div className="mb-4 p-4 bg-green-100 border border-green-300 rounded">
          <h3 className="font-bold text-green-800">Detected Custom Glyph:</h3>
          <p className="text-2xl text-green-900">{detectedGlyph}</p>
        </div>
      )}
      
      {/* Character Analysis */}
      {sequenceAnalysis.length > 0 && (
        <div className="border rounded-lg overflow-hidden">
          <h3 className="bg-gray-200 p-3 font-bold">Sequence Analysis:</h3>
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Char</th>
                <th className="p-2">Unicode</th>
                <th className="p-2">Glyph Name</th>
                <th className="p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {sequenceAnalysis.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2 text-2xl text-center">{item.character}</td>
                  <td className="p-2 font-mono">{item.unicode}</td>
                  <td className="p-2 font-mono bg-yellow-50">{item.glyphName}</td>
                  <td className="p-2">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 rounded">
        <h3 className="font-bold mb-2">How it works:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Type Arabic text or use the test button</li>
          <li>The system checks for predefined glyph sequences</li>
          <li>When "نَشْهُ" is detected, it should render the "hu" glyph</li>
          <li>Each character is mapped to its expected glyph name</li>
        </ul>
      </div>
    </div>
  );
}