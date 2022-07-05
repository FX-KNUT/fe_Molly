// const io = require("socket.io-client");

// const socket = io("localhost:3000", {});

// const Chat = () => {
//   let socket = io();

//   socket.emit("chat message", input.value);
//   input.value = "";

//   socket.on("chat message", function (msg) {
//     let item = document.createElement("li");
//     item.textContent = msg;
//     window.scrollTo(0, document.body.scrollHeight);
//   });

//   return <div>chat</div>;
// };


const Chat = () => {
  return(
    <div>
      <h1>Hello!</h1>
      <button>누르지 마세요!</button>
    </div>
  )
}


export default Chat;
