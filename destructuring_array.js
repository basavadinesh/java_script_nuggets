const fruits = ['orange', 'banana', 'lemon']
const friends1 = ['john', 'peter', 'bobs','anna', 'kelly']

const fruit1 = fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]

console.log(fruit1, fruit2, fruit3)

const [john, , bobs, , kelly, anna] = friends1;        

console.log(john,bobs,kelly,anna)

let firsts = 'bobs';
let second = 'john';

[second,firsts] = [firsts,second]

console.log(firsts, second)

