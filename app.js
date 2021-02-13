
// learn Closures
//let's create two global variables fruit1 and fruit2
const fruit1 = 'apple'
const fruit2 = 'orange'
//create a function and initialize 
// the 'color' variable inside it
const getFruit = (fruit) =>{
    let color
    if (fruit === 'apple'){
        color = 'green'
    } else{
        color = 'orange'
    }
    //we have to  print  the variable color here since it is
    //not accessible outside the function because as soon as
    //the  getFruit() completes execution, the variable is popped off the stack
    console.log(`the fruit is ${color}`) 
}
//getFruit can access fruit1 variable 
//although it's not present in the local scope
//this is posssible due to scope chaining
//javascript engine tries to find variables in the local scope, if
//it is not present, it will look into the  outer scope 
//and it will continue to do so until it finds 
//the variable or reaches the global scope
//fruit1 was available in  the global scope which is also parent to getFruit function
getFruit(fruit1)

//Let's see how closures act with NESTED FUNCTIONS
//nest population() inside country()
let country = () => {
    const countryPopulation = '20 million '
    //inner function population returns  variable country population defined
    //in outer function country
    let population = () => {
        //return the variable when population function is called
        return countryPopulation
    }
    
   return population()

    //return inner function population when outer function country is invoked

}
//when outer function country is called,
//it returns a reference of the inner function population
let myPopulation = country()
//when the variable myPopulation is executed- it accesses
//the inner function population since it has a reference to it via the outer function country
console.log(`the country population is ${myPopulation}`)//->outputs '20 million'
//the inner function population can access variables
//in the outer(parent)function country  because the javascript engine
//creates a scope storing the variables of the parent function 
//using the 'closure scope' process
//this way population() can access countryPopulation even after 
//country()execution context is popped off the execution stack
//closure scope is done only for nested functions
 
