import cp from "child_process";

const spawnChildProcess = async (args) => {
  const child = cp.spawn("node", ["files/script.js", ...args], { shell: true });

  child.stdin.pipe(process.stdin);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });

  child.stdin.write("Stdin piped! \n");
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["--blueberry", "--raspberry"]);
