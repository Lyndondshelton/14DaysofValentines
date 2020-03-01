

	//get the current date
	var d = new Date();
	var month = d.getMonth();
	var monthName;
	switch(d.getMonth()){
		case 0:
			monthName = "January";
			break;
		case 1:
			monthName = "February";
			break;
		case 2:
			monthName = "March";
			break;
		case 3:
			monthName = "April";
			break;
		case 4:
			monthName = "May";
			break;
		case 5:
			monthName = "June";
			break;
		case 6:
			monthName = "July";
			break;
		case 7:
			monthName = "August";
			break;
		case 8:
			monthName = "September";
			break;
		case 9:
			monthName = "October";
			break;
		case 10:
			monthName = "Novemeber";
			break;
		case 11:
			monthName = "December";
			break;
		default:
			monthName = month;
	}
	var day = d.getDate();
	if(day<10){
		day = "0"+day;
	}
	var year = d.getFullYear();
	var todaysDate = monthName+" "+day+", "+year;

setInterval(function(){
	//change the html of the header an display the current available days
	var nowTime = new Date();
	var hours = nowTime.getHours();
	var minutes = nowTime.getMinutes();

	//set the time of day
	if(hours < 12){
		var timeOfDay = "AM";
	}else if(hours >=12){
		var timeOfDay = "PM";
	}else{
		alert("hours="+hours);
	}

	if(hours > 12){
		hours -= 12;
	}else if (hours == 0){
		hours = 12;
	}

	if(minutes < 10){
		minutes = "0"+minutes;
	}

	var currentTime = hours+":"+minutes+" "+timeOfDay;
	document.getElementById("currentTime").innerHTML = currentTime;
	document.getElementById("todaysDate").innerHTML = "Today is: "+todaysDate;
}, 10);

//unlock the specified locked boxes on a specific day
switch(todaysDate){
	case "February 01, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 02, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 03, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 04, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 05, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 06, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 07, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 08, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 09, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 10, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 11, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 12, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 13, 2020":
		document.getElementById("comeback").innerHTML = "Open:";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
	case "February 14, 2020":
		document.getElementById("comeback").innerHTML = "Happy Valentine's Day!!";
		document.getElementById("dnoDay").innerHTML = monthName+" "+day;
		document.getElementById("dnoTime").innerHTML = "";
		for(var i = 0; i < day; i++){
			document.getElementsByTagName("img")[i].src = "./photoshop/heart-open-box.png";
			document.getElementsByClassName("date")[i].style.display = "none";
			document.getElementsByTagName("button")[i].style.display = "block";
		}
		break;
		default:
			document.getElementById("comeback").innerHTML = "Come back:";
			document.getElementById("dnoDay").innerHTML = "February 01, 2021";
			document.getElementById("dnoTime").innerHTML = "12:00 AM";
}

var countDownDate = new Date("Feb 1, 2021 00:00:00").getTime();

// Update the count down every .01 second
setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	//print days
	if(days <= 99){
		days = "0"+days;
	}else if(days < 10){
		days = "0" + "0" + days;
	}else if(days<0){
		days = "0" + "0" + "0";
	}else{
		days = ""+days;
	}
	var firstDayDig = days.charAt(0);
	var secDayDig = days.charAt(1);
	var thirdDayDig = days.charAt(2);
	document.getElementById("firstDayDig").innerHTML = firstDayDig;
	document.getElementById("secDayDig").innerHTML = secDayDig;
	document.getElementById("thirdDayDig").innerHTML = thirdDayDig;

	//print hours
	if(hours < 10){
		hours = "0" + hours;
	}else if(hours<0){
		hours = "0" + "0";
	}else{
		hours = ""+hours;
	}
	var firstHourDig = hours.charAt(0);
	var secHourDig = hours.charAt(1);
	document.getElementById("firstHourDig").innerHTML = firstHourDig;
	document.getElementById("secHourDig").innerHTML = secHourDig;

	//print minutes
	if(minutes < 10){
		minutes = "0" + minutes;
	}else if(minutes<0){
		minutes = "0" + "0";
	}else{
		minutes = ""+minutes;
	}
	var firstMinDig = minutes.charAt(0);
	var secMinDig = minutes.charAt(1);
	document.getElementById("firstMinDig").innerHTML = firstMinDig;
	document.getElementById("secMinDig").innerHTML = secMinDig;

	//print seconds
	if(seconds < 10){
		seconds = "0" + seconds;
	}else if(seconds<0){
		seconds = "0" + "0";
	}else{
		seconds = ""+seconds;
	}
	var firstSecDig = seconds.charAt(0);
	var secSecDig = seconds.charAt(1);
	document.getElementById("firstSecDig").innerHTML = firstSecDig;
	document.getElementById("secSecDig").innerHTML = secSecDig;

},10);

function showPopUp(x){
	heartPic = document.getElementsByTagName("img");
	document.getElementById("overlay").style.visibility = "visible";
	document.getElementById("pop-up").style.visibility = "visible";
	switch(x.id){
		case "button1":
			heartPic[0].src = "./img/day1.png";
			document.getElementById("puImg").src = "./img/hairflip.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 1";
			document.getElementById("putPara").innerHTML = "Description_1";
			break;
		case "button2":
			heartPic[1].src = "./img/day2.png";
			document.getElementById("puImg").src = "./img/piano.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 2";
			document.getElementById("putPara").innerHTML = "Description_2";
			break;
		case "button3":
			heartPic[2].src = "./img/day3.png";
			document.getElementById("puImg").src = "./img/eyeroll.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 3";
			document.getElementById("putPara").innerHTML = "Description_3";
			break;
		case "button4":
			heartPic[3].src = "./img/day4.png";
			document.getElementById("puImg").src = "./img/gettingready.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 690+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 4";
			document.getElementById("putPara").innerHTML = "Description_4";
			break;
		case "button5":
			heartPic[4].src = "./img/day5.png";
			document.getElementById("puImg").src = "./img/serious.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 5";
			document.getElementById("putPara").innerHTML = "Description_5";
			break;
		case "button6":
			heartPic[5].src = "./img/day6.png";
			document.getElementById("puImg").src = "./img/leaves.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 6";
			document.getElementById("putPara").innerHTML = "Description_6";
			break;
		case "button7":
			heartPic[6].src = "./img/day7.png";
			document.getElementById("puImg").src = "./img/flag.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 7";
			document.getElementById("putPara").innerHTML = "Description_7";
			break;
		case "button8":
			heartPic[7].src = "./img/day8.png";
			document.getElementById("puImg").src = "./img/smile.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 8";
			document.getElementById("putPara").innerHTML = "Description_8";
			break;
		case "button9":
			heartPic[8].src = "./img/day9.png";
			document.getElementById("puImg").src = "./img/darksmile.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 9";
			document.getElementById("putPara").innerHTML = "Description_9";
			break;
		case "button10":
			heartPic[9].src = "./img/day10.png";
			document.getElementById("puImg").src = "./img/kennywood.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 533+"px";
			document.getElementById("puImg").style.width = 100+"%";
			document.getElementById("puImg").style.height = "auto";
			document.getElementById("puImg").style.marginLeft = 0+"px";
			document.getElementById("putHeader").innerHTML = "Day 10";
			document.getElementById("putPara").innerHTML = "Description_10";
			break;
		case "button11":
			heartPic[10].src = "./img/day11.png";
			document.getElementById("puImg").src = "./img/carnival.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = "auto";
			document.getElementById("puImg").style.height = 100+"%";
			document.getElementById("puImg").style.marginLeft = 325+"px";
			document.getElementById("putHeader").innerHTML = "Day 11";
			document.getElementById("putPara").innerHTML = "Description_11";
			break;
		case "button12":
			heartPic[11].src = "./img/day12.png";
			document.getElementById("puImg").src = "./img/myfave.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = "auto";
			document.getElementById("puImg").style.height = 100+"%";
			document.getElementById("puImg").style.marginLeft = 325+"px";
			document.getElementById("putHeader").innerHTML = "Day 12";
			document.getElementById("putPara").innerHTML = "Description_12";
			break;
		case "button13":
			heartPic[12].src = "./img/day13.png";
			document.getElementById("puImg").src = "./img/bear.JPG";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = "auto";
			document.getElementById("puImg").style.height = 100+"%";
			document.getElementById("puImg").style.marginLeft = 325+"px";
			document.getElementById("putHeader").innerHTML = "Day 13";
			document.getElementById("putPara").innerHTML = "Description_13";
			break;
		case "button14":
			heartPic[13].src = "./img/day14.png";
			document.getElementById("puImg").src = "./img/maplocation.jpg";
			document.getElementById("pop-up").style.width = 1200+"px";
			document.getElementById("pop-up").style.height = 800+"px";
			document.getElementById("puImg").style.width = "auto";
			document.getElementById("puImg").style.height = 100+"%";
			document.getElementById("puImg").style.marginLeft = 325+"px";
			document.getElementById("putHeader").innerHTML = "Day 14";
			document.getElementById("putPara").innerHTML = "Happy Valentine's Day! You've made it through the 14 Days of Valentine's! Come to this location on February 15, "+ year +". DONT BE LATE!";
			break;
	}
}
function hidePopUp(){
	document.getElementById("overlay").style.visibility = "hidden";
	document.getElementById("pop-up").style.visibility = "hidden";
}


/* setting cookies to save the heart box image state
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
`			*/
