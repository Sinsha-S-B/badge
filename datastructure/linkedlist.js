class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    add(data){
        let newnode=new Node(data)

        if(this.head==null){
            this.head=newnode
        }else{
            this.tail.next=newnode
        }
        this.tail=newnode
    }

    display(){

        if(this.head==null){
            console.log('empty');
            return
        }
        let temp=this.head
        
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next
        }
    }

    delete(data){

        let temp=this.head
        let prev=null

        if(temp!=null && temp.data==data){
            this.head=temp.next
            return
        }
        while(temp!=null && temp.data!=data){
            prev=temp
            temp=temp.next
        }
        if(temp==null){
            return
        }
        if(temp==this.tail){
            this.tail=prev
            this.tail.next=null
        }
        prev.next=temp.next
    }
    insertafter(position,data){
         
        let newnode=new Node(data)
        let temp=this.head

        while(temp!=null && temp.data!=position){
            temp=temp.next
        }
        if(temp==null){
            return
        }
        if(temp==this.tail){

            this.tail.next=newnode
            this.tail=newnode
            return
        }
        newnode.next=temp.next
        temp.next=newnode
    }

    
insertbefore(position,data){
    let newnode= new Node(data)
    let  prev=null
    let temp=this.head

    while(temp!=null && temp.data!=position){
        prev=temp
        temp=temp.next
    }
    if(temp==null){
        return
    }
    if(temp==this.head){
        newnode.next=this.head
        this.head=newnode
        return
    }

    newnode.next=temp
    prev.next=newnode
        
}
mid(){

    let fast=this.head
    let slow=this.head

    while(fast!=null && fast.next!=null){
      
     slow=slow.next
     fast=fast.next.next
    }
    console.log(slow.data)
}
middel(){
    let slow=this.head
    let fast=this.head
    let prev=null;

    while(fast!=null && fast.next!=null){
        prev=slow
        slow=slow.next
        fast=fast.next.next
    }
    prev.next=slow.next
}

twomultipleSum(){

    let temp = this.head
    let sum = 0

    while(temp != null){

      if(temp.data % 2 == 0){
         sum =sum + temp.data
      }
      temp = temp.next
    }
console.log(sum);
  }

  convertToDecimal(data){

    let decimal=0
    let temp=this.head

    while(temp!=null){
        decimal=decimal*2 + temp.data
        temp=temp.next

    }
    console.log(decimal);
   
  }
  isPalindrom(){
    let temp = this.head
    let str =''
     
    while(temp != null){
       str =str+ temp.data
       temp = temp.next
    }

    let strrev = str.split('').reverse().join('')

    if(str == strrev){
      console.log('is palindrome');
    }else{
      console.log('not palindrome');
  }
  }
}

  



let list=new LinkedList()

// list.add(10)
// list.add(110)
// list.add(120)
// list.delete(110)
// list.insertafter(10,1)
// list.insertafter(110,11)
// list.insertafter(120,12)

// list.insertbefore(10,11)
// list.insertbefore(110,111)
// list.insertbefore(120,1111111111)


// list.display()
// list.mid()
// list.middel()
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




