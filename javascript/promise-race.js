const pro1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "sinsha");
});

const pro2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "suresh");
});



Promise.race([pro1, pro2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
