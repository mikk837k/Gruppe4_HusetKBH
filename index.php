<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Huset KBH</title>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="footer.css">
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="nyhedsbrev.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,700,900" rel="stylesheet">
</head>

<body>
    <div id="nyhedsbrev_wrapper" class="nyhedsbrev_modal vis">

        <form class="modal-content" action="tilmeld.php">
            <div class="luk">
                <div class="line line_one"></div>
                <div class="line line_two"></div>
            </div>

            <h1>Tilmeld vores nyhedsbrev</h1>

            <p>Bliv informeret om udvalgte events og festivaler. Få adgang til sjove konkurrencer og særlige tilbud.</p>
            <input id="fornavn" type="text" placeholder="Fornavn" required> <br>
            <input id="efternavn" type="text" placeholder="Efternavn" required><br>
            <input id="email" type="text" placeholder="Email" required> <br>

            <input id="tilmeld" class="vis" type="submit" value="Tilmeld nyhedsbrev"><span id="response"></span>
        </form>
    </div>
    <div class="margin1"></div>
    <div class="max">
        <div class="page_container">
            <!--        her skal indsættes php-->
            <?php include "header.html"; ?>
            <!--        her skal indsættes php-->

            <div class="container_billede">

                <img src="img/index.jpg" alt="billede af husets indgangsparti">
            </div>
            <div class="container_billede2">
                <img src="img/index_blur5.jpg" alt="billede af husets indgangsparti med blur filter">
            </div>
            <br>
            <div class="container_tekst">
                <div class="content_tekst">
                    <h1>Velkommen til Huset!</h1>
                    <p>I Huset finder du en masse kulturoplevelser, krøllede ideer og kreative ildsjæle. Med intet mindre end 5 scener, en biograf, et teater, øvelokaler, madbod, arkadespil, en brætspilscafé – og mere end tyve foreninger og klubber – sker der rigtig meget!</p>
                </div>
            </div>

            <div class="container_infografik">

            </div>
            <br>
            <div class="container_events">
                <h2 class="single_h2">KOMMENDE EVENTS</h2>
                <div class="content_events">
                    <div class="karrusel_pil karrusel_pil1 none">
                        <div class="absolute"></div>
                    </div>
                    <div class="karrusel_pil karrusel_pil3 none"></div>
                    <div class="karrusel_pil karrusel_pil5 none"></div>
                    <!--            kode fra Bibi-->


                    <!--Modalvinduet udfyldes med informationer fra json-filen. Vinduet er som udgangspunkt skjult, men kommer frem ved klik på eventets billede eller 'læs mere'knappen-->
                    <section id="modal">
                        <div id="modal-content">
                            <!--Lukknap man kan klikke på for at lukke modalvinduet. Knappen er to streger, der er stylet til et kryds vha. css.  Alternativt kan man klikket ved siden af modalvinduet. -->
                            <div class="luk">
                                <div class=lukknap>
                                    <div class="line one"></div>
                                    <div class="line two"></div>
                                </div>
                            </div>
                            <!--her indsættes eventets billede-->
                            <img class="modal-billede" src="" alt="">
                            <h2></h2>
                            <!--container, der er grid for informationer, der skal stå sammen-->
                            <div class="subContainer">
                                <p class="data-dato"></p>
                                <p class="data-tidspunkt"></p>
                                <p class="data-venue"></p>
                            </div>
                            <p class="data-tekst"></p>
                            <p class="data-pris"></p>
                            <!--knap til køb af billet-->
                            <button class="data-button"></button>
                        </div>
                    </section>
                    <!-- indeholder data hentet fra json-filen omkring alle events'ne. data-content er det sted, hvor informationen der er hentet og klonet, bliver sat ind. -->
                    <div class="data-content"></div>
                    <!--pilene bliver brugt til at klikke på, idet events'ne indgår i en karrusel på forsiden af sitet-->
                    <div class="karrusel_pil karrusel_pil2">
                        <div class="absolute"></div>
                    </div>
                    <div class="karrusel_pil karrusel_pil4 none"></div>
                    <div class="karrusel_pil karrusel_pil6 none"></div>
                </div>
                <!--templaten er ikke synlig på sitet, men er der hvor alle oplysningerne fra json-filen bliver sat ind og klonet, inden de så bliver tilføjet sitet i data-content, som er destinationen for oplysningerne-->
                <template id="data-template">
                    <div>
                        <img class="topImage" src="" alt="">
                        <h2></h2>
                        <p class="data-teasertekst"></p>
                        <p class="data-dato"></p>
                        <p class="data-pris"></p>
                        <button class="data-button"></button>
                    </div>
                </template>



                <!--            kode fra Bibi-->
                <div class="knapTilAlleEvents">
                    <a href="events.php">
                        <p>Se alle events</p>
                    </a>
                </div>
            </div>
            <div class="container_aktiviteter">
                <div class="content_bastard">
                    <a href="singelview.php?id=51"><img src="img/bastard.jpg" alt="billede fra bastard café"></a>
                </div>
                <div class="content_teater">
                    <a href="https://www.teater-huset.dk" target="_blank"><img src="img/teater.jpg" alt="billede fra teater huset"></a>
                </div>
                <div class="content_evoo">
                    <a href="singelview.php?id=57"><img src="img/evoo.jpg" alt="billede af mad fra evoo street kitchen"></a>
                </div>
                <div class="content_musik">
                    <a href="singelview.php?id=59"><img src="img/musik.jpg" alt="billede fra musikcaféen"></a>
                </div>
                <div class="content_bio">
                    <a href="singelview.php?id=55"><img src="img/bio.jpg" alt="billede fra husets biograf"></a>
                </div>
                <div class="content_bipbip">
                    <a href="singelview.php?id=61"><img src="img/bipbip.jpg" alt="billede for bip bip bar"></a>
                </div>
            </div>
            <!--        her skal indsættes php-->
            <?php include "footer.html"; ?>
            <!--        her skal indsættes php-->

        </div>

    </div>
    <div class="margin2"></div>



    <script src="Javacript/script_header.js"></script>
    <script src="Javacript/script_index.js"></script>
    <script src="Javacript/script_events_index.js"></script>

</body>

</html>
