/*
reverse

This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)
doublyLinkedList.reverse(); // singlyLinkedList;
doublyLinkedList.length; // 4
doublyLinkedList.head.val); // 20
doublyLinkedList.head.next.val; // 15
doublyLinkedList.head.next.next.val; // 10
doublyLinkedList.head.next.next.next.val; // 5
*/

class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
    reverse(){
        if(this.length === 0){
            return null;
        }
        if (this.length === 1) {
            return this;
        }
        else if(this.length > 1){
            let currNode = this.head;
            let prevNode = null;
            let nextNode = null;
  
            for(let i = 0; i < this.length; i++){
                prevNode  = currNode.prev;
                nextNode = currNode.next;
  
                if(prevNode === null){
                    this.tail = currNode;
                    currNode.next = null;
                    currNode.prev = nextNode;
                }
                else if(nextNode === null){
                    this.head = currNode;
                    currNode.prev = null;
                    currNode.next = prevNode;
                }
                else{
                    currNode.next = prevNode;
                    currNode.prev = nextNode;
                }
  
                currNode = nextNode;
            }
            return this;
        }
    }
}