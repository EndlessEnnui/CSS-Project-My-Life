
const body = document.querySelector('body');
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
    const bgColors = [
        'rgb(196, 215, 230)',
        'rgb(220, 230, 196)',
        'rgb(196, 230, 209)'
    ];

    section.style.backgroundColor = bgColors[index % bgColors.length];
});

window.addEventListener('scroll', () => {
    /* calculating the vertical scroll position of the page using 
        the `window.scrollY` property */
    const topScroll = window.scrollY;
    
    /* calculating the maximum scroll height of the page by subtracting
        the height of the viewport (innerHeight) from the total height (scrollHeight) */
    const maximumTopScroll = body.scrollHeight - window.innerHeight;
    
    // calculating the scroll fraction
    const scrollFraction = topScroll / maximumTopScroll;
    
    // setting an arbitrary RGB color code as the starting color
    const [red, green, blue] = [136, 8, 8];
    
    // calculating the rgb values based on the scroll fraction
    const bColor = `rgb(${Math.round(red * scrollFraction)}, 
    ${Math.round(green * scrollFraction)}, ${Math.round(blue * scrollFraction)})`;
    
    /* setting the backgroundColor to bColor for smooth color
        transition on page.*/
    body.style.backgroundColor = bColor;
});



let divNodes = document.querySelectorAll(".image-div");
let divs = Array.from(divNodes);


for (i = 0; i < divs.length; i++) {
    let currentDiv = divs[i];
    let nextDiv = divs[i+1];

    currentDiv.addEventListener('click', () => {
        nextDiv.style.visibility = "visible";
    });
}

document.querySelector("#img-0").addEventListener("click", function(){
    alert("What a wonderful life.");
})
document.querySelector("#img-1").addEventListener("click", function(){
    alert("A happy home life.")
})
document.querySelector("#img-2").addEventListener("click", function(){

    alert("Supportive parents.")
})
document.querySelector("#img-3").addEventListener("click", function(){

    alert("The best siblings in the world.")
})
document.querySelector("#img-4").addEventListener("click", function(){

    alert("What more can a person like me ask for?")
})
document.querySelector("#img-5").addEventListener("click", function(){

    alert("They wouldn't know would they?")
})
document.querySelector("#img-6").addEventListener("click", function(){

    alert("No, they couldn't tell the difference.")
})
document.querySelector("#img-7").addEventListener("click", function(){

    alert("It'll be fine.")
})
document.querySelector("#img-8").addEventListener("click", function(){

    alert("They'll never find them.")
})
document.querySelector("#img-9").addEventListener("click", function(){

    alert("Even if they do.")
})
document.querySelector("#img-10").addEventListener("click", function(){

    alert("It wouldn't be a problem")
})
document.querySelector("#img-11").addEventListener("click", function(){
    document.querySelector("#text-1").style.visibility = "visible";
    alert("Afterall...")
})
document.querySelector("#img-12").addEventListener("click", function(){
    alert("I̸̩̥͌̑ ̴̥͗Ċ̴̛̦̝A̸͙̅Ǹ̸̛̟͍ ̴̖̳̀͗R̶͚͗E̴̙͆̚ͅP̸̨̧͊L̵͉̖̇Ȃ̴̫͗Ĉ̶͐ͅË̶͍̩́ ̵̭͝T̵̞̎͆H̸̛͇̾ͅE̸̼͛M̵͔̰̈́ ̵̜̭͆T̵͈̻͐͘O̸̦̾́O̴̤̾")
})



document.querySelector("#img-17").addEventListener("click", function(){

    alert("Ṉ̵̮̾Ő̷̥͐T̸͉̼̏ ̴̰́F̵̛͎̰̆Ă̸̝̳͝Ŕ̶̙ ̷̫̓̉E̶̡̻̒N̶͖̉O̸̗̅U̶͙̭̇Ǧ̷̰͕̀H̵̼̆͌")
})





