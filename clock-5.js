// var d = new Date();
            // document.getElementById("w_date").innerHTML = d.toDateString();
            
            var d = new Date();
            var weekday = new Array(7);
            weekday[0] = "SUNDAY";
            weekday[1] = "MONDAY";
            weekday[2] = "TUESDAY";
            weekday[3] = "WEDNESDAY";
            weekday[4] = "THURSDAY";
            weekday[5] = "FRIDAY";
            weekday[6] = "SATURDAY";
            
            function setbrimg(minute)
			{
				var el=document.getElementById("clock-5");
				if(minute<=5) {
					el.style.backgroundImage="url(clock/01.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=10){
					el.style.backgroundImage="url(clock/02.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=15){
					el.style.backgroundImage="url(clock/03.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=20){
					el.style.backgroundImage="url(clock/04.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=25){
					el.style.backgroundImage="url(clock/05.png";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=30){
					el.style.backgroundImage="url(clock/06.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=35){
					el.style.backgroundImage="url(clock/07.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=40){
					el.style.backgroundImage="url(clock/08.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=45){
					el.style.backgroundImage="url(clock/09.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=50){
					el.style.backgroundImage="url(clock/10.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=55){
					el.style.backgroundImage="url(clock/11.png)";
                    el.style.backgroundSize ="100% 100%";
				}else if(minute<=60){
					el.style.backgroundImage="url(clock/12.png)";
                    el.style.backgroundSize ="100% 100%";
				}
			}
			
            function checkTime(i) {
                if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                return i;
            }
        
            function formatTime(hour, minute) {
                var amPM = (hour > 11) ? "PM" : "AM";
                if (hour > 12) {
                    hour -= 12;
                }else if (hour == 0) {
                    hour = "12";
                }
                return checkTime(hour) + ":" + checkTime(minute) + amPM;
            }
            
            function formatHTime(hour) {
               
                if (hour > 12) {
                    hour -= 12;
                }else if (hour == 0) {
                    hour = "12";
                }
                return checkTime(hour);
            }
            
        function formatDate(date) {
            var monthNames = [
                              "JAN", "FEB", "MAR",
                              "APR", "MAY", "JUN", "JUL",
                              "AUG", "SEP", "OCT",
                              "NOV", "DEC"
                              ];
                              
                              var day = date.getDate();
                              var monthIndex = date.getMonth();
                              var year = date.getFullYear();
                              
                              return day + ' ' + monthNames[monthIndex] + ' ' + year;
        }
        
        var n = weekday[d.getDay()];
        var h = d.getHours();
        document.getElementById("w_day").innerHTML = n;
        document.getElementById("w_hour").innerHTML = formatHTime(h);
        document.getElementById("w_hour_ampm").innerHTML = (h > 11) ? "PM" : "AM";
        document.getElementById("w_date").innerHTML = formatDate(d);
        
        var el=document.getElementById("clock-5");
		var m = d.getMinutes();
		setbrimg(m);