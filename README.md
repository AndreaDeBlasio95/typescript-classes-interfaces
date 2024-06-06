# TypeScript Classes & Interfaces

Welcome to the "Understanding TypeScript" course repository. This repository contains the code and setup instructions for learning and exploring TypeScript, focusing on classes and interfaces.

## Overview

This course repository helps you understand the fundamentals of TypeScript by providing practical examples and code snippets. You'll learn about TypeScript's type system, interfaces, classes, inheritance, access modifiers, and more.

## Project Structure

The project consists of the following main files and directories:

- `package.json`: Contains the project metadata, dependencies, and scripts.
- `index.html`: The entry point HTML file to run the TypeScript examples.
- `src/`: Directory containing TypeScript source files.
  - `classes.ts`: Demonstrates the usage of abstract classes, inheritance, access modifiers, static methods, and other TypeScript features.
  - `app.js`: JavaScript file generated from TypeScript demonstrating interfaces and type aliasing.

## Setup Instructions

To set up the project locally, follow these steps:

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/understanding-typescript.git
   cd understanding-typescript
   ```

2. **Install dependencies:**

   Run the following command in the project directory to install the required dependencies:

   ```sh
   npm install
   ```

3. **Initialize TypeScript:**

   Initialize TypeScript configuration by running:

   ```sh
   npx tsc --init
   ```

   This will create a `tsconfig.json` file in the project directory.

4. **Compile TypeScript:**

   To compile the TypeScript files into JavaScript and watch for changes, run:

   ```sh
   npx tsc -w
   ```

   This will generate the compiled JavaScript files in the `dist/` directory and recompile them whenever you make changes to the TypeScript files.

5. **Start the development server:**

   You can start the development server using the following command:

   ```sh
   npm start
   ```

   This will launch the `lite-server` and serve the `index.html` file. Open your browser and navigate to `http://localhost:3000` to see the running application.

## Usage

- Modify the TypeScript files in the `src/` directory to explore different TypeScript features and observe the output.
- The `index.html` file includes the compiled JavaScript file `dist/app.js`, which gets updated automatically when you recompile the TypeScript files.

## Author

Andrea De Blasio
