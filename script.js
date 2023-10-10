//Activity 4

//create a variable name(fruit) & store "banana"
//if case is banana, print "banana is good!"
//if case is orange, print "I am not a fan of orange"
//if case is apple, print "How you like them apples?"
//default "I have never heard of that fruit."

let fruit = 'banana';

switch (fruit) {
    case 'banana':
        console.log('Banana is good!');
        break;

    case 'orange':
        console.log('I am not a fan of Orange.');
        break;
    
    case 'apple':
        console.log('How you like them Apples?');
        break;

    default:
        console.log('I have never heard of that fruit.');
}