import os from "os";
import { Worker, isMainThread, parentPort, workerData } from "worker_threads";

const performCalculations = async () => {
  const cores = os.cpus().length;
  const workerThreads = [];
  const resultArray = [];
  console.log(`The number of CPU cores of the current OS is: ${cores}`);

  for (let i = 10; i < 10 + cores; i++) {
    workerThreads.push(new Worker("./worker.js", { workerData: i }));
  }

  workerThreads.forEach((worker, index) => {
    worker.on("message", (message) => {
      resultArray.push({ status: "resolved", data: message });
      console.log(resultArray);
    });
    worker.on("error", (error) => {
      resultArray.push({ status: "error", data: null });
    });
  });
};

await performCalculations();
