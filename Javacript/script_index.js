 let pil = document.querySelector(".pil");
 let dropdownmenu = document.querySelector(".dropdown");
 let pil_luk = document.querySelector(".pil_luk");

 // når DOM'en er loadet, startes funktionen runProgram
 document.addEventListener("DOMContentLoaded", function () {
     runProgram();
 });

 async function runProgram() {

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

     id_51.addEventListener("mouseover", bastard);
     id_61.addEventListener("mouseover", bipbip);
     id_57.addEventListener("mouseover", evoo);
     id_55.addEventListener("mouseover", bio);
     id_teater.addEventListener("mouseover", teater);
     id_59.addEventListener("mouseover", musik);


     function bastard() {
         console.log("bastard");
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
             window.location.href = "singelview.html?id=51";
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
             window.location.href = "singelview.html?id=61";
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
             window.location.href = "singelview.html?id=57";
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
             window.location.href = "singelview.html?id=55";
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
             window.location.href = "singelview.html?id=59";
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


     pil.addEventListener("click", dropdown);
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

         document.querySelector(".huset").addEventListener("click", visHuset);
     }

     // der klikkes på events
     function visEvents() {
         console.log("events");
         // Tavlen viskes ren
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

         document.querySelector(".boks_events").addEventListener("click", lukEvents);
     }

     function lukEvents() {
         console.log("luk events");

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

         document.querySelector(".boks_frivillig").addEventListener("click", lukFrivillig);
     }

     function lukFrivillig() {
         console.log("luk frivillig");

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

         document.querySelector(".boks_lokaler").addEventListener("click", lukLokaler);
     }

     function lukLokaler() {
         console.log("luk lokaler");

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

         document.querySelector(".boks_om").addEventListener("click", lukOm);
     }

     function lukOm() {
         console.log("luk om");

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

     pil.addEventListener("click", dropdown);
 }
