let s1 = 'This is a string with single quotes, I can have "" without escape chars'
let s2 = "This is a string with double quotes, I can use '' without escape chars"
let s3 = `This is an example of a template literal, it was added in es6
            it allows for multi line string natively
            it allows for string interpolation
            this is when we embed js values into a string like
            a = ${10*10}
            template literals are great, please never use string concatanation`
 console.log('this is' + s2 + 'an example of ' + s3 + 'concatanation');
 console.log(`this is ${s2} an example of ${s3} concatanation`);
 
 
console.log(s1);
console.log(s2);
console.log(s3);
            