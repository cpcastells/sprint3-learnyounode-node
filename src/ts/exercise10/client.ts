import net from "net";

const port = Number(process.argv[2]);
const host = "127.0.0.1";

const client = new net.Socket();

client.connect(port, host, () => {
  console.log("Connected to server");
});

client.on("data", (data) => {
  console.log("Received:", data.toString());
  client.destroy();
});

client.on("close", () => {
  console.log("Connection closed");
});
