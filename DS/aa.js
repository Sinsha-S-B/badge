class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    prev = temp;
    temp = temp.next;

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

  insertAfter(element,data){
    let newnode=new Node(data)
    let temp=this.head
    let prev=null

    if(this.head.data==element){
        newnode.next=this.head.next
        this.head.next=newnode
        return
    }

    while(temp!=null){

        if(temp.data==element){
            break
        }
        prev=temp
        temp=temp.next

    }
    if(temp==this.tail){
        this.tail.next=newnode
        this.tail=newnode
    }else{
        newnode.next=temp.next
        temp.next=newnode
    }
  }

  insertBefore(element,data){
    let newnode=new Node(data)
    let temp=this.head
    let prev=null

    if(this.head.data==element){
        newnode.next=this.head
        this.head=newnode
        return
    }

    while(temp!=null){
        if(temp.data==element){
            break
        }
        prev=temp
        temp=temp.next
    }
    if(temp==this.tail){
        newnode.next=this.tail
        prev.next=newnode
    }else{
       newnode.next=temp
       prev.next=newnode
    }

  }

  mid(){
    let slow=this.head
    let fast=this.head

    if(fast !=null && fast.next!=null){
        slow=slow.next
        fast=fast.next.next
    }
    console.log(slow.data);
  }
  midDel(){
    let slow=this.head
    let fast=this.head
    let prev=null
    
    if(fast!==null && fast.next!=null){
        prev=slow
        slow=slow.next
        fast=fast.next.next

    }
    prev.next=slow.next
  }

  revRecursionSample(x){

    if(x==null){
        return
    }
    this.revRecursionSample(x.next)
    console.log(x.data);
    

  }

  
}

let ll = new LinkedList();

// ll.add(10);
// ll.add(20);
// ll.add(30);
// ll.display()
// ll.delete(20);
// ll.display();

// ll.insertAfter(20,11111111111111)
// ll.display()

// ll.insertBefore(20,888888888888)
// ll.display()

// ll.mid()

// ll.midDel()
// ll.display()

ll.add("s");
ll.add("i");
ll.add("n");
ll.add("s");
ll.add("h");
ll.add("a");
ll.revRecursionSample(ll.head)

