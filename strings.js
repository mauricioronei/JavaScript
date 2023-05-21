/*

1. Declare uma variável de nome weight
 
2. Que tipo de dado é a variável acima?

3. Delcare uma variável e atribua valores para cada um dos dados:
name: string
age: number (integer)
stars: number (float)
isSubscribed: boolean

*/


//1

let weight // Number

//2

console.log(typeof weight)


let name, age, stars, isSubscribed

name='George'
age= '25'
stars= '2.5'
isSubscribed= true


let student {};

console.log(typeof student)

//Atribua nome idade stars ans issubscribed

let student = {
    name: "George",
    age: 25,
    stars: 2.5,
    isSubscribed: true,
};

// Agora escreva uma frase

console.log(`The student ${student.name} has ${student.age} years old`)


//Array

let students =[] //Declare um Arrayb vazio

//Reatribua valor para a variável acima, colocando dentro dela o objeto student do exercicio anterior.

students=[
    student
]

console.log(students)
console.log(students.[0])
