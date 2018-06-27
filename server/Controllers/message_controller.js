let messages = [];
let id = 0;

module.exports = {
  create: (request, respond) => {
    const { text, time } = request.body;
    messages.push({ id, text, time });
    id++;
    respond.status(200).send(messages);
  },
  read: (request, respond) => {
    respond.status(200).send(messages);
  },
  update: (request, respond) => {
    const { text } = request.body;
    const updateID = request.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    respond.status(200).send(messages);
  },
  delete: (request, respond) => {
    const deleteID = request.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    respond.status(200).send(messages);
  }
};
