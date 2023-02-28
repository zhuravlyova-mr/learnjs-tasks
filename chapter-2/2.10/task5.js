let message;
let login = prompt("Какая должность?", '');

message = (login == 'Сотрудник') ? 'Привет' :
   (login == 'Директор') ? 'Здравствуйте' :
   (login == '') ? 'Нет логина' : '';
alert(message);