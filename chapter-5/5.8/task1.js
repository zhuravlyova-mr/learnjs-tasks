let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readMap = new WeakSet(messages);

console.log(readMap.has(messages[0]));
console.log(readMap.has(messages[1]));
console.log(readMap.has(messages[2]));

let message = messages[2];

messages.pop();

console.log(readMap.has(message));