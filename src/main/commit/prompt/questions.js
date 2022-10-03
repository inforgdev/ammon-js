import { item } from "./factory.js";

export default {
    type: {
        description: "type",
        enum: {
            feat: item("✨", "feat", "add a new feature."),
            bug: item("🐛", "bug", "fix code not hitting a feature."),
            style: item("💅", "style", "fix code format (eg. white-space, missing semi-colons, etc.)."),
            refactor: item("♻️", "refactor", "fix code to improve legibility."),
            perf: item("⚡", "oerf", "fix a code to improve performance."),
        },
    },
    scope: {
        description: "scope",
        enum: {
            main: item("⭐", "main", "the code itself."),
            docs: item("📚", "docs", "the code explanation. (eg. README, LICENSE, etc.)"),
            test: item("✅", "tests", "the code requirement validation scripts."),
            build: item("🛠", "build", "build system or external dependencies config/script. (eg: npm, vitejs, webpack, etc.)"),
            pipe: item("⚙️", "pipe", "ci/cd config. (eg: travis, circle, browserstack, saucelabs, gulp, grunt)"),
            example: item("🖼️", "example", "the code used to illustrate the docs."),
        },
    },
    subject: {
        description: "subject",
    },
    body: {
        description: "body",
    },
    isBreaking: {
        description: "any breaking changes?",
    },
};