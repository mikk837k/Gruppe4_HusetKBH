// når DOM'en er loadet, startes funktionen runProgram
document.addEventListener("DOMContentLoaded", hentInfografik);

async function hentInfografik() {

    let mySvg = await fetch("img/infografik.svg");
    console.log(mySvg);

    let svg = await mySvg.text();
    console.log(svg);

    document.querySelector(".container_infografik").innerHTML = svg;

    let id_51 = document.querySelector(".container_infografik #id51");
    let id_61 = document.querySelector(".container_infografik #id61");
    let id_57 = document.querySelector(".container_infografik #id57");
    let id_55 = document.querySelector(".container_infografik #id55");
    let id_teater = document.querySelector(".container_infografik #teater");
    let id_59 = document.querySelector(".container_infografik #id59");

    //nyhedsbrev
    let svartekst = "";
    //nyhedsbrev

    id_51.addEventListener("mouseover", bastard);
    id_61.addEventListener("mouseover", bipbip);
    id_57.addEventListener("mouseover", evoo);
    id_55.addEventListener("mouseover", bio);
    id_teater.addEventListener("mouseover", teater);
    id_59.addEventListener("mouseover", musik);

    //nyhedsbrev
    document.querySelector("form").addEventListener("submit", kaldText);
    //nyhedsbrev

    //nyhedsbrev
    async function kaldText(e) {
        e.preventDefault();
        let navn = this.querySelector("input[type=text]").value;
        let url = "tilmeld.php?navn=" + navn;
        let svar = await fetch(url);
        svartekst = await svar.text();
        show();
        this.querySelector("input[type=text]").value = "";

    }

    function show(response) {
        document.querySelector("#response").textContent = svartekst;
    }

    document.querySelector("form").addEventListener("submit", visdata);

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

    //nyhedsbrev

    function bastard() {
        console.log("bastard");

        id_51.classList.add("cursor");

        document.querySelector(".container_infografik #id51 #tekst51 #n22 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n21 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n20 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n19 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n18 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n17 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n16 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n15 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n14 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n13 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n12 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n11 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n10 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n9 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n8 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n7 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n6 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n5 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n4 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n3 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n2").setAttribute("stroke", "#d3072a");
        document.querySelector(".container_infografik #id51 #tekst51 #n1").setAttribute("stroke", "#d3072a");

        id_51.addEventListener("click", () => {
            window.location.href = "singelview.php?id=51";
        });

        id_51.addEventListener("mouseout", bastardHvid);
    }

    function bastardHvid() {
        console.log("bastard hvid");
        document.querySelector(".container_infografik #id51 #tekst51 #n22 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n21 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n20 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n19 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n18 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n17 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n16 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n15 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n14 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n13 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n12 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n11 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n10 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n9 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n8 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n7 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n6 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n5 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n4 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n3 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n2").setAttribute("stroke", "#ffffff");
        document.querySelector(".container_infografik #id51 #tekst51 #n1").setAttribute("stroke", "#ffffff");
    }

    function bipbip() {
        console.log("bipip");

        id_61.classList.add("cursor");

        document.querySelector(".container_infografik #id61 #tekst61 #m13 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m12 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m11 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m10 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m9 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m8 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m7 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m6 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m5 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m4 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m3 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m2 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id61 #tekst61 #m1 path").setAttribute("fill", "#d3072a");

        id_61.addEventListener("click", () => {
            window.location.href = "singelview.php?id=61";
        });

        id_61.addEventListener("mouseout", bipipHvid);
    }

    function bipipHvid() {
        console.log("bipip hvid");
        document.querySelector(".container_infografik #id61 #tekst61 #m13 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m12 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m11 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m10 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m9 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m8 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m7 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m6 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m5 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m4 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m3 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m2 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id61 #tekst61 #m1 path").setAttribute("fill", "#ffffff");
    }

    function evoo() {
        console.log("evoo");

        id_57.classList.add("cursor");

        document.querySelector(".container_infografik #id57 #tekst57 #p35 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p34 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p33 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p32 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p31 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p30 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p29 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p28 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p27 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p26 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p25 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p24 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p23 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p22 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p21 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p20 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p19 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p18 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p17 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p16 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p15 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p14 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p13 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p12 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p11 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p10 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p9 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p8 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p7 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p6 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p5 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p4 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p3 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p2 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id57 #tekst57 #p1 path").setAttribute("fill", "#d3072a");

        id_57.addEventListener("click", () => {
            window.location.href = "singelview.php?id=57";
        });

        id_57.addEventListener("mouseout", evooHvid);
    }

    function evooHvid() {
        console.log("evoo hvid");
        document.querySelector(".container_infografik #id57 #tekst57 #p35 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p34 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p33 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p32 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p31 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p30 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p29 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p28 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p27 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p26 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p25 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p24 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p23 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p22 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p21 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p20 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p19 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p18 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p17 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p16 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p15 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p14 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p13 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p12 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p11 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p10 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p9 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p8 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p7 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p6 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p5 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p4 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p3 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p2 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id57 #tekst57 #p1 path").setAttribute("fill", "#ffffff");
    }

    function bio() {
        console.log("bio");

        id_55.classList.add("cursor");

        document.querySelector(".container_infografik #id55 #tekst55 #a24 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a23 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a22 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a21 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a20 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a19 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a18 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a17 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a16 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a15 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a14 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a13 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a12 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a11 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a10 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a9 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a8 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a7 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a6 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a5 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a4 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a3 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a2 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id55 #tekst55 #a1 path").setAttribute("fill", "#d3072a");

        id_55.addEventListener("click", () => {
            window.location.href = "singelview.php?id=55";
        });

        id_55.addEventListener("mouseout", bioHvid);
    }

    function bioHvid() {
        console.log("bio hvid");
        document.querySelector(".container_infografik #id55 #tekst55 #a24 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a23 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a22 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a21 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a20 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a19 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a18 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a17 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a16 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a15 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a14 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a13 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a12 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a11 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a10 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a9 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a8 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a7 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a6 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a5 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a4 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a3 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a2 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id55 #tekst55 #a1 path").setAttribute("fill", "#ffffff");
    }


    function teater() {
        console.log("teater");

        id_teater.classList.add("cursor");

        document.querySelector(".container_infografik #teater #tekstteater #s24 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s23 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s22 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s21 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s20 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s19 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s18 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s17 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s16 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s15 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s14 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s13 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s12 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s11 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s10 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s9 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s8 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s7 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s6 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s5 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s4 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s3 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s2 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #teater #tekstteater #s1 path").setAttribute("fill", "#d3072a");

        id_teater.addEventListener("click", () => {
            window.open("https://www.teater-huset.dk");
        });

        id_teater.addEventListener("mouseout", teaterHvid);
    }

    function teaterHvid() {
        console.log("teater hvid");
        document.querySelector(".container_infografik #teater #tekstteater #s24 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s23 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s22 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s21 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s20 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s19 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s18 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s17 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s16 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s15 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s14 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s13 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s12 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s11 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s10 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s9 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s8 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s7 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s6 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s5 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s4 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s3 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s2 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #teater #tekstteater #s1 path").setAttribute("fill", "#ffffff");

    }

    function musik() {
        console.log("musik");

        id_59.classList.add("cursor");

        document.querySelector(".container_infografik #id59 #tekst59 #x22 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x21 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x20 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x19 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x18 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x17 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x16 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x15 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x14 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x13 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x12 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x11 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x10 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x9 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x8 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x7 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x6 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x5 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x4 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x3 path ").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x2 path").setAttribute("fill", "#d3072a");
        document.querySelector(".container_infografik #id59 #tekst59 #x1 path").setAttribute("fill", "#d3072a");

        id_59.addEventListener("click", () => {
            window.location.href = "singelview.php?id=59";
        });

        id_59.addEventListener("mouseout", musikHvid);
    }

    function musikHvid() {
        console.log("bio hvid");
        document.querySelector(".container_infografik #id59 #tekst59 #x22 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x21 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x20 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x19 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x18 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x17 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x16 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x15 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x14 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x13 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x12 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x11 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x10 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x9 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x8 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x7 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x6 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x5 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x4 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x3 path ").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x2 path").setAttribute("fill", "#ffffff");
        document.querySelector(".container_infografik #id59 #tekst59 #x1 path").setAttribute("fill", "#ffffff");
    }
}
