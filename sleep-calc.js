"use stict"

let values 

//checking how many hours of sleep user got each night of the week
const getSleepHours = (day) => {
	switch(day) {
		case "Monday" :
			return Number(values.monday);
			break;
		case "Tuesday" :
			return Number(values.tuesday);
			break;
		case "Wednesday" :
			return Number(values.wednesday);
			break;
		case "Thursday" :
			return Number(values.thursday);
			break;
		case "Friday" :
			return Number(values.friday);
			break;
		case "Saturday" :
			return Number(values.saturday);
			break;
		case "Sunday" :
			return Number(values.sunday);
			break;
	};
};

//getting total sleep hours that user actually slept for whole week

const getActualSleepHours = () => {
	return getSleepHours('Monday') +
	getSleepHours('Tuesday') +
	getSleepHours('Wednesday') +
	getSleepHours('Thursday') +
	getSleepHours('Friday') +
	getSleepHours('Saturday') +
	getSleepHours('Sunday');
 }
 
//getting ideal sleep hours per day that user prefers, multiplying them by 7 as we need to count all days
const getIdealSleepHours = () => {
	let idealHours = 8;
	return idealHours*7;
 }

 //calculating sleep debt
const calculateSleepDebt = () =>{
	let actualSleepHours = getActualSleepHours();
	let idealSleepHours = getIdealSleepHours();
	
	//output the result to the user, with hours, by comparing actualSleepHours and idealSleepHours
	if (actualSleepHours === idealSleepHours) {
	  console.log('You have got ' + actualSleepHours + ' hours of sleep this week, it is a perfect amount.');
	  document.getElementById('calc-answ').innerHTML = `<p>Вы спали ${actualSleepHours} часа на этой неделе, это идеальное количество.</p>`;
	}
  if (actualSleepHours > idealSleepHours) {
	  let moreSleep = actualSleepHours - idealSleepHours;
	  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
	  document.getElementById('calc-answ').innerHTML = `<p>На этой неделе вы спали на ${moreSleep} часа больше, чем вам нужно.</p>`;
	}
	if (actualSleepHours < idealSleepHours) {
		let lessSleep = idealSleepHours - actualSleepHours;
	  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
	  document.getElementById('calc-answ').innerHTML = `<p>На этой неделе вы спали на ${lessSleep} часов меньше, чем вам нужно. Отдохните.</p>`;
 }

	document.getElementById('calc-answ').style.display = "block";
	// document.getElementById('calc-answ').innerHTML = `<p>text</p>`;


 }
 
 //start the program
//  calculateSleepDebt();

const form = document.getElementById("form");

form.addEventListener("submit", function(evt) {
	evt.preventDefault();
	let monday = form.querySelector('[name="sleep-hours-monday"]'),
	tuesday = form.querySelector('[name="sleep-hours-tuesday"]'),
	wednesday = form.querySelector('[name="sleep-hours-wednesday"]'),
	thursday = form.querySelector('[name="sleep-hours-thursday"]'),
	friday = form.querySelector('[name="sleep-hours-friday"]'),
	saturday = form.querySelector('[name="sleep-hours-saturday"]'),
	sunday = form.querySelector('[name="sleep-hours-sunday"]');
	
	values = {
		monday: monday.value,
		tuesday: tuesday.value,
		wednesday: wednesday.value,
		thursday: thursday.value,
		friday: friday.value,
		saturday: saturday.value,
		sunday: sunday.value,
	};

	calculateSleepDebt();
});

