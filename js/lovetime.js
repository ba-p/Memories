	function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
	$("#elapseClock").html(result);
}
	// Time Set tại đây
	var together = new Date();
	// Set ngày tính từ ngày set đến hiện tại
	together.setFullYear(2016, 6, 20);
	// Set Giờ
	together.setHours(20);
	//Set Phút
	together.setMinutes(40);
	//Set giây
	together.setSeconds(0);
	//Rãnh thì set tiếp cái này luôn đê :v
	together.setMilliseconds(0);
		
	if (!document.createElement('canvas').getContext) {
		var msg = document.createElement("div");
		msg.id = "errorMsg";
		msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
		document.body.appendChild(msg);
		document.execCommand("stop");
	} else {
		timeElapse(together);
		setInterval(function () {
		timeElapse(together);
		}, 500);
	}