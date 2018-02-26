module.exports = function solveEquation(equation) {
  var parts = equation.split(" ");
  if (parts[7]=="-") { parts[8]=0-parts[8];};
  if (parts[3]=="-") { parts[4]=0-parts[4];};
  var a = +parts[0];
  var b = +parts[4];
  var c = +parts[8];
  var y = Math.round((-b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
  var x = Math.round((-b + Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
  var finalArr = [x,y];
  return finalArr.sort (function(a, b) {
    return a - b;
  })
}
