let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log ( JSON.stringify(meetup, function replacer(key, value) {
      //console.log (`${key}: ${value}`);
    return ( (key == 'occupiedBy' || key == 'self') && value == meetup) ? undefined : value;
 }));