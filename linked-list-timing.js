const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let linked = new LinkedList();
let doublyLinked = new DoublyLinkedList();
let linked2 = new LinkedList();
let doublyLinked2 = new DoublyLinkedList();
let n = 100000;
let m = n;
let o = n;
let p = n;

let linkedST = Date.now();
while(n > 0){
    linked.addToHead(n);
    n--;
}
let linkedET = Date.now();
console.log(`LinkedList Time: ${linkedET - linkedST}`);
console.log('-------------');

let doublyLinkedST = Date.now();
while(m > 0){
    doublyLinked.addToHead(m);
    m--;
}
let doublyLinkedET = Date.now();
console.log(`DoublyLinkedList Time: ${doublyLinkedET - doublyLinkedST}`)

let linkedST2 = Date.now();
while(o > 0){
    linked2.addToTail(o);
    o--;
}
let linkedET2 = Date.now();
console.log(`LinkedList Time2: ${linkedET2 - linkedST2}`);
console.log('-------------');

let doublyLinkedST2 = Date.now();
while(p > 0){
    doublyLinked2.addToTail(p);
    p--;
}
let doublyLinkedET2 = Date.now();
console.log(`DoublyLinkedList2 Time: ${doublyLinkedET2 - doublyLinkedST2}`)
