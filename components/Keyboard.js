
"use client";
import { useState, useRef } from "react";

/**
 * Enhanced Arabic keyboard with diacritic positioning, Allah ligature, and paste support.
 * - Uses Unicode base chars; font handles shaping.
 * - Wraps letters/diacritics in spans for CSS positioning (per letter/form).
 * - Enforces diacritic order (e.g., shadda first).
 * - Replaces 'ا ل ل ه' with ﷲ (U+FDF2).
 * - Supports pasting text.
 */

const LETTERS = {
  "ا": { base: "ا", joinToNext: false },
  "ب": { base: "ب", joinToNext: true },
  "ت": { base: "ت", joinToNext: true },
  "ث": { base: "ث", joinToNext: true },
  "ج": { base: "ج", joinToNext: true },
  "ح": { base: "ح", joinToNext: true },
  "خ": { base: "خ", joinToNext: true },
  "د": { base: "د", joinToNext: false },
  "ذ": { base: "ذ", joinToNext: false },
  "ر": { base: "ر", joinToNext: false },
  "ز": { base: "ز", joinToNext: false },
  "س": { base: "س", joinToNext: true },
  "ش": { base: "ش", joinToNext: true },
  "ص": { base: "ص", joinToNext: true },
  "ض": { base: "ض", joinToNext: true },
  "ط": { base: "ط", joinToNext: true },
  "ظ": { base: "ظ", joinToNext: true },
  "ع": { base: "ع", joinToNext: true },
  "غ": { base: "غ", joinToNext: true },
  "ف": { base: "ف", joinToNext: true },
  "ق": { base: "ق", joinToNext: true },
  "ك": { base: "ك", joinToNext: true },
  "ل": { base: "ل", joinToNext: true },
  "م": { base: "م", joinToNext: true },
  "ن": { base: "ن", joinToNext: true },
  "ه": { base: "ه", joinToNext: true },
  "و": { base: "و", joinToNext: false },
  "ي": { base: "ي", joinToNext: true },
  "ء": { base: "ء", joinToNext: false },
  "ة": { base: "ة", joinToNext: false }
};

const DIACRITICS = [
  { name: "Fatha", char: "َ" },
  { name: "Damma", char: "ُ" },
  { name: "Kasra", char: "ِ" },
  { name: "Sukun", char: "ْ" },
  { name: "Shadda", char: "ّ" },
  { name: "Maddah", char: "ٓ" },
  { name: "Tanween Fatha", char: "ً" },
  { name: "Tanween Damma", char: "ٌ" },
  { name: "Tanween Kasra", char: "ٍ" },
];

// Add special diacritics with separate entry for standing fatha
const SPECIAL_DIACRITICS = [
  { name: "Standing Fatha", char: "ﭐ", description: "For Alif (ا)", specialType: "standingFatha" },
  { name: "Fatha", char: "َ" },
  { name: "Damma", char: "ُ" },
  { name: "Kasra", char: "ِ" },
  { name: "Sukun", char: "ْ" },
  { name: "Shadda", char: "ّ" },
  { name: "Maddah", char: "ٓ" },
];

const DIACRITIC_ORDER = { "ّ": 0, "ٓ": 1, "َ": 2, "ُ": 3, "ِ": 4, "ْ": 5, "ً": 6, "ٌ": 7, "ٍ": 8, "ﭐ": 2 };

const NUMBERS = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
const SYMBOLS = ["،", "؛", "؟", ".", "!", "-", "(", ")", "«", "»"];
const ALLAH_LIGATURE = "ﷲ"; // U+FDF2
const ALLAH_SEQUENCE = ["ا", "ل", "ل", "ه"];
const STANDING_FATHA = "ﭐ"; // U+FB50 - Alif with standing fatha

/* token structure:
   { type: 'letter', char: 'ب', diacritics: [] }
   { type: 'symbol', char: ' ' or punctuation or number }
   { type: 'ligature', char: 'ﷲ' }
*/

