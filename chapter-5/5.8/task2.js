let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

let readDate = new WeakMap();  

readDate.set(messages[0], Date());
readDate.set(messages[1], Date());
readDate.set(messages[2], Date());

let message = messages[2];
messages.pop();
console.log( readDate.has(message) ); 