var katzDeli = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
return "Welcome, ${name}. You are number ${katzDeliLine.length - 1} in line.";
  
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
  var next = katzDeliLine[0];
  katzDeliLine.shift();
  return next;
  }

}