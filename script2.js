const boldBtn = document.querySelector("#bold-btn")
const underlineBtn = document.querySelector("#underline-btn")
const italicBtn = document.querySelector("#italic-btn")
const colorBtn = document.querySelector("#color-btn")
const newBtn = document.querySelector("#new-btn")
const txtBtn = document.querySelector("#txt-btn")
const pdfBtn = document.querySelector("#pdf-btn")
const content = document.querySelector("#content")
const filename = document.querySelector("#filename-input")
const tempbtn = document.querySelector("#temp-btn")
boldBtn.addEventListener("click", () => {
    document.execCommand("bold")
});
underlineBtn.addEventListener("click", () => {
    document.execCommand("underline")
});
italicBtn.addEventListener("click", () => {
    document.execCommand("italic")
});
colorBtn.addEventListener("input", () => {
    document.execCommand("forecolor", false, colorBtn.value)
});
newBtn.addEventListener("click", () => {
    content.innerHTML = ""
    txtBtn.innerHTML = "Save as " + 'untitled' +".TXT";
    pdfBtn.innerHTML = "Save as " + 'untitled' +".PDF";
    txtBtn.classList.add("pointer-event")
    pdfBtn.classList.add("pointer-event")
});
txtBtn.classList.add("pointer-event")
pdfBtn.classList.add("pointer-event")
function namingfile() {
    txtBtn.classList.remove("pointer-event")
    pdfBtn.classList.remove("pointer-event")

    txtBtn.addEventListener("click", () => {
        const a = document.createElement("a")
        const blob = new Blob([content.innerText])
        const dataUrl = URL.createObjectURL(blob)
        a.href = dataUrl
        a.download = filename.value + ".txt"
        a.click()
    });
    pdfBtn.addEventListener('click', () => {
        html2pdf().from(content).save(filename.value)
    });

    txtBtn.innerHTML = "Save as " + filename.value +".TXT";
    pdfBtn.innerHTML = "Save as " + filename.value +".PDF";

    if(filename.value == "" || filename.value == null){
        txtBtn.innerHTML = "Save as " + 'untitled' +".TXT";
        pdfBtn.innerHTML = "Save as " + 'untitled' +".PDF";
}}