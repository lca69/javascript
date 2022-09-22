// let year = prompt ('În ce an a fost publicat specificația ECMAScript-2015?' , '')

// if (year == 2015) alert ('Ai dreptate')
// if (year == 2015) {
//     alert ('ai dreptate')
//     alert ('esti destept')

// }
// let condition = (year== 2015);
// if (condition) {
//     alert ('corect')
// }

// if (year == 2015) {
//     alert ('ok')
// } else {
//     alert ('wrong')
// }

// if (year < 2015) {
//     alert ('e prea devreme')
// } else if ( year > 2015) {
//     alert ('prea tarziu ')
// } else {
//     alert ('ai dreptate')
// }

// let accessAllowed; 
// let age = prompt ('Cati ani ai?' , '');
// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false
// }
// alert (accessAllowed)

// let accessAllowed = (age > 18) ? true : false;
// alert (accessAllowed) 


// let message = (age < 3) ? 'Buna copile' 
// : (age > 18) ? 'buna'
// : (age < 100) ? 'buna ziua'
// : 'Ce varsa neobisnuita'

// if (age > 3) {
//     message = 'buna copile';
// }
// else if (age > 18) {
//     message = 'buna'
// }
// else if (age < 100) {
//     message = 'buna ziua'
// }
// else {
//     message = 'ce varsata neobisnuita'
// }

// alert (message)

// let company = prompt ('ce companie a creata JS?', '')
// if (company == 'Netscape') {
//     let message = 'ok'
// } else {
//     let message = "true"
// }
// alert (message);

// {
//     let age =17;
// }
// alert (age)





// let company = prompt ('Ce compania a scris Java?' , '')
// if (company == 'ECMAScript') {
//     let message = 'Corect'
//     alert (message)
// }
// else {
//     let message = "Nu știi? ECMAScript!"
//     alert (message)
// }





// let result = prompt ('a + b < 4')  ? 'Putin' : 'Mult';
// alert (result)


// let message;
// let login = prompt ('Ce functie ai?' , '')
// if (login == 'Angajat') {
//   message = 'Buna';
// } else if (login == 'Director') {
//   message = 'Buna ziua';
// } else if (login == '') {
//   message = 'Fără autentificare';
// } else {
//   message = 'Nu ai nici o functie';
// }
// alert (message)

// let message;
// let nr = prompt ('Introduce un numar' , '');

// if (nr > 0) {
//   message = 1
// }
// else if (nr < 0) {
//   message = -1
// }
// else {
//   message = 0
// }

// alert (message)


// alert (true || true)
// alert (false || true)
// alert (true || false)
// alert (false || false)

// if (1 || 0) { 
//   alert (true)
// }

// let hour = 9
// if (hour < 10 || hour > 18) {
//   alert ('Go to work')
// }

// alert (1 || 0) //1
// alert (true || 'hello!') //true
// alert (null || 1) //1
// alert (null || 0 || 1) //1
// alert (undefined || null || 0) //0

// let currentUser = null
// let defaultUser = 'john'
// let name = currentUser || defaultUser || 'unamed'
// alert (name)

// let x 
// true || (x=1)
// alert (x)

// alert (true && true) //true
// alert (false && true) //false
// alert (true && false) //false
// alert (false && false) //false

// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute ==30){
//   alert ('The time is 12:30')
// }

// if (1&& 0) {
//   alert ('hello')
// }

// alert (1 && 0) //
// alert ( 1 && 5)

// let user;
// alert (user ?? 'John')

// let user = 'I'
// alert (user ?? 'Jorn')

// let firstName = null
// let lastName = null
// let nickName = ''
// alert (firstName ?? lastName ?? nickName ?? 'John') 
// alert (firstName || lastName || nickName || 'John')

// let height = 0
// alert (height ?? 100)
// alert (height || 100)








// do {
//     alert (i);
//     i++;
// } while (i>3)


// let i = 0
// for (;  ;) {
//     alert (i++)
//     break;
// }



// let a = 2+1
// switch (a) {
//     case(3):
//     alert ('Incorect')
//     // break

//     case 4:
//     alert ('Exact')
//     // break

//     default:
//     alert ('nu exista astfel de valori');
// }



// let a = '1'
// let b = 0
// switch (+a){
//     case b+1 == 1:
//         alert ('executat');
//         break
//         default: 
//         alert ('nu se va executa')
// }




// let a = 2+2
// switch (a) {
//     case 4:
//         alert ('corect')
//         break;
//         case 3:
//         case 5:
//             alert ('Incorect');
//             break;
//             default:
//                 alert ('Incorect');
// }


// while (true){
//     let a = prompt ('Introduceti un numar', '')
    
//     switch (+a){
//     case 1:
//     alert (3)
//     break
//     case 2:
//     alert (1)
//     break
//     case 3:
//     alert (5)
//     break
//     case 4:
//     alert (3)
//     break
//     case 5:
//     alert (4)
//     break
//     case 6:
//     alert (8)
//     break
//     case 7:
//     alert (9)
//     break
//     case 9:
//     alert (6)
//     break

