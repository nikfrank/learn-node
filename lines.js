console.log([...require("fs").readFileSync(process.argv[2]).values()].filter(b=> b===10).length)