export default function Keyboard({ fontFamily = "HuzaifaArabic", onType } = {}) {
  const [tokens, setTokens] = useState([]);
  const [display, setDisplay] = useState([]);
  const [inputValue, setInputValue] = useState(""); // New state for input value
  const inputRef = useRef(null);

  // Sort diacritics by predefined order
  const sortDiacritics = (diacs) => diacs.sort((a, b) => (DIACRITIC_ORDER[a] || 9) - (DIACRITIC_ORDER[b] || 9));

  // Check for Allah sequence
  const checkAllahSequence = (tokens, start) => {
    if (start + 3 >= tokens.length) return false;
    return ALLAH_SEQUENCE.every((ch, i) => 
      tokens[start + i].type === "letter" && 
      tokens[start + i].char === ch && 
      (!tokens[start + i].diacritics || tokens[start + i].diacritics.length === 0)
    );
  };

  // Process tokens to replace Allah sequence
  const processTokens = (inputTokens) => {
    const newTokens = [];
    let i = 0;
    while (i < inputTokens.length) {
      if (checkAllahSequence(inputTokens, i)) {
        newTokens.push({ type: "ligature", char: ALLAH_LIGATURE });
        i += 4;
      } else {
        newTokens.push(inputTokens[i]);
        i++;
      }
    }
    return newTokens;
  };

  // Rebuild display with form and diacritic classes
  const rebuildDisplay = (newTokens) => {
    const processed = processTokens(newTokens);
    const elements = [];
    for (let i = 0; i < processed.length; i++) {
      const t = processed[i];
      if (t.type === "symbol") {
        elements.push(<span key={i}>{t.char}</span>);
        continue;
      }
      if (t.type === "ligature") {
        elements.push(<span key={i} className="ligature-allah">{t.char}</span>);
        continue;
      }

      // Determine contextual form
      const prevType = i > 0 ? processed[i - 1].type : null;
      const nextType = i < processed.length - 1 ? processed[i + 1].type : null;
      const connectsPrev = prevType === "letter" && LETTERS[processed[i - 1].char]?.joinToNext;
      const connectsNext = LETTERS[t.char]?.joinToNext && nextType === "letter";
      let formClass = "isolated";
      if (connectsPrev && connectsNext) formClass = "medial";
      else if (connectsPrev) formClass = "final";
      else if (connectsNext) formClass = "initial";

      // Create diacritic elements with classes
      const sortedDiacs = sortDiacritics([...(t.diacritics || [])]);
      
      // Special handling for standing Fatha on Alif
      const isAlif = t.char === "ا";
      const hasStandingFatha = sortedDiacs.includes(STANDING_FATHA);
      const hasRegularFatha = sortedDiacs.includes("َ");
      
      const diacElements = sortedDiacs.map((d, j) => {
        // Special class for standing fatha
        if (d === STANDING_FATHA) {
          return (
            <span key={j} className="diacritic-standing-fatha">
              {d}
            </span>
          );
        }
        
        // Regular diacritics
        const diacriticClass = `diacritic-${d.charCodeAt(0).toString(16)}`;
        return (
          <span key={j} className={diacriticClass}>
            {d}
          </span>
        );
      });

      const hasShadda = sortedDiacs.includes("ّ");
      const letterClass = `letter-${t.char.charCodeAt(0).toString(16)}`;

      elements.push(
        <span key={i} className={`form-${formClass} ${letterClass} ${hasShadda ? 'with-shadda' : ''} ${hasStandingFatha ? 'with-standing-fatha' : ''}`}>
          {LETTERS[t.char].base}{diacElements}
        </span>
      );
    }

    setDisplay(elements);
    if (typeof onType === "function") {
      const rawText = processed.map(t => 
        t.type === "ligature" ? t.char : 
        (t.type === "symbol" ? t.char : LETTERS[t.char].base + (t.diacritics || []).join(""))
      ).join("");
      onType(rawText);
    }
  };

  // Add a base letter
  const addLetter = (char) => {
    if (!LETTERS[char]) return;
    const newTokens = [...tokens, { type: "letter", char, diacritics: [] }];
    setTokens(newTokens);
    setInputValue(prev => prev + char); // Update input value
    rebuildDisplay(newTokens);
  };

  // Add diacritic
  const addDiacritic = (dChar, specialType = null) => {
    const newTokens = [...tokens];
    
    // Special handling for standing fatha - only apply to Alif
    if (specialType === "standingFatha") {
      for (let i = newTokens.length - 1; i >= 0; i--) {
        if (newTokens[i].type === "letter" && newTokens[i].char === "ا") {
          // Replace any existing regular fatha with standing fatha
          const filteredDiacritics = (newTokens[i].diacritics || []).filter(d => d !== "َ");
          newTokens[i].diacritics = sortDiacritics([...filteredDiacritics, STANDING_FATHA]);
          setTokens(newTokens);
          setInputValue(prev => prev + STANDING_FATHA);
          rebuildDisplay(newTokens);
          return;
        }
      }
      // If no Alif found, add as symbol
      newTokens.push({ type: "symbol", char: STANDING_FATHA });
      setTokens(newTokens);
      setInputValue(prev => prev + STANDING_FATHA);
      rebuildDisplay(newTokens);
      return;
    }
    
    // Regular diacritic handling
    for (let i = newTokens.length - 1; i >= 0; i--) {
      if (newTokens[i].type === "letter") {
        // If adding regular fatha to Alif that has standing fatha, replace it
        if (dChar === "َ" && newTokens[i].char === "ا" && newTokens[i].diacritics?.includes(STANDING_FATHA)) {
          const filteredDiacritics = (newTokens[i].diacritics || []).filter(d => d !== STANDING_FATHA);
          newTokens[i].diacritics = sortDiacritics([...filteredDiacritics, dChar]);
        } else {
          newTokens[i].diacritics = sortDiacritics([...(newTokens[i].diacritics || []), dChar]);
        }
        setTokens(newTokens);
        setInputValue(prev => prev + dChar);
        rebuildDisplay(newTokens);
        return;
      }
    }
    newTokens.push({ type: "symbol", char: dChar });
    setTokens(newTokens);
    setInputValue(prev => prev + dChar);
    rebuildDisplay(newTokens);
  };

  // Add symbol
  const addSymbol = (char) => {
    const newTokens = [...tokens, { type: "symbol", char }];
    setTokens(newTokens);
    setInputValue(prev => prev + char); // Update input value
    rebuildDisplay(newTokens);
  };

  // Backspace
  const backspace = () => {
    if (tokens.length === 0) return;
    const newTokens = [...tokens];
    const last = newTokens[newTokens.length - 1];
    if (last.type === "letter" && last.diacritics && last.diacritics.length > 0) {
      last.diacritics.pop();
      setInputValue(prev => prev.slice(0, -1)); // Update input value
    } else {
      newTokens.pop();
      setInputValue(prev => prev.slice(0, -1)); // Update input value
    }
    setTokens(newTokens);
    rebuildDisplay(newTokens);
  };

  // Clear all
  const clearAll = () => {
    setTokens([]);
    setDisplay([]);
    setInputValue(""); // Clear input value
    if (typeof onType === "function") onType("");
    if (inputRef.current) inputRef.current.value = "";
  };

  // Handle input change (typing directly)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Process the input text into tokens
    const newTokens = [];
    let lastLetterIndex = -1;
    for (let char of value) {
      if (LETTERS[char]) {
        newTokens.push({ type: "letter", char, diacritics: [] });
        lastLetterIndex = newTokens.length - 1;
      } else if (DIACRITICS.some(d => d.char === char) || char === STANDING_FATHA) {
        if (lastLetterIndex >= 0) {
          newTokens[lastLetterIndex].diacritics = sortDiacritics([...(newTokens[lastLetterIndex].diacritics || []), char]);
        } else {
          newTokens.push({ type: "symbol", char });
        }
      } else {
        newTokens.push({ type: "symbol", char });
        lastLetterIndex = -1;
      }
    }
    
    setTokens(newTokens);
    rebuildDisplay(newTokens);
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\s+/g, " ");
    setInputValue(pasted); // Update input value
    
    const newTokens = [];
    let lastLetterIndex = -1;
    for (let char of pasted) {
      if (LETTERS[char]) {
        newTokens.push({ type: "letter", char, diacritics: [] });
        lastLetterIndex = newTokens.length - 1;
      } else if (DIACRITICS.some(d => d.char === char) || char === STANDING_FATHA) {
        if (lastLetterIndex >= 0) {
          newTokens[lastLetterIndex].diacritics = sortDiacritics([...(newTokens[lastLetterIndex].diacritics || []), char]);
        } else {
          newTokens.push({ type: "symbol", char });
        }
      } else {
        newTokens.push({ type: "symbol", char });
        lastLetterIndex = -1;
      }
    }
    setTokens(newTokens);
    rebuildDisplay(newTokens);
  };

  // Render
  const letterButtons = Object.keys(LETTERS);
  
  return (
    <div className="p-4" style={{ fontFamily }}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        placeholder="Paste Arabic text here or type using the keyboard below..."
        onChange={handleInputChange}
        onPaste={handlePaste}
        className="mb-4 p-4 border-2 border-gray-300 rounded-lg w-full text-right"
        style={{ 
          fontFamily: `${fontFamily}, sans-serif`,
          direction: "rtl",
          fontSize: "24px",
          minHeight: "60px"
        }}
      />
      
      {/* Main display area with large font */}
      <div
        dir="rtl"
        className="mb-6 p-6 border-2 border-blue-300 rounded-lg min-h-[120px] text-right bg-blue-50 shadow-md"
        style={{ 
          fontFamily, 
          whiteSpace: "pre-wrap",
          fontSize: "42px",
          lineHeight: "2"  // Increased line spacing
        }}
      >
        {display.length > 0 ? display : "اكتب هنا..."}
      </div>

      {/* Special Diacritics Row - Including Standing Fatha */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold mb-2">Special Diacritics:</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {SPECIAL_DIACRITICS.map((d, index) => (
            <button
              key={`${d.name}-${index}`}
              onClick={() => addDiacritic(d.char, d.specialType)}
              className="px-3 py-2 border rounded bg-yellow-100 hover:bg-yellow-200 text-xl"
              title={d.description || d.name}
            >
              {d.char} {d.description && <span className="text-xs">({d.description})</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Regular Diacritics Row */}
      <div className="flex flex-wrap gap-2 mb-3">
        {DIACRITICS.map((d) => (
          <button
            key={d.name}
            onClick={() => addDiacritic(d.char)}
            className="px-3 py-2 border rounded bg-yellow-100 hover:bg-yellow-200 text-xl"
          >
            {d.char}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-8 gap-2 mb-3">
        {letterButtons.map((ch) => (
          <button
            key={ch}
            onClick={() => addLetter(ch)}
            className="p-3 border rounded bg-blue-100 hover:bg-blue-200 text-2xl"
          >
            {ch}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {NUMBERS.map((n) => (
          <button key={n} onClick={() => addSymbol(n)} className="px-3 py-2 border rounded bg-green-100">
            {n}
          </button>
        ))}
        {SYMBOLS.map((s) => (
          <button key={s} onClick={() => addSymbol(s)} className="px-3 py-2 border rounded bg-purple-100">
            {s}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={() => addSymbol(" ")} className="px-6 py-2 border rounded bg-gray-200">
          Space
        </button>
        <button onClick={backspace} className="px-4 py-2 border rounded bg-orange-200">
          Backspace
        </button>
        <button onClick={clearAll} className="px-4 py-2 border rounded bg-red-200">
          Clear
        </button>
      </div>
    </div>
  );
}
