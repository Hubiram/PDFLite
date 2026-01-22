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
"[project]/node_modules/pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_pdf-parse_lib_pdf_js_v1_10_100_build_pdf_worker_6d8ebde9.js",
  "server/chunks/ssr/node_modules_pdf-parse_lib_pdf_js_v1_10_100_build_pdf_db54898c.js",
  "server/chunks/ssr/node_modules_node-ensure_index_b86f19aa.js",
  "server/chunks/ssr/[externals]_fs_54ffce70._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js [app-rsc] (ecmascript)");
    });
});
}),
"[project]/node_modules/formdata-node/lib/esm/fileFromPath.js [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__22bd334c._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/formdata-node/lib/esm/fileFromPath.js [app-rsc] (ecmascript)");
    });
});
}),
];