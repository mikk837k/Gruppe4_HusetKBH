<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="skab.css">
    <link rel="stylesheet" href="footer.css">
    <link rel="stylesheet" href="header.css">

    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,700,900" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Skab events - Huset KBH</title>
</head>

<body>
    <div class="margin1"></div>
    <div class="page_container_skab_events">
        <!--        her skal indsættes php-->
        <?php include "header.html"; ?>
        <!--        her skal indsættes php-->
        <div class="container_skab_events">
            <div class="section1">
                <img src="img/skab_events.jpg" alt="skab_events">

            </div>
            <div class="section2">
                <h1>SKAB DINE EGNE EVENTS</h1>

                <p>Har du idéer til kulturelle events, klubber eller festivaler? I Huset har du mulighed for at lave dine egne kulturarrangementer.</p>
            </div>
            <div class="section3">
                <h2>1500 events årligt</h2>
                <p>
                    Hvert år præsenterer Huset omkring 1500 events arrangeret af og sammen med hundredevis af frivillige ildsjæle og kulturelle iværksættere. Huset er en platform for samskabelse, frivillighed og kulturel iværksætteri. Vi arbejder til dagligt med at udvikle sjove idéer til alternative og unikke oplevelser i samarbejdet med forskellige partnere. Vi går meget ind for co-creation og samskabelse, da det er vores erfaring, at der opstår noget helt specielt, når man inddrager flere parter til at skabe nye idéer og løsninger.</p>
            </div>
            <div class="section4">

                <h2>Huset som samarbejdspartner</h2>
                <p>
                    Som samarbejdspartner kan vi bl.a. tilbyde fysiske rammer, erfaring og viden, hjælp til planlægning og afvikling, kontakt til interessante partnere osv. Hvis du har et fedt projekt, et event eller en festival, men måske mangler en venue og en samarbejdspartner til at hjælpe med at løfte projektet, så kontakt endelig Huset.
                </p>
            </div>

            <div class="section5">


                <div class="container">
                    <h2 class="title">KONTAKT OS</h2>
                    <form action="kontakt_formular">

                        <label>Navn</label>
                        <input type="text" id="navn" name="dit_navn" placeholder="Dit navn..">

                        <label>Telefon</label>
                        <input type="text" id="telefon" name="telefon" placeholder="Dit telefon nr..">

                        <label>E-mail</label>
                        <input type="text" id="email" name="email" placeholder="Din email..">


                        <textarea id="text" name="message" placeholder="Send dit spørgsmål til vores mail, og vi svarer hurtigst muligt..." style="height: 120px"></textarea>
                        <input type="submit" value="Send">
                    </form>
                </div>
            </div>
            <div class="section6">
                <h3>Mangler du et sted at afholde et privat event?</h3>

                <p>Hvis du står og mangler et sted at afholde et privat event, kan du se mere om Husets udlejningslokaler <a href="">her </a></p>
            </div>


        </div>
        <!--        her skal indsættes php-->
        <?php include "footer.html"; ?>
        <!--        her skal indsættes php-->
    </div>
    <div class="margin2"></div>
    <script src="Javacript/script_header.js"></script>
    <script src="Javacript/script_skab.js"></script>

</body>

</html>
