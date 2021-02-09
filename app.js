// GETTING ALL VARRIABLES

var link = window.location.href;
var title = document.querySelector('#main .title');
var index = 0;
var next = document.getElementById('next-btn');
var content = document.querySelector('.content');
var txt = document.querySelector('.txt');

var form, box, popupCloseBtn, popupBtn, popupInput, proposeBtn;

form = document.querySelector('#popup-form');
box = document.querySelector('.popup-box');
popupInput = document.querySelector('.popup-input');
popupCloseBtn = document.querySelector('.popup-close');
popupBtn = document.querySelector('.popup-btn');
proposeBtn = document.querySelector('#propose-btn');

// VERIFYING THE LINK
if (link.indexOf('#') != -1 && link.indexOf('#') != (link.length - 1)) {
    // HIDING HADER AND SHOWING THE MAIN SECTION
    document.getElementById('header').classList.add('hide');
    document.getElementById('footer').classList.add('hide');
    document.getElementById('main').classList.remove('hide');
    // GETTING THE TITLE FROM LINK
    link = link.slice(link.indexOf('#') + 1);
    title.innerHTML = link;
}

// LINES THAT ARE STORING IN A ARRAY
var lines = [
    "তুমি কি গুগল সার্চ ইঞ্জিন? কারণ আমি জীবনে যা অনুসন্ধান করেছি তা পেয়েছি",
    "আমার হাসির কারণ খুঁজে পেয়েছি, যেদিন তোমাকে পেয়েছি। তুমি কি আমাকে তোমার হাসির কারণ হতে দেবে?",
    "তোমার মধ্যে আমার জীবন পুরো হয়ে যায়, তোমার সাথে আমার দিনগুলি উজ্জ্বল হয়। তোমার হাতে আমি শুয়ে থাকতে চাই, এই রাতে এবং আমার সারা জীবন!",
    "তুমি বিশ্বের এবং এটি দেওয়া ভাল জিনিস প্রাপ্য। আমি যদি তোমার জন্য এই পৃথিবীটি খুঁজে পেতে ব্যর্থ হই তবে আমি তোমাকে আমার প্রতিশ্রুতি দেবো!",
    "তোমার মুখে যখন বৃষ্টি বইছে এবং গোটা বিশ্ব আপনার ক্ষেত্রে রয়েছে, আমি তোমাকে আমার ভালবাসা অনুভব করার জন্য আপনাকে একটি উষ্ণ আলিঙ্গনের প্রস্তাব দিতে পারি!",
    "আমি আজ থেকে তোমার সাথে বুড়ো হওয়ার জন্য আমার হাতটি শক্ত করে ধরো!",
    "I Love You Damn"
]

// MAKING FUNCTIONS

function load(){
    //MAKING BASIC ANIMATION
    content.classList.add('content-anim');
    txt.innerHTML = lines[index];
    setTimeout( () => {
        content.classList.remove('content-anim');
    }, 500 )

    // WHILE INDEX REACH THE MAXIMUM NUMBER OF LINE
    if(index == (lines.length - 1)){
        // STOP INCREASING INDEX
        index = (lines.length - 1);
    }else{
        // OTHERWISE INCREASING IT
        index++;
    }
}

function generate() {
    // VALIDATING BUTTON FOR COPY LINK
    if (popupBtn.innerHTML == "Copy") {
        // SELECTING LINK
        popupInput.select();
        popupInput.setSelectionRange(0, 99999);
        // COPYING LINK
        document.execCommand('copy');

        // RESTORING ITEMS
        popupBtn.innerHTML = "Submit";
        popupClose()
        // ALEART FOR COPYING
        alert('Link Is Copied \n \nNow Send This To Your Valentine')
    } else {
        // VALIDATING INPUT VALUE
        if(popupInput.value.length != 0){
            // CONCATING THE LINK WITH NAME
            var pageLink = window.location.href + "#" + popupInput.value;
            popupInput.value = pageLink;
            // CHANGING BUTTON TEXT FOR COPY
            popupBtn.innerHTML = "Copy";
        }else{
            // ALEART FOR INVALID INPUT
            alert('Please Insert A Valid Name')
        }
    }
}

function popupOpen() {
    // MAKING POPUP VISIBLE WITH BASIC ANIMATION
    form.classList.remove('hide');
    setTimeout(() => {
        box.classList.add('box-anim');
    }, 10);
    setTimeout(() => {
        box.classList.remove('box-anim');
    }, 500);
}

function popupClose() {
    form.classList.add('hide');
    popupInput.value = "";
}

// CALLING THIS FUNCTION

next.addEventListener('click', load);
proposeBtn.addEventListener('click', popupOpen);
popupCloseBtn.addEventListener('click', popupClose);
popupBtn.addEventListener('click', generate);