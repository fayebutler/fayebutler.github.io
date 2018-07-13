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

var exit = document.getElementById('exit');
var cta = document.getElementById('resolve_cta');
var intro_exit = document.getElementById('intro_exit');
var resolve_exit = document.getElementById('resolve_exit');

var introOne = document.getElementById('intro_one_text');
var introTwo = document.getElementById('intro_two_text');
var introThree = document.getElementById("intro_three_text");
var background = document.getElementById("background");

// ===================== //
// ==== [B] On load ==== //
// ===================== //

function onInit() {
    // Place your code to start the ad flow here
    addListeners();
    // [2] Set Date Code //
    getDateCode('28-09-2017');
}

// --- Add event listeners --- //

function addListeners() {

    // [H] Exits
    intro_exit.addEventListener("click", function() {
        onExitHandler("main");
    });
    resolve_exit.addEventListener("click", function() {
        onExitHandler("main");
    });
    cta.addEventListener("click", function() {
        onExitHandler("cta");
    });

    window.setTimeout(function() {
      introOne.style.display = "none";
      introTwo.style.display = "block";
      window.setTimeout(function () {
        intro.style.display = "none";
        resolve.style.display = "block";
        background.classList = "resolve_art";
      }, 2300);
    }, 3000);

}

// ===================== //
// === [G] Date Code === //
// ===================== //

function getDateCode(datevar) {
    var numberOfDaysBeforeRelease = 6; // how many days before release date to display the week before message

    // Set Release Date options
    var releaseDate1 = 1; // the  number to return before the release date
    var releaseDate2 = 1; // the number to return in the week before the release date
    var releaseDate3 = 1; // the number to return the day before release date
    var releaseDate4 = 2; // the number to return the day of release
    var releaseDate5 = 3; // the number to return after the day of release


    // Set release date elements
    var d1 = document.getElementById("resolve_date");


    //date format: dd-mm-yyyy

    var MS_TO_DAYS = 24 * 60 * 60 * 1000;

    var dateParts = datevar.split('-');
    var currentDate = new Date();
    var day = parseInt(dateParts[0]) + 1;
    var releaseDate = new Date(dateParts[2], dateParts[1] - 1, day);

    numberOfDaysBeforeRelease = (!numberOfDaysBeforeRelease) ? 0 : numberOfDaysBeforeRelease;

    var diff = Math.floor((releaseDate.getTime() - currentDate.getTime()) / MS_TO_DAYS);

    var dateCode = releaseDate1;

    // DAY OF RELEASE
    if (diff == 0) {
        dateCode = releaseDate4;
    }

    // DAY BEFORE RELEASE
    else if (diff == 1) {
        dateCode = releaseDate3;
    }

    // BEFORE RELEASE DATE
    else if (diff > 0) {

        dateCode = releaseDate1;

        // WEEK BEFORE RELEASE DATE
        if (diff <= numberOfDaysBeforeRelease) {
            dateCode = releaseDate2;
        }

    }

    // AFTER RELEASE DATE
    else if (diff < 0) {
        dateCode = releaseDate5;
    }

    currentDate = null;
    releaseDate = null;



    if (dateCode == "1") {
        // DATE
        d1.setAttribute("src", "images/resolve_date.png");
    } else if (dateCode == "2") {
        // TOMORROW
        d1.setAttribute("src", "images/resolve_today.png");
    } else if (dateCode == "3") {
        //NOW
        d1.setAttribute("src", "images/resolve_now.png");
    }

}


// ================== //
// === [H] Exits  === //
// ================== //

function onExitHandler(exit) {

    switch (exit) {
        case "main":
            console.log('[3] MAIN EXIT');
            window.open("https://www.google.co.uk", "_blank");
            break;
        case "cta":
            console.log('[3] CTA EXIT');
            window.open("https://www.google.co.uk", "_blank");
            break;
    }
}

// -- [B] Main OnLoad Handler -- //

window.addEventListener('load', onInit);
