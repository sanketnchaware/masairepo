const connect = require("./configs/db");
const app = require("./index");

app.listen(1154, async () => {
  await connect();
  console.log("listening to port 2545");
});

