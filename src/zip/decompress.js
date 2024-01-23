import * as fs from "fs";
import * as zlib from "zlib";

const decompress = async () => {
  const unzip = zlib.createUnzip();
  const input = fs.createReadStream("files/archive.gz");
  const output = fs.createWriteStream("files/fileToCompress.txt");
  input.pipe(unzip).pipe(output);
};

await decompress();
