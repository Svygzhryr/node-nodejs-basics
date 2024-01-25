import { createHash } from "crypto";
import * as fs from "fs";

const calculateHash = async () => {
  const fileContents = fs.readFileSync("files/fileToCalculateHashFor.txt", {
    encoding: "utf-8",
  });
  const hashedValue = createHash("sha256").update(fileContents).digest("hex");
  console.log(hashedValue);
};

await calculateHash();
