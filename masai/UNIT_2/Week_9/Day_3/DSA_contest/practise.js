var mat = [
    ["R","L"],
    ["D","D"]
];

var n=mat.length;
var total=n*n;
var i=0;
var j=0;count=0;

while( i>=0 && j>=0 && i<n && j<n  ){
    count++;
    if(mat[i][j]==="D"){
        if(i==n-1){
            console.log(count);
            break;
        }
        else{
            total--;
            i++;
        }
    }
    if(mat[i][j]=="U"){
        if(i==0){
            console.log(count);
            break;
        }
        else{
            total--;
            i--;
        }
    }
    if(mat[i][j]=="R"){
        if(j==n-1){
            console.log(count);
            break;
        }
        else{
            total--;
            j++;
        }
    }
    if(mat[i][j]=="L"){
        if(i==0){
            console.log(count);
            break;
        }
        else{
            total--;
            j--;
        }
    }
}