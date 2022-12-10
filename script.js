var brBar =  document.querySelector('.b_bar');
var listName = document.querySelector('.list_android');
var nav = document.querySelector('nav');

var buka = false;
brBar.addEventListener('click',function(){
    buka = !buka;
    if(buka){
        listName.style.display = "block";
    }else{
        listName.style.display = "none";
    }
    
 });

 document.addEventListener("scroll",function(){
    if(window.scrollY > 664){
        nav.style.backgroundColor = "#B39DDB"
        nav.style.color = "#414141"
    }else{
        nav.style.backgroundColor = "#19191945"
        nav.style.color = "#white"
    }
 })

 //knowing when user reaches the end of the screen
 window.onscroll = () => {
    if((window.innerHeight) >= document.body.offsetHeight){
        //console.log ("You are at the end of the page.")
    }
 }

// taking user back to top
 const toTop = () => window.scrollTo({top: 0, behavior:'smooth'});

 //detect if user is in dark mode
 const isDarkMode = () => {
    window.matchMedia('(prefers-color-scheme:dark)').matches;
 }

 function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >=12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
 }
 setInterval(displayTime, 10);