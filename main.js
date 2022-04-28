var reasons = [
  "Sis",
  "Me",
  "Mom",

];
var images = [
  "https://i.pinimg.com/474x/f6/d4/a3/f6d4a3b96b81144474b4232fdfdffda3.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/61004c772c6fa59a27f23916/Rick-and-Morty/960x0.jpg?fit=bounds&format=jpg&width=960",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LcEVcyZ-Ien9ulvh-WBZrOTa6lm8gNnk6A&usqp=CAU"
];

var i = 0;
function nextslide() {  
  document.getElementById("reasontext").innerHTML = reasons[i];

  document.getElementById("album").src = images[i];
  i++;
  if (i==3){

    i=0;
  }
 
 
}




