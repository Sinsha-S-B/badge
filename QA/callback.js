function add(n1,n2,display){
      const sum=n1+n2
      display(sum)
  }
  
  function display(sum){
      console.log(sum)
  }
  
  add(10,20,display)