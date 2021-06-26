# Intro

# Possible Errors:

### Jest testing multiple test file port 3000 already in use....


[https://stackoverflow.com/questions/54422849/jest-testing-multiple-test-file-port-3000-already-in-use](https://stackoverflow.com/questions/54422849/jest-testing-multiple-test-file-port-3000-already-in-use)

the very basic thing to do is to put your app.listen() inside some other file , other than your file that consists all the routes . for example : `index.js`


```javascript
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const students = ["Elie", "Matt", "Joel", "Michael"];

app.get("/", (req, res) => {
  return res.json(students);
});

module.exports = app;
```

and `server.js`


```javascript
const app = require("./index");

app.listen(3000, () => console.log("server starting on port 3000!"));
```


In this way Jest will not be reading app.listen() at all . cheers !

### Setting up Jest with ESM

[https://bl.ocks.org/rstacruz/511f43265de4939f6ca729a3df7b001c](https://bl.ocks.org/rstacruz/511f43265de4939f6ca729a3df7b001c)


Method A: Native Node.js support
Node v14 and Jest v26 support ESM natively with the `--experimental-vm-modules` flag. [doc](https://jestjs.io/docs/ecmascript-modules)



Install cross-env:

```bash
yarn add --dev cross-env
```
Add `NODE_OPTIONS` to the scripts.test in package.json:


```json
"scripts": {
  "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest"
}
```
