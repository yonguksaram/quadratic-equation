module.exports = function solveEquation(equation) {
  let parts = equation.split(" ");
  let a = +parts[0];
  let b = +(parts[3] + parts[4]);
  let c = +(parts[7] + parts[8]);
  let y = Math.round((-b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
  let x = Math.round((-b + Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
  return [x,y].sort ((a, b) => a - b);
}
