document.addEventListener("DOMContentLoaded", getJSON);

let myPosts;
let myFilmPosts;
let myTeaterPosts;
let eventet;
let modal = document.querySelector("#modal");
let destination = document.querySelector(".data-content");

let all = [];

async function getJSON() {



    let myJSON = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/musikevents");
    myPosts = await myJSON.json();

    let myFilm = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/filmevents");
    myFilmPosts = await myFilm.json();

    let myTeater = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/teaterevent");
    myTeaterPosts = await myTeater.json();



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

function showPosts() {
    let myTemplate = document.querySelector("#data-template");
    let karruselPil2 = document.querySelector(".karrusel_pil2");
    let karruselPil1 = document.querySelector(".karrusel_pil1");

    console.log("showPosts kørt");
    document.querySelector(".data-content").innerHTML = " ";


    all.forEach(post => {
        let klon = myTemplate.cloneNode(true).content;
        klon.querySelector("img").src = post.acf.billede;
        klon.querySelector("img").addEventListener("click", () => {
            visModal(post);
        });

        klon.querySelector("h2").innerHTML = post.acf.titel;
        klon.querySelector(".data-teasertekst").innerHTML = post.acf.teasertekst;
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

function visModal(eventet) {

    modal.classList.add("vis");
    modal.querySelector("img").src = eventet.acf.billede;


    modal.querySelector("h2").innerHTML = eventet.acf.titel;
    modal.querySelector(".data-tekst").innerHTML = eventet.acf.tekst;
    modal.querySelector(".data-dato").innerHTML = "Dato: " + eventet.acf.dato;
    if (window.innerWidth >= 575) {
        modal.querySelector(".data-pris").innerHTML = "Pris: " + eventet.acf.pris + " kr";
    } else {
        modal.querySelector(".data-pris").innerHTML = "Pris:<br> " + eventet.acf.pris + " kr";
    }
    modal.querySelector(".data-venue").innerHTML = "Venue: " + eventet.acf.venue;

    window.onclick = function (event) {
        if (event.target == modal) {
            //            modal.style.display = "none";
            modal.classList.remove("vis");
        }
    }
    showPosts();
}
