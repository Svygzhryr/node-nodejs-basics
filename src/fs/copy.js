import * as fs from "fs";

const copy = async () => {
  fs.cp(
    "./files",
    "./files_copy",
    { errorOnExist: true, recursive: true, force: false },
    (err) => {
      if (err) throw "FS operation failed";
    }
  );
};

await copy();
