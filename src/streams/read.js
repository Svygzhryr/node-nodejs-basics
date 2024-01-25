import * as fs from "fs";

const read = async () => {
  fs.createReadStream("files/fileToRead.txt").pipe(process.stdout);
};

await read();
