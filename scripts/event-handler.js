function changeText (targetDisplay, timeType){
    document.getElementById(targetDisplay).innerText = new Date()[timeType]();
}