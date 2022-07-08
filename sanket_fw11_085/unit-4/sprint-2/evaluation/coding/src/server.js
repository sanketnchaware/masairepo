const app = require("./index");
const connect = require("./configs/db");
app.listen(4641, async () => {
  await connect();
  console.log("listening to port 4641");
});
