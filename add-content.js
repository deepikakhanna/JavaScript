/* 
This script displays a greeting to the user
based upon the current time.
*/

var today=new Date();  // Create a new Date object
var hoursNow= today.getHours();
var greeting ;
if(hoursNow>18)
{
	greeting='Good Evening';
}
else if(hourNow >12)
{
	greeting='Good Afternoon';
}
else if(hoursNow >0)
{
	greeting='Good Morning';
}
else
{
	greeting='Welcome';
}
document.write('<h3>'+greeting + '</h3>');
