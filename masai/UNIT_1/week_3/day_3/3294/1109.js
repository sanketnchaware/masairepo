// Create marks object which stores the names and marks of the students as an array with the key data
// Create the methods average, minimum, maximum
// The average method must return the average marks
// The minimum method must return the name of the student with minimum marks
// The maximum method must return the name of the student with maximum marks

var marks = {
  Name: ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh "],
  score: [10, 20, 30, 5, 10],

  average: function () {
    var sum = 0;
    for (var i = 0; i < this.score.length; i++) {
      sum = sum + this.score[i];
    }
    console.log("Average is " + sum / this.Name.length);
  },

  minimum: function () {
    var lowest = this.score[0];
    for (var i = 0; i < this.score.length; i++) {
      if (this.score[i] < lowest) {
        lowest = this.score[i];
        var naam = this.Name[i];
      }
    }
    console.log(naam + " - " + lowest);
  },

  maximum: function () {
    var highest = this.score[0];
    for (var i = 0; i < this.score.length; i++) {
      if (this.score[i] > highest) {
        highest = this.score[i];
        var nam = this.Name[i];
      }
    }
    console.log(nam + " - " + highest);
  },
};
marks.average();
marks.minimum();
marks.maximum();
