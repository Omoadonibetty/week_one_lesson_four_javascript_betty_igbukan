function createGreeting(greeting) {
    
    return function(name) {
        
        console.log(`${greeting}, ${name}!`);
    };
}


const greetUser = createGreeting('Hello');


greetUser('Betty'); 
greetUser('Joe');   
