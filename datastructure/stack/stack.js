class stack {
  constructor() {
    this.array = [];
  }
  push(data) {
    this.array.push(data);
  }
  pop() {
    return this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  display() {
    for (let i = this.array.length - 1; i >= 0; i--) {
      console.log(this.array[i]);
    }
  }
}
let Stack = new stack();
Stack.push(10);
Stack.push(20);
Stack.push(30);
Stack.push(40);
Stack.push(100);

console.log('stack elemnts are :');
Stack.display()

console.log('poped item :', Stack.pop());
console.log('peek element :',Stack.peek());

