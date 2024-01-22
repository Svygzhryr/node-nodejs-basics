import * as fs from "fs";

const list = async () => {
  fs.readdir("./files", (err, files) => {
    if (err) throw "FS operation failed";
    console.log("Requested directory contents are: ", files);
  });
};

await list();
