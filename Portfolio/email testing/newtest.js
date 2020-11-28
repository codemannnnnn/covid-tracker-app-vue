const cody = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(cody);

cody.map((data) => {
  if (data % 2) {
    return console.log(`${data} -- Odd`);
  } else {
    return console.log(`${data} -- Even`);
  }
});
