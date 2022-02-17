// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
// const copyOfCats = cats.slice()
// console.log(copyOfCats)

// //const destructivelyAppendCat = ["Milo", "Otis", "Garfield"]
// destructivelyAppendCat.push("Ralph")
// console.log(destructivelyAppendCat)

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

 function appendCat(name) {
 const copyOfAppendCat = [...cats, name];
 return copyOfAppendCat
 }

 function prependCat(name) {
 const copyOfPrependCat = [name, ...cats];
 return copyOfPrependCat
 }

 function removeLastCat(name) {
     const copyOfRemoveLastCat = cats.slice(0, cats.length - 1)
     return copyOfRemoveLastCat
 }

 function removeFirstCat(name) {
     const copyOfRemoveFirstCat = cats.slice(1);
     return copyOfRemoveFirstCat
 }