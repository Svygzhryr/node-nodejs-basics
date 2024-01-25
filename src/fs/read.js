import * as fs from "fs";

const read = async () => {
  fs.readFile("files/fileToRead.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) throw "FS operation failed";
    console.log("Requested file contents:\n", data);
  });
};

await read();
