
alert("the first time in javascript")

var FavoritePlayer=prompt("what the favorite player ?");

if(FavoritePlayer==='nadal'){
    document.write('<img src="picture/nadal.jpg"/>');
  
}else if(FavoritePlayer==='federer'){
    document.write('<img src="picture/Federer.jpg"/>');
}else if(FavoritePlayer==='novak'){
    document.write('<img src="picture/novak.jpg" style="width=300px" />');
}else{
    document.write('<img src="picture/legends.jpg"/>');
}

var Temperature=prompt("please inter  the Temperature :");
if(Temperature >='20') {
    document.write('<h2>"you can go outside"</h2>');}
else {
    document.write('<h2>"stay in the home"</h2>');

 }

 