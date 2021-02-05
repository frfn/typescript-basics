# TypeScript

## Gotchas

TS shall only be used in `Dev` mode, JS is used in Prod builds

Learned more about package.json and scripts

Concurrently can run two or more processes, neat

## Starting

1. install: `npm i -D typescript`

    - downloads TS as a `dev` dependency, TS is not used in Prod

2. `npx tsc src/index.ts` ( compiles the index.ts code)

    - tsc binary!

3. `node src/index.js` ( running the code )

    - node is JS runtime environment!

4. to initialize a tsconfig.json file: `npx tsc --init`

    - creates a tsconfig.json file + ALL the optionts!!

5. setting options to true

    - `"jsx": "react"`
    - `"outDir": "./dist"`
    - `"include": ["src/**/*"]`

6. run `npx tsc` to create `./dist` folder

    - should create `./dist` folder

7. adding **build script** inside `"scripts"`

    - `"build": "tsc"`

8. Instead of `npm run build` --> `node dist/index.js` **workflow**, you can use watch mode. It will watch if any change occurs in your typescript files ( if included in the "include": [] list! | this will only affect the JS file though. )

    - watch mode!
    - to use: `npx tsc -w`
    - It's nice, it does change the `.ts` file into `.js` without running `npm run build` all the time

9. ### `Nodemon`?

    - No need to run files manually ( `node dist/file.js` ) , it runs the scripts and watches the file for changes, if the change occurs, it reruns the scripts!
    - add `nodemon` as `Dev` dependency!
    - install: `npm i -D nodemon`
    - to use: `npx nodemon dist/index.js`

    - modify options:

        - run only when on current file, after saving: `npx nodemon -w dist -q dist/index.js`, in this case any files in the `./dist` folder ( `-w` stands for watch | `nodemon` will **only** run on file where `-w` is **pointing**! )
        - `quiet` mode: `npx nodemon -w -q dist` ( -q stands for quiet )

    - trying out, `-q -w dist dist/index.js` in different order, does it matter? It absolutely does,
        - `-w dist` ( will watch dist folder )
        - `-q dist/index.js` ( quietly runs this file | doesnt' show extra text, banner like texts )

10. How to run together (`npx tsc -w` **_AND_** `npx nodemon -w dist -q dist/index.js`) ?

    - `concurrently` package!
    - a very simple process manager, it can run multiple processes
    - to use: `npx concurrently "tsc -w" "nodemon -w dist -q dist/index.js"`

    - info

        - `[0]` is `tsc -w`
        - `[1]` is `nodemon -w dist -q dist/index.js`
        - we can customize the name and color of the labels!

        - `-n` to set the name
        - `-c` to set the color
        - `-k` to kill if one of the processes fail!
        - no spaces between arguments for names | colors
        - to use: `npx concurrently -k -n TSC,NODEMON -c yellow,green "tsc -w" "nodemon -w dist -q dist/index.js"`

        - scripted? Check out `package.json`, create `dev` script!
        - to use: `npm run dev`

        - if you face an error that says, can't find file, check `package.json` and CHANGE the "main" key to the folder you want to check!
