let pil = document.querySelector(".pil");
let dropdownmenu = document.querySelector(".dropdown");
let pil_luk = document.querySelector(".pil_luk");

// når DOM'en er loadet, startes funktionen runProgram
document.addEventListener("DOMContentLoaded", function () {
    startMenu();
});

function startMenu() {
    if (window.innerWidth <= 939) {
        pil.addEventListener("click", dropdown);
    }
}

function dropdown() {
    console.log("dropdown");
    // skjuler dropdown-pil
    pil.classList.add("none");

    document.querySelector(".klik").classList.remove("none");

    // viser dropdown vinduet
    dropdownmenu.classList.remove("dropdown_gone");
    // lukker dropdown ved klik ved siden af menuen
    document.querySelector(".klik").addEventListener("click", dropdown_gone);

    // lytter på om der klikkes på huset
    document.querySelector(".huset").addEventListener("click", visHuset);
    // lytter på om der klikkes på events
    document.querySelector(".events").addEventListener("click", visEvents);
    // lytter på om der klikkes på frivillig
    document.querySelector(".frivillig").addEventListener("click", visFrivillig);
    // lytter på om der klikkes på lokaler
    document.querySelector(".lokaler").addEventListener("click", visLokaler);
    // lytter på om der klikkes på om
    document.querySelector(".om").addEventListener("click", visOm);
    // lytter på om der klikkes på kontakt
    document.querySelector(".kontakt").addEventListener("click", visKontakt);


    // der er klikket på huset
    function visHuset() {
        console.log("huset");
        // Tavlen viskes ren
        document.querySelector(".dropdown").classList.remove("udvid_huset");
        document.querySelector(".dropdown").classList.remove("udvid_events");
        document.querySelector(".dropdown").classList.remove("udvid_frivillig");
        document.querySelector(".dropdown").classList.remove("udvid_lokaler");
        document.querySelector(".dropdown").classList.remove("udvid_om");

        document.querySelector(".undermenu_events").classList.add("none");
        document.querySelector(".undermenu_frivillig").classList.add("none");
        document.querySelector(".undermenu_lokaler").classList.add("none");
        document.querySelector(".undermenu_om").classList.add("none");
        pil_luk.classList.remove("pil_luk_events");
        pil_luk.classList.remove("pil_luk_frivillig");
        pil_luk.classList.remove("pil_luk_lokaler");
        pil_luk.classList.remove("pil_luk_om");
        document.querySelector(".huset").classList.remove("menu_aktiv");
        document.querySelector(".events").classList.remove("menu_aktiv");
        document.querySelector(".frivillig").classList.remove("menu_aktiv");
        document.querySelector(".lokaler").classList.remove("menu_aktiv");
        document.querySelector(".om").classList.remove("menu_aktiv");
        document.querySelector(".overskrift_huset").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_events").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_frivillig").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_lokaler").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_om").classList.remove("overskrift_aktiv");
        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_huset").classList.add("none");
        document.querySelector(".boks_events").classList.add("none");
        document.querySelector(".boks_frivillig").classList.add("none");
        document.querySelector(".boks_lokaler").classList.add("none");
        document.querySelector(".boks_om").classList.add("none");

        //skifter baggrundsfarven på undermenuen
        document.querySelector(".huset").classList.add("menu_aktiv");

        // skifter farve på overskriften
        document.querySelector(".overskrift_huset").classList.add("overskrift_aktiv");

        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_huset").classList.remove("none");

        // undermenuen til huset vises
        document.querySelector(".undermenu_huset").classList.remove("none");

        // lukkepilen flyttes
        pil_luk.classList.add("pil_luk_huset");

        //menuen udvides
        document.querySelector(".dropdown").classList.add("udvid_huset");

        document.querySelector(".boks_huset").addEventListener("click", lukHuset);
    }

    function lukHuset() {
        console.log("luk huset");

        document.querySelector(".boks_huset").classList.add("none");

        //fjerner baggrundsfarven på undermenuen
        document.querySelector(".menu").classList.remove("menu_aktiv");

        document.querySelector(".undermenu_huset").classList.add("none");
        pil_luk.classList.remove("pil_luk_huset");

        // skifter farve på overskriften
        document.querySelector(".overskrift_huset").classList.remove("overskrift_aktiv");

        //fjerner den udvidede menu
        document.querySelector(".dropdown").classList.remove("udvid_huset");

        document.querySelector(".huset").addEventListener("click", visHuset);
    }

    // der klikkes på events
    function visEvents() {
        console.log("events");
        // Tavlen viskes ren
        document.querySelector(".dropdown").classList.remove("udvid_huset");
        document.querySelector(".dropdown").classList.remove("udvid_events");
        document.querySelector(".dropdown").classList.remove("udvid_frivillig");
        document.querySelector(".dropdown").classList.remove("udvid_lokaler");
        document.querySelector(".dropdown").classList.remove("udvid_om");
        document.querySelector(".undermenu_huset").classList.add("none");
        document.querySelector(".undermenu_frivillig").classList.add("none");
        document.querySelector(".undermenu_lokaler").classList.add("none");
        document.querySelector(".undermenu_om").classList.add("none");
        pil_luk.classList.remove("pil_luk_huset");
        pil_luk.classList.remove("pil_luk_frivillig");
        pil_luk.classList.remove("pil_luk_lokaler");
        pil_luk.classList.remove("pil_luk_om");
        //fjerner baggrundsfarven på undermenuen
        document.querySelector(".huset").classList.remove("menu_aktiv");
        document.querySelector(".events").classList.remove("menu_aktiv");
        document.querySelector(".frivillig").classList.remove("menu_aktiv");
        document.querySelector(".lokaler").classList.remove("menu_aktiv");
        document.querySelector(".om").classList.remove("menu_aktiv");
        document.querySelector(".overskrift_huset").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_events").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_frivillig").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_lokaler").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_om").classList.remove("overskrift_aktiv");
        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_huset").classList.add("none");
        document.querySelector(".boks_events").classList.add("none");
        document.querySelector(".boks_frivillig").classList.add("none");
        document.querySelector(".boks_lokaler").classList.add("none");
        document.querySelector(".boks_om").classList.add("none");

        //skifter baggrundsfarven på undermenuen
        document.querySelector(".events").classList.add("menu_aktiv");

        // skifter farve på overskriften
        document.querySelector(".overskrift_events").classList.add("overskrift_aktiv");

        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_events").classList.remove("none");

        // undermenuen til events vises
        document.querySelector(".undermenu_events").classList.remove("none");

        // lukkepilen flyttes
        pil_luk.classList.add("pil_luk_events");

        document.querySelector(".dropdown").classList.add("udvid_events");

        document.querySelector(".boks_events").addEventListener("click", lukEvents);
    }

    function lukEvents() {
        console.log("luk events");
        document.querySelector(".dropdown").classList.remove("udvid_events");

        document.querySelector(".boks_events").classList.add("none");

        //fjerner baggrundsfarven på undermenuen
        document.querySelector(".events").classList.remove("menu_aktiv");

        // skifter farve på overskriften
        document.querySelector(".overskrift_events").classList.remove("overskrift_aktiv");

        document.querySelector(".undermenu_events").classList.add("none");
        pil_luk.classList.remove("pil_luk_events");

        document.querySelector(".events").addEventListener("click", visEvents);
    }

    // der klikkes på frivillig
    function visFrivillig() {
        console.log("frivillig");
        // Tavlen viskes ren
        document.querySelector(".dropdown").classList.remove("udvid_huset");
        document.querySelector(".dropdown").classList.remove("udvid_events");
        document.querySelector(".dropdown").classList.remove("udvid_frivillig");
        document.querySelector(".dropdown").classList.remove("udvid_lokaler");
        document.querySelector(".dropdown").classList.remove("udvid_om");
        document.querySelector(".undermenu_huset").classList.add("none");
        document.querySelector(".undermenu_events").classList.add("none");
        document.querySelector(".undermenu_lokaler").classList.add("none");
        document.querySelector(".undermenu_om").classList.add("none");
        pil_luk.classList.remove("pil_luk_huset");
        pil_luk.classList.remove("pil_luk_events");
        pil_luk.classList.remove("pil_luk_lokaler");
        pil_luk.classList.remove("pil_luk_om");
        //fjerner baggrundsfarven på undermenuen
        document.querySelector(".huset").classList.remove("menu_aktiv");
        document.querySelector(".events").classList.remove("menu_aktiv");
        document.querySelector(".frivillig").classList.remove("menu_aktiv");
        document.querySelector(".lokaler").classList.remove("menu_aktiv");
        document.querySelector(".om").classList.remove("menu_aktiv");
        document.querySelector(".overskrift_huset").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_events").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_frivillig").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_lokaler").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_om").classList.remove("overskrift_aktiv");
        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_huset").classList.add("none");
        document.querySelector(".boks_events").classList.add("none");
        document.querySelector(".boks_frivillig").classList.add("none");
        document.querySelector(".boks_lokaler").classList.add("none");
        document.querySelector(".boks_om").classList.add("none");

        //skifter baggrundsfarven på undermenuen
        document.querySelector(".frivillig").classList.add("menu_aktiv");

        // skifter farve på overskriften
        document.querySelector(".overskrift_frivillig").classList.add("overskrift_aktiv");

        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_frivillig").classList.remove("none");

        // undermenuen til frivillig vises
        document.querySelector(".undermenu_frivillig").classList.remove("none");

        // lukkepilen flyttes
        pil_luk.classList.add("pil_luk_frivillig");

        document.querySelector(".dropdown").classList.add("udvid_frivillig");

        document.querySelector(".boks_frivillig").addEventListener("click", lukFrivillig);
    }

    function lukFrivillig() {
        console.log("luk frivillig");
        document.querySelector(".dropdown").classList.remove("udvid_frivillig");

        document.querySelector(".boks_frivillig").classList.add("none");

        //fjerner baggrundsfarven på undermenuen
        document.querySelector(".frivillig").classList.remove("menu_aktiv");

        // skifter farve på overskriften
        document.querySelector(".overskrift_frivillig").classList.remove("overskrift_aktiv");

        document.querySelector(".undermenu_frivillig").classList.add("none");
        pil_luk.classList.remove("pil_luk_frivillig");

        document.querySelector(".frivillig").addEventListener("click", visFrivillig);
    }

    // der klikkes på lokaler
    function visLokaler() {
        console.log("lokaler");
        // Tavlen viskes ren
        document.querySelector(".dropdown").classList.remove("udvid_huset");
        document.querySelector(".dropdown").classList.remove("udvid_events");
        document.querySelector(".dropdown").classList.remove("udvid_frivillig");
        document.querySelector(".dropdown").classList.remove("udvid_lokaler");
        document.querySelector(".dropdown").classList.remove("udvid_om");
        document.querySelector(".undermenu_huset").classList.add("none");
        document.querySelector(".undermenu_events").classList.add("none");
        document.querySelector(".undermenu_frivillig").classList.add("none");
        document.querySelector(".undermenu_om").classList.add("none");
        pil_luk.classList.remove("pil_luk_huset");
        pil_luk.classList.remove("pil_luk_events");
        pil_luk.classList.remove("pil_luk_frivillig");
        pil_luk.classList.remove("pil_luk_om");
        //fjerner baggrundsfarven på undermenuen
        document.querySelector(".huset").classList.remove("menu_aktiv");
        document.querySelector(".events").classList.remove("menu_aktiv");
        document.querySelector(".frivillig").classList.remove("menu_aktiv");
        document.querySelector(".lokaler").classList.remove("menu_aktiv");
        document.querySelector(".om").classList.remove("menu_aktiv");
        document.querySelector(".overskrift_huset").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_events").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_frivillig").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_lokaler").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_om").classList.remove("overskrift_aktiv");
        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_huset").classList.add("none");
        document.querySelector(".boks_events").classList.add("none");
        document.querySelector(".boks_frivillig").classList.add("none");
        document.querySelector(".boks_lokaler").classList.add("none");
        document.querySelector(".boks_om").classList.add("none");

        //skifter baggrundsfarven på undermenuen
        document.querySelector(".lokaler").classList.add("menu_aktiv");

        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_lokaler").classList.remove("none");

        // skifter farve på overskriften
        document.querySelector(".overskrift_lokaler").classList.add("overskrift_aktiv");

        // undermenuen til lokaler vises
        document.querySelector(".undermenu_lokaler").classList.remove("none");

        // lukkepilen flyttes
        pil_luk.classList.add("pil_luk_lokaler");

        document.querySelector(".dropdown").classList.add("udvid_lokaler");

        document.querySelector(".boks_lokaler").addEventListener("click", lukLokaler);
    }

    function lukLokaler() {
        console.log("luk lokaler");

        document.querySelector(".dropdown").classList.remove("udvid_lokaler");

        document.querySelector(".boks_lokaler").classList.add("none");

        //fjerner baggrundsfarven på undermenuen
        document.querySelector(".lokaler").classList.remove("menu_aktiv");

        // skifter farve på overskriften
        document.querySelector(".overskrift_lokaler").classList.remove("overskrift_aktiv");

        document.querySelector(".undermenu_lokaler").classList.add("none");
        pil_luk.classList.remove("pil_luk_lokaler");

        document.querySelector(".lokaler").addEventListener("click", visLokaler);
    }

    // der klikkes på om
    function visOm() {
        console.log("om");
        // Tavlen viskes ren
        document.querySelector(".dropdown").classList.remove("udvid_huset");
        document.querySelector(".dropdown").classList.remove("udvid_events");
        document.querySelector(".dropdown").classList.remove("udvid_frivillig");
        document.querySelector(".dropdown").classList.remove("udvid_lokaler");
        document.querySelector(".dropdown").classList.remove("udvid_om");
        document.querySelector(".undermenu_huset").classList.add("none");
        document.querySelector(".undermenu_events").classList.add("none");
        document.querySelector(".undermenu_frivillig").classList.add("none");
        document.querySelector(".undermenu_lokaler").classList.add("none");
        pil_luk.classList.remove("pil_luk_huset");
        pil_luk.classList.remove("pil_luk_events");
        pil_luk.classList.remove("pil_luk_frivillig");
        pil_luk.classList.remove("pil_luk_lokaler");
        //fjerner baggrundsfarven på undermenuen
        document.querySelector(".huset").classList.remove("menu_aktiv");
        document.querySelector(".events").classList.remove("menu_aktiv");
        document.querySelector(".frivillig").classList.remove("menu_aktiv");
        document.querySelector(".lokaler").classList.remove("menu_aktiv");
        document.querySelector(".om").classList.remove("menu_aktiv");
        document.querySelector(".overskrift_huset").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_events").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_frivillig").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_lokaler").classList.remove("overskrift_aktiv");
        document.querySelector(".overskrift_om").classList.remove("overskrift_aktiv");
        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_huset").classList.add("none");
        document.querySelector(".boks_events").classList.add("none");
        document.querySelector(".boks_frivillig").classList.add("none");
        document.querySelector(".boks_lokaler").classList.add("none");
        document.querySelector(".boks_om").classList.add("none");

        //skifter baggrundsfarven på undermenuen
        document.querySelector(".om").classList.add("menu_aktiv");

        // "viser" den boks, der skal klikkes på for at lukke undermenuen
        document.querySelector(".boks_om").classList.remove("none");

        // skifter farve på overskriften
        document.querySelector(".overskrift_om").classList.add("overskrift_aktiv");

        // undermenuen til frivillig vises
        document.querySelector(".undermenu_om").classList.remove("none");

        // lukkepilen flyttes
        pil_luk.classList.add("pil_luk_om");
        document.querySelector(".dropdown").classList.add("udvid_om");

        document.querySelector(".boks_om").addEventListener("click", lukOm);
    }

    function lukOm() {
        console.log("luk om");
        document.querySelector(".dropdown").classList.remove("udvid_om");
        document.querySelector(".boks_om").classList.add("none");

        //fjerner baggrundsfarven på undermenuen
        document.querySelector(".om").classList.remove("menu_aktiv");

        // skifter farve på overskriften
        document.querySelector(".overskrift_om").classList.remove("overskrift_aktiv");

        document.querySelector(".undermenu_om").classList.add("none");
        pil_luk.classList.remove("pil_luk_om");

        document.querySelector(".om").addEventListener("click", visOm);
    }

    pil_luk.addEventListener("click", dropdown_gone);


    function visKontakt() {
        console.log("kontakt");
    }
}

