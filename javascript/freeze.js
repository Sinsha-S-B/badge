let person={
    name:'sinsha',
    height:156
  }
  
  Object.freeze(person)
  
  person.name='asd'
  
  delete person.height
  
  console.log('after modification ',person)