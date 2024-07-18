class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  addToHead(val) {
    //1. Create a new node
    let node = new LinkedListNode(val);

    if (!this.head){
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  addToTail(val) {
    let node = new LinkedListNode(val);

    if (!this.head){
      this.head = node;
    } else if (!this.head.next) {
      this.head.next = node;
    } else {
      let nextNode = this.head.next;

      while(nextNode.next){
        nextNode = nextNode.next;
      }

      nextNode.next = node;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
