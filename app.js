function multiply(x,y) {
    return x * y;
}

function square(x) {
    return multiply(x,x);
}

function isRightTriangle(a,b,c){
    return square(a) + square(b) === square(c);
}

console.log('before')

isRightTriangle(3,4,5)

console.log('after')


const h2 = document.querySelector('h2')

setTimeout(() => {
    h2.style.color = 'black'
}, 1000)