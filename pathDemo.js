import path from "path";

const filePath = "./dir1/dir2/dir3/text.txt";

// basename()

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

console.log(__filename, __dirname);

//join

const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

//resolve

const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3);
