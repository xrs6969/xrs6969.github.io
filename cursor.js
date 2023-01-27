let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");
let img = document.querySelector(".lightblue");
let footer = document.querySelector("footer");


document.addEventListener("mousemove", moveCursor);

function moveCursor(e)
{
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;



}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

img.addEventListener('mouseover', () => {

    innerCursor.classList.add("grow");
    outerCursor.classList.add("change");
});

img.addEventListener('mouseleave', () => {

    innerCursor.classList.remove("grow");
    outerCursor.classList.remove("change");
});
footer.addEventListener('mouseover', () => {

    innerCursor.classList.add("grow");
    outerCursor.classList.add("change");
});

footer.addEventListener('mouseleave', () => {

    innerCursor.classList.remove("grow");
    outerCursor.classList.remove("change");
});





links.forEach(link =>{
    link.addEventListener('mouseover', ()=>{
        innerCursor.classList.add("grow");
        outerCursor.classList.add("change");
    });

    link.addEventListener('mouseleave', ()=>{
        innerCursor.classList.remove("grow");
        outerCursor.classList.remove("change");
    });
});