//arrays
const fruits3 = ['apple','orrange','lemon','banana']
const [first1,second1,...restoftheFruits] = fruits3;

console.log(first1,restoftheFruits)

const specificFruit = restoftheFruits.find((fruit) => fruit === 'lemon')

//objects
const person1 = {name: 'john', lastname: 'smith', job: 'developer'}

const {job,...rest}  =  person1;

console.log(job,rest)

//functions

const getAverage = (name,...scores) => {


    console.log(name)
    console.log(scores);
    const average = scores.reduce((total,item)=> {return total += item},0)/scores.length;
    console.log(average);
}
const testScores = [23,45,67,89]
getAverage(person.name,...testScores)