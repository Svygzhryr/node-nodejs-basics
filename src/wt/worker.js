import { Worker, isMainThread, parentPort, workerData } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const recieveValue = (n) => {
  if (isMainThread) {
    const worker = new Worker("./worker.js", { workerData: n });
    worker.on("message", (message) => {
      console.log(message);
    });
  } else {
    sendResult();
  }
};

const sendResult = () => {
  const result = nthFibonacci(workerData);
  parentPort.postMessage(
    `Result of the sequence for given number is: ${result}`
  );
};

// change workerData here to any number it you're testing worker.js only
recieveValue(workerData);
