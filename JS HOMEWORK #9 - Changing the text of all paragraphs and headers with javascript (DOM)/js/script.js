let allParagraphs = document.querySelectorAll(`P`);
for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].innerText = ``;
    allParagraphs[i].innerText = `Smart thinking ...`;
}
let allHeaders = document.querySelectorAll(`h1, h3`);
for (let i = 0; i < allHeaders.length; i++) {
    allHeaders[i].innerText = ``;
    allHeaders[i].innerText = `Smart thinking ...`;
}