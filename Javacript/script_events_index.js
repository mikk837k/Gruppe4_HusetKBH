document.addEventListener("DOMContentLoaded", getJSON);

let myPosts;
let myFilmPosts;
let myTeaterPosts;
let eventet;
let modal = document.querySelector("#modal");
let closeModal = document.querySelector(".lukknap");
let destination = document.querySelector(".data-content");
// variabel for det samlede array af events
let all = [];

// Funktion der henter oplysningerne om musikevents, filmevents og teaterevents, som vi har oprettet med posts via Wordpress, og samler dem i et array
async function getJSON() {
    // henter musikevents
    let myJSON = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/musikevents");
    myPosts = await myJSON.json();
    // henter filmevents
    let myFilm = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/filmevents");
    myFilmPosts = await myFilm.json();
    // henter teaterevents
    let myTeater = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/teaterevent");
    myTeaterPosts = await myTeater.json();

    // push bruges for at samle de tre typer af events i et samlet array
    myPosts.forEach(post => {
        all.push(post);
    })

    myFilmPosts.forEach(post => {
        all.push(post);
    })

    myTeaterPosts.forEach(post => {
        all.push(post);
    })

    console.log(all);
    showPosts();
}
// indsætter alle events på sitet, samt lytter på om der bliver klikket på billedet for et event eller læs mere knappen, plus pilene, der styrer karrusellen
function showPosts() {
    // variabel for templaten, hvor informationerne indsættes og klones for hver post
    let myTemplate = document.querySelector("#data-template");
    // lytter på klik frem i karrusellen
    let karruselPil2 = document.querySelector(".karrusel_pil2");
    // lytter på klik tilbage i karrusellen
    let karruselPil1 = document.querySelector(".karrusel_pil1");

    console.log("showPosts kørt");
    // nulstiller indholdet i data-content
    document.querySelector(".data-content").innerHTML = " ";
    // indsætter diverse oplysninger for hvert event
    all.forEach(post => {
        let klon = myTemplate.cloneNode(true).content;
        klon.querySelector("img").src = post.acf.billede;
        // lytter på om der bliver klikket på billedet
        klon.querySelector("img").addEventListener("click", () => {
            visModal(post);
        });

        klon.querySelector("h2").innerHTML = post.acf.titel;
        klon.querySelector(".data-teasertekst").innerHTML = post.acf.teasertekst + "<p class='mere'> Læs mere</p>";
        // lytter på om der bliver klikket på billedet og læs mere knappen
        klon.querySelector(".data-teasertekst").addEventListener("click", () => {
            visModal(post);
        });

        klon.querySelector(".data-dato").innerHTML = "Dato: " + post.acf.dato;
        //        klon.querySelector(".data-tidspunkt").innerHTML = "Tidspunkt: " + post.acf.tidspunkt;

        klon.querySelector(".data-pris").innerHTML = "Pris: " + post.acf.pris + " kr";
        klon.querySelector(".data-button").innerHTML = post.acf.kobtilmeld;
        //        klon.querySelector(".data-venue").innerHTML = "Venue: " + post.acf.venue;
        //        klon.querySelector(".data-textarea").innerHTML = post.acf.tekst;
        destination.appendChild(klon);

        document.querySelector(".karrusel_pil2").addEventListener("click", position1);

        function position0() {
            console.log("position0");
            document.querySelector(".karrusel_pil1").classList.add("none");
            document.querySelector(".karrusel_pil3").classList.add("none");
            document.querySelector(".karrusel_pil5").classList.add("none");

            document.querySelector(".data-content").classList.remove("position1");
            document.querySelector(".data-content").classList.remove("position2");
            document.querySelector(".data-content").classList.remove("position3");

            document.querySelector(".karrusel_pil2").classList.remove("none");
            document.querySelector(".karrusel_pil4").classList.add("none");
            document.querySelector(".karrusel_pil6").classList.add("none");

            document.querySelector(".karrusel_pil2").addEventListener("click", position1);

        }
        // funktion der rykker billederne i karrusellen
        function position1() {
            console.log("position1");

            document.querySelector(".karrusel_pil1").classList.remove("none");
            document.querySelector(".karrusel_pil3").classList.add("none");
            document.querySelector(".karrusel_pil5").classList.add("none");

            document.querySelector(".data-content").classList.add("position1");
            document.querySelector(".data-content").classList.remove("position2");
            document.querySelector(".data-content").classList.remove("position3");

            document.querySelector(".karrusel_pil2").classList.add("none");
            document.querySelector(".karrusel_pil4").classList.remove("none");
            document.querySelector(".karrusel_pil6").classList.add("none");

            document.querySelector(".karrusel_pil1").addEventListener("click", position0);
            document.querySelector(".karrusel_pil4").addEventListener("click", position2);
        }
        // funktion der rykker billederne i karrusellen
        function position2() {
            console.log("position2");

            document.querySelector(".karrusel_pil1").classList.add("none");
            document.querySelector(".karrusel_pil3").classList.remove("none");
            document.querySelector(".karrusel_pil5").classList.add("none");

            document.querySelector(".data-content").classList.remove("position1");
            document.querySelector(".data-content").classList.add("position2");
            document.querySelector(".data-content").classList.remove("position3");

            document.querySelector(".karrusel_pil2").classList.add("none");
            document.querySelector(".karrusel_pil4").classList.add("none");
            document.querySelector(".karrusel_pil6").classList.remove("none");

            document.querySelector(".karrusel_pil3").addEventListener("click", position1);
            document.querySelector(".karrusel_pil6").addEventListener("click", position3);

        }
        // funktion der rykker billederne i karrusellen
        function position3() {
            console.log("position3");

            document.querySelector(".karrusel_pil1").classList.add("none");
            document.querySelector(".karrusel_pil3").classList.add("none");
            document.querySelector(".karrusel_pil5").classList.remove("none");

            document.querySelector(".data-content").classList.remove("position1");
            document.querySelector(".data-content").classList.remove("position2");
            document.querySelector(".data-content").classList.add("position3");

            document.querySelector(".karrusel_pil2").classList.add("none");
            document.querySelector(".karrusel_pil4").classList.add("none");
            document.querySelector(".karrusel_pil6").classList.add("none");

            document.querySelector(".karrusel_pil5").addEventListener("click", position2);
        }
    })

}
// indsætter oplysningerne i modalvinduet, samt lukker modalen ved klik på lukknappen eller ved siden af modalvinduet på skærme større end 650px, hvorefter funktionen showPosts bliver kaldt
function visModal(eventet) {
    // viser modalvinduet
    modal.classList.add("vis");
    modal.querySelector("img").src = eventet.acf.billede;
    modal.querySelector("img").alt = eventet.title.rendered;
    modal.querySelector("h2").innerHTML = eventet.acf.titel;
    modal.querySelector(".data-tekst").innerHTML = eventet.acf.tekst;
    modal.querySelector(".data-dato").innerHTML = "Dato: " + eventet.acf.dato;
    modal.querySelector(".data-venue").innerHTML = "Venue: " + eventet.acf.venue;
    modal.querySelector(".data-pris").innerHTML = "Pris: " + eventet.acf.pris + " kr";
    modal.querySelector(".data-venue").innerHTML = "Venue: " + eventet.acf.venue;
    modal.querySelector(".data-tidspunkt").innerHTML = "Tidspunkt: " + eventet.acf.tidspunkt;
    modal.querySelector(".data-button").innerHTML = eventet.acf.kobtilmeld;
    // hvis der bliver klikket på lukknappen, sp lukkes modalen
    window.onclick = function (event) {
        if (event.target == closeModal) {
            modal.classList.remove("vis");
        }
    }
    // hvis vinduet er større end 650, kan man både lukke modalen ved klik på lukknappen, samt ved siden af modalvinduet
    if (window.innerWidth >= 650) {
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.classList.remove("vis");
            }
            if (event.target == closeModal) {
                modal.classList.remove("vis");
            }
        }
    }
    // kalder showPosts direkte
    showPosts();
}
