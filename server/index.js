const express = require("express");
const bodyParser = require("body-parser");
const mc = require("./Controllers/message_controller");

const app = express();
app.use(bodyParser.json());

app.use(express.static("././public/build"));

const messagesBaseUrl = `/api/messages`;
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
