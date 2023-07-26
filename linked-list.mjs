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

  const prepend = (value) => {
    _head = linkedListNode(value, _head);
    length++;
  };

  const append = (value) => {
    if (_head === null) prepend(value);
    else {
      let _tail = tail();

      _tail.next = linkedListNode(value);
      length++;
    }
  };

  return {
    head,
    tail,
    prepend,
    append,
  };
};

export { LinkedList };
