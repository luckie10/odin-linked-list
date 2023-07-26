import { LinkedList } from "./linked-list.mjs";

const list = LinkedList();

list.append(0);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(10);
list.insertAt(20, 3);
list.removeAt(1);

console.log(list.toString());
