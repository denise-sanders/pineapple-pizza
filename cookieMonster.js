/* Cookie monster */

function bakeCookie(value_name, value, days_to_live) {
    var d = new Date(); /* Give it an expiration date */
    d.setTime(d.getTime() + (days_to_live*24*60*60*1000));
    var expiry_day = "expires="+ d.toUTCString();
	console.log(expiry_day)
   document.cookie = value_name + "=" + value + "; " + expiry_day;
};

function printCookie(value_name){
	cookie_list = document.cookie.split(';')
	var found = false
	for (i = 0; i < cookie_list.length; i++){
		console.log(cookie_list[i])
		if (cookie_list[i].indexOf(value_name) == 0){
			console.log(cookie_list[i])
			found = true
		}
	}
	if (!found) 
		console.log("Cookie not found.")
};