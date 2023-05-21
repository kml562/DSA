class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;

    }
    addel(el) {
        let node = new Node(el);
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
            }
        
            this.size++;

    }
}
 

class Node{
    constructor(elment) {
        this.element = elment;
        this.next = null;
}
}

let List = new LinkedList()
List.addel(5);
List.addel(2);
console.log(List);