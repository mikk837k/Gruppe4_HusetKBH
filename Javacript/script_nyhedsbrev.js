  // når vi skal ligge svaret ind i noget:
  let svartekst = "";

  // når der bliver klikket på submit skal der ske en funktion:

  document.querySelector("form").addEventListener("submit", kaldText);

  // e preventDefault er til at stoppe siden med at reloade:

  async function kaldText(e) {
      e.preventDefault();
      let navn = this.querySelector("input[type=text]").value;
      let url = "tilmeld.php?navn=" + navn;



      // await fetch, vi henter url'en ned og til sidst sletter vi det indhold der er i input, ved at sætten den til at være tom = " "

      let svar = await fetch(url);
      svartekst = await svar.text();
      show();
      this.querySelector("input[type=text]").value = "";

  }

  function show(response) {
      document.querySelector("#response").textContent = svartekst;
  }

  // I js lytter en eventlistener på submit :

  document.querySelector("form").addEventListener("submit", visdata)

  // Eventhandler viser fx., data i console :

  function visdata(e) {
      e.preventDefault();
      console.log(document.querySelector("#fornavn").value);
      console.log(document.querySelector("#efternavn").value);
      console.log(document.querySelector("#email").value);
      //OBS javascript kan ikke gemme data andre steder end på ens computer.


  }

  document.querySelector(".nyhedsbrev_modal .luk").addEventListener("click", visModal);
  document.querySelector("#tilmeld").addEventListener("click", visModal);

  function visModal() {
      document.querySelector("#nyhedsbrev_wrapper").classList.remove("vis");
      document.querySelector("#nyhedsbrev_wrapper").classList.remove("vis");
  }
