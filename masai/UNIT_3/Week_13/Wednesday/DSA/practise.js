function QueueFactory() {
    const items = [];
  
    return {
      enqueue,
      dequeue,
      front,
      isEmpty,
      size,
      print
    };
  
    function enqueue(element) {
      items.push(element);
    }
  
    function dequeue() {
      return items.shift();
    }
  
    function front() {
      return items[0];
    }
  
    function isEmpty() {
      return items.length === 0;
    }
  
    function size() {
      return items.length;
    }
  
    function print() {
      console.log(items.toString());
    }
  }
  
  
  const myQueue = QueueFactory();
  
  myQueue.enqueue(3);
  myQueue.enqueue(2);
  myQueue.enqueue(6);
  
  console.log(myQueue.front()); // 3
  myQueue.print(); // 3,2,6
  
  console.log(myQueue.dequeue()); // 3
  myQueue.print(); // 2,6