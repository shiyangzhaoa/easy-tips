const arr = [1, 2];
let num = 0;

const comparing = (a, b, sum) => {
  console.log(sum)
  return a - b;
}

arr.forEach(a1 => {
  let sum = 0;
  sum += a1;
  comparing(sum, 10, sum);
  arr.forEach(a2 => {
    sum += a2;
    comparing(sum, 10, sum);
    arr.forEach(a3 => {
      sum += a3;
      comparing(sum, 10, sum);
      arr.forEach(a4 => {
        sum += a4;
        comparing(sum, 10, sum);
        arr.forEach(a5 => {
          sum += a5;
          comparing(sum, 10, sum);
          arr.forEach(a6 => {
            sum += a6;
            comparing(sum, 10, sum);
          })
        })
      })
    })
  })
})