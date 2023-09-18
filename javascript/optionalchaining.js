const x={
  name:"sinsha",

  address:{
      dist:'kannur',
      pin:1234
  },
  
  greeting:function(){
      return 'how are you'
  }
}

const dist=x.address?.dist
console.log(dist)//kannur
console.log(x.greeting?.())//how are you

