function unique(arr) {
    return arr.filter( (item, index, arr) => 
       index == arr.indexOf(item));
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) );