function add(n1, n2, display) {
    const sum = n1 + n2;
    display(sum);
  }
  
  function mul(sum, display) {
    const product = sum * 5;
    display(product);
  }
  
  function display(product) {
    console.log(product);
  }
  
  add(3, 4, (sum) => mul(sum, display));
  