let allParagraphs = document.getElementsByTagName("p");
let allParagraphs1 = document.getElementsByClassName("paragraph");
console.log(allParagraphs);
console.log(allParagraphs1);
let firstParagraph = allParagraphs[0];
console.log(firstParagraph);
let changedParagraphe1 = firstParagraph.innerText = "Changed first paragraph!";
let secondParagraph = allParagraphs[1];
let changedParagraphe2 = secondParagraph.innerText = "Changed second paragraph!";

let heading1 = document.getElementsByTagName("h1");
console.log(heading1);
let changedHeading1 = heading1[0].innerText = "changeeed!";
let changedHeading1_2 = heading1[1].innerText = "changeeed!!!!";

let heading3 = document.getElementsByTagName("h3");
console.log(heading3);
let changedHeading3 = heading3[0].innerText = "I've changed the heading 3!";
