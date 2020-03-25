// task 1
var city = 'Київ';
city = 'Львів';
var address;
address = city;
console.log(city);
// task 1
// task 2
var yourNumber = prompt('Введіть ваше число');
var myNumber = yourNumber % 2;
yourNumber == 0 ? console.log('0') :
    myNumber == 0 ? console.log('парне') :
        // myNumber  == 1    ?
        console.log('не парне');
// task 2
// task 3
function Sum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    rest.join(" ");
    var i = rest.length;
    console.log(i);
    console.log(rest.length);
    console.log(rest[1]);
    console.log(rest[0]);
    rest.sort(function (a, b) {
        return a - b;
    });
    console.log(rest[rest.length - 1]);
}
Sum(3, -2, -65, 5, 7, 22, 1, 3, 6, 7);
// task 3
// task 4
function Sqrt(a) {
    console.log(typeof a);
    console.log(a);
    if (a == undefined) {
        alert('Будь ласка, введіть число!');
    }
    else if (a < 0) {
        alert('Введіть додатнє число.');
    }
    else if (typeof a != 'number') {
        alert('Повинно бути числове значення');
    }
    else
        alert(" \u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u043A\u043E\u0440\u0456\u043D\u044C \u0437 " + a + " = " + Math.sqrt(a));
}
// Sqrt('fdsfsfs')
// Sqrt(-1)
// Sqrt( )
// Sqrt(12)
var Censorbutton = document.querySelector(".Censor__button");
var add = document.querySelector(".Censor__Words__add__button");
var reset = document.querySelector(".Censor__Words__reset__button");
var Censoreding = document.querySelector(".Censoreding");
var forbidenWords = ['Java'];
Censoreding.innerHTML = "" + forbidenWords;
Censorbutton.addEventListener('click', (function (event) {
    //do something
    var Censored = document.querySelector(".Censor__Censored__input").value;
    console.log(forbidenWords);
    console.log(Censored);
    // let re:string = forbidenWords[1] ;
    // console.log(typeof re)
    // console.log(Censored.padStart(Censored.length, '*'))
    forbidenWords.forEach(function (item, i, arr) {
        // console.log(Censored.indexof item , 'start')
        // console.log(Censored.lastindexof item  , 'end')
        // console.log(Censored.padStart(Censored.length, '*'))
        // console.log(Censored.search(item) , 'haha')
        Censored.replace(item, "*");
        console.log(Censored.replace(item, "*"));
        //  Censoreding = Censored.replace(item, "*")
    });
    // Censored.innerHTML = Censored.padStart(Censored.length, '*'
}));
add.addEventListener('click', (function (event) {
    var Words = document.querySelector(".Censor__Words__input__W").value;
    console.log(Words);
    forbidenWords.push(Words);
    Censoreding.innerHTML = "" + forbidenWords;
    return forbidenWords;
}));
reset.addEventListener('click', (function (event) {
    //do somet
    forbidenWords.pop();
    Censoreding.innerHTML = "" + forbidenWords;
    return forbidenWords;
}));
