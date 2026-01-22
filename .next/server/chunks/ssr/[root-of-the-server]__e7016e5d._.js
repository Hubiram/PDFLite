module.exports = [
"[project]/newproject/utils/prompts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUMMARY_SYSTEM_PROMPT",
    ()=>SUMMARY_SYSTEM_PROMPT
]);
const SUMMARY_SYSTEM_PROMPT = `You are a social media content expert who makes comples documents easy and engaging to read. Create a viral-style summary using emogis that match the document's context.Format your response in markdown with proper line breaks.

# [Create a meaningful title based on the document's content]
📌 One powerful sentence that captures the document's essence.
. Additional key overview point (if needed)

# Document Details
. 📑 Type: [Document Type]
. 👥 For: [Target Audience]

# Key Highlights
. 🚀 First key point
. ⭐️ Second key point
. 💫 Third key point

# Why it matters
. 💡 A short, impactful paragraph explaining real-world impact

# Main Points

. 🏹 Main insitght or finding
. 💪 Key strength or advantage
. 🔥 Important outcome or result

# Pro tips 

. ⭐️ First paractical recommendation
. Second valuable insight
. 🌟 Third actionable advice

# Key Terms to Know
. 📚 First key term: Simple explanation
. 🔍 Second key term: simple explanation

# Bottom Line
. 💫 The most important takeaway

Note: Every single point MUST start with ". " followed by an emoji and a space. Do not use numbered lists. Always maintain this exact format for ALL points in ALL sections.

Example format: 
. 📌 This is how every point should look
. 💫 This is another example point

Never deviate from this format. Every line that contains content must start with ". " followed by an emoji. 
`;
}),
"[project]/newproject/lib/geminiai.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSummaryFromGemini",
    ()=>generateSummaryFromGemini
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/utils/prompts.ts [app-rsc] (ecmascript)");
;
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY || 'AIzaSyDIw39SyFtGtR81zmFf6AfrFYedPPunf_k');
const generateSummaryFromGemini = async (pdfText)=>{
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-pro-002',
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1500
            }
        });
        const prompt = {
            contents: [
                {
                    role: 'user',
                    parts: [
                        {
                            text: __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUMMARY_SYSTEM_PROMPT"]
                        }
                    ]
                }
            ]
        };
        const result = await model.generateContent(prompt);
        const response = await result.response;
        if (!response.text()) {
            throw new Error('Empty response from Gemini API');
        }
        return response.text();
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw error;
    }
};
}),
"[project]/newproject/lib/langchain.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAndExtractPdfText",
    ()=>fetchAndExtractPdfText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f40$langchain$2f$community$2f$document_loaders$2f$fs$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newproject/node_modules/@langchain/community/document_loaders/fs/pdf.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$document_loaders$2f$fs$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/@langchain/community/dist/document_loaders/fs/pdf.js [app-rsc] (ecmascript)");
;
async function fetchAndExtractPdfText(fileUrl) {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$document_loaders$2f$fs$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PDFLoader"](new Blob([
        arrayBuffer
    ]));
    const docs = await loader.load();
    return docs.map((docs)=>docs.pageContent).join('\n');
}
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/web [external] (node:stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/web", () => require("node:stream/web"));

module.exports = mod;
}),
"[project]/newproject/lib/openai.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSummaryFromOpenAI",
    ()=>generateSummaryFromOpenAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/utils/prompts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newproject/node_modules/openai/index.mjs [app-rsc] (ecmascript) <locals>");
