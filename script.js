function scrollToSection(id) {
     document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

//Alert
function showAlert(){
    alert('Thanks for visiting');
}

//Typing effect
const text = "Hi, I'm Supriya Gupta";
let i = 0;
function typingEffect() {
    if (i<text.length) {
        document.getElementById('typing').innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}
typingEffect();
