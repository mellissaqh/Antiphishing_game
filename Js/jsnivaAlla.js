window.onload = function(){
//Vi valde till slut att slå ihop alla nivåer och ha en gemensam Js fil till de
//Vi har försökt att samla alla varibaler högst upp i dokumentet, 
//Vi försökte tidigare i projektet med att skapa klasser och samla elementen i det, men vi fick det aldrig att fungera
//Så vi har gjort gamla hederliga 123 variabler och upprepa funktioner
var clickableText3 = document.getElementById("clickableText3");
var clickableText6 = document.getElementById("clickableText6");
var clickableText11 = document.getElementById("clickableText11");
var clickableText14 = document.getElementById("clickableText14");
var clickableText24 = document.getElementById("clickableText24");

var resultatButton1 = document.getElementById("resultatButton1");
var resultatButton2 = document.getElementById("resultatButton2");
var resultatButton3 = document.getElementById("resultatButton3");
var resultatButton4 = document.getElementById("resultatButton4");
var resultatButton5 = document.getElementById("resultatButton5");
var resultatButton6 = document.getElementById("resultatButton6");
var resultatElement1 = document.getElementById("resultat1");
var resultatElement2 = document.getElementById("resultat2");
var resultatElement3 = document.getElementById("resultat3");
var resultatElement4 = document.getElementById("resultat4");
var resultatElement5 = document.getElementById("resultat5");
var resultatElement6 = document.getElementById("resultat6");
var resultatRuta1 = document.getElementById("resultatRuta1");
var resultatRuta2 = document.getElementById("resultatRuta2");
var resultatRuta3 = document.getElementById("resultatRuta3");
var resultatRuta4 = document.getElementById("resultatRuta4");
var resultatRuta5 = document.getElementById("resultatRuta5");
var resultatRuta6 = document.getElementById("resultatRuta6");
var resultatRutaSumma = document.getElementById("resultatSumma"); 
var resultatRutaSummaText = document.getElementById("resultatSummaText");

var tillbakaButton = document.getElementById("tillbakaButton");  
var ResetGameButton = document.getElementById("ResetGameButton"); 
var niva2Btn = document.getElementById("niva2Btn");
var niva3Btn = document.getElementById("niva3Btn");
var slutprovBtn = document.getElementById("slutprovBtn");

var tipsTextMeny = document.getElementById("tipsTextMeny");
var tipsArray = ["Tips: Var noga med att se upp för hot eller märkliga anledningar till avgifter i mail.", "Tips: Ett mail skickat till kunder brukar oftast addressera mottagaren vid namn.", "Tips: Se upp för bifogade filer...", "Tips: Se noga över grammatiken!"];
var nuvarandeIndex = 0;

var tipsRuta1 = document.getElementById("tipsRuta1");
var tipsRuta2 = document.getElementById("tipsRuta2");
var tipsRuta3 = document.getElementById("tipsRuta3");
var emailBodyClass1 = document.querySelector('.emailBodyClass1');
var emailBodyClass2 = document.querySelector('.emailBodyClass2');
var headerWebbsida = document.getElementById("headerWebbsida");

var popupTutorial = document.getElementById("popupTutorial");
var tutorialBtn = document.getElementById("tutorialBtn");
var closeButton = document.getElementById("closeButton");

var antalRattaSvar1 = 0;
var antalRattaSvar2 = 0;
var antalRattaSvar3 = 0;
var antalRattaSvar4 = 0;
var antalRattaSvar5 = 0;
var antalRattaSvar6 = 0;
var antalFelSvar1 = 0;
var antalFelSvar2 = 0;
var antalFelSvar3 = 0;
var antalFelSvar4 = 0;
var antalFelSvar5 = 0;
var antalFelSvar6 = 0;

//Det här är koden för tips rutan som finns in menyn
function uppdateraTips(){
tipsTextMeny.textContent = tipsArray[nuvarandeIndex];
nuvarandeIndex = (nuvarandeIndex + 1) % tipsArray.length;
}

uppdateraTips();
setInterval(uppdateraTips, 7000);

//Här är koden för att visa tutorial texten
tutorialBtn.addEventListener("click", function() {
    popupTutorial.style.display = "block";
});

closeButton.addEventListener("click", function() {
    popupTutorial.style.display = "none";
});

//Här har vi hårdkodat de rätta svaren för varje email på varje nivå
var svar1 = {
    clickableText2: true, clickableText3: true, clickableText1: false
};
var svar2 = {
    clickableText5: false, clickableText6: true, clickableText4: true, clickableText7:true
};
var svar3 = {
    clickableText9: false, clickableText8: true, clickableText10: true, clickableText11: true 
};
var svar4 = {
    clickableText12: true, clickableText15: true, clickableText14: true, clickableText13: false
};
var svar5 = {
clickableText19: true, clickableText17: true, clickableText16: false, clickableText18: false
};
var svar6 = {
clickableText20: true, clickableText22: true, clickableText21:false, clickableText23:true, clickableText24: true
};


//Här är koden för att användarna kan markera vissa texter med klassen clickableTexts
function addClickEventListeners(clickableTexts) {
    document.querySelectorAll("." + clickableTexts).forEach(function(element) {
        element.addEventListener("click", function() {
            toggleHighlight(this);
        });
    });
}

addClickEventListeners("clickableTexts");

//När resultatknappen trycks så körs en for each loop för att visa hur många rätt och fel användaren fick
//Dessa funktioner är kopplade till knappen längst ner på varje email
resultatButton1.addEventListener("click", function () { 
for (var svarId in svar1) {
    var svarElement = document.getElementById(svarId);
    if(svarElement.classList.contains("highlighted")) {
        if(svar1[svarId]){
        antalRattaSvar1++;
        } else {
        antalFelSvar1++;
        }
    }
}
resultatElement1.textContent = "Du fick " + antalRattaSvar1 + " rätt av 2 möjliga och " + antalFelSvar1 + " fel av 1 möjliga.";
resultatRuta1.style.display = "block";
});

resultatButton2.addEventListener("click", function () {  
for (var svarId in svar2) {
    var svarElement = document.getElementById(svarId);
    if(svarElement.classList.contains("highlighted")) {
    if(svar2[svarId]){
        antalRattaSvar2++;
    } else {
        antalFelSvar2++;
    }
    }
}
resultatElement2.textContent = "Du fick " + antalRattaSvar2 + " rätt av 3 möjliga och " + antalFelSvar2 + " fel av 1 möjliga.";
resultatRuta2.style.display = "block";
});

resultatButton3.addEventListener("click", function () {  
for (var svarId in svar3) {
    var svarElement = document.getElementById(svarId);
    if(svarElement.classList.contains("highlighted")) {
        if(svar3[svarId]){
        antalRattaSvar3++;
        } else {
        antalFelSvar3++;
        }
    }
}
resultatElement3.textContent = "Du fick " + antalRattaSvar3 + " rätt av 3 möjliga och " + antalFelSvar3 + " fel av 1 möjliga.";
resultatRuta3.style.display = "block";
});

resultatButton4.addEventListener("click", function () {  
for (var svarId in svar4) {
    var svarElement = document.getElementById(svarId);
    if(svarElement.classList.contains("highlighted")) {
        if(svar4[svarId]){
        antalRattaSvar4++;
        } else {
        antalFelSvar4++;
        }
    }
}   
resultatElement4.textContent = "Du fick " + antalRattaSvar4 + " rätt av 3 möjliga och " + antalFelSvar4 + " fel av 1 möjliga.";
resultatRuta4.style.display = "block";
});

resultatButton5.addEventListener("click", function () { 
    for (var svarId in svar5) {
        var svarElement = document.getElementById(svarId);
        if(svarElement.classList.contains("highlighted")) {
            if(svar5[svarId]){
            antalRattaSvar5++;
            } else {
                antalFelSvar5++;
            }
        }
    }
    resultatElement5.textContent = "Du fick " + antalRattaSvar5 + " rätt av 2 möjliga och " + antalFelSvar5 + " fel av 2 möjliga.";
    resultatRuta5.style.display = "block";
});

resultatButton6.addEventListener("click", function () {  
    for (var svarId in svar6) {
        var svarElement = document.getElementById(svarId);
        if(svarElement.classList.contains("highlighted")) {
        if(svar6[svarId]){
            antalRattaSvar6++;
        } else {
            antalFelSvar6++;
        }
        }
    }
    resultatElement6.textContent = "Du fick " + antalRattaSvar6 + " rätt av 4 möjliga och " + antalFelSvar6 + " fel av 1 möjliga.";
    resultatRuta6.style.display = "block";
    });

//Den här funktionen kopplas till CSS för att highlighta det som går att highlighta när användaren trycker
function toggleHighlight(element) {
    element.classList.toggle("highlighted");
}

//Den här funktionen är till för att hoppa mellan email1, tipsruta och email2 i varje nivå
window.onclick = function(event) {
if (event.target == resultatRuta1) {  
resultatRuta1.style.display = "none";
emailBodyClass1.style.display = "none";
tipsRuta1.style.display = "block";
headerWebbsida.style.display = "none";
resultatButton1.style.display = "none";
tillbakaButton.style.display = "none";
}
else if(event.target == tipsRuta1){
    tipsRuta1.style.display = "none";
    emailBodyClass2.style.display = "block";
    headerWebbsida.style.display = "block";
    resultatButton2.style.display = "block";
    tillbakaButton.style.display = "block";
}
else if(event.target == resultatRuta2){
    resultatRutaSumma.style.display = "block";
    emailBodyClass2.style.display = "none";
    headerWebbsida.style.display = "none";
    resultatButton2.style.display = "none";
    resultatRuta2.style.display = "none";
    tillbakaButton.style.display = "none";
}
else if(event.target == resultatRuta3){
    resultatRuta3.style.display = "none";
    emailBodyClass1.style.display = "none";
    tipsRuta2.style.display = "block";
    headerWebbsida.style.display = "none";
    resultatButton3.style.display = "none";
    tillbakaButton.style.display = "none";
}
else if(event.target == tipsRuta2){
    tipsRuta2.style.display = "none";
    emailBodyClass2.style.display = "block";
    headerWebbsida.style.display = "block";
    resultatButton4.style.display = "block";
    tillbakaButton.style.display = "block";
}
else if(event.target == resultatRuta4){
    resultatRutaSumma.style.display = "block";
    emailBodyClass2.style.display = "none";
    headerWebbsida.style.display = "none";
    resultatButton4.style.display = "none";
    resultatRuta4.style.display = "none";
    tillbakaButton.style.display = "none";
}
else if(event.target == resultatRuta5){
    resultatRuta5.style.display = "none";
    emailBodyClass1.style.display = "none";
    tipsRuta3.style.display = "block";
    headerWebbsida.style.display = "none";
    resultatButton5.style.display = "none";
    tillbakaButton.style.display = "none";
}
else if(event.target == tipsRuta3){
    tipsRuta3.style.display = "none";
    emailBodyClass2.style.display = "block";
    headerWebbsida.style.display = "block";
    resultatButton6.style.display = "block";
    tillbakaButton.style.display = "block";
}
else if(event.target == resultatRuta6){
    resultatRutaSumma.style.display = "block";
    emailBodyClass2.style.display = "none";
    headerWebbsida.style.display = "none";
    resultatButton6.style.display = "none";
    resultatRuta6.style.display = "none";
    tillbakaButton.style.display = "none";
}
};

// På detta sätt går det att separera clickableTexterna från varandra, tidigare anropades samma listener två eller tre gånger
//Men vi löste det på detta sätt
addHoverListeners(clickableText3, "fakeURL1");
addHoverListeners(clickableText6, "fakeURL2");
addHoverListeners(clickableText11, "fakeURL3");
addHoverListeners(clickableText14, "fakeURL4");
addHoverListeners(clickableText24, "fakeURL5");


//Dessa funktioner är till för att användaren ska se fakeURL:s när de hovrar över vissa ställen i texten
//Det tog ett tag för oss att lista ut hur vi skulle göra detta då vi använder samma clickableText i flera html-filer
//Det gjorde att det krockade när en text behövde ha samma eventlistener två eller tre gånger
function addHoverListeners(element, fakeURL) {
    element.addEventListener("mouseover", function() {
        showFakeURL(fakeURL);
    });

    element.addEventListener("mouseout", function() {
        hideFakeURL(fakeURL);
    });
}

function showFakeURL(fakeURL) {
    var element = document.getElementById(fakeURL);
    if (element) {
        element.style.display = "block";
    }
}

function hideFakeURL(fakeURL) {
    var element = document.getElementById(fakeURL);
    if (element) {
        element.style.display = "none";
    }
}

//Den här funktionen anropas när användaren går vidare efter slut resultats rutan efter varje nivå, då kommer användaren till menyn
resultatRutaSumma.addEventListener("click", function() {
    window.location.href = "Forstasida.html";
});

//Den här funktionen visas när användaren är på slutet av varje nivå, den visar hur många rätt och fel användaren fick
//Den låser upp nästa nivå om användaren får alla rätt, om inte så kommer det upp en ruta som visar användaren hur många rätt som behövs för nästa nivå 
resultatRuta2.addEventListener("click", function() {
resultatRutaSumma.style.display = "block";
resultatRutaSummaText.textContent = "Du fick sammanlagt " + (antalRattaSvar1 + antalRattaSvar2) + " korrekta svar och " + (antalFelSvar1 + antalFelSvar2) + " inkorrekta svar i nivå 1.";
var totalKorrektaSvarNivå1 = antalRattaSvar1 + antalRattaSvar2;
var totalInkorrektaSvarNivå1 = antalFelSvar1 + antalFelSvar2;

if (totalKorrektaSvarNivå1 === 5 && totalInkorrektaSvarNivå1 === 0) {
    setCookie('level1Completed', 'true', 365);
    document.getElementById('popupCorrect1').style.display = "block";
}  else{
    document.getElementById('popupIncorrect1').style.display = "block";
 } 
 
});
resultatRuta4.addEventListener("click", function() {
 resultatRutaSumma.style.display = "block";
 resultatRutaSummaText.textContent = "Du fick sammanlagt " + (antalRattaSvar3 + antalRattaSvar4) + " korrekta svar och " + (antalFelSvar3 + antalFelSvar4) + " inkorrekta svar i nivå 2.";
 var totalKorrektaSvarNivå2 = antalRattaSvar3 + antalRattaSvar4;
 var totalInkorrektaSvarNivå2 = antalFelSvar3 + antalFelSvar3;

 if (totalKorrektaSvarNivå2 === 6 && totalInkorrektaSvarNivå2 === 0) {
    
    setCookie('level2Completed', 'true', 365);
    document.getElementById('popupCorrect2').style.display = "block";
} else{
    document.getElementById('popupIncorrect2').style.display = "block";
 } 
});

 resultatRuta6.addEventListener("click", function() {
     resultatRutaSumma.style.display = "block";
     resultatRutaSummaText.textContent = "Du fick sammanlagt " + (antalRattaSvar5 + antalRattaSvar6) + " korrekta svar och " + (antalFelSvar5 + antalFelSvar6) + " inkorrekta svar i nivå 2.";
     var totalKorrektaSvarNivå3 = antalRattaSvar5 + antalRattaSvar6;
     var totalInkorrektaSvarNivå3 = antalFelSvar5 + antalFelSvar6;

 if (totalKorrektaSvarNivå3 === 6 && totalInkorrektaSvarNivå3 === 0) {
    setCookie('level3Completed', 'true', 365);
    document.getElementById('popupCorrect3').style.display = "block";
} else{
    document.getElementById('popupIncorrect3').style.display = "block";
 } 
 });

 //Dessa kommande funktioner är till för att skapa en cookie för användaren
 //Så att användaren behöver klara av nivå1 innan den kan spela nivå2
 //Koden för att skapa cookies är skapad med hjälp av ChatGPT

 // Funktion för att sätta en cookie med ett specifikt namn, värde och hur länge den ska finnas
function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Funktion för att hämta värdet av en cookie baserat på dess namn
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

//De här if-satserna kollar om användaren har klarat av nivå1 för att visa nivå2 knappen osv.
if (getCookie('level1Completed') === 'true') {
   niva2Btn.style.display = "block";
} 
// Kontrollera användarens framsteg när de försöker gå till nivå 3
if (getCookie('level1Completed') === 'true' && getCookie('level2Completed') === 'true') {
    niva3Btn.style.display = "block";
} 
if (getCookie('level1Completed') === 'true' && getCookie('level2Completed') === 'true' && getCookie('level3Completed') === 'true')  {
    slutprovBtn.style.display = "block";
} 

//Det finns en knapp om användaren vill nollställa sin progress
ResetGameButton.addEventListener("click",function() {
    setCookie('level1Completed', '', -1); 
    setCookie('level2Completed', '', -1);
    setCookie('level3Completed', '', -1);
    niva2Btn.style.display = "none";
    niva3Btn.style.display = "none";
    slutprovBtn.style.display = "none";
});

};