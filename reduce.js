const people = [{name:'Dinesh', age: 20, postion: 'Devloper', salary: 100 },
                {name: 'peter', age: 25, position: 'Designer', salary: 300},
                {name: 'susy', age: 30, position: 'the boss', salary: 400},
                {name: 'anna', age: 35, position: 'intern', salary: 10}];


const dailyTotal = people.reduce((total,person)=>{

    
    console.log(person.salary);

    total += person.salary

    return total

}, 0)

console.log(dailyTotal)



