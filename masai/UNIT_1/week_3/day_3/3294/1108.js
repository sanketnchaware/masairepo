// Create an object with the properties length and breadth
// The object must have the methods area and perimeter which will calculate and prints the area and perimeter based on the length and breadth

var rectangle={
    length:12,
    breadth:8,
    perimeter:function(){
        var peri=2*(this.length + this.breadth);
        console.log(peri);
    },
    area:function(){
            var are=this.length*this.breadth;
            console.log(are);
    }

}
rectangle.perimeter();
rectangle.area();

