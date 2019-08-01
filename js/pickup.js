/* function driverInfo() {

var userInput = prompt("Driver Name: ");
document.getElementByID("userName").innerHTML = userInput;

}  */
function time() {
java.util.Date randomDate = RandomUtil.getRandomDate(new java.util.Date(RandomUtil.getMinimumDate()), new java.util.Date(RandomUtil.getMaximumDate()), false);
Calendar calendar=Calendar.getInstance();
calendar.setTime(randomDate);

calendarFromDB.set(Calendar.HOUR_OF_DAY, calendar.get(Calendar.HOUR_OF_DAY));
calendarFromDB.set(Calendar.MINUTE, calendar.get(Calendar.MINUTE));
calendarFromDB.set(Calendar.SECOND, calendar.get(Calendar.SECOND));

dateFromDB = calendarFromDB.getTime();

} 
