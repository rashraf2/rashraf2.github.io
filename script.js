const headers = ['going to make decisions with care', 'not going to abuse their power', 'going to involve everyone in meetings', 'willing to stay dedicated to their role', 'ready for whatever comes next', 'happy to hear feedback from students', 'someone who has been going to TJ for many years', 'going to be a responsible leader for others'];
var currText = 0;
function updateFunct() {
    setTimeout(updateFunct, 2500);
    setTimeout(() => document.getElementById("header2").classList.add("hidden"), 2000);
    setTimeout(() => document.getElementById("header2").classList.remove("hidden"), 2500);
    document.getElementById("counter").innerHTML = (currText + 1) + '/' + (headers.length);
    document.getElementById("header2").innerHTML = headers[currText] + '?';
    if (currText < (headers.length - 1)) {
        currText += 1;
    } else {
        currText = 0;
    }
}
updateFunct();
window.onscroll = function() {
    if (document.documentElement.scrollTop > 40) {
        document.getElementById('scroller').style.display = "block";
    }  else {
                document.getElementById('scroller').style.display = "none";
    }
}
