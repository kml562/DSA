class LinkedList{
    constructor() {
        this.head = null;
        this.size=0
    }
    add(el) {
        let node = new Node(el);
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr) {
                curr = curr.next;
            }
            curr.next = node;
        }
        size++;
    };

}