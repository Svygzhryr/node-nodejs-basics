import * as fs from "fs";

const write = async () => {
  const stream = fs.createWriteStream("files/fileToWrite.txt");
  process.stdin.pipe(stream);
};

await write();
