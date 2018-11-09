 document.querySelector("form").addEventListener("submit", kaldText);

 // e preventDefault er til at stoppe siden med at reloade:

 async function kaldText(e) {
     e.preventDefault();
     let navn = this.querySelector("input[type=text]").value;
 }
