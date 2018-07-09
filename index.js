var katzDeli = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
return katzDeliLine.length - 1;
  
}

function nowServing(katzDeliLine){
  var next = katzDeliLine[0];
  katzDeliLine.shift();
  return next;

}