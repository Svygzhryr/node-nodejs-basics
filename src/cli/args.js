const parseArgs = () => {
  let args = process.argv;
  args.forEach((item, index) => {
    if (item.includes("--")) {
      console.log(`${item} is ${args[index + 1]}`);
    }
  });
};

parseArgs();
