let myPosts;
//Laver søgning i URL'en
let urlPrams = new URLSearchParams(window.location.search);
//Henter værdien "id" fra URL'en hvis den er tilstede
let id = urlPrams.get("id");
console.log(id);
let destination = document.querySelector(".data-content");

document.addEventListener("DOMContentLoaded", getJSON);

//Henter data og sikre at det læses som JSON
async function getJSON() {

    let myJSON = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/faciliteter");
    myPosts = await myJSON.json();

    //Event script tilføjet

    let myMusic = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/musikevents?per_page=3");
    myMusicPosts = await myMusic.json();

    let myFilm = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/filmevents?per_page=3");
    myFilmPosts = await myFilm.json();

    let myBastard = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/bastardevents");
    myBastardPosts = await myBastard.json();
    //slut


    console.log(myPosts);
    showFacility();
}


function showFacility() {
    let dest = document.querySelector(".singelview_data_content");
    myPosts.forEach(post => {
        console.log(post.id);
        if (post.id == id) {
            dest.querySelector("img").src = post.acf.billede;
            dest.querySelector("h2").innerHTML = post.acf.titel;
            dest.querySelector(".data_textarea").innerHTML = post.acf.tekst;
            dest.querySelector(".data_openinghours").innerHTML = post.acf.aabningstider;
            dest.querySelector(".data_url").href = post.acf.link_URL;
        }
        console.log("showPosts er kørt")
    })

    showPosts();
}

function showPosts() {
    let myTemplate = document.querySelector("#data-template");
    let removeHide = document.querySelector(".upcoming_events");
    let karruselPil2 = document.querySelector(".karrusel_pil2");
    let karruselPil1 = document.querySelector(".karrusel_pil1");

    console.log("showPosts kørt");
    if (id == 57) {
        removeHide.classList.add("hide");
        console.log("hide tilføjet");
        document.querySelector(".karrusel_pil2").classList.add("hide");
    }
    if (id == 61) {
        removeHide.classList.add("hide");
        console.log("hide tilføjet");
        document.querySelector(".karrusel_pil2").classList.add("hide");
    }

    if (id == 59) {
        myMusicPosts.forEach(post => {

            let klon = myTemplate.cloneNode(true).content;

            klon.querySelector("img").src = post.acf.billede;
            klon.querySelector("img").addEventListener("click", () => {
                visModal(post);
            });
            klon.querySelector("h2").innerHTML = post.acf.titel;
            klon.querySelector(".data-teasertekst").innerHTML = post.acf.teasertekst;
            klon.querySelector(".data-dato").innerHTML = "Dato: " + post.acf.dato;
            klon.querySelector(".data-pris").innerHTML = "Pris: " + post.acf.pris + " kr";
            klon.querySelector(".data-button").innerHTML = post.acf.kobtilmeld;

            //        klon.querySelector(".data-textarea").innerHTML = post.acf.tekst;
            destination.appendChild(klon);
        })
    }
    if (id == 55) {
        myFilmPosts.forEach(post => {

            let klon = myTemplate.cloneNode(true).content;

            klon.querySelector("img").src = post.acf.billede;
            klon.querySelector("img").addEventListener("click", () => {
                visModal(post);
            });
            klon.querySelector("h2").innerHTML = post.acf.titel;
            klon.querySelector(".data-teasertekst").innerHTML = post.acf.teasertekst;
            klon.querySelector(".data-dato").innerHTML = "Dato: " + post.acf.dato;
            klon.querySelector(".data-pris").innerHTML = "Pris: " + post.acf.pris + " kr";
            klon.querySelector(".data-button").innerHTML = post.acf.kobtilmeld;

            //        klon.querySelector(".data-textarea").innerHTML = post.acf.tekst;
            destination.appendChild(klon);
        })
    }
    if (id == 51) {
        myBastardPosts.forEach(post => {

            let klon = myTemplate.cloneNode(true).content;

            klon.querySelector("img").src = post.acf.billede;
            klon.querySelector("img").addEventListener("click", () => {
                visModal(post);
            });
            klon.querySelector("h2").innerHTML = post.acf.titel;
            klon.querySelector(".data-teasertekst").innerHTML = post.acf.teasertekst;
            klon.querySelector(".data-dato").innerHTML = "Dato: " + post.acf.dato;
            klon.querySelector(".data-pris").innerHTML = "GRATIS";
            klon.querySelector(".data-button").innerHTML = post.acf.kobtilmeld;

            //        klon.querySelector(".data-textarea").innerHTML = post.acf.tekst;
            destination.appendChild(klon);
        })
    }
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

        if (window.innerWidth >= 627) {
            document.querySelector(".karrusel_pil4").classList.add("hide");
        }
    }

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
        document.querySelector(".karrusel_pil6").classList.add("none");

        document.querySelector(".karrusel_pil3").addEventListener("click", position1);
        document.querySelector(".karrusel_pil6").addEventListener("click", position3);

    }

}
