import prompt from "prompt";


const {choice} = await prompt.get(["Choice"])
console.log("Choice type of", choice);