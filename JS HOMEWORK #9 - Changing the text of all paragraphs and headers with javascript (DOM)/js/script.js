let allParagraphs = document.querySelectorAll(`P, h1, h3`);
for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].innerText = ``;
    allParagraphs[i].innerText = `Smart thinking ...`;
}
