const parseEnv = () => {
  process.env.RSS_name1 = "This should be displayed";
  process.env.RSS_name2 = "As well as that";

  let localEnv = process.env;
  for (let key in localEnv) {
    if (key.includes("RSS_")) {
      console.log(`${key} = ${localEnv[key]}`);
    }
  }
};

parseEnv();
