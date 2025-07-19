const udemy = 'udemy';

const boys = ['john', 'peter', 'bob'];

const girls = ['susan', 'anna'];

const bestfriend = 'arnold'

const friends = [...boys,bestfriend,...girls]
console.log(friends)

const newFriends = [...friends];
newFriends[0] = 'nancy'

console.log(friends)
console.log(newFriends)

const letters = [...udemy];

console.log(letters)
const person = {name: 'john', job: 'devloper'}
console.log(person)
const newPerson = {...person,city:'chicago',name:'peter'}

console.log(newPerson)
