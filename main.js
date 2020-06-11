setInterval(function(){
var time=new Date();
var loveTime=new Date(2018,8,18).getTime();
var timDif=time-loveTime;
var days=Math.round(timDif / (1000 * 60 * 60 * 24));
var hours=Math.round((timDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes=Math.round((timDif % (1000 * 60 * 60)) / (1000 * 60));


document.getElementById("count").innerHTML="Şimdi aşkımızın "+days+" -ci günü";
document.getElementById("hours").innerHTML="Şimdi aşkımızın "+hours+" ci saati ...";
document.getElementById("minutes").innerHTML="Şimdi aşkımızın "+minutes+ " ci dakikası... "})


// Set the date we're counting down to
var countDownDate = new Date(2021,6,2).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("dem").innerHTML = days + " gün " + hours + " saat "
  + minutes + " dakika " + seconds + " saniye ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dem").innerHTML = "Zuzu apoşun sana geliyo... :)";
  }
}, 1000);