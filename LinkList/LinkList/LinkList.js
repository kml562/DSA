class LinkedList{   // linked list class
    constructor() {
        this.head = null;
        this.size = 0;
    }
 add(el) {
     let node = new Node(el);

     if (!this.head) {
     this.head = node;
     } else {
         let curr= this.head;
         while (curr.next) {
             curr= curr.next;
         }
         curr.next = node;}
     this.size++;
    }
    //Print functon
    Print() {
      let  curr = this.head;
        let index = 0;
        while (curr) {
            console.log("el:", curr.el, "index:", index++)
           
            curr = curr.next;
        }
    };
// insert the new element
    Insert(el, index) {
        // size val=4;
        //index=5
        if (index > this.size || index < 0 && this.size ) {
            return false;
        }
        let node = new Node(el);
        let curr = this.head;
        let pev = null;
        let i = 0;
        if (index === 0) {
            node.next = curr;
            this.head = node;
        } else {
            while (i < index) {
                pev = curr;
                curr = curr.next;
                i++;
            }
            pev.next = node;
            pev = pev.next;
            pev.next = curr;
            this.size++;
        }
    };
    remove(el) {
        let curr = this.head;
        let pev = null;
        while (curr) {
            if (curr.el === el) {
                if (pev === null) {
                    this.head = curr.next;
                } else {
                    pev.next = curr.next;          
                }
                this.size--;
                return true;
            }
            pev = curr;
            curr = curr.next;
        }
    }
    
    
    
}
class Node{    // node class
    constructor(el) {
        this.el = el;
        this.next = null;
    }
}

let List = new LinkedList()
List.add(8);
List.add(9);
List.add(3);
List.Insert(74, 2)
List.remove(3)
List.Print();
// console.log(List)