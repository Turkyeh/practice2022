console.log("regular exp");

let masseage = "Hello all Wellcome to my App hello";

let exp = /hello/;

console.log(masseage.match(exp));

 exp = /hello/i;
console.log(masseage.match(exp));


 exp = /hello/ig;
console.log(masseage.match(exp));


 exp = /yasmen/i;
console.log(masseage.match(exp));


//new RegExp(masseage. "hello");

//Ranges
let tid = "Com Net  Org Info to ";
let tide = /(Org|Info |to )/i;//patern
console.log(tid.match(tide));//يبحث عن اي شي من الثلث قيم وبيرجع الي بيلقاها اول

let nume = "12345678910";
let numex = /[0 - 2]/g;
console.log(nume.match(numex));

nume = "123 *4#56@78%&^910";
numex = /[^0-9]/g;
console.log(nume.match(numex));


let pract = "os1 os123 os12os os8 os88os ";
pracreg=/os[6-8] os/ig;

console.log(pract.match(pracreg));



let mystring = "AaBbCcDdEeFfGg12KkLlMmNnOoP5543pQqRrSsTtUu44VvWwXxYyZz";

let smal = /[^a-z]/g;
let capitall = /[A-Z]/g;
let returnABC = /[ACD]/g;
let justword = /[a-zA-Z]/g;///   /[a-z]ig/

console.log(mystring.match(smal));
console.log(mystring.match(capitall));
    
console.log(mystring.match(returnABC));
console.log(mystring.match(justword));


let em = "abc #$%....... amer@gmail.com  r@n.net r@n.org  r@n.com  r@@n.net rr@n.net   .net .com O.g";
let emre = /./g;
console.log(em.match(emre));
let word = /\w/g;// just writtern a latter 
console.log(em.match(word));

word = /\W/g;// just writtern a spicaeal carcter
console.log(em.match(word));

let valid = /\w@\w.(com|net)/g;

console.log(em.match(valid));

////////////////test methoud

let name = "yasmen 1spam spam 2spam 7spam 6spam Aspam ";

let namera = /\bspam\b /ig;// /(\b spam || spam\b )/

console.log(name.match(namera));



console.log("test methoud in REJEX");


console.log(namera.test(name));
console.log(/\b turkyeh/ig.test("yasmen Turkyeh "));


///////////////
console. log("Quantifiers");

let email = "yasmen@gmail.com    o@s.com   tyatya123%yahoo.com ";

// letmailre =/\w\w\w\w\w\w@\w\w\w\w\w.(com ||yahoo)/;
letmailre = /\w+@\w+.(com ||yahoo)/;//+ one or more//* zero or more //? zero or one

    console.log(email.match(letmailre));
console.log(email.match(letmailre).length);
    

let num = "1000 0120 4561 1010 00 010 000 001";

console.log(num.match(/0\d*0/ig));//00


let url = "http://jordanorange.com  https://www.google.com     web.com ";
urlre=/https?:\/\/(www)?.(com||jo)/ig;

console.log(url.match(urlre));
    

let ser = "S100S S3000S SS0000S  s950000s";

console.log(ser.match(/S\d{3}S/ig));//three diget
console.log(ser.match(/S\d{4,6}S/ig));//for or five
console.log(ser.match(/S\d{4,}S/ig));;//at least for
// console.log(ser.match());

let grop = "my name is turkyeh and im a programming";

let grore = /ing$/ig;//finish with $

console.log(grore.test(grop));
// console.log(grop.match(grore));
console.log(/^5 /ig.test(grop));
console.log(/^my /ig.test(grop));


let nenam = "10yasmz  10nlkz  7mohammed jhs yasm 45tyeeh 76yahea 5";
console.log(/^\d/ig.test(nenam));//start digit
console.log(/^\s/ig.test(nenam));//start with space



console.log(nenam.match(/\d\w{0,8}(?=Z)/ig));//return a word end with z and print without z //cut
console.log(nenam.match(/\d\w{8}(?!z)/ig));//any word not end z

console.log("replace and replace all");

let vari = "hi $ yasmen # where @ are @ you @ now";

console.log(vari.replace("@", "mene"));//just first one he found first rename

console.log(vari.replaceAll("@", "mane"));//rename all word


//////////////////////////////////////////////////

//practic https://regexr.com/;
console.log("learn about using form REGEX");

document.getElementById("register").onclick = function () {
    
    let phoneinput = document.getElementById("phone").value;
    let phone = /\(0\d{3}\)\s\d{2}-\d{7}/;//(0962) 78-1234455;
    let validtest = phone.test(phoneinput);
    console.log(validtest);
    if (validtest === false)
    {
            return false;

        }



    return true;



}

















