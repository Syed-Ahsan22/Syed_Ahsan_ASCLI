import inquirer from "inquirer";

let awnser = await inquirer.prompt([
    {message: "Enter Your Fisrt Number",type: "number",name:"FirstNumber"},
    {message: "Enter Your second Number",type:"number",name:"SecondNumber"},
    {
        message: "Select one Operator to perform Operator",
        type: "list",
        name: "Operator",
        choices:["Addition","Subtrations","Multiplication","Division"],
    },
]);

if (awnser.Operator === "Addition"){
console.log(awnser.FirstNumber + awnser.SecondNumber)
}
else if (awnser.Operator === "Subtrations"){
    console.log(awnser.FirstNumber - awnser.SecondNumber)
}
else if(awnser.Operator === "Multiplication"){
    console.log(awnser.FirstNumber * awnser.SecondNumber)
}
else if(awnser.Operator === "Division"){
    console.log(awnser.FirstNumber / awnser.SecondNumber)
}
else{
    console.log("invalid input")
}