const cody = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const dalton = [2, 3, 55, 3, 2, 2, 1111, 3];
const loop = arr => {
  arr.map(e => {
    return console.log([e + 1]);
  });
};

loop(cody);
loop(dalton);