//     default:
//         alert ('Nu ai introdus nici un numar')
            
//     }    
//     if (+a ==9) {
//         break
//     }
// }

// const number = +prompt('Vă rugăm să introduceți un număr între 0 și 3', '');
// switch (number){
//     case (0):
//         alert('Ai introdus numărul 0')
//         break
//         case (1):
//             alert('Ai introdus numărul 1')
//             break
//             case (2):
//             case (3):
//                 alert('Ai introdus numărul 2, sau poate 3');
//                 break
// } 

// function hello (name) {
//     let phrase = 'hello ${name}'
//     say (phrase)
// }
// function say (phrase) {
//     alert('**$(phrase)**')
// }
// hello ('hello')

// let userName = 'John'

// function showMessage (from, text) {
//     // let userName = 'Jessy'
//     // let message= 'Hello world + userName
//     alert (from + ':' + text)

// }
// // showMessage ('John', 'Hello')
// // showMessage ('Jessy', 'Hello')
// showMessage ()

// function intrebare () {
//     let a = confirm = "Permitetei sa va salvam datele?"
//     alert (a)
// }

// function userName(nume) {
//     nume = prompt('Nume Prenume');
// }

// function noName() {
//     alert('asta este');
// }

// let confirmare = confirm('Permiteti salvarea numelui?');        //TEMA PE ACASA 2

// if (confirmare) {
//     userName();
// } else {
//     noName();
// }

// function min(a,b) {
//     a = +prompt('a=');
//     b = +prompt('b=');
//     if (a<b){
//         alert(a);                        //TEMA PE ACASA 1
//     } else {
//         alert(b);
//     }
// }

// min();
  



// let  userName = 'John'

// function sum (a,b) {
//     if  (typeof (a) != 'number' || typeof (b) != "number" ) {
//         alert ('parametri trebuie sa fie de tip Number')
//         return
//     }
//     return a+b
// }

// function showMessage (from, text) {
//     text = text=== undefined? 'nu a fost gasit textul' : text  
//     alert (from + ":" + text)
// }

// let result = sum (1,"2")
// showMessage (userName, false)
// alert (result)


// function checkAge (age) {
//     if (age >18 ) {
//         return true
//     }
//     else
//     return false
    
// }
// function showMovie (age) {
//     if (!checkAge (age)) {
//         return 
//     } 
//     return true
// }

// function doNothing () {
//     return
//     (1+1)
// }
// let age = 10
// function getAge () {
//     return age
// }
// // alert (showMovie (18))
// alert (getAge ())

// let sayHi = function () {
//     alert ('Hello')
//     return sayHi
// }
// function sayHid () {
//     alert ('hello')
// }
// let func = sayHi
// func () ()

// function ask (question, yes,no) {
//     if (confirm (question)) {
//         yes ()
//     }
//     else {
//         no ()
//     }
// }
// function showOK () {
//     alert ('Esti de acord')
// }
// function showCancel () {
//     alert ('Ai anulat executia')
// }
// ask ('Esti de acord',
// function (){
//     alert ('Esti de acord')
// }, function () {
//     alert ('Ai anulat executia')})

// alert (sum (1,2))
// let sum = function sum (a,b) {
//     return (a+b)
// }

// function conf () {
//     alert ('confirm')
// }
// function pleaseConfirm () {
//     alert ('Please confirm')
// }
// function confirmare (message, conf, pleaseConfirm) {
//     if (confirm(message)) {
//         return conf ()
//     }
//     pleaseConfirm ()
// }
// confirmare ('Aveti 18 ani', conf, pleaseConfirm)

// function checkIfConfirm () {
//     let confirmare = prompt ('Permiti salvarea numelui')
//     return confirmare
// }


// function pow(x,n){
//     let result = 1;
    // for(let i=n;i>0;i--)
//     while(n)
//     {
//         result *= x; // result *= x <=> result = result * x
//         n--

//     }
//     return result
// }

// let sum = (a,b) => a+b
// let double = n => n*2

// let sayHi = () => alert ('hello')
// let age = prompt ('Cati ani ai?', 18)
// let wlecome = (age < 18)? 
// () => 'hello' : 
// () => "noroc"



// function showMessage (message) {
//     alert (message)
// }
// showMessage(wlecome ())



// function show (n) {
//     () => 1;

//     return () => +1
// }
// alert (show(1)())

// let  add = (a,b) => (n=3) => a+b * n
// alert (add(1, 2)(3))


// let ask = (question, yes, no) => confirm(question) ? yes() : no(); // tema pe acasa



// ask(
//     "Ești de acord?",
//     () => alert("Ați fost de acord."), 
//     () => alert("Ați anulat execuția.")
//   );


function pow(x,n)
{
let result=1;

for(let i=0;i<n;i++) {
    result*=x;}

return result;
}
let x=prompt("x?",""), 
n=prompt("n?","")
if (n<=0){
alert( `Gradul ${n} nu este acceptat, 
    introduceți un grad întreg mai mare decât 0`);
}
else{
alert(pow(x,n))
}