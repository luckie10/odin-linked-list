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

  const size = () => length;

  const at = (index) => {
    if (index >= length) return null;

    let pointer = _head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    return pointer;
  };

  const pop = () => {
    let pointer = _head;
    let pointerMinusOne = null;

    while (pointer.next !== null) {
      pointerMinusOne = pointer;
      pointer = pointer.next;
    }

    pointerMinusOne.next = null;
  };

  const contains = (value, pointer = _head) => {
    if (pointer === null) return false;
    if (pointer.value === value) return true;

    return contains(value, pointer.next);
  };

  return {
    head,
    tail,
    prepend,
    append,
    size,
    at,
    pop,
    contains,
  };
};

export { LinkedList };
