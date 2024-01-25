import * as fs from "fs";

const rename = async () => {
  fs.rename("files/wrongFilename.txt", "files/properFilename.md", (err) => {
    if (err) throw "FS operation failed";
  });
};

await rename();
