<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events - Huset KBH</title>
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="event.css">
    <link rel="stylesheet" href="footer.css">

    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,700,900" rel="stylesheet">
</head>

<body>

    <div class="margin1"></div>
    <div class="page_container_events">
        <!--        her skal indsættes php-->
        <?php include "header.html"; ?>
        <!--        her skal indsættes php-->

        <div class="eventside">

            <div class="event_button">
                <button class="event-item filter_alle" data-kategori="alle">Alle</button>
                <button class="event-item filter_film" data-kategori="film">Film</button>
                <button class="event-item filter_musik" data-kategori="musik">Musik</button>
                <button class="event-item filter_teater" data-kategori="teater">Teater</button>
            </div>

            <section id="event_section">
                <section id="modal">

                    <div id="modal-content">
                        <div class="luk">
                            <div class=lukknap>
                                <div class="line one"></div>
                                <div class="line two"></div>
                            </div>
                        </div>
                        <img class="modal-billede" src="" alt="">
                        <h2></h2>
                        <div class="subContainer">
                            <p class="data-dato"></p>
                            <p class="data-tidspunkt"></p>
                            <p class="data-venue"></p>
                        </div>
                        <p class="data-tekst"></p>
                        <p class="data-pris"></p>
                        <button class="data-button"></button>
                    </div>

                </section>

                <section class="main">
                    <div class="data-content"></div>
                    <template id="data-template">
                        <div class="event_content">
                            <img class="topImage" src="" alt="">
                            <h2></h2>
                            <p class="data-teasertekst"><span> <a href="">Læs mere</a></span></p>
                            <p class="data-dato"></p>
                            <p class="data-pris"></p>
                            <button class="data-button"></button>
                        </div>
                    </template>
                </section>
            </section>
        </div>
        <!--        her skal indsættes php-->

        <!--        her skal indsættes php-->
    </div>
    <div class="margin2"></div>
    <script src="Javacript/script_header.js"></script>
    <script src="Javacript/script_events.js"></script>

</body>

</html>
