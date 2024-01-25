import os from "os";
import { Worker, isMainThread, parentPort, workerData } from "worker_threads";

const performCalculations = async () => {
  const cores = os.cpus().length;
  const workerThreads = [];
  const promiseArray = [];
  console.log(
    `\x1b[34mThe number of CPU cores of the current OS is:\x1b[0m \x1b[31m${cores} ( ${"* ".repeat(
      cores
    )})\x1b[0m`
  );

  for (let i = 10; i < 10 + cores; i++) {
    workerThreads.push(new Worker("./worker.js", { workerData: i }));
  }

  workerThreads.forEach(async (worker) => {
    const promise = new Promise((resolve, reject) => {
      worker.on("message", (message) => {
        resolve({ status: "Resolved", data: message });
      });
      worker.on("error", () => {
        reject({ status: "Error", data: null });
      });
    });
    promiseArray.push(promise);
  });

  const result = await Promise.all(promiseArray);
  console.log(result);
};

await performCalculations();
