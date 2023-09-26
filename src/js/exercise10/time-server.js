import net from "net";

const port = process.argv[2];
const date = new Date();

const fillWithZero = (data) => (data < 10 ? "0" : "") + data;

const server = net.createServer((socket) => {
  socket.write(
    date.getFullYear() +
      "-" +
      fillWithZero(date.getMonth() + 1) +
      "-" +
      fillWithZero(date.getDate()) +
      " " +
      fillWithZero(date.getHours()) +
      ":" +
      fillWithZero(date.getMinutes()) +
      "\n",
  );

  socket.end();
});

server.listen(port, () => {
  console.log(`Listening to the port: ${port}`);
});