function dropdown_gone() {
    console.log("dropdown gone");
    dropdownmenu.classList.add("dropdown_gone");
    pil.classList.remove("none");
    document.querySelector(".klik").classList.add("none");

    pil_luk.classList.remove("pil_luk_huset");
    pil_luk.classList.remove("pil_luk_events");
    pil_luk.classList.remove("pil_luk_frivillig");
    pil_luk.classList.remove("pil_luk_lokaler");
    pil_luk.classList.remove("pil_luk_om");

    document.querySelector(".undermenu_huset").classList.add("none");
    document.querySelector(".undermenu_events").classList.add("none");

    //fjerner baggrundsfarven på undermenuen
    document.querySelector(".huset").classList.remove("menu_aktiv");
    document.querySelector(".events").classList.remove("menu_aktiv");
    document.querySelector(".frivillig").classList.remove("menu_aktiv");
    document.querySelector(".lokaler").classList.remove("menu_aktiv");
    document.querySelector(".om").classList.remove("menu_aktiv");


    document.querySelector(".undermenu_frivillig").classList.add("none");
    document.querySelector(".undermenu_lokaler").classList.add("none");
    document.querySelector(".undermenu_om").classList.add("none");

    // skifter farve på overskriften
    document.querySelector(".overskrift_huset").classList.remove("overskrift_aktiv");
    document.querySelector(".overskrift_events").classList.remove("overskrift_aktiv");
    document.querySelector(".overskrift_frivillig").classList.remove("overskrift_aktiv");
    document.querySelector(".overskrift_lokaler").classList.remove("overskrift_aktiv");
    document.querySelector(".overskrift_om").classList.remove("overskrift_aktiv");

    document.querySelector(".dropdown").classList.remove("udvid_huset");
    document.querySelector(".dropdown").classList.remove("udvid_events");
    document.querySelector(".dropdown").classList.remove("udvid_frivillig");
    document.querySelector(".dropdown").classList.remove("udvid_lokaler");
    document.querySelector(".dropdown").classList.remove("udvid_om");

    pil.addEventListener("click", dropdown);
}
