function truncate(str, maxlength) {
  if (maxlength < 1) {
    return "";
  }   
  return ( str.length > maxlength ) ? str.substr(0, maxlength - 1) 
       + '…' : str;
}

alert( truncate("somestring", 4) );
alert( truncate("", -1) );
alert( truncate("Hello, world!", 5) );
alert( truncate("Hello!", 10) );