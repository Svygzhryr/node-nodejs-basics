import * as fs from "fs";

const remove = async () => {
  fs.unlink("files/fileToRemove.txt", (err) => {
    if (err) throw "FS operation failed";
  });
};

await remove();
