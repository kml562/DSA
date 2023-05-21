class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }
  
    add(el) {
        let node = new Node(el);
        if (!this.head) {
            this.head = node;
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    print() {
        let curr = this.head;
        let index = 0;
        while (curr) {
            console.log("el:", curr.el, "index:", index)
            index++;
            curr = curr.next;
        }
 }

}


class Node{
    constructor(el) {
        this.el = el;
        this.next = null;
    
}
}
let LL = new LinkedList();
LL.add(5);
LL.add(6);
console.log(LL)