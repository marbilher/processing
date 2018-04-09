
function Quiz() {
  this.savedTime = millis();
  this.totalTime = 5000;

  this.timer = function() {
  this.passedTime = millis() - this.savedTime;
  if (this.passedTime > this.totalTime) {
    this.savedTime = millis(); // Save the current time to restart the timer!
    //below creates a math equation

    var type = int(random(0,4));
    var n = [int(random(0,101)), int(random(0,10))];
    firstRandom = n[0];
    secondRandom = n[1];
    ret = '?';
    // this.innerTime = millis() - this.savedTime;
    // if (this.innerTime > this.totalTime - 3000) {
    if (type == 0) ret = n[0] + n[1], operatorRandom = '+'
    else if (type == 1) ret = Math.abs(n[0] - n[1]), operatorRandom = '-'
    else if (type == 2) ret = n[0] * n[1], operatorRandom = '*'
    else if (type == 3) ret = n[0] / n[1], operatorRandom = '/'
    else ret = n[0] / 5 % n[1]



    }

  }

}

// this doesnt work
// var operators = ['+', '-', '*', '/'];
// this.randomOper = operators[int(random(0,3))];
// var firstInt = int(random(0,101));
// var secondInt = int(random(0,101));
// var result;
//
// switch (this.randomOper) {
//   case '+' :
//     result = firstInt+secondInt;
//     break;
//   case '-' :
//     result = firstInt-secondInt;
//     break;
//   case '*' :
//     result = firstInt*secondInt;
//     break;
//   case '/' :
//     result = firstInt/secondInt;
//     break;
//   default:
//     console.log('Calculating');
//
//     console.log(result);
