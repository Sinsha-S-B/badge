class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let newnode = new Node(data);

    if (this.head == null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }

  display() {
    if (this.head == null) {
      console.log("empty");
      return;
    }
    let temp = this.head;

    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  delete(data) {
    let temp = this.head;
    let prev = null;

    if (this.head.data == data) {
      this.head = this.head.next;
      return;
    }

    while (temp != null) {
      if (temp.data == data) {
        break;
      }

      prev = temp;
      temp = temp.next;
    }

    if (temp == this.tail) {
      this.tail = prev;
      this.tail.next = null;
    } else {
      prev.next = temp.next;
    }
  }

  insertafter(position, data) {
    let newnode = new Node(data);
    let temp = this.head;

    if (this.head.data == position) {
      newnode.next = this.head.next;
      this.head.next = newnode;
      return;
    }

    while (temp != null) {
      if (temp.data == position) {
        break;
      }
      temp = temp.next;
    }
    if (temp == this.tail) {
      this.tail.next = newnode;
      this.tail = newnode;
    } else {
      newnode.next = temp.next;
      temp.next = newnode;
    }
    // while(temp!=null && temp.data!=positio){
    //     temp=temp.next
    // }
    // if(temp==null){
    //     return
    // }
    // if(temp==this.tail){

    //     this.tail.next=newnode
    //     this.tail=newnode
    //     return
    // }
    // newnode.next=temp.next
    // temp.next=newnode
  }

  insertbefore(position, data) {
    let newnode = new Node(data);
    let temp = this.head;

    if (this.head.data == position) {
      newnode.next = this.head;
      this.head = newnode;
      return;
    }
    let prev = this.head;
    temp = temp.next;

    while (temp != null) {
      if (temp.data == position) {
        break;
      }
      prev = temp;
      temp = temp.next;
    }
    if (temp == this.tail) {
      newnode.next = this.tail;
      prev.next = newnode;
    } else {
      newnode.next = temp;
      prev.next = newnode;
    }

    // let newnode= new Node(data)
    // let  prev=null
    // let temp=this.head

    // while(temp!=null && temp.data!=position){
    //     prev=temp
    //     temp=temp.next
    // }
    // if(temp==null){
    //     return
    // }
    // if(temp==this.head){
    //     newnode.next=this.head
    //     this.head=newnode
    //     return
    // }

    // newnode.next=temp
    // prev.next=newnode
  }

  mid() {
    let fast = this.head;
    let slow = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow.data);
  }

  middel() {
    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast != null && fast.next != null) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = slow.next;
  }

  twomultipleSum() {
    let temp = this.head;
    let sum = 0;

    while (temp != null) {
      if (temp.data % 2 == 0) {
        sum = sum + temp.data;
      }
      temp = temp.next;
    }
    console.log(sum);
  }

  convertToDecimal(data) {
    let decimal = 0;
    let temp = this.head;

    while (temp != null) {
      decimal = decimal * 2 + temp.data;
      temp = temp.next;
    }
    console.log(decimal);
  }

  rev() {
    
    let arr = [];
    let temp = this.head;

    while (temp != null) {
      arr.push(temp.data);
      temp = temp.next;
    }
    arr.reverse();
    console.log(arr);
  }

  revLL() {
    let temp = this.head;
    let ar = [];
    while (temp != null) {
      ar.push(temp.data);
      temp = temp.next;
    }

    let n = ar.length;

    while (temp != null) {
      temp.data = ar[i];
      temp = temp.next;
      i--;
    }
  }

  revRecurion(temp){
    
    if(temp==null){
      return
    }

    this.revRecurion(temp.next)
    console.log(temp.data);
  }

  isPalindrom() {
    let temp = this.head;
    let str = "";

    while (temp != null) {
      str = str + temp.data;
      temp = temp.next;
    }

    let strrev = str.split("").reverse().join("");

    if (str == strrev) {
      console.log("is palindrome");
    } else {
      console.log("not palindrome");
    }
  }
  
}
let list = new LinkedList();

// list.add(10)
// list.add(110)
// list.add(120)

// list.display()
// list.delete(110)
// list.insertafter(10,1)
// list.display()
// list.insertafter(110,11)
// list.display()
// list.insertafter(120,12)
// list.display()

// list.insertbefore(10,11)
// list.display()
// list.insertbefore(110,111)
// list.display()
// list.insertbefore(120,1111111111)
// list.display()

// list.display()
// list.mid()
// list.middel()
// list.display()

list.add("s");
list.add("i");
list.add("n");
list.add("s");
list.add("h");
list.add("a");

// list.rev()
list.revRecurion(list.head)
// list.display()

// list.twomultipleSum()

// list.add(1)
// list.add(0)
// list.add(1)
// list.add(1)
// list.convertToDecimal()

// list.add('m')
// list.add('a')
// list.add('l')
// list.add('a')
// list.add('y')
// list.add('a')
// list.add('l')
// list.add('a')
// // list.add('m')
// list.isPalindrom()
