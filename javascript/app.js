
// alert("the first time in javascript");

// var FavoritePlayer=prompt("what the favorite player ?");
// console.log(FavoritePlayer);
// if(FavoritePlayer==='nadal'){
//     document.write('<img src="picture/nadal.jpg"/>');
//     console.log('helloooo');
// }else if(FavoritePlayer==='federer'){
//     document.write('<img src="picture/Federer.jpg"/>');
// }else if (FavoritePlayer==='novak'){
//     document.write('<img src="picture/novak.jpg" style="width=300px" />'); }
// else{
//     document.write('<img src="picture/legends.jpg"/>');
// };

// var Temperature=prompt("please inter  the Temperature :");
// console.log(Temperature);
// if(Temperature >=20){
//     document.write('<h2>"you can go outside"</h2>');
// }else{
//     document.write('<h2>"stay in the home"</h2>');

//  };

alert("the first time in javascript")

var FavoritePlayer=prompt("what the favorite player ?");

var gitFavoritePlayer=function () {


    while(!(FavoritePlayer==='nadal'||FavoritePlayer==='federer'||FavoritePlayer==='novak')){
    FavoritePlayer=prompt('try on of this "nadal"or "federer"or "novak"');
    } 

    if(FavoritePlayer==='nadal'){
    document.write('<img src="picture/nadal.jpg" />');
    FavoritePlayer= ('<img src="picture/nadal.jpg" />');
  
    }else if(FavoritePlayer==='federer'){
    document.write('<img src="picture/Federer.jpg"/>');
    FavoritePlayer=('<img src="picture/Federer.jpg"/>');
    }else if(FavoritePlayer==='novak'){
    document.write('<img src="picture/novak.jpg" style="width=300px" />');
    FavoritePlayer=('<img src="picture/novak.jpg" style="width=300px" />');
    }else{
    document.write('<img src="picture/legends.jpg"/>');
    FavoritePlayer=('<img src="picture/legends.jpg"/>');}          
   
}
gitFavoritePlayer();
    





var PitureOfPlayer=prompt("how many copies do you need ?");
var pictures='';
for(var i=0;i<PitureOfPlayer;i++){
    pictures +=FavoritePlayer;
}    
document.write(pictures);


var Temperature=prompt("please inter  the Temperature :");
function gitTemperature(Temp){
    if(Temp >=20) {
    document.write('<h2>"you can go outside"</h2>');}
    else {
    document.write('<h2>"stay in the home"</h2>');}
}
gitTemperature(Temperature);


