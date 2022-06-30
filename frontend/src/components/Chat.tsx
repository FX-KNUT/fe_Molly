const io = require("socket.io-client");

const socket = io("localhost:3000", {});

const chat = () => {
  let socket = io();

  socket.emit("chat message", input.value);
  input.value = "";

  socket.on("chat message", function (msg) {
    let item = document.createElement("li");
    item.textContent = msg;
    window.scrollTo(0, document.body.scrollHeight);
  });

  return <div>chat</div>;
};

export default chat;
