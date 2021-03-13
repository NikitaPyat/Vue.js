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

  search(key) {
    if (this.key === null) {
      return "key is null";
    }
    if (key === this.key) {
      return this;
    }
    if (key < this.key && this.left === null) {
      return null;
    }
    if (key > this.key && this.right === null) {
      return null;
    }
    return (key < this.key) ? this.left.search(key) : this.right.search(key);
  }
}

export default Node;
