let entersitebtn = document.querySelector(".entersite-btn"),abrowseenterpage = document.querySelector(".abrowse-enter-page"),abrowseloginpage = document.querySelector('.abrowse-login-page'),abrowsesearchmain = document.querySelector(".abrowse-search-main"),/* Enter Page */ nav = document.querySelector("nav"),titleTag = document.querySelector("title"),
searchboxbing = document.querySelector(".search-box-bing"),searchboxgoogle = document.querySelector(".search-box-google"),searchgoogle = document.querySelector(".searchgoogle"),searchbing = document.querySelector(".searchbing"),abrowsesearhenginereader = document.querySelector(".abrowse-searh-engine-reader"),abrowsesearhenginereader2 = document.querySelector(".abrowse-searh-engine-reader-"),defG = document.querySelector(".def-G"),defB = document.querySelector(".def-B"),stopdiv = document.querySelector(".stopdiv"),abrowseshortcutb = document.querySelector(".abrowse-shortcut-b"),abrowseshortcutg = document.querySelector(".abrowse-shortcut-g"),// Search Engine //
translateapps = document.querySelector(".translate-apps"),notesapps = document.querySelector(".notes-apps"),abrowsequizentryapps = document.querySelector(".abrowsequizentry-apps"),textapps = document.querySelector(".text-apps"),storeapps = document.querySelector(".store-apps")// ABrowse Apps //
batterylevel = document.querySelector(".battery-level"),batterystatus = document.querySelector(".battery-status");// Battery Reader //
var accountlocal = localStorage.getItem("accounts"), emptyaccount = ''; const bodyTag = document.querySelector('body'); // variables

    setTimeout(() =>{if(navigator.onLine){} else{bodyTag.innerHTML = '<center><br /><br /><br /><br /><div class="imgp"><img src="reserved.png" alt="png"><font>Browse</font><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg></div><br />&nbsp;<font><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M216 288h-48c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16zM88 384H40c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm256-192h-48c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm128-96h-48c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16zM600 0h-48c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z"/></svg> You Are Currently Oflline</font><br /><br /><ul><li>Check your internet cables, modem, and routers</li><li>Reconnect to your wireless network</li></ul><br /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"/></svg><font>Connect to the internet</font><br /><br /><br /><br /></center>'}}, 1);
    const userdata = document.querySelector('.userdata'); userdata.classList.add('unshowtag');
    titleTag.innerHTML = "Welcome to ABrowse Search",abrowsesearchmain.classList.add("unshowtag"),abrowseloginpage.classList.add("unshowtag"),nav.classList.add("unshowtag"),searchboxgoogle.classList.remove("unshowtag"),searchboxbing.classList.add("unshowtag"),
    searchbing.classList.remove("unshowtag"),searchgoogle.classList.add("unshowtag"),defG.innerHTML = '<font class="google-sign-shorcut">g</font>oogle',abrowsesearhenginereader.innerHTML = '<font class="google-sign-shorcut">g</font>oogle',abrowsesearhenginereader2.innerHTML = '<font class="google-sign-shorcut">g</font>oogle',abrowseshortcutg.classList.add("active"),abrowseshortcutb.classList.remove("active"),stopdiv.classList.add("unshowtag");
    entersitebtn.addEventListener('click', () =>{titleTag.innerHTML = 'ABrowse Search | Login';abrowseenterpage.innerHTML = '';nav.classList.add("unshowtag");abrowseloginpage.classList.replace("unshowtag", "showtag"); userdata.classList.remove('unshowtag');
    if (accountlocal == "" || accountlocal == null){titleTag.innerHTML = 'ABrowse Search | Login';abrowseenterpage.innerHTML = '';nav.classList.add("unshowtag");abrowseloginpage.classList.replace("unshowtag", "showtag")}
    else{abrowseenterpage.innerHTML=""; titleTag.innerHTML = 'ABrowse Search | ' + accountlocal;abrowseenterpage.innerHTML = '';abrowseloginpage.classList.replace("showtag", "unshowtag");nav.classList.remove("unshowtag");abrowseloginpage.classList.replace("showtag", "unshowtag");abrowsesearchmain.classList.replace("unshowtag", "showtag");}
    loginpageusername.innerHTML = accountlocal; if(accountlocal =='' || accountlocal == null){ loginpageusername.innerHTML = 'User'; let userEmpty = 'User (Empty)';}else if(accountlocal == 'Arvi YT'){userprofilepic.innerHTML = '<img src="https://yt3.ggpht.com/ytc/AMLnZu-XiUO2eTDCnVeY1yswNLcr_IH16GcFRBW1-zUG9Q=s88-c-k-c0x00ffffff-no-rj" alt="ArviYT" class="user-profile">';}else if(accountlocal == 'ABrowse'){userprofilepic.innerHTML = '<div style="display: none;"></div>';}username.innerHTML = "Welcome " + accountlocal + " in ABrowse"; if(accountlocal == 'ABrowse'){username.innerHTML = "Welcome " + '<div style="display: none;"></div>' + " in ABrowse";};setTimeout(() => {username.innerHTML = accountlocal + '<i class="fas fa-user"></i>';
    
    // accounts
    
        //profile
        // alt="name" class="user-profile"
        // <i class="fas user-icon-fa-login fa-user"></i>
    
        // else if(accountlocal == 'Name'){
        //     userprofilepic.innerHTML = 'Profile pic';
        // }
    
    if(accountlocal =='' || accountlocal == null){username.innerHTML = 'User' + ' <i class="fas fa-user"></i>';}else if(accountlocal =='Arvi YT'){username.innerHTML = '<img src="https://yt3.ggpht.com/ytc/AMLnZu-XiUO2eTDCnVeY1yswNLcr_IH16GcFRBW1-zUG9Q=s88-c-k-c0x00ffffff-no-rj" alt="ArviYT" class="user-profile"><br />'+'Arvi YT '+'<a href="https://www.youtube.com/channel/UCSXFcXrNWJ-jSD1fqF2lAlg" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>'+'<br /><div class="current-tag">owner</div>';}else if(accountlocal =='ABrowse'){username.innerHTML = '<div style="display: none;"></div>';titleTag.innerHTML = 'ABrowse Search';}
    
    
    // PRO ACC
    
    
            // else if(accountlocal == 'Name'){
            //     username.innerHTML = 'Profile pic<br />'+'Name'+'Social Media Profile'+'with customization';
            // } 100
    
    // NORMAL ACC
    
    
            // else if(accountlocal == 'Name'){
            //     username.innerHTML = 'Profile pic<br />'+'Name';
            // } 50
    
            // Profile
            // alt="name" class="user-profile"
            // <i class="fas user-icon-fa-login fa-user"></i>
    
    else if(accountlocal == "trialAC" || accountlocal == "trial"){username.innerHTML = '<img src="./abrowseprofilesdeveloper/TrialProfile.png" alt="ArviYT" class="user-profile"><br />'+'Trial'+'<br /><div class="current-tag">7 days</div>';setTimeout(() => {username.innerHTML = ''; localStorage.setItem("accounts", emptyaccount)}, 604800000);}
    }, 1)});
    function logoutfunc() {let logoutconfirm = confirm("Are you sure you want to logout?");
    if (logoutconfirm === true){localStorage.setItem("accounts", emptyaccount),window.location.reload("/")}else{}}; function removelocalstorage(){localStorage.removeItem("accounts");}
    function switchbing() {searchboxbing.classList.remove("unshowtag");searchboxgoogle.classList.add("unshowtag");abrowsesearhenginereader.innerHTML = '<i class="fab fa-microsoft"></i> Bing';abrowsesearhenginereader2.innerHTML = '<i class="fab fa-microsoft"></i> Bing';searchbing.classList.add("unshowtag");defB.innerHTML = 'Google';defG.innerHTML = '<i class="fab fa-microsoft"></i> Bing';abrowseshortcutg.classList.remove("active");abrowseshortcutb.classList.add("active");searchgoogle.classList.remove("unshowtag")
    };function switchgoogle() {searchboxbing.classList.add("unshowtag");searchboxgoogle.classList.remove("unshowtag");abrowsesearhenginereader.innerHTML = '<font class="google-sign-shorcut">g</font>oogle';abrowsesearhenginereader2.innerHTML = '<font class="google-sign-shorcut">g</font>oogle';searchbing.classList.remove("unshowtag");defB.innerHTML = 'Bing';defG.innerHTML = '<font class="google-sign-shorcut">g</font>oogle';abrowseshortcutg.classList.add("active");abrowseshortcutb.classList.remove("active");searchgoogle.classList.add("unshowtag")};
    const recognition = new webkitSpeechRecognition();const recognitionb = new webkitSpeechRecognition();let speechToText = document.querySelector(".speechToText"),startrecording = document.querySelector(".startrecording"),fa = document.querySelector(".fa"), famicrophone = document.querySelector(".fa-microphone"),stoprecording = document.querySelector(".stoprecording");
    function searchrecord() {recognition.lang = "en-PH"; recognition.onresult = function(event){document.getElementById('speechToText').value = event.results[0][0].transcript;}
    stopdiv.style.display = 'inline-block'; recognition.start(); console.log('Recording'); famicrophone.classList.remove("unshowtag")
    stoprecording.addEventListener('click', () =>{ recognition.stop(); stoprecording.textContent = "Stopping"; setTimeout(() => {stoprecording.innerHTML = '<i class="fas fa-check"></i> Done'; }, 2000); setTimeout(() => {stoprecording.textContent = "Stop Recording"; stopdiv.style.display = 'none';}, 3000);})}
    function searchrecordb() {recognitionb.lang = "en-PH"; recognitionb.onresult = function(event){document.getElementById('speechToTextb').value = event.results[0][0].transcript;}
    stopdiv.style.display = 'inline-block'; recognitionb.start(); console.log('Recording'); famicrophone.classList.remove("unshowtag")
    stoprecording.addEventListener('click', () =>{recognitionb.stop();stoprecording.textContent = "Stopping"; setTimeout(() => {stoprecording.innerHTML = '<i class="fas fa-check"></i> Done';}, 2000); setTimeout(() => {stoprecording.textContent = "Stop Recording"; stopdiv.style.display = 'none';}, 3000);})}; 
    const ATranslateApp = document.querySelector('.ATranslateApp'); const ANotesApp = document.querySelector('.ANotesApp');
    const AQuizApp = document.querySelector('.AQuizApp'); const ATextApp = document.querySelector('.ATextApp'); const AStoreApp = document.querySelector('.AStoreApp'); ATranslateApp.style.display = 'none'; ANotesApp.style.display = 'none'; AQuizApp.style.display = 'none'; ATextApp.style.display = 'none'; AStoreApp.style.display = 'none';
    ATranslateApp.style.width = '99%'; ANotesApp.style.width = '99%'; AQuizApp.style.width = '99%'; ATextApp.style.width = '99%'; AStoreApp.style.width = '99%';
    function translateappsfunc() {ATranslateApp.style.display = ''; ANotesApp.style.display = 'none'; AQuizApp.style.display = 'none'; ATextApp.style.display = 'none'; AStoreApp.style.display = 'none';
    ATranslateApp.style.width = '99%'; ANotesApp.style.width = '99%'; AQuizApp.style.width = '99%'; ATextApp.style.width = '99%'; AStoreApp.style.width = '99%';translateapps.classList.add('active');notesapps.classList.remove('active');abrowsequizentryapps.classList.remove('active');textapps.classList.remove('active');storeapps.classList.remove('active')}
    function notesappsfunc() {ATranslateApp.style.display = 'none'; ANotesApp.style.display = ''; AQuizApp.style.display = 'none'; ATextApp.style.display = 'none'; AStoreApp.style.display = 'none';
    ATranslateApp.style.width = '99%'; ANotesApp.style.width = '99%'; AQuizApp.style.width = '99%'; ATextApp.style.width = '99%'; AStoreApp.style.width = '99%';translateapps.classList.remove('active');notesapps.classList.add('active');abrowsequizentryapps.classList.remove('active');textapps.classList.remove('active');storeapps.classList.remove('active')}
    function abrowsequizentryappsfunc() {ATranslateApp.style.display = 'none'; ANotesApp.style.display = 'none'; AQuizApp.style.display = ''; ATextApp.style.display = 'none'; AStoreApp.style.display = 'none';
    ATranslateApp.style.width = '99%'; ANotesApp.style.width = '99%'; AQuizApp.style.width = '99%'; ATextApp.style.width = '99%'; AStoreApp.style.width = '99%';translateapps.classList.remove('active');notesapps.classList.remove('active');abrowsequizentryapps.classList.add('active');textapps.classList.remove('active');storeapps.classList.remove('active')}
    function textappsfunc() {ATranslateApp.style.display = 'none'; ANotesApp.style.display = 'none'; AQuizApp.style.display = 'none'; ATextApp.style.display = ''; AStoreApp.style.display = 'none';
    ATranslateApp.style.width = '99%'; ANotesApp.style.width = '99%'; AQuizApp.style.width = '99%'; ATextApp.style.width = '99%'; AStoreApp.style.width = '99%';translateapps.classList.remove('active');notesapps.classList.remove('active');abrowsequizentryapps.classList.remove('active');textapps.classList.add('active');storeapps.classList.remove('active')}
    function storeappsfunc() {ATranslateApp.style.display = 'none'; ANotesApp.style.display = 'none'; AQuizApp.style.display = 'none'; ATextApp.style.display = 'none'; AStoreApp.style.display = '';
    ATranslateApp.style.width = '99%'; ANotesApp.style.width = '99%'; AQuizApp.style.width = '99%'; ATextApp.style.width = '99%'; AStoreApp.style.width = '99%';translateapps.classList.remove('active');notesapps.classList.remove('active');abrowsequizentryapps.classList.remove('active');textapps.classList.remove('active');storeapps.classList.add('active')}
    function searchappsfunc() {ATranslateApp.style.display = 'none'; ANotesApp.style.display = 'none'; AQuizApp.style.display = 'none'; ATextApp.style.display = 'none'; AStoreApp.style.display = 'none';
    ATranslateApp.style.width = '99%'; ANotesApp.style.width = '99%'; AQuizApp.style.width = '99%'; ATextApp.style.width = '99%'; AStoreApp.style.width = '99%';translateapps.classList.remove('active');notesapps.classList.remove('active');abrowsequizentryapps.classList.remove('active');textapps.classList.remove('active');storeapps.classList.remove('active')}
    const bdefbattery = document.querySelector('.b-def-battery'); const batterywarning = document.querySelector('.battery-warning');setInterval(() => {navigator.getBattery().then(function(battery){
    const level = battery.level; const status = level * 100+"%"; batterylevel.style.width = status; batterylevel.innerHTML = status;
    if (status.value <= '20%') {batterylevel.style.backgroundColor = 'red'; bdefbattery.style.backgroundColor = '#ffabab';}else if (status.value >= '20%') {batterylevel.style.backgroundColor = '#007bff'; bdefbattery.style.backgroundColor = '#abd4ff';}})}, 1000);
    const usernamei = document.querySelector(".username-i");const username = document.querySelector(".username");const submitInfo = document.querySelector('.submit-info');let jsloaderst = document.querySelector('.js-loader-st');const loginpageusername = document.querySelector('.login-page-username');const userprofilepic = document.querySelector('.userprofile-pic');
    function submitinfo(){jsloaderst.classList.replace('fa-paper-plane', 'fa-circle-notch');localStorage.setItem("accounts", usernamei.value)
    setTimeout(() => {nav.classList.remove("unshowtag");abrowseloginpage.classList.replace("showtag", "unshowtag");abrowsesearchmain.classList.replace("unshowtag", "showtag");titleTag.innerHTML = 'ABrowse Search | ' + usernamei.value;if(usernamei.value =='' ||usernamei.value == null){titleTag.innerHTML = 'ABrowse Search | ' + 'User';};userdata.classList.remove('unshowtag');
    jsloaderst.classList.replace('fa-circle-notch', 'fa-paper-plane')}, 1000);loginpageusername.innerHTML = usernamei.value; if(usernamei.value =='' || usernamei.value == null){loginpageusername.innerHTML = 'Welcome'; }else if(usernamei.value == 'Arvi YT'){userprofilepic.innerHTML = '<img src="https://yt3.ggpht.com/ytc/AMLnZu-XiUO2eTDCnVeY1yswNLcr_IH16GcFRBW1-zUG9Q=s88-c-k-c0x00ffffff-no-rj" alt="ArviYT" class="user-profile">';}else if(usernamei.value == 'ABrowse'){userprofilepic.innerHTML = '<div style="display: none;"></div>';}username.innerHTML = "Welcome " + usernamei.value + " in ABrowse"; if(usernamei.value == 'ABrowse'){username.innerHTML = "Welcome " + '<div style="display: none;"></div>' + " in ABrowse";} setTimeout(() => {username.innerHTML = usernamei.value + '<i class="fas fa-user"></i>';
    
    // accounts
    
        //profile
        // alt="name" class="user-profile"
        // <i class="fas user-icon-fa-login fa-user"></i>
    
        // else if(usernamei.value == 'Name'){
        //     userprofilepic.innerHTML = 'Profile pic';
        // }
    
    if(usernamei.value =='' || usernamei.value == null){username.innerHTML = 'User' + ' <i class="fas fa-user"></i>';}else if(usernamei.value =='Arvi YT'){username.innerHTML = '<img src="https://yt3.ggpht.com/ytc/AMLnZu-XiUO2eTDCnVeY1yswNLcr_IH16GcFRBW1-zUG9Q=s88-c-k-c0x00ffffff-no-rj" alt="ArviYT" class="user-profile"><br />'+'Arvi YT '+'<a href="https://www.youtube.com/channel/UCSXFcXrNWJ-jSD1fqF2lAlg" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>'+'<br /><div class="current-tag">owner</div>';}else if(usernamei.value =='ABrowse'){username.innerHTML = '<div style="display: none;"></div>';titleTag.innerHTML = 'ABrowse Search';}
    
    // PRO ACC
    
    
            // else if(usernamei.value == 'Name'){
            //     username.innerHTML = 'Profile pic<br />'+'Name'+'Social Media Profile'+'with customization';
            // } 100
    
    // NORMAL ACC
    
    
            // else if(usernamei.value == 'Name'){
            //     username.innerHTML = 'Profile pic<br />'+'Name';
            // } 50
    
            // Profile
            // alt="name" class="user-profile"
            // <i class="fas user-icon-fa-login fa-user"></i>
    
            else if(usernamei.value == "trialAC" || usernamei.value == "trial"){username.innerHTML = '<img src="./abrowseprofilesdeveloper/TrialProfile.png" alt="ArviYT" class="user-profile"><br />'+'Trial'+'<br /><div class="current-tag">7 days</div>';setTimeout(() => {username.innerHTML = ''; localStorage.setItem("accounts", emptyaccount)}, 604800000);}
    
        }, 2000);
    };

    // function EMusic(source, volume, loop){ this.source = source;this.volume = volume;this.loop = loop;var son;this.son = son;this.finish = false;this.stop = function(){document.body.removeChild(this.son);};this.start = function(){if (this.finish) return false;this.son = document.createElement("embed");this.son.setAttribute("src", this.source);this.son.setAttribute("hidden", "true");this.son.setAttribute("volume", this.volume);this.son.setAttribute("autostart", "true");this.son.setAttribute("loop", this.loop);document.body.appendChild(this.son);};this.remove = function(){document.body.removeChild(this.son);this.finish = true;};this.init = function(volume, loop){this.finish = false;this.volume = volume;this.loop = loop;}}
const eventgrettingjs = document.querySelector(".event-gretting-js"), abrowsesettings = document.querySelector(".abrowse-settings");
function settings() {abrowsesettings.style.display = '';abrowsesearchmain.style.display = 'none';nav.style.display = 'none';}
function exitsettings() {abrowsesettings.style.display = 'none';abrowsesearchmain.style.display = '';nav.style.display = '';}
function resetaccount() {const confirmReset = confirm("Are you sure you want to reset ABrowse will delete all your data");
if(confirmReset == true){window.localStorage.clear();window.sessionStorage.clear();window.location.reload("/");}else{}}