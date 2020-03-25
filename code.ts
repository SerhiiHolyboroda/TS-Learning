// task 1
let city:string = 'Київ';

city = 'Львів' ;
let address:string ;
address = city;
console.log(city)
// task 1


// task 2
let yourNumber:number = prompt('Введіть ваше число' ,  );
let myNumber:number =  yourNumber % 2;
yourNumber == 0 ?   console.log('0') :
myNumber    ==  0  ? console.log('парне')  :
// myNumber  == 1    ?
 console.log('не парне')  
 
// task 2


// task 3


function Sum(  ...rest: number[]) {
       rest.join(" ")
       let i = rest.length ;
       console.log(i) 
    console.log(rest.length) 
    console.log(rest[1]) 
    console.log(rest[0]) 
    rest.sort(function(a:number, b:number) {
        return a - b;
        
      });
      console.log(rest[rest.length-1])
         
    }
     
Sum(3,-2,-65,5,7,22,1,3,6,7);
// task 3


 

// task 4
function Sqrt(a:number) {
    console.log( typeof a  )
    console.log(a)
    if (  a == undefined ){
        alert('Будь ласка, введіть число!')
    
    }else  if(a < 0){
        alert('Введіть додатнє число.')
    }else   if( typeof a != 'number'){
        alert('Повинно бути числове значення')
    }else   alert(` Квадратний корінь з ${a} = ${Math.sqrt(a)}`)
}
// Sqrt('fdsfsfs')
// Sqrt(-1)
// Sqrt( )
// Sqrt(12)
 
 

 

const Censorbutton: HTMLElement = document.querySelector(".Censor__button");
const add: HTMLElement = document.querySelector(".Censor__Words__add__button");
const reset : HTMLElement = document.querySelector(".Censor__Words__reset__button");
const Censoreding: HTMLElement = document.querySelector(".Censoreding");
let forbidenWords: string[] = ['Java']
Censoreding.innerHTML = `${forbidenWords}`
Censorbutton.addEventListener('click', ((event: CustomEvent) => {
    //do something
    const Censored = (<HTMLInputElement>document.querySelector(".Censor__Censored__input").value);
    console.log(forbidenWords)
    console.log(Censored)
    // let re:string = forbidenWords[1] ;
    // console.log(typeof re)
     

    // console.log(Censored.padStart(Censored.length, '*'))
    forbidenWords.forEach(function(item, i, arr) {
      // console.log(Censored.indexof item , 'start')
      // console.log(Censored.lastindexof item  , 'end')
      // console.log(Censored.padStart(Censored.length, '*'))
      // console.log(Censored.search(item) , 'haha')
      Censored.replace(item, `*`)
      console.log(Censored.replace(item, `*`))
      
      //  Censoreding = Censored.replace(item, "*")
    }
     
    // Censored.innerHTML = Censored.padStart(Censored.length, '*'
  }) as EventListener);

  add.addEventListener('click', ((event: CustomEvent) => {
    const Words  = (<HTMLInputElement>document.querySelector(".Censor__Words__input__W").value);
    console.log(Words)
    forbidenWords.push(Words)
    Censoreding.innerHTML = `${forbidenWords}`
    return forbidenWords
  }) as EventListener);


  reset.addEventListener('click', ((event: CustomEvent) => {
    //do somet
    
    forbidenWords.pop()
    Censoreding.innerHTML = `${forbidenWords}`
    return forbidenWords
  }) as EventListener);



 