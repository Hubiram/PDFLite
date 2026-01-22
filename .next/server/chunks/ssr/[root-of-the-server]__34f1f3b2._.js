module.exports = [
"[externals]/node:fs/promises [external] (node:fs/promises, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_node:fs_promises_ef82023e._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
    });
});
}),
"[project]/newproject/node_modules/pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/aed09_pdf-parse_lib_pdf_js_v1_10_100_build_pdf_worker_23c115d6.js",
  "server/chunks/ssr/aed09_pdf-parse_lib_pdf_js_v1_10_100_build_pdf_ab09dd15.js",
  "server/chunks/ssr/aed09_node-ensure_index_8e1cd85a.js",
  "server/chunks/ssr/[externals]_fs_54ffce70._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/newproject/node_modules/pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js [app-rsc] (ecmascript)");
    });
});
}),
"[project]/newproject/node_modules/formdata-node/lib/esm/fileFromPath.js [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__2754943f._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/newproject/node_modules/formdata-node/lib/esm/fileFromPath.js [app-rsc] (ecmascript)");
    });
});
}),
];