;
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
async function generateSummaryFromOpenAI(pdfText) {
    try {
        const completion = await client.chat.completions.create({
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUMMARY_SYSTEM_PROMPT"]
                },
                {
                    role: 'user',
                    content: 'Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}'
                }
            ],
            temperature: 0.7,
            max_tokens: 1500
        });
        return completion.choices[0].message.content;
    } catch (error) {
        if (error?.status === 429) {
            throw new Error('RATE_LIMIT_EXCEEDED');
        }
        throw error;
    }
}
}),
"[project]/newproject/actions/upload-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401a4b5ffd34142b6d307cea9c1b9d98699c40bfcd":"generatePdfSummary","402dfc5829833812b32ecfee9eba07760e923fe811":"storePdfSummaryAction","40b8c9c6dea3bd8f4c0c31a1972fb3b96804a5af8a":"generatePdfText"},"",""] */ __turbopack_context__.s([
    "generatePdfSummary",
    ()=>generatePdfSummary,
    "generatePdfText",
    ()=>generatePdfText,
    "storePdfSummaryAction",
    ()=>storePdfSummaryAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$geminiai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/lib/geminiai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$langchain$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/lib/langchain.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$openai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/lib/openai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function generatePdfText({ fileUrl }) {
    if (!fileUrl) {
        return {
            success: false,
            message: 'File upload failed',
            data: null
        };
    }
    try {
        const pdfText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$langchain$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAndExtractPdfText"])(fileUrl);
        console.log({
            pdfText
        });
        if (!pdfText) {
            return {
                success: false,
                message: 'Failed to fetch and extract PDF text',
                data: null
            };
        }
        return {
            success: true,
            message: 'PDF text generated successfully',
            data: {
                pdfText
            }
        };
    } catch (err) {
        return {
            success: false,
            message: 'Failed to fetch and extract PDF text',
            data: null
        };
    }
}
async function generatePdfSummary({ pdfText, fileName }) {
    try {
        let summary;
        try {
            summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$openai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSummaryFromOpenAI"])(pdfText);
            console.log({
                summary
            });
        } catch (error) {
            console.log(error);
            if (error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
                try {
                    summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$geminiai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSummaryFromGemini"])(pdfText);
                } catch (geminiError) {
                    console.error('Gemini API failed after OpenAI quote exceeded', geminiError);
                    throw new Error('Failed to generate summary with available AI providers');
                }
            }
            return {
                success: false,
                message: 'Failed to generate summary',
                data: null
            };
        }
        if (!summary) {
            return {
                success: false,
                message: 'Failed to generate summary',
                data: null
            };
        }
        return {
            success: true,
            message: 'Summary generated successfully',
            data: {
                title: fileName,
                summary
            }
        };
    } catch (err) {
        return {
            success: false,
            message: 'Failed to generate summary',
            data: null
        };
    }
}
async function savePdfSummary({ userId, fileUrl, summary, title, fileName }) {
    try {
        const sql = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDbConnection"])();
        const [savedSummary] = await sql`
    INSERT INTO pdf_summaries (
      user_id,
      original_file_url,
      summary_text,
      title,
      file_name
    ) VALUES (
      ${userId},
      ${fileUrl},
      ${summary},
      ${title},
      ${fileName}
    ) 
    RETURNING id, summary_text
    `;
        return savedSummary;
    } catch (error) {
        console.error('Error saving PDF summary', error);
        throw error;
    }
}
async function storePdfSummaryAction({ fileUrl, summary, title, fileName }) {
    let savedSummary;
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return {
                success: false,
                message: 'User not found'
            };
        }
        savedSummary = await savePdfSummary({
            userId,
            fileUrl,
            summary,
            title,
            fileName
        });
        if (!savedSummary) {
            return {
                success: false,
                message: 'Failed to save PDF summary, please try again...'
            };
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Error saving PDF summary'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/summaries/${savedSummary.id}`);
    return {
        success: true,
        message: 'PDF summary saved successfully',
        data: {
            id: savedSummary.id
        }
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generatePdfText,
    generatePdfSummary,
    storePdfSummaryAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generatePdfText, "40b8c9c6dea3bd8f4c0c31a1972fb3b96804a5af8a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generatePdfSummary, "401a4b5ffd34142b6d307cea9c1b9d98699c40bfcd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(storePdfSummaryAction, "402dfc5829833812b32ecfee9eba07760e923fe811", null);
}),
"[project]/newproject/app/favicon.ico.mjs { IMAGE => \"[project]/newproject/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/newproject/app/favicon.ico.mjs { IMAGE => \"[project]/newproject/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/newproject/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/newproject/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/newproject/components/upload/upload-form.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/newproject/components/upload/upload-form.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/upload/upload-form.tsx <module evaluation>", "default");
}),
"[project]/newproject/components/upload/upload-form.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/newproject/components/upload/upload-form.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/upload/upload-form.tsx", "default");
}),
"[project]/newproject/components/upload/upload-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/newproject/components/upload/upload-form.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/newproject/components/upload/upload-form.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/newproject/components/common/motion-wrapper.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "MotionDiv",
    ()=>MotionDiv,
    "MotionH1",
    ()=>MotionH1,
    "MotionH2",
    ()=>MotionH2,
    "MotionH3",
    ()=>MotionH3,
    "MotionP",
    ()=>MotionP,
    "MotionSection",
    ()=>MotionSection,
    "MotionSpan",
    ()=>MotionSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MotionDiv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionDiv() from the server but MotionDiv is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx <module evaluation>", "MotionDiv");
