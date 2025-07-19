const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {

       sister: 'jane',
    },
};


const last = 'some value';

const{ last: shakeAndBake, first, city, zip, siblings:{sister:favoriteSibling}} = bob;

console.log(first, last, city, zip, favoriteSibling)


function printPerson(person){
    const {first,last,siblings:{sister}} = person
    console.log(first,last,sister) 
}
printPerson(bob)






