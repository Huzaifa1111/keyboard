module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/Keyboard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Keyboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * Enhanced Arabic keyboard with diacritic positioning, Allah ligature, and paste support.
 * - Uses Unicode base chars; font handles shaping.
 * - Wraps letters/diacritics in spans for CSS positioning (per letter/form).
 * - Enforces diacritic order (e.g., shadda first).
 * - Replaces 'ا ل ل ه' with ﷲ (U+FDF2).
 * - Supports pasting text.
 */ const LETTERS = {
    "ا": {
        base: "ا",
        joinToNext: false
    },
    "ب": {
        base: "ب",
        joinToNext: true
    },
    "ت": {
        base: "ت",
        joinToNext: true
    },
    "ث": {
        base: "ث",
        joinToNext: true
    },
    "ج": {
        base: "ج",
        joinToNext: true
    },
    "ح": {
        base: "ح",
        joinToNext: true
    },
    "خ": {
        base: "خ",
        joinToNext: true
    },
    "د": {
        base: "د",
        joinToNext: false
    },
    "ذ": {
        base: "ذ",
        joinToNext: false
    },
    "ر": {
        base: "ر",
        joinToNext: false
    },
    "ز": {
        base: "ز",
        joinToNext: false
    },
    "س": {
        base: "س",
        joinToNext: true
    },
    "ش": {
        base: "ش",
        joinToNext: true
    },
    "ص": {
        base: "ص",
        joinToNext: true
    },
    "ض": {
        base: "ض",
        joinToNext: true
    },
    "ط": {
        base: "ط",
        joinToNext: true
    },
    "ظ": {
        base: "ظ",
        joinToNext: true
    },
    "ع": {
        base: "ع",
        joinToNext: true
    },
    "غ": {
        base: "غ",
        joinToNext: true
    },
    "ف": {
        base: "ف",
        joinToNext: true
    },
    "ق": {
        base: "ق",
        joinToNext: true
    },
    "ك": {
        base: "ك",
        joinToNext: true
    },
    "ل": {
        base: "ل",
        joinToNext: true
    },
    "م": {
        base: "م",
        joinToNext: true
    },
    "ن": {
        base: "ن",
        joinToNext: true
    },
    "ه": {
        base: "ه",
        joinToNext: true
    },
    "و": {
        base: "و",
        joinToNext: false
    },
    "ي": {
        base: "ي",
        joinToNext: true
    },
    "ء": {
        base: "ء",
        joinToNext: false
    },
    "ة": {
        base: "ة",
        joinToNext: false
    }
};
const DIACRITICS = [
    {
        name: "Fatha",
        char: "َ"
    },
    {
        name: "Damma",
        char: "ُ"
    },
    {
        name: "Kasra",
        char: "ِ"
    },
    {
        name: "Sukun",
        char: "ْ"
    },
    {
        name: "Shadda",
        char: "ّ"
    },
    {
        name: "Maddah",
        char: "ٓ"
    },
    {
        name: "Tanween Fatha",
        char: "ً"
    },
    {
        name: "Tanween Damma",
        char: "ٌ"
    },
    {
        name: "Tanween Kasra",
        char: "ٍ"
    }
];
// Add special diacritics with separate entry for standing fatha
const SPECIAL_DIACRITICS = [
    {
        name: "Standing Fatha",
        char: "ﭐ",
        description: "For Alif (ا)",
        specialType: "standingFatha"
    },
    {
        name: "Fatha",
        char: "َ"
    },
    {
        name: "Damma",
        char: "ُ"
    },
    {
        name: "Kasra",
        char: "ِ"
    },
    {
        name: "Sukun",
        char: "ْ"
    },
    {
        name: "Shadda",
        char: "ّ"
    },
    {
        name: "Maddah",
        char: "ٓ"
    }
];
const DIACRITIC_ORDER = {
    "ّ": 0,
    "ٓ": 1,
    "َ": 2,
    "ُ": 3,
    "ِ": 4,
    "ْ": 5,
    "ً": 6,
    "ٌ": 7,
    "ٍ": 8,
    "ﭐ": 2
};
const NUMBERS = [
    "١",
    "٢",
    "٣",
    "٤",
    "٥",
    "٦",
    "٧",
    "٨",
    "٩",
    "٠"
];
const SYMBOLS = [
    "،",
    "؛",
    "؟",
    ".",
    "!",
    "-",
    "(",
    ")",
    "«",
    "»"
];
const ALLAH_LIGATURE = "ﷲ"; // U+FDF2
const ALLAH_SEQUENCE = [
    "ا",
    "ل",
    "ل",
    "ه"
];
const STANDING_FATHA = "ﭐ"; // U+FB50 - Alif with standing fatha
function Keyboard({ fontFamily = "HuzaifaArabic", onType } = {}) {
    const [tokens, setTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // New state for input value
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sort diacritics by predefined order
    const sortDiacritics = (diacs)=>diacs.sort((a, b)=>(DIACRITIC_ORDER[a] || 9) - (DIACRITIC_ORDER[b] || 9));
    // Check for Allah sequence
    const checkAllahSequence = (tokens, start)=>{
        if (start + 3 >= tokens.length) return false;
        return ALLAH_SEQUENCE.every((ch, i)=>tokens[start + i].type === "letter" && tokens[start + i].char === ch && (!tokens[start + i].diacritics || tokens[start + i].diacritics.length === 0));
    };
    // Process tokens to replace Allah sequence
    const processTokens = (inputTokens)=>{
        const newTokens = [];
        let i = 0;
        while(i < inputTokens.length){
            if (checkAllahSequence(inputTokens, i)) {
                newTokens.push({
                    type: "ligature",
                    char: ALLAH_LIGATURE
                });
                i += 4;
            } else {
                newTokens.push(inputTokens[i]);
                i++;
            }
        }
        return newTokens;
    };
    // Rebuild display with form and diacritic classes
    const rebuildDisplay = (newTokens)=>{
        const processed = processTokens(newTokens);
        const elements = [];
        for(let i = 0; i < processed.length; i++){
            const t = processed[i];
            if (t.type === "symbol") {
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t.char
                }, i, false, {
                    fileName: "[project]/components/Keyboard.js",
                    lineNumber: 126,
                    columnNumber: 23
                }, this));
                continue;
            }
            if (t.type === "ligature") {
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ligature-allah",
                    children: t.char
                }, i, false, {
                    fileName: "[project]/components/Keyboard.js",
                    lineNumber: 130,
                    columnNumber: 23
                }, this));
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
            const sortedDiacs = sortDiacritics([
                ...t.diacritics || []
            ]);
            // Special handling for standing Fatha on Alif
            const isAlif = t.char === "ا";
            const hasStandingFatha = sortedDiacs.includes(STANDING_FATHA);
            const hasRegularFatha = sortedDiacs.includes("َ");
            const diacElements = sortedDiacs.map((d, j)=>{
                // Special class for standing fatha
                if (d === STANDING_FATHA) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "diacritic-standing-fatha",
                        children: d
                    }, j, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this);
                }
                // Regular diacritics
                const diacriticClass = `diacritic-${d.charCodeAt(0).toString(16)}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: diacriticClass,
                    children: d
                }, j, false, {
                    fileName: "[project]/components/Keyboard.js",
                    lineNumber: 165,
                    columnNumber: 11
                }, this);
            });
            const hasShadda = sortedDiacs.includes("ّ");
            const letterClass = `letter-${t.char.charCodeAt(0).toString(16)}`;
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `form-${formClass} ${letterClass} ${hasShadda ? 'with-shadda' : ''} ${hasStandingFatha ? 'with-standing-fatha' : ''}`,
                children: [
                    LETTERS[t.char].base,
                    diacElements
                ]
            }, i, true, {
                fileName: "[project]/components/Keyboard.js",
                lineNumber: 175,
                columnNumber: 9
            }, this));
        }
        setDisplay(elements);
        if (typeof onType === "function") {
            const rawText = processed.map((t)=>t.type === "ligature" ? t.char : t.type === "symbol" ? t.char : LETTERS[t.char].base + (t.diacritics || []).join("")).join("");
            onType(rawText);
        }
    };
    // Add a base letter
    const addLetter = (char)=>{
        if (!LETTERS[char]) return;
        const newTokens = [
            ...tokens,
            {
                type: "letter",
                char,
                diacritics: []
            }
        ];
        setTokens(newTokens);
        setInputValue((prev)=>prev + char); // Update input value
        rebuildDisplay(newTokens);
    };
    // Add diacritic
    const addDiacritic = (dChar, specialType = null)=>{
        const newTokens = [
            ...tokens
        ];
        // Special handling for standing fatha - only apply to Alif
        if (specialType === "standingFatha") {
            for(let i = newTokens.length - 1; i >= 0; i--){
                if (newTokens[i].type === "letter" && newTokens[i].char === "ا") {
                    // Replace any existing regular fatha with standing fatha
                    const filteredDiacritics = (newTokens[i].diacritics || []).filter((d)=>d !== "َ");
                    newTokens[i].diacritics = sortDiacritics([
                        ...filteredDiacritics,
                        STANDING_FATHA
                    ]);
                    setTokens(newTokens);
                    setInputValue((prev)=>prev + STANDING_FATHA);
                    rebuildDisplay(newTokens);
                    return;
                }
            }
            // If no Alif found, add as symbol
            newTokens.push({
                type: "symbol",
                char: STANDING_FATHA
            });
            setTokens(newTokens);
            setInputValue((prev)=>prev + STANDING_FATHA);
            rebuildDisplay(newTokens);
            return;
        }
        // Regular diacritic handling
        for(let i = newTokens.length - 1; i >= 0; i--){
            if (newTokens[i].type === "letter") {
                // If adding regular fatha to Alif that has standing fatha, replace it
                if (dChar === "َ" && newTokens[i].char === "ا" && newTokens[i].diacritics?.includes(STANDING_FATHA)) {
                    const filteredDiacritics = (newTokens[i].diacritics || []).filter((d)=>d !== STANDING_FATHA);
                    newTokens[i].diacritics = sortDiacritics([
                        ...filteredDiacritics,
                        dChar
                    ]);
                } else {
                    newTokens[i].diacritics = sortDiacritics([
                        ...newTokens[i].diacritics || [],
                        dChar
                    ]);
                }
                setTokens(newTokens);
                setInputValue((prev)=>prev + dChar);
                rebuildDisplay(newTokens);
                return;
            }
        }
        newTokens.push({
            type: "symbol",
            char: dChar
        });
        setTokens(newTokens);
        setInputValue((prev)=>prev + dChar);
        rebuildDisplay(newTokens);
    };
    // Add symbol
    const addSymbol = (char)=>{
        const newTokens = [
            ...tokens,
            {
                type: "symbol",
                char
            }
        ];
        setTokens(newTokens);
        setInputValue((prev)=>prev + char); // Update input value
        rebuildDisplay(newTokens);
    };
    // Backspace
    const backspace = ()=>{
        if (tokens.length === 0) return;
        const newTokens = [
            ...tokens
        ];
        const last = newTokens[newTokens.length - 1];
        if (last.type === "letter" && last.diacritics && last.diacritics.length > 0) {
            last.diacritics.pop();
            setInputValue((prev)=>prev.slice(0, -1)); // Update input value
        } else {
            newTokens.pop();
            setInputValue((prev)=>prev.slice(0, -1)); // Update input value
        }
        setTokens(newTokens);
        rebuildDisplay(newTokens);
    };
    // Clear all
    const clearAll = ()=>{
        setTokens([]);
        setDisplay([]);
        setInputValue(""); // Clear input value
        if (typeof onType === "function") onType("");
        if (inputRef.current) inputRef.current.value = "";
    };
    // Handle input change (typing directly)
    const handleInputChange = (e)=>{
        const value = e.target.value;
        setInputValue(value);
        // Process the input text into tokens
        const newTokens = [];
        let lastLetterIndex = -1;
        for (let char of value){
            if (LETTERS[char]) {
                newTokens.push({
                    type: "letter",
                    char,
                    diacritics: []
                });
                lastLetterIndex = newTokens.length - 1;
            } else if (DIACRITICS.some((d)=>d.char === char) || char === STANDING_FATHA) {
                if (lastLetterIndex >= 0) {
                    newTokens[lastLetterIndex].diacritics = sortDiacritics([
                        ...newTokens[lastLetterIndex].diacritics || [],
                        char
                    ]);
                } else {
                    newTokens.push({
                        type: "symbol",
                        char
                    });
                }
            } else {
                newTokens.push({
                    type: "symbol",
                    char
                });
                lastLetterIndex = -1;
            }
        }
        setTokens(newTokens);
        rebuildDisplay(newTokens);
    };
    // Handle paste
    const handlePaste = (e)=>{
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\s+/g, " ");
        setInputValue(pasted); // Update input value
        const newTokens = [];
        let lastLetterIndex = -1;
        for (let char of pasted){
            if (LETTERS[char]) {
                newTokens.push({
                    type: "letter",
                    char,
                    diacritics: []
                });
                lastLetterIndex = newTokens.length - 1;
            } else if (DIACRITICS.some((d)=>d.char === char) || char === STANDING_FATHA) {
                if (lastLetterIndex >= 0) {
                    newTokens[lastLetterIndex].diacritics = sortDiacritics([
                        ...newTokens[lastLetterIndex].diacritics || [],
                        char
                    ]);
                } else {
                    newTokens.push({
                        type: "symbol",
                        char
                    });
                }
            } else {
                newTokens.push({
                    type: "symbol",
                    char
                });
                lastLetterIndex = -1;
            }
        }
        setTokens(newTokens);
        rebuildDisplay(newTokens);
    };
    // Render
    const letterButtons = Object.keys(LETTERS);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        style: {
            fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "text",
                value: inputValue,
                placeholder: "Paste Arabic text here or type using the keyboard below...",
                onChange: handleInputChange,
                onPaste: handlePaste,
                className: "mb-4 p-4 border-2 border-gray-300 rounded-lg w-full text-right",
                style: {
                    fontFamily: `${fontFamily}, sans-serif`,
                    direction: "rtl",
                    fontSize: "24px",
                    minHeight: "60px"
                }
            }, void 0, false, {
                fileName: "[project]/components/Keyboard.js",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dir: "rtl",
                className: "mb-6 p-6 border-2 border-blue-300 rounded-lg min-h-[120px] text-right bg-blue-50 shadow-md",
                style: {
                    fontFamily,
                    whiteSpace: "pre-wrap",
                    fontSize: "42px",
                    lineHeight: "2" // Increased line spacing
                },
                children: display.length > 0 ? display : "اكتب هنا..."
            }, void 0, false, {
                fileName: "[project]/components/Keyboard.js",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: "Special Diacritics:"
                    }, void 0, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-3",
                        children: SPECIAL_DIACRITICS.map((d, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>addDiacritic(d.char, d.specialType),
                                className: "px-3 py-2 border rounded bg-yellow-100 hover:bg-yellow-200 text-xl",
                                title: d.description || d.name,
                                children: [
                                    d.char,
                                    " ",
                                    d.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: [
                                            "(",
                                            d.description,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Keyboard.js",
                                        lineNumber: 381,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, `${d.name}-${index}`, true, {
                                fileName: "[project]/components/Keyboard.js",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Keyboard.js",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-3",
                children: DIACRITICS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>addDiacritic(d.char),
                        className: "px-3 py-2 border rounded bg-yellow-100 hover:bg-yellow-200 text-xl",
                        children: d.char
                    }, d.name, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Keyboard.js",
                lineNumber: 388,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-8 gap-2 mb-3",
                children: letterButtons.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>addLetter(ch),
                        className: "p-3 border rounded bg-blue-100 hover:bg-blue-200 text-2xl",
                        children: ch
                    }, ch, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 402,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Keyboard.js",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-3",
                children: [
                    NUMBERS.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>addSymbol(n),
                            className: "px-3 py-2 border rounded bg-green-100",
                            children: n
                        }, n, false, {
                            fileName: "[project]/components/Keyboard.js",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this)),
                    SYMBOLS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>addSymbol(s),
                            className: "px-3 py-2 border rounded bg-purple-100",
                            children: s
                        }, s, false, {
                            fileName: "[project]/components/Keyboard.js",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Keyboard.js",
                lineNumber: 412,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>addSymbol(" "),
                        className: "px-6 py-2 border rounded bg-gray-200",
                        children: "Space"
                    }, void 0, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: backspace,
                        className: "px-4 py-2 border rounded bg-orange-200",
                        children: "Backspace"
                    }, void 0, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearAll,
                        className: "px-4 py-2 border rounded bg-red-200",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Keyboard.js",
                lineNumber: 425,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Keyboard.js",
        lineNumber: 339,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Keyboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Keyboard.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Home() {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col items-center justify-center p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl mb-6 font-bold",
                children: "Arabic Keyboard (Auto Join)"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Keyboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onType: setText
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__14ee0a49._.js.map