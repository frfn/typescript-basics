# TypeScript

## Gotchas

TS shall only be used in Dev mode, JS is used in Prod builds

## Starting

1. `npm i -D typescript`

    - downloads TS as a `dev` dependency, TS is not used in Prod

2. `npx tsc src/index.ts`

    - tsc binary!

3. `node src/index.js`

    - node is JS runtime environment!

4. `npx tsc --init`

    - creates a tsconfig.json file + ALL the optionts!!

5. setting options to true

    - `jsx: "react"`
    - `outDir: "./dist"`
    - `include: ["src/**/*"]`

6. run `npx tsc`

    - should create `./dist` folder

7. adding build script inside `"scripts"`

    - `"build": "tsc"`

8. Instead of `npm run build` --> `node dist/index.js` workflow, easier way!

    - watch mode!
    - `npx tsc -w`
    - It's nice, it does change the `.ts` file into `.js` without running `npm run build`

9. ### `Nodemon`?

    - No need to run file manually, it runs scripts and watches the file for changes, if the change occurs, it reruns the scripts!
    - add nodemon as Dev dependency!
    - `npm i -D nodemon`
    - to use: `npx nodemon dist/index.js`
