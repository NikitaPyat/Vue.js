class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  insert(key) {
    if (this.key === null) {
      this.key = key;
    } else if (this.key !== key) {
        if (key < this.key) {
          if (this.left !== null) {
            this.left.insert(key);
          } else {
            const tree = new Node(key);
            this.left = tree;
          }
        } else {
            if (this.right !== null) {
              this.right.insert(key);
          } else {
            const tree = new Node(key);
            this.right = tree;
          }
        }
     } 
  }
}

export default Node;