const MotionH1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionH1() from the server but MotionH1 is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx <module evaluation>", "MotionH1");
const MotionH2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionH2() from the server but MotionH2 is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx <module evaluation>", "MotionH2");
const MotionH3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionH3() from the server but MotionH3 is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx <module evaluation>", "MotionH3");
const MotionP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionP() from the server but MotionP is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx <module evaluation>", "MotionP");
const MotionSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionSection() from the server but MotionSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx <module evaluation>", "MotionSection");
const MotionSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionSpan() from the server but MotionSpan is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx <module evaluation>", "MotionSpan");
}),
"[project]/newproject/components/common/motion-wrapper.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "MotionDiv",
    ()=>MotionDiv,
    "MotionH1",
    ()=>MotionH1,
    "MotionH2",
    ()=>MotionH2,
    "MotionH3",
    ()=>MotionH3,
    "MotionP",
    ()=>MotionP,
    "MotionSection",
    ()=>MotionSection,
    "MotionSpan",
    ()=>MotionSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MotionDiv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionDiv() from the server but MotionDiv is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx", "MotionDiv");
const MotionH1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionH1() from the server but MotionH1 is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx", "MotionH1");
const MotionH2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionH2() from the server but MotionH2 is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx", "MotionH2");
const MotionH3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionH3() from the server but MotionH3 is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx", "MotionH3");
const MotionP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionP() from the server but MotionP is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx", "MotionP");
const MotionSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionSection() from the server but MotionSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx", "MotionSection");
const MotionSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionSpan() from the server but MotionSpan is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/newproject/components/common/motion-wrapper.tsx", "MotionSpan");
}),
"[project]/newproject/components/common/motion-wrapper.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$common$2f$motion$2d$wrapper$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/newproject/components/common/motion-wrapper.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$common$2f$motion$2d$wrapper$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/newproject/components/common/motion-wrapper.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$common$2f$motion$2d$wrapper$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/newproject/components/upload/upload-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$common$2f$motion$2d$wrapper$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/components/common/motion-wrapper.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$utils$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/utils/constants.ts [app-rsc] (ecmascript)");
;
;
;
function UploadHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-6 text-center mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$common$2f$motion$2d$wrapper$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionDiv"], {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$utils$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["itemVariants"],
                className: "capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                children: "Start Uploading Your PDF's"
            }, void 0, false, {
                fileName: "[project]/newproject/components/upload/upload-header.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$common$2f$motion$2d$wrapper$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionDiv"], {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$utils$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["itemVariants"],
                className: "mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Upload your PDF and let our AI do the magic! ✨"
                }, void 0, false, {
                    fileName: "[project]/newproject/components/upload/upload-header.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/newproject/components/upload/upload-header.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/newproject/components/upload/upload-header.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/newproject/components/common/bg-gradient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BgGradient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function BgGradient({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: 'relative isolate ${className}',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: 'polygon(50% 0%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    },
                    className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/newproject/components/common/bg-gradient.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/newproject/components/common/bg-gradient.tsx",
                lineNumber: 10,
                columnNumber: 17
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/newproject/components/common/bg-gradient.tsx",
        lineNumber: 9,
        columnNumber: 13
    }, this);
}
}),
"[project]/newproject/app/(logged-in)/upload/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>upload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/components/upload/upload-form.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$upload$2f$upload$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/components/upload/upload-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$common$2f$bg$2d$gradient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/components/common/bg-gradient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/newproject/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/next/dist/client/components/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newproject/lib/user.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function upload() {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentUser"])();
    if (!user?.id) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/sign-in');
    }
    const userId = user.id;
    const userEmail = user.emailAddresses[0].emailAddress;
    const { hasReachedLimit } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$lib$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasReachedUploadLimit"])(userId, userEmail);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$common$2f$bg$2d$gradient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: "from-blue-300 via-blue-200 to-teal-100"
            }, void 0, false, {
                fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-blue-100 via-blue-300 to-blue-500 animate-gradient-x group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: 'secondary',
                                className: "relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-6 w-6 mr-2 text-blue-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: " justify-center text-base text-blue-400",
                                        children: "Powered by AI"
                                    }, void 0, false, {
                                        fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                                lineNumber: 30,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                            lineNumber: 29,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-6 text-center py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$upload$2f$upload$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$newproject$2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/newproject/app/(logged-in)/upload/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/newproject/app/(logged-in)/upload/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/newproject/app/(logged-in)/upload/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e7016e5d._.js.map