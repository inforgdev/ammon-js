# AmmonJS

A tooling for a contributing guide.

## Features

* 📦 **Commitlint preset**

## Technologies

* **commitizen** as CLI utility to create commits with the convention;
* **commitlint** for automatically adhering to the commit convention.

## Installation

Run:

```bash
npm install --save-dev commitizen @commitlint/cz-commitlint inforgdev/ammon-js
```

Add this into the `package.json`:

```json
{
    //...
    "config": {
        "commitizen": {
            "path": "@commitlint/cz-commitlint"
        }
    }
}
```

Create a file `commitlint.config.cjs` with this content:

```bash
module.exports = require("ammon-js").commit;
```

## Usage

For committing, run:

```bash
npx cz
```