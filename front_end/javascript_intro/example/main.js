console.log("JavaScript is working.")

function displayDate(id) {
    document.getElementById("date").innerHTML = Date();
}




function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled === true) {
        text = "cookies are enabled";
    } else {
        text = "cookies are not enabled";
    } document.getElementById("cookie").innerHTML = text;
}

function mOver() {
    document.getElementById("title").style.color = "crimson";
}

function mOut() {
    document.getElementById("title").style.colour = "black";
}

function sendAlert() {
    alert (`This is a confidential image. Police are en-route to your IP address at ${location.hostname}`);

    alert(location.hostname);
}

function darkMode(){
    let page = document.body;
    page.classList.toggle("dark-mode");

}