class Node{
    constructor(val, next) {
        this.val = val,
        this.next = next ? next : null
    }
}

export const arrayToSinglyLinkedList = arr => arr.reverse().reduce((acc, current) => new Node(current, acc), null)

