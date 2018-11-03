document.addEventListener("DOMContentLoaded", getJSON);

let myPosts;
let destination = document.querySelector(".data_content");


async function getJSON() {

    let myJSON = await fetch("http://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/faciliteter");
    myPosts = await myJSON.json();
    console.log(myPosts);
    showPosts();
}

function showPosts() {
    let myTemplate = document.querySelector("#data_template");

    console.log("showPosts kørt");

    myPosts.forEach(post => {
        let klon = myTemplate.cloneNode(true).content;
        klon.querySelector("img").src = post.acf.billede;
        klon.querySelector("h2").innerHTML = post.acf.titel;
        klon.querySelector(".data_textarea").innerHTML = post.acf.tekst;
        klon.querySelector(".data_infobox").innerHTML = post.acf.info;
        destination.appendChild(klon);
    })
}
