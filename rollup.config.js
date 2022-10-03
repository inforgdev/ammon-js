import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
    input: "./src/main/index.js",
    output: {
        file: "./dist/ammon.cjs",
        format: "cjs",
        exports: "auto",
    },
    plugins: [
        nodeResolve(),
        terser(),
    ],
};
