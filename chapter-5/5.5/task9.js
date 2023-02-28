function shuffle(arr){
	var j, tmp;
	for(var i = arr.length - 1; i > 0; --i){
		j = Math.floor(Math.random()*(i + 1));
		tmp = arr[j];
		arr[j] = arr[i];
		arr[i] = tmp;
	}
	return arr;
}

let count = {
    '1234': 0,
    '1243': 0,
    '1324': 0,
    '1342': 0,
    '2134': 0,
    '2143': 0,
    '1423' : 0,
    '1432' : 0,
    '2314' : 0,
    '2413' : 0,
    '3124' : 0,
    '3142' : 0,
    '2341' : 0,
    '2431' : 0,
    '3214' : 0,
    '3241' : 0,
    '3412' : 0,
    '3421' : 0,
    '4123' : 0,
    '4213' : 0,
    '4231' : 0,
    '4312' : 0,
    '4132' : 0,
    '4321' : 0
   };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3, 4];
    shuffle(array);
    count[array.join('')]++;
  }

  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }