const min = document.querySelector('.min'),
    num = document.querySelector('.num'),
    plus = document.querySelector('.plus'),
    min2 = document.querySelector('.min2'),
    plus2 = document.querySelector('.plus2'),
    num2 = document.querySelector('.num2')

let a = 1;

plus.addEventListener('click', () => {
    a++;
    num.innerText = a;

});

min.addEventListener('click', () => {
    if (a > 1) {
        a--;
        num.innerText = a;
    };
});

plus2.addEventListener('click', () => {
    a++;
    num2.innerText = a;
})
min2.addEventListener('click', () => {
    if (a > 1) {
        a--;
        num2.innerText = a;
    }
})