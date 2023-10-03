# 📖 LearnYouNode

This repository contains solutions to the `learnyounode` challenges. Originally, the challenges were solved using plain JavaScript, but in an effort to enhance our skills further, the solutions were rewritten and improved using `TypeScript`. Additionally, some tests and clients were incorporated to thoroughly verify the functionality and robustness of the solutions.

### 📥 Installation

To get started, you first need to clone the repository:

```bash
git clone https://github.com/cpcastells/sprint3-learnyounode-node.git
```

Then, install the project dependencies:

```bash
npm install
```

### 🏁 How To Start

First build the TypeScript code into JavaScript by running:

```bash
npm run build
```

This will generate the dist directory with the compiled JavaScript files.

Then, if you want to run tests:

```bash
npm run test
```

### 🏗️ Exercises

This section provides example commands to run the various exercises. In some cases, it will be necessary to first start the server, followed by the client, to verify the functioning of the server-side code.

For the specific instructions and details of each exercise, please visit the official github:

https://github.com/workshopper/learnyounode/tree/master/exercises

#### Exercise 1

```bash
node dist/exercise1/hello-world.js
```

#### Exercise 2

```bash
node dist/exercise2/baby-steps.js 2 3 4
```

#### Exercise 3

```bash
node dist/exercise3/my-first-io.js ./src/ts/exercise3/test.txt
```

#### Exercise 4

```bash
node dist/exercise4/my-first-async-io.js ./src/ts/exercise4/test.txt
```

#### Exercise 5

```bash
node dist/exercise5/filtered-ls.js ./src/ts/exercise5/test md
```

#### Exercise 6

```bash
node dist/exercise6/make-it-modular.js ./src/ts/exercise5/test md
```

#### Exercise 7

```bash
node dist/exercise7/http-client.js http://www.example.com
```

#### Exercise 8

```bash
node dist/exercise9/http-collect.js http://www.example.com
```

#### Exercise 9

```bash
node dist/exercise9/juggling-async.js http://www.example.com http://www.example.com http://www.example.com
```

#### Exercise 10

```bash
// Server
node dist/exercise10/time-server.js 80

// Client
node dist/exercise10/client.js 80
```

#### Exercise 11

```bash
// Server
node dist/exercise11/http-file-server.js 80 ./src/ts/exercise11/test.txt

// Client
node dist/exercise11/client.js 80
```

#### Exercise 12

```bash
// Server
node dist/exercise12/http-uppercaserer.js 80

// Client
node dist/exercise12/client.js 80 hello
```

#### Exercise 13

```bash
// Server
node dist/exercise13/http-json-api-server.js 80

// Client
node dist/exercise13/client.js 80
```

### 📝 Built With

<br>

<div align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-Runtime-green" alt="Node.js"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Language-blue?logo=typescript" alt="TypeScript"></a>
  <a href="https://jestjs.io/"><img src="https://img.shields.io/badge/Jest-Testing%20Framework-brightgreen?logo=jest" alt="Jest"></a>

</div>

### 📝 Acknowledgements

Thanks to the NodeSchool community for the learnyounode workshopper.

<br>

---

<br>

This project was undertaken during Sprint 3 of the IT Academy.
