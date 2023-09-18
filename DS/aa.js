class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }

    add(data){
        let newnode=new Node(data)

        if(this.head===null){
            this.head=newnode
        }else{
            this.tail.next=newnode
        }
        this.tail=newnode
    }
    display(){
        if(this.head===null){
            console.log('empty');
            return
        }

        let temp=this.head
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next
        }
    }

}

let list = new LinkedList()

list.add(10)
list.add(20)

list.display()