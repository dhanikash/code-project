/* break program
for(let i=0;i<20;i++){
    if(i==11){
        break
    }else{
        console.log(i);

    }
}

//continue program
for(let j=0;j<22;j++){
    if(j==13){
        continue
    }else{
        console.log(j)
    }
}

// switch case 
var signal=prompt("enter a colour");
switch(signal){
    case "red":
   console.log("stop")
    break;
    case "yellow":
    console.log("wait")
    break;
    case "green":
    console.log("Go")
    break;
default:
    console.log("invalid colour")
}*

/* if else program 
let person_one=prompt("enter person one choice");
let person_two=prompt("enter person two choice");
if(person_one==person_two)
{
    console.log("draw")
}
else if(person_one=="stone" && person_two=="scissor"){
   console.log("person one wins")
}
else if(person_one=="stone" && person_two=="paper"){
    console.log("person two wins")
}
else if(person_one=="paper" && person_two=="stone"){
    console.log("person one wins")
}
else if(person_one=="scissor" && person_two=="stone"){
    console.log("person two wins")
}
else if(person_one=="paper" && person_two=="scissor"){
    console.log("person two wins")
}
else if(person_one=="scissor" && person_two=="paper"){
    console.log("person one wins")
}
  


// if else program 
let person_one=prompt("enter person one choice");
let person_two=prompt("enter person two choice");
if(person_one==person_two)
{
    console.log("draw")
}
else if(person_one=="stone" || person_two=="scissor"){
    console.log("person one wins")
 }
 else if(person_one=="stone" || person_two=="paper"){
     console.log("person two wins")
 }
 else if(person_one=="paper" || person_two=="stone"){
     console.log("person one wins")
 }
 else if(person_one=="scissor" || person_two=="stone"){
     console.log("person two wins")
 }
 else if(person_one=="paper" || person_two=="scissor"){
     console.log("person two wins")
 }
 else if(person_one=="scissor" || person_two=="paper"){
     console.log("person one wins")
 }
 else if(person_one=="")


let a=[1,2,3,43,95,46,75];


//push program

function push() {
    a.push(7856);
    console.log(a);
}
push()

//pop program
function pop(){
    a.pop();
    console.log(a);
}
pop()




//shift program
function shift(){
    a.shift();
    console.log(a);
}
shift()


//unshift program
function unshift(){
    a.unshift(0);
    console.log(a);
}
unshift()

//reverse program

function reverse() {

    for (let i=a.length-1; i>-1; i--){
          a.push(a[i]);
    }
    
    for (let i=0; i<a.length-1; i++){
        a.shift();
    }

    console.log(a);
}
reverse()

//sort program
function sort() {
    a.sort();
    console.log(a);
}
sort()*/



//bubble sort algorithm
/*
let a=[15,4,8];
for (let i = 0; i < a.length; i++) {

    for (let j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            console.log("a[i]=",a[i]);
            console.log("a[j]=",a[j]);

        }
    }
}
console.log(a)

// filter an array

 
*/


/*
let users=[{Dish_Name:"Dal", Dish_type:"veg"},
    {Dish_Name:"Chana Masala", Dish_type:"veg"},
    {Dish_Name:"Aloo Gobi", Dish_type:"veg"},
    {Dish_Name:"Samosa", Dish_type:"veg"},
    {Dish_Name:"Palak Paneer", Dish_type:"veg"},
    {Dish_Name:"Rajma", Dish_type:"veg"},
    {Dish_Name:"Aloo Chaat", Dish_type:"veg"},
    {Dish_Name:"Malai Kofta", Dish_type:"veg"},
    {Dish_Name:"Pakora", Dish_type:"veg"},
   {Dish_Name:"Butter Chicken", Dish_type:"nonveg"} ,
   {Dish_Name:"Chicken Tikka Masala", Dish_type:"nonveg"},
   {Dish_Name:"Chicken Biryani",Dish_type:"nonveg"},
    {Dish_Name:"Mutton Rogan Josh", Dish_type:"nonveg"},
    {Dish_Name:"Chicken Vindaloo", Dish_type:"nonveg"},
    {Dish_Name:"Prawn Masala", Dish_type:"nonveg"},
    {Dish_Name:"Lamb Biryani", Dish_type:"nonveg"},
    {Dish_Name:"Tandoori Chicken", Dish_type:"nonveg"},
    {Dish_Name:"Keema", Dish_type:"nonveg"}];
   


function filter(){
let veg=[];
let nonveg=[];

users.filter((item)=>{
    if(item.Dish_type=="veg"){
        veg.push(item);
    }else{
        nonveg.push(item);
    }
});
console.log(veg);
console.log(nonveg);


} 
filter()
let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function reverse(){

for(let i=a.length-1;i>-1;i--){
    a.push(a[i]);
}
for(let i=0;i<a.length;i++){
    a.shift();
}
    console.log(a);
}
reverse()  */

let a=[5,59.0,5,4,6,1,5,2];
for (let i = 0; i < a.length; i++) {

    for (let j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            console.log("a[i]=",a[i]);
            console.log("a[j]=",a[j]);

        }
    }
}
console.log(a)

