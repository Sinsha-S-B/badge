class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedlist {
  constructor() {
    this.head = null;
  }
  add(data) {
    var newnode = new node(data);

    if (this.head == null) {
      this.head = newnode;
    } else {
      this.tail.next = newnode;
    }
    this.tail = newnode;
  }

  display() {
    let temp = this.head;

    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let list = new linkedlist();
list.add(200);
list.add(300);
list.display();
