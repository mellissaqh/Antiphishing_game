window.onload = function () {  
// //Nedanför kommer js för slutprovet
var currentEmailIndex = 0;

// Array med alla sex emails och deras innehåll
var emails = [
    {
    emailContent: `<article id="email1-body" class="emailBodyClass1">
    <header id="email1-header">
     <img id="loggaEmail1" src="postnord.png" alt="PostNord logga">
    </header>
    <div id="email1-content">
    <p id="boldtextEmail1">Ditt paket väntar på dig.<br>
     Ditt paket med <span id="clickableText1" class="clickableTexts">spårningsnummer: #SE-SAM32013<span class="highlight-trigger" data-target="clickableText1">+</span></span><br>
     Paket har försökt levereras till dig.
    </p>
    <section id="textEmail1"><span id="clickableText2" class="clickableTexts">Vi har därför infört en avgift på 5 kronor.<span class="highlight-trigger" data-target="clickableText2">+</span></span> Detta är för att täcka eventuella extrakostnader för oss.<br>
     <br>
     Om paketet inte kommer att tas emot inom 7 arbetsdagar kan ökade kostnader tillkomma. 
     Du kan hitta förfarandet och villkoren för paketets lagring i närmaste Postnord-kontor. För att betala denna avgift var vänligen betala här:
    </section>
    <span id="clickableText3" class="clickableTexts"><u>Klicka här för att betala</u><span class="highlight-trigger" data-target="clickableText3">+</span></span>
    <div id="fakeURL1">http://bit.do/scamhehe</div>
    </div>
   </article>`},
    {
     emailContent: `<article id="email2-body" class="emailBodyClass2">
     <header id="email2-header">
       <p>Ämne: Viktigt Meddelande: Uppdatering av ditt Netflix-konto</p>
       <img id="loggaEmail2" src="Netflix-Logo.png" alt="Netflix logga">
     </header>
      <div id="email2-content">
       <section id="textEmail2">
         <span id="clickableText4" class="clickableTexts">Hej ,<span class="highlight-trigger" data-target="clickableText4">+</span></span><br>
         Vi hoppas att detta meddelande når dig väl. <span id="clickableText5" class="clickableTexts">Vi vill informera dig om några viktiga förändringar <span class="highlight-trigger" data-target="clickableText5">+</span></span>som har genomförts på ditt Netflix-konto för att förbättra säkerheten och användarupplevelsen.<br>
         <br>
         För att fortsätta njuta av våra tjänster, vänligen klicka här för att verifiera och uppdatera dina kontouppgifter: 
         <span id="clickableText6" class="clickableTexts"><u>kontouppgifter</u><span class="highlight-trigger" data-target="clickableText6">+</span></span>
         <div id="fakeURL2">http://luradochbedragen.se</div>
         <br>
         <span id="clickableText7" class="clickableTexts">Du <b>måste</b> göra denna åtgärd för att säkerställa att ditt konto förblir aktivt och skyddat.<span class="highlight-trigger" data-target="clickableText7">+</span></span>
         Vi värdesätter din lojalitet som Netflix-kund och ber om ursäkt för eventuella olägenheter som detta kan orsaka.<br>
         <br>
         Tack för din förståelse och samarbete.
         <br>
         Vänliga hälsningar, Netflix Support Team
       </section>
      </div>
   </article>`
    }, {emailContent: `<article id="email3-body" class="emailBodyClass1">
    <header id="email3-header">
     <h1>Viaplay</h1>
     <p>Från: <span id="clickableText8" class="clickableTexts">viaplaysupport@gmail.com<span class="highlight-trigger" data-target="clickableText8">+</span></span><br>
      <br>
      Ämne: Viktigt Meddelande: Problem med Ditt Viaplay-Betalningskonto
     </p>
     <img id="loggaEmail3" src="Viaplay_logo.png" alt="Viaplay logga">
    </header>
    <div id="email3-content">
     <section id="textEmail3">Vi hoppas att detta meddelande når dig väl. Vi har nyligen mottagit en notifikation om att din <span id="clickableText9" class="clickableTexts">senaste betalning för Viaplay har nekats på grund av ogiltiga betalningsuppgifter<span class="highlight-trigger" data-target="clickableText9">+</span></span><br>
      <br>
      För att undvika avbrott i din Viaplay-tjänst och för att åtgärda detta problem<span id="clickableText10" class="clickableTexts">. b<span class="highlight-trigger" data-target="clickableText10">+</span></span>er vi dig vänligen verifiera och uppdatera dina betalningasuppgifter genom att klicka här:
      <span id="clickableText11" class="clickableTexts"><u>www.viablay.se</u><span class="highlight-trigger" data-target="clickableText11">+</span></span>
      <div id="fakeURL3">http://viablay.se/duförloraralladinapengar</div>
      <br>
      Din snabba åtgärd kommer att säkerställa att du kan fortsätta njuta av alla fördelar med ditt Viaplay-konto utan avbrott.
      <br>
      <br>
      Vänliga hälsningar, Viaplay Betalningssupport
     </section>
    </div>
   </article>`}, {emailContent: `<article id="email4-body" class="emailBodyClass2">
   <header id="email4-header">
       <p>Från: <span id="clickableText12" class="clickableTexts">anders.chef@icachef.com<span class="highlight-trigger" data-target="clickableText12">+</span></span><br>
       Ämne: Viktig Meddelande: Uppdatera dina uppgifter
       <img id="loggaEmail4" src="ICA_logo.svg.png" alt="ICA logga">
       </p>
   </header>
   <div id="email4-content">
    <section id="textEmail4">Hej kära kund, <br>
      <br>
      Vi har byggt om vårat<span id="clickableText13" class="clickableTexts"> system, detta <span class="highlight-trigger" data-target="clickableText13">+</span></span>innebär att alla kunder som vill fortsätta vara ICA-medlem måste uppdatera sina person- & bank -uppgifter för att fortsätta vara det. Vi ber så mycket om besväret och hoppas att ni uppdaterar era uppgifter.
      <br>
      För att uppdatera dina uppgifter följ länken till våran hemsida: <span id="clickableText14" class="clickableTexts">www.ica.se<span class="highlight-trigger" data-target="clickableText14">+</span></span>
      <div id="fakeURL4">http://defenitivtenscam.com</div>
      <br>
      <span id="clickableText15" class="clickableTexts">Vänliga hälsningar, Viaplay support<span class="highlight-trigger" data-target="clickableText15">+</span></span>
    </section>
   </div>
 </article>`}, {emailContent: `<article id="email5-body" class="emailBodyClass1">
 <header id="email5-header">
  <img id="loggaEmail5" src="1200px-Nordea.svg.png" alt="Nordea logga">
 </header>
 <div id="email5-content">
  <p id="boldtextEmail5"><span id="clickableText16" class="clickableTexts">Ny inloggning från en enhet vi inte känner igen!<span class="highlight-trigger" data-target="clickableText16">+</span></span><br>
  </p>
  <section id="textEmail5"> 
   Någon försöker logga in på ditt bankkonto digitalt från Motala, Sverige (IP-adress<br>217.210.32.202).
   <br>
   <br>
   Vi har tillfälligt blockerat transaktioner från ditt konto tills du verifierar din identitet. 
   <br>
   För att Nordea inte ska stänga av ditt konto behöver du verifiera din identitet genom att skriva ut och fylla blanketten vi har bifogat i detta mail.
   <br>
   <br>
   <span id="clickableText17" class="clickableTexts"><i>Om detta meddelande hamnar i din skräppost är det på grund av din internet leverantör. Var vänligen flytta detta mail till din inkorg.</i><span class="highlight-trigger" data-target="clickableText17">+</span></span>
   <br>
   <br>
  </section>
  <footer>
   <span id="clickableText18" class="clickableTexts">Nordea Bank Abp, filial i Sverige <br>
    Smålandsgatans 17, SE-105 71 Stockholm, Sweden<br>
    Organisationsnummer:516411<br>
    Nordea©2024<span class="highlight-trigger" data-target="clickableText18">+</span></span>
  </footer>
  <br>
  <div id="pdfText">
   <img id="loggaPDF" src="PDF_file_icon.svg.png" alt="PDF logga">
   <span id="clickableText19" class="clickableTexts"><u>bifogadfil.pdf</u><span class="highlight-trigger" data-target="clickableText19">+</span></span>
  </div>
 </div>
</article>`}, {emailContent: `<article id="email6-body" class="emailBodyClass2">
<header id="email6-header">
  From: <span id="clickableText20" class="clickableTexts">confirm@ppservice.com<span class="highlight-trigger" data-target="clickableText20">+</span></span>
</header>
<img id="loggaEmail6" src="Paypal.png" alt="Paypal logga">
<div id="email6-content">
  <h2>Uppdatering krävs!!</h2>
  <section id="textEmail6"> Det har nyligen varit aktiviteter i ditt PayPal konto som är ovanliga jämfört med dina vanliga aktiviteter. 
   Var god att logga in för att identifiera dig.
   <br>
   Det här är en del av våran säkerhets process och säkerställer att PayPal fortsätter att vara en säker väg att köpa online. Oftast är allt vi behöver bara lite mer information. Medans ditt konto är begränsat, kommer vissa tjänster inte vara tillgängliga för dig.
   <br>
   <b>Hur får jag bort min begränsning?</b>
   <br>
   <span id="clickableText21" class="clickableTexts">Du kan lösa detta problem genom att följa dessa enkla steg:<span class="highlight-trigger" data-target="clickableText21">+</span></span>
   <br>
   <ul>
     <li style="margin-bottom: 15px;"><u>Logga in här</u></li>
     <li>Skriv in den nödvändiga informationen. Ju snabbare du ger oss informationen desto snabbare kan vi lösa situationen.</li>     
   </ul>
   <br>
   <span id="clickableText22" class="clickableTexts"><i>Om detta mail har skickats som skräppost, så är det bara ett fel av vårat nya system.</i><span class="highlight-trigger" data-target="clickableText22">+</span></span>
   <br>
   <br>
   <span id="clickableText23" class="clickableTexts">Copyright © 1999-2024 PaypPal.<span class="highlight-trigger" data-target="clickableText23">+</span></span>
   <br>
   <br>
   Om du inte är säker på varför du fick detta e-postmeddelandet 
   <span id="clickableText24" class="clickableTexts"><u>klicka här</u><span class="highlight-trigger" data-target="clickableText24">+</span></span>
   <div id="fakeURL5">http://bit.ly/2U5cdSDg6</div>
  </section>
 <br>
</div>
</article>`}

]
var shuffledEmails = shuffleArray(emails);


//Här är en funktion för att hämta och slumpa ordningen på alla emails, denna funktion är skapad med hjälp av chatGPT
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Funktion för att få upp och visa ett email på slutprovssidan, här renderas och skapas mailet på nytt i div form.
function renderEmail(emailContent) {
    var emailContainer = document.createElement('div');
    emailContainer.classList.add('email');
    emailContainer.innerHTML = emailContent;
    document.getElementById('slutprov-container').appendChild(emailContainer);

    emailContainer.querySelectorAll('.highlight-trigger').forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            this.classList.toggle('highlighted');
        });
    });
}

// Funktion för att rendera en resultatruta med totalpoängen
function renderTotalPoints(totalPoints) {
    var totalPointsContainer = document.createElement('div');
    totalPointsContainer.id = 'total-points-container';
    totalPointsContainer.innerHTML = 'Total poäng: ' + totalPoints;
    document.getElementById('slutprov-container').appendChild(totalPointsContainer); 
}

   // Funktion för att gå till nästa mail med hjälp av knappen 
   function goToNextEmail() {
   
    document.getElementById('slutprov-container').innerHTML = '';
    currentEmailIndex++;

    // Om vi inte har visat alla mail ännu, rendera nästa mail
    if (currentEmailIndex < emails.length) {
        renderEmail(emails[currentEmailIndex].emailContent);
    } else {
        // Om vi har visat alla mail, beräkna och rendera totalpoängen
        var totalPoints = 0; 
        renderTotalPoints(totalPoints);
    }
}

renderEmail(shuffledEmails[currentEmailIndex].emailContent);

document.getElementById('nextMailBtn').addEventListener('click', goToNextEmail);

};