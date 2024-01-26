let originalText;

function changeText() {
    let paragraphText = document.getElementById("countdown-text");
    
    if(originalText) {
        paragraphText.innerHTML = "Project Countdown Timer";
    } else {
        paragraphText.innerHTML = "My first website for Software Engineering"
    }

    originalText = !originalText;
}