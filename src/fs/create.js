import * as fs from "fs";

const create = async () => {
  fs.writeFile(
    "files/fresh.txt",
    "I am fresh and new",
    { flag: "ax" },
    (err) => {
      if (err) throw "FS operation failed";
    }
  );
};

await create();
