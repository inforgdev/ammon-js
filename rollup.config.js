import nodeResolve from "rollup-plugin-node-resolve";

export default {
    input: "./src/main/index.js",
    output: {
        file: "./dist/ammon.cjs",
        format: "cjs",
    },
    plugins: [
        nodeResolve(),
    ],
};
