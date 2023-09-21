function scuberGreetingForFeet(feet){

  if(feet <= 400){
    return 'This one is on me!';
  } else if (feet > 2000 && feet <=2500 ){
    return 'I will gladly take your thirty bucks.';
  } else (feet > 2500)
    return 'No can do.';
}
console.log(scuberGreetingForFeet(2786));

//function ternaryCheckCity(city){
  // Write your code here
//ternaryCheckCity = "NYC"? "Ok, sounds good." : "No go.";
//return ternaryCheckCity;
//console.log(ternaryCheckCity("Chicago"));

 




function ternaryCheckCity(city){
if (city === "NYC"){
  return "Ok, Sounds good";
} else (city === "Pittsburg")
  return "No go."
}
console.log(ternaryCheckCity("Pittsburg"))

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return('Thank you so much.')
      break;
    case 'not as generous':
      return('Thank you.')
      break;
    default:
    return("Bye.")
    break;
  }
}
console.log(switchOnCharmFromTip("generous"))