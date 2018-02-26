module.exports = function solveEquation(equation) {
  let parts = equation.split(" ");
  if (parts[7]=="-") { parts[8]=0-parts[8];};
  if (parts[3]=="-") { parts[4]=0-parts[4];};
  let a = +parts[0];
  let b = +parts[4];
  let c = +parts[8];
  let y = Math.round((-b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
  let x = Math.round((-b + Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
  let finalArr = [x,y];
  return finalArr.sort (function(a, b) {
    return a - b;
  })
}
