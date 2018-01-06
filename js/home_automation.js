/*
This JQuery script contains all the functions to support the UI actions.

Each function maps to a "class" in the UI. As an example, bedroom1_curtain is a class and I've defined a function to intercept
the click action on this class. THis allows clear extensions to this script. If you need to add more events, you can identify the class/id name from the HTML definition and define a function here.
*/

/*
	The following two funtions defines the action for close/open curtain buttons
*/
$("input[class='bedroom1_curtain']").click(function() {
  if (this.value == "Open Curtains") {
    $('.bedroom1').css('backgroundColor', '');
    this.value = "Close Curtains";
  } else {
    $('.bedroom1').css('backgroundColor', 'gray');
    this.value = "Open Curtains";
  }
});

$("input[class='kitchen_curtain']").click(function() {
  if (this.value == "Open Curtains") {
    $('.kitchen').css('backgroundColor', '');
    this.value = "Close Curtains";
  } else {
    $('.kitchen').css('backgroundColor', 'darkgray');
    this.value = "Open Curtains";
  }
});

/*
	The following two funtions defines the action for On/Off Lights button
*/
$("input[class='bedroom1_lights']").click(function() {
  if (this.value == "Lights Off") {
    $('.bedroom1').css('background-image', 'url(http://s3-us-west-1.amazonaws.com/srinic.com/images/bedroom-light_off.jpg)');
    this.value = "Lights On";
  } else {
    $('.bedroom1').css('background-image', 'url(http://s3-us-west-1.amazonaws.com/srinic.com/images/bedroom-light-on.png)');
    this.value = "Lights Off";
  }
});

$("input[class='kitchen_lights']").click(function() {
  if (this.value == "Lights On") {
    $('.kitchen').css('background-image', 'url(http://s3-us-west-1.amazonaws.com/srinic.com/images/kitchen-lights-on.jpg)');
    this.value = "Lights Off";
  } else {
    $('.kitchen').css('background-image', 'url(http://s3-us-west-1.amazonaws.com/srinic.com/images/kitchen-lights-off.jpg)');
    this.value = "Lights On";
  }
});

/*
	The following funtion defines the action for temperature slider
*/

var DataStoreKey_Temperature = "Current_Temperature";
var currentTemp = getTemperaturetFromDataStore();
$("#slider").roundSlider({
  sliderType: "min-range",
  min: "38",
  max: "90",
  value: currentTemp
});

$('#slider').click(function() {
  var newTemperature = $('#slider').text();
  saveTemperaturetToDataStore(newTemperature) ;
});

/*
The following two functions save and retrieve the temperature from a local store.
These functions can be replaced with HTTP Queries to communicate with the server component to save the state data.
*/
function saveTemperaturetToDataStore(newTemperature) 
{  
  localStorage.setItem(DataStoreKey_Temperature, newTemperature);
  //alert("Temperature saved as " + localStorage.getItem(DataStoreKey_Temperature));
}  

function getTemperaturetFromDataStore()  
{  
  var currentTemp = '';
  var defaultTemp = "75";
	try {
		currentTemp = localStorage.getItem(DataStoreKey_Temperature);
	} catch (e) {
			alert('Error while fetching temperature from local store !');
	}
	if(currentTemp==null){
			currentTemp = defaultTemp;
	}
	return currentTemp;
} 