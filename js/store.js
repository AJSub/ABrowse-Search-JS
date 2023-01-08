let appcategories = document.querySelector(".app-categories"),
    games = document.querySelector(".games"),
    browser = document.querySelector(".browser"),
    social = document.querySelector(".social"),
    educational = document.querySelector(".educational"),
    entertainment = document.querySelector(".entertainment"),
    unknown = document.querySelector(".unknown"),
    appscategoryname = document.querySelector(".apps-category-name"),
    storewarningfont = document.querySelector(".store-warning-font"),
    tagall = document.querySelector(".tag-all"),
    g = document.querySelector(".g"),
    b = document.querySelector(".b"),
    s = document.querySelector(".s"),
    d = document.querySelector(".d"),
    e = document.querySelector(".e"),
    u = document.querySelector(".u");

appcategories.style.cursor = "pointer";
    games.classList.replace("notshown", "shown")
    browser.classList.replace("notshown", "shown")
    social.classList.replace("notshown", "shown")
    educational.classList.replace("notshown", "shown")
    entertainment.classList.replace("notshown", "shown")
    unknown.classList.replace("notshown", "shown")
    appscategoryname.textContent = "Apps";
    storewarningfont.textContent = "No available apps in any Categories";
    g.classList.add("active")
    b.classList.add("active")
    s.classList.add("active")
    d.classList.add("active")
    e.classList.add("active")
    u.classList.add("active")
    tagall.classList.add("active")

tagall.addEventListener('click', () =>{
    games.classList.replace("notshown", "shown")
    browser.classList.replace("notshown", "shown")
    social.classList.replace("notshown", "shown")
    educational.classList.replace("notshown", "shown")
    entertainment.classList.replace("notshown", "shown")
    unknown.classList.replace("notshown", "shown")
    appscategoryname.textContent = "All Apps";
    storewarningfont.textContent = "No available apps in any Categories";
    g.classList.add("active")
    b.classList.add("active")
    s.classList.add("active")
    d.classList.add("active")
    e.classList.add("active")
    u.classList.add("active")
    tagall.classList.add("active")
});
g.addEventListener('click', () =>{
    games.classList.replace("notshown", "shown")
    browser.classList.replace("shown", "notshown")
    social.classList.replace("shown", "notshown")
    educational.classList.replace("shown", "notshown")
    entertainment.classList.replace("shown", "notshown")
    unknown.classList.replace("shown", "notshown")
    appscategoryname.textContent = "Games Apps";
    storewarningfont.textContent = "No available apps";
    g.classList.add("active")
    b.classList.remove("active")
    s.classList.remove("active")
    d.classList.remove("active")
    e.classList.remove("active")
    u.classList.remove("active")
    tagall.classList.remove("active")
});
b.addEventListener('click', () =>{
    games.classList.replace("shown", "notshown")
    browser.classList.replace("notshown", "shown")
    social.classList.replace("shown", "notshown")
    educational.classList.replace("shown", "notshown")
    entertainment.classList.replace("shown", "notshown")
    unknown.classList.replace("shown", "notshown")
    appscategoryname.textContent = "Browser Apps";
    storewarningfont.textContent = "No available apps";
    g.classList.remove("active")
    b.classList.add("active")
    s.classList.remove("active")
    d.classList.remove("active")
    e.classList.remove("active")
    u.classList.remove("active")
    tagall.classList.remove("active")
});
s.addEventListener('click', () =>{
    games.classList.replace("shown", "notshown")
    browser.classList.replace("shown", "notshown")
    social.classList.replace("notshown", "shown")
    educational.classList.replace("shown", "notshown")
    entertainment.classList.replace("shown", "notshown")
    unknown.classList.replace("shown", "notshown")
    appscategoryname.textContent = "Social Media Apps";
    storewarningfont.textContent = "No available apps";
    g.classList.remove("active")
    b.classList.remove("active")
    s.classList.add("active")
    d.classList.remove("active")
    e.classList.remove("active")
    u.classList.remove("active")
    tagall.classList.remove("active")
});
d.addEventListener('click', () =>{
    games.classList.replace("shown", "notshown")
    browser.classList.replace("shown", "notshown")
    social.classList.replace("shown", "notshown")
    educational.classList.replace("notshown", "shown")
    entertainment.classList.replace("shown", "notshown")
    unknown.classList.replace("shown", "notshown")
    appscategoryname.textContent = "Educational Apps";
    storewarningfont.textContent = "No available apps";
    g.classList.remove("active")
    b.classList.remove("active")
    s.classList.remove("active")
    d.classList.add("active")
    e.classList.remove("active")
    u.classList.remove("active")
    tagall.classList.remove("active")
});
e.addEventListener('click', () =>{
    games.classList.replace("shown", "notshown")
    browser.classList.replace("shown", "notshown")
    social.classList.replace("shown", "notshown")
    educational.classList.replace("shown", "notshown")
    entertainment.classList.replace("notshown", "shown")
    unknown.classList.replace("shown", "notshown")
    appscategoryname.textContent = "Entertainment Apps";
    storewarningfont.textContent = "No available apps";
    g.classList.remove("active")
    b.classList.remove("active")
    s.classList.remove("active")
    d.classList.remove("active")
    e.classList.add("active")
    u.classList.remove("active")
    tagall.classList.remove("active")
});
u.addEventListener('click', () =>{
    games.classList.replace("shown", "notshown")
    browser.classList.replace("shown", "notshown")
    social.classList.replace("shown", "notshown")
    educational.classList.replace("shown", "notshown")
    entertainment.classList.replace("shown", "notshown")
    unknown.classList.replace("notshown", "shown")
    appscategoryname.textContent = "Unknown Apps";
    storewarningfont.textContent = "No available apps";
    g.classList.remove("active")
    b.classList.remove("active")
    s.classList.remove("active")
    d.classList.remove("active")
    e.classList.remove("active")
    u.classList.add("active")
    tagall.classList.remove("active")
});

//Here some available apps all Here all the available Apps
//No available apps all No available apps in any Categories

//tagall.addEventListener('mouseover', () =>{
    //g.classList.add("active")
    //b.classList.add("active")
    //s.classList.add("active")
    //d.classList.add("active")
    //e.classList.add("active")
    //u.classList.add("active")
    //tagall.classList.add("active")
    //appscategoryname.textContent = "All Apps";
    //storewarningfont.textContent = "Click to show all available Apps";
//});
//g.addEventListener('mouseover', () =>{
    //g.classList.add("active")
    //b.classList.remove("active")
    //s.classList.remove("active")
    //d.classList.remove("active")
    //e.classList.remove("active")
    //u.classList.remove("active")
    //tagall.classList.remove("active")
    //appscategoryname.textContent = "Games Apps";
    //storewarningfont.textContent = "No available apps";
//});
//b.addEventListener('mouseover', () =>{
    //g.classList.remove("active")
    //b.classList.add("active")
    //s.classList.remove("active")
    //d.classList.remove("active")
    //e.classList.remove("active")
    //u.classList.remove("active")
    //tagall.classList.remove("active")
    //appscategoryname.textContent = "Browser Apps";
    //storewarningfont.textContent = "Click to show available Apps";
//});
//s.addEventListener('mouseover', () =>{
    //g.classList.remove("active")
    //b.classList.remove("active")
    //s.classList.add("active")
    //d.classList.remove("active")
    //e.classList.remove("active")
    //u.classList.remove("active")
    //tagall.classList.remove("active")
    //appscategoryname.textContent = "Social Media Apps";
    //storewarningfont.textContent = "No available apps";
//});
//d.addEventListener('mouseover', () =>{
    //g.classList.remove("active")
    //b.classList.remove("active")
    //s.classList.remove("active")
    //d.classList.add("active")
    //e.classList.remove("active")
    //u.classList.remove("active")
    //tagall.classList.remove("active")
    //appscategoryname.textContent = "Educational Apps";
    //storewarningfont.textContent = "No available apps";
//});
//e.addEventListener('mouseover', () =>{
    //g.classList.remove("active")
    //b.classList.remove("active")
    //s.classList.remove("active")
    //d.classList.remove("active")
    //e.classList.add("active")
    //u.classList.remove("active")
    //tagall.classList.remove("active")
    //appscategoryname.textContent = "Entertainment Apps";
    //storewarningfont.textContent = "No available apps";
//});
//u.addEventListener('mouseover', () =>{
    //g.classList.remove("active")
    //b.classList.remove("active")
    //s.classList.remove("active")
    //d.classList.remove("active")
    //e.classList.remove("active")
    //u.classList.add("active")
    //tagall.classList.remove("active")
    //appscategoryname.textContent = "Unknown Apps";
    //storewarningfont.textContent = "Click to show available Apps";
//});