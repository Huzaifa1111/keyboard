(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Keyboard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Keyboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function Keyboard() {
    let { fontFamily = "HuzaifaArabic", onType } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const [tokens, setTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // New state for input value
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
            var _LETTERS_processed__char, _LETTERS_t_char;
            const t = processed[i];
            if (t.type === "symbol") {
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t.char
                }, i, false, {
                    fileName: "[project]/components/Keyboard.js",
                    lineNumber: 126,
                    columnNumber: 23
                }, this));
                continue;
            }
            if (t.type === "ligature") {
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            const connectsPrev = prevType === "letter" && ((_LETTERS_processed__char = LETTERS[processed[i - 1].char]) === null || _LETTERS_processed__char === void 0 ? void 0 : _LETTERS_processed__char.joinToNext);
            const connectsNext = ((_LETTERS_t_char = LETTERS[t.char]) === null || _LETTERS_t_char === void 0 ? void 0 : _LETTERS_t_char.joinToNext) && nextType === "letter";
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "diacritic-standing-fatha",
                        children: d
                    }, j, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this);
                }
                // Regular diacritics
                const diacriticClass = "diacritic-".concat(d.charCodeAt(0).toString(16));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: diacriticClass,
                    children: d
                }, j, false, {
                    fileName: "[project]/components/Keyboard.js",
                    lineNumber: 165,
                    columnNumber: 11
                }, this);
            });
            const hasShadda = sortedDiacs.includes("ّ");
            const letterClass = "letter-".concat(t.char.charCodeAt(0).toString(16));
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "form-".concat(formClass, " ").concat(letterClass, " ").concat(hasShadda ? 'with-shadda' : '', " ").concat(hasStandingFatha ? 'with-standing-fatha' : ''),
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
    const addDiacritic = function(dChar) {
        let specialType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
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
                var _newTokens_i_diacritics;
                // If adding regular fatha to Alif that has standing fatha, replace it
                if (dChar === "َ" && newTokens[i].char === "ا" && ((_newTokens_i_diacritics = newTokens[i].diacritics) === null || _newTokens_i_diacritics === void 0 ? void 0 : _newTokens_i_diacritics.includes(STANDING_FATHA))) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        style: {
            fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "text",
                value: inputValue,
                placeholder: "Paste Arabic text here or type using the keyboard below...",
                onChange: handleInputChange,
                onPaste: handlePaste,
                className: "mb-4 p-4 border-2 border-gray-300 rounded-lg w-full text-right",
                style: {
                    fontFamily: "".concat(fontFamily, ", sans-serif"),
                    direction: "rtl",
                    fontSize: "24px",
                    minHeight: "60px"
                }
            }, void 0, false, {
                fileName: "[project]/components/Keyboard.js",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: "Special Diacritics:"
                    }, void 0, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-3",
                        children: SPECIAL_DIACRITICS.map((d, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>addDiacritic(d.char, d.specialType),
                                className: "px-3 py-2 border rounded bg-yellow-100 hover:bg-yellow-200 text-xl",
                                title: d.description || d.name,
                                children: [
                                    d.char,
                                    " ",
                                    d.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            }, "".concat(d.name, "-").concat(index), true, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-3",
                children: DIACRITICS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-8 gap-2 mb-3",
                children: letterButtons.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-3",
                children: [
                    NUMBERS.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>addSymbol(n),
                            className: "px-3 py-2 border rounded bg-green-100",
                            children: n
                        }, n, false, {
                            fileName: "[project]/components/Keyboard.js",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this)),
                    SYMBOLS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>addSymbol(" "),
                        className: "px-6 py-2 border rounded bg-gray-200",
                        children: "Space"
                    }, void 0, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: backspace,
                        className: "px-4 py-2 border rounded bg-orange-200",
                        children: "Backspace"
                    }, void 0, false, {
                        fileName: "[project]/components/Keyboard.js",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(Keyboard, "W61DzRGwdhN7hXB1DnnOM/E/UOk=");
_c = Keyboard;
var _c;
__turbopack_context__.k.register(_c, "Keyboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Keyboard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Home() {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col items-center justify-center p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl mb-6 font-bold",
                children: "Arabic Keyboard (Auto Join)"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Home, "3t0DFnMi16eB/7p7iIKtjG5r68g=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_961051bd._.js.map