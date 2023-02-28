function camelize(str) {
  let arr = str.split("-");
  let first = arr.shift();
  arr = arr.map( function(item) {
    return item[0].toUpperCase() + item.slice(1);
  });
  return first + arr.join('');
}

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );