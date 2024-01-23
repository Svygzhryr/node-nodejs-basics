import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream("files/fileToCompress.txt");
  const destination = createWriteStream("files/archive.gz");

  pipeline(source, gzip, destination, (err) => {
    if (err) throw err;
  });
};

await compress();
