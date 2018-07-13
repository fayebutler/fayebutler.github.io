// ****************************************************** //
//  Function List & Instructions - Functions are listed
//  in order below, to amend an element searching for any
//  of the functions below should speed up your process /

// SETUP AD
//      [A] Variables - Set up the variables for all elements
//      [B] On load - On page load start the ad: set date code , reset animations and start intro

// ANIMATIONS
//      [C] Reset Animations (resetAnim)
//      [D] Start Intro (startIntro) - starts all intro animations
//      [E] Start Resolve (startResolve) - starts all resolve animations

// DATECODE
//      [G] Date Code (getDateCode) - Changes date and cta (date needs to be in UK format: DD/MM/YYYY)

// EXITS
//      [H] Exits (onExitHandler) - What to do on an exit click



// ===================== //
// === [A] Variables === //
// ===================== //

var resolve_exit = document.getElementById('resolve_exit');

// ===================== //
// ==== [B] On load ==== //
// ===================== //

function init() {
    addListeners();
    // [G] Set Date Code //
		getDateCode('30-03-2018');

    startResolve();
}

// --- Add event listeners --- //

function addListeners() {

    // [H] Exits
    resolve_exit.addEventListener("click", function(){
			onExitHandler("main");
		});

}

//---- Start Resolve ---//

function startResolve(){

    resolve.style.display = "block";

}

// ===================== //
// === [G] Date Code === //
// ===================== //

function getDateCode(datevar) {
	var numberOfDaysBeforeRelease = 6;	// how many days before release date to display the week before message

	// Set Release Date options
	var releaseDate1 = 1; // the  number to return before the release date
	var releaseDate2 = 1; // the number to return in the week before the release date
	var releaseDate3 = 1; // the number to return the day before release date
	var releaseDate4 = 2; // the number to return the day of release
	var releaseDate5 = 3; // the number to return after the day of release


	// Set release date elements
	// prog date
	var d1 = document.getElementById("resolve_date");


	//date format: dd-mm-yyyy

	var MS_TO_DAYS = 24 * 60 * 60 * 1000;

	var dateParts = datevar.split('-');
	var currentDate = new Date();
	var day = parseInt(dateParts[0])+1;
	var releaseDate = new Date(dateParts[2], dateParts[1]-1, day);

	numberOfDaysBeforeRelease = (!numberOfDaysBeforeRelease) ? 0 : numberOfDaysBeforeRelease;

	var diff = Math.floor((releaseDate.getTime() - currentDate.getTime()) / MS_TO_DAYS);

	var dateCode = releaseDate1;

	// DAY OF RELEASE
	if(diff == 0) { dateCode = releaseDate4; }

	// DAY BEFORE RELEASE
	else if (diff == 1) { dateCode = releaseDate3; }

	// BEFORE RELEASE DATE
	else if (diff > 0) {

		dateCode = releaseDate1;

		// WEEK BEFORE RELEASE DATE
		if(diff <= numberOfDaysBeforeRelease) {
			dateCode = releaseDate2;
		}

	}

	// AFTER RELEASE DATE
	else if (diff < 0) { dateCode = releaseDate5; }

	currentDate = null;
	releaseDate = null;



  if (dateCode == "1") {
      // DATE
      d1.setAttribute("src", "img_resolve_date.png");
  } else if (dateCode == "2") {
      // TOMORROW
      d1.setAttribute("src", "img_resolve_today.png");
  } else if (dateCode == "3") {
      //NOW
      d1.setAttribute("src", "img_resolve_now.png");
  }

}


// ================== //
// === [H] Exits  === //
// ================== //


function onExitHandler(exit){

    startResolve();

    switch (exit) {
        case "main":
            console.log('[H] MAIN EXIT');
            window.open(window.clickTag);
            break;
        case "cta":
            console.log('[H] CTA EXIT');
            window.open(window.clickTag);
            break;
    }
}

// -- [A] Main OnLoad Handler -- //

window.addEventListener('load', init);
