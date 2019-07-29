function test() {
    console.log('Yayy!!! Its working');
}
test();

function test1(test){
    console.log('this is from ' + test)
} 
test1("test1")

function square (number) {
    console.log(number*number)
}

square(4)

function square1 (number1) {
    return number1*number1
}


// error snippet
// let value = square1(5);
// console.log('square of ' +number1 + 'is ' +value)


console.log(square1(12));
