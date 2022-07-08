var arr = {
  items: ["a", "b", "c", "d", "a", "c"],
  repeated: function () {
    var arr = this.items.sort();
    var out = [];
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] == this.items[i + 1]) {
        out.push(this.items[i]);
      }
    }
    console.log(out);
  },
};
arr.repeated();
