import url from "url";

const urlString = `https://www.google.com/search?q=hello+world`;

//url object

const urlObj = new URL(urlString);

console.log(urlObj);

console.log(url.format(urlObj));

console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);
console.log(urlObj.searchParams);

const params = new URLSearchParams(urlObj.search);

console.log(params.get("q"));
