class Queue {
    constructor() {
      this.ar = [];
    }
  
    enqueue(data) {
      this.ar.push(data);
    }
    display() {
      for (let i = 0; i < this.ar.length; i++) {
        console.log(this.ar[i]);
      }
    }
  
    dequeue() {
      this.ar.shift();
    }
  
    delmid() {
      const n = this.ar.length;
      const mid = Math.floor(n / 2);
  
      for (let i = 0; i < n; i++) {
        if (i === mid) {
          this.ar.splice(i, 1);
          break;
        }
      }
    }
  }
  
  let queue = new Queue();
  queue.enqueue(120);
  queue.enqueue(230);
  queue.enqueue(340);
  queue.dequeue();
  // console.log("Deleting middle element...");
  // queue.delmid();
  queue.display();
  