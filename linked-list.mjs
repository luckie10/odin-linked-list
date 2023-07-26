const linkedListNode = (value = null, next = null) => {
  return { value, next };
};
const LinkedList = () => {
  let _head = null;
  let length = 0;

  const head = () => _head;

  const tail = () => {
    let pointer = _head;

    while (pointer.next !== null) pointer = pointer.next;

    return pointer;
  };


  return {
    head,
    tail,
  };
};

export { LinkedList };
