const npmFetch = require("npm-registry-fetch");
npmFetch.json('/-/ping').then((res: any) => console.log(res));

