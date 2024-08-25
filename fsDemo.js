// import fs from "fs";
import fs from "fs/promises";

// readFile - callback

// fs.readFile("./text.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // readFileSync() - synchronous version

// const data = fs.readFileSync("./text.txt", "utf8");

// console.log(data);

//readFile - promise

fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// read file - async/await

async function readFile() {
  try {
    const data = await fs.readFile("./text.txt", "utf8");

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

readFile();

// write file

async function writeFile() {
  try {
    await fs.writeFile("./hello.txt", "Hello World!");

    console.log("File Written");
  } catch (error) {
    console.error(error.message);
  }
}

writeFile();

//append File

async function appendFile() {
  try {
    await fs.appendFile("./hello.txt", "\nAppended text");
    console.log("File appended");
  } catch (error) {
    console.error(error.message);
  }
}

appendFile();
