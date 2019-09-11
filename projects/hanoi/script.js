window.onload = start;

// ilosc blockow
var how_many_blocks = 4;
// ktora pozycja bloku
var which_block_position = 6;
// zmienna czas start
var time_start = undefined;
// zmienna wynik
var score = 0;
// dzwieki
var click1_audio = new Audio("sounds/click1.wav");
var click2_audio = new Audio("sounds/click2.wav");
var win_audio = new Audio("sounds/win.wav");

//! FUNCTION start()
function start() {

    const turret1_id = document.getElementById("turret1");

    //TODO dodaj i wyswietl bloki na podstawie how_many_blocks
    switch (how_many_blocks) {

        case 3:
            //? dodaje przeznaczona pozycje do kazdego block1-3
            for (i = how_many_blocks; i > 0; i--) {
                document.querySelector(".block" + i + "").classList.add("block" + which_block_position + "_position");
                document.querySelector(".block" + i + "").classList.remove("hidden");
                which_block_position--;
            }
            turret1_id.removeChild(turret1_id.childNodes[5]);
            turret1_id.removeChild(turret1_id.childNodes[4]);
            turret1_id.removeChild(turret1_id.childNodes[3]);
            break;

        case 4:
            //? dodaje przeznaczona pozycje do kazdego block1-4
            for (i = how_many_blocks; i > 0; i--) {
                document.querySelector(".block" + i + "").classList.add("block" + which_block_position + "_position");
                document.querySelector(".block" + i + "").classList.remove("hidden");
                which_block_position--;
            }
            turret1_id.removeChild(turret1_id.childNodes[5]);
            turret1_id.removeChild(turret1_id.childNodes[4]);
            break;

        case 6:
            //? dodaje przeznaczona pozycje do kazdego block1-6
            for (i = how_many_blocks; i > 0; i--) {
                document.querySelector(".block" + i + "").classList.add("block" + i + "_position");
            }
            break;

    }

} // end start()

//! FUNCTION click_turret(turret_num) - turret_num = numer kliknietej wiezy
function click_turret(turret_num) {

    // id turret1-3
    const turret1_id = document.getElementById("turret1");
    const turret2_id = document.getElementById("turret2");
    const turret3_id = document.getElementById("turret3");
    const turret_clicked_id_1stChild = document.getElementById("turret" + turret_num + "").firstChild;

    // turret$ first-child (.turret_block_catch)
    const turret_1stChild = document.querySelector("#turret" + turret_num + " div:first-child");

    // turret$ 2nd-child (.block$)
    const turret1_bufor = document.querySelector("#turret1_box div:first-child");
    const turret2_bufor = document.querySelector("#turret2_box div:first-child");
    const turret3_bufor = document.querySelector("#turret3_box div:first-child");

    // sprawdza czy .turret_block_catch w kazdym turrecie jest pelny czy pusty (t/f)
    const catch1_empty = turret1_bufor.children.length === 0;
    const catch2_empty = turret2_bufor.children.length === 0;
    const catch3_empty = turret3_bufor.children.length === 0;

    // zwraca true jesli wszystkie turret_bufory sa puste (t/f)
    const catch_empty_all = (catch1_empty === true && catch2_empty === true && catch3_empty === true);

    // zmienna turret_bufor i turret_id
    var turret_bufor = undefined;
    var turret_id = undefined;

    //zmienna ktory block jest podniesiony
    var which_block_catched_num = 0;

    // numer pierwszego blocku w kliknietym turrecie
    var block_firstChild_num = 0;


    //* if wszystkie catch boxy sa puste
    if (catch_empty_all === true && turret_1stChild !== null) {

        //* if pierwsze klikniecie -> zacznij odliczas czas
        if (time_start === undefined) time_start = new Date().getTime();

        //TODO po kliknieciu dodaj score++
        score++;
        //* if dodaje zera do score zeby zawsze byly wyswietlone 4 cyfry i wpisz je do klasy z wynikiem
        if (score < 10) document.querySelector(".info_score_points").innerHTML = '000' + score;
        else if (score < 100 && score >= 10) document.querySelector(".info_score_points").innerHTML = '00' + score;
        else if (score < 1000 && score >= 100) document.querySelector(".info_score_points").innerHTML = '0' + score;
        else if (score >= 1000) document.querySelector(".info_score_points").innerHTML = score;

        //TODO odtworz dzwiek click1
        click1_audio.load();
        click1_audio.play();

        //? wybierz pierwszy dostepny block z kliknitego turreta
        for (i = 1; i <= how_many_blocks; i++) {
            if (turret_1stChild.getAttribute("class").indexOf("block" + i + "") === 0) {
                which_block_catched_num = i;
                break;
            }
        }

        //TODO inicjalizacja adresu divow na podstawie kliknietego turreta
        switch (turret_num) {
            case 1:
                turret_bufor = document.querySelector("#turret1_box div:first-child");
                turret_id = document.getElementById("turret1");
                break;
            case 2:
                turret_bufor = document.querySelector("#turret2_box div:first-child");
                turret_id = document.getElementById("turret2");
                break;
            case 3:
                turret_bufor = document.querySelector("#turret3_box div:first-child");
                turret_id = document.getElementById("turret3");
                break;
        }

        //TODO usun 1stChild z turret_id
        turret_id.removeChild(turret_id.childNodes[0]);

        // TODO odkryj .turret_block_catch i dodaj pierwszy blok ze stosu
        turret_bufor.classList.remove("hidden");
        turret_bufor.innerHTML = '<div class="block' + i + '">';

        return true;
    }

    //* else if ktorys catch jest pelny
    else if (catch_empty_all === false) {

        // ktory turret zlapal jaki block
        var which_block_catched_bufor = null;

        //? sprawdz ktory turret zlapal blocka
        for (i = 1; i <= 3; i++) {
            //* if bufor turretu$ jest pusty to kontynuuj
            if (document.querySelector("#turret" + i + "_box .turret_block_catch div:first-child") === null) continue;

            which_block_catched_bufor = document.querySelector("#turret" + i + "_box .turret_block_catch div:first-child");
            break;
        }

        //? wybierz i sprawdz ktory block jest zlapany
        for (i = 1; i <= how_many_blocks; i++) {
            if (which_block_catched_bufor.getAttribute("class").indexOf("block" + i + "") === 0) {
                which_block_catched_num = i;
                break;
            }
        }


        //! sprawdz ktory block lezy w kliknietym turecie

        //* if klikniety turret nie jest pusty
        if (turret_clicked_id_1stChild !== null) {
            //? wybierz i sprawdz ktory 1stChild block jest w 1 turrecie
            for (i = 1; i <= how_many_blocks; i++) {
                if (turret_clicked_id_1stChild.getAttribute("class").search("block" + i + "") === 0) {
                    block_firstChild_num = i;
                    break;
                }
            }
        }

        //* if zlapany block jest wiekszy od 1stChild w kliknietym turrecie zwroc false
        if(which_block_catched_num>block_firstChild_num && block_firstChild_num!==0) {
            return false;
        }

        //* dodaj do turret_num ktory turret zostal klikniety
        if (turret_num === 1) turret_id = turret1_id;
        else if (turret_num === 2) turret_id = turret2_id;
        else if (turret_num === 3) turret_id = turret3_id;

        //TODO dodaj pozycje do zlapanego boxa i umiesc go w kliknietym turrecie
        switch (turret_id.children.length) {
            case 5:
                turret_id.insertAdjacentHTML("afterbegin", '<div class="block' + which_block_catched_num + ' block1_position"></div>');
                break;
            case 4:
                turret_id.insertAdjacentHTML("afterbegin", '<div class="block' + which_block_catched_num + ' block2_position"></div>');
                break;
            case 3:
                turret_id.insertAdjacentHTML("afterbegin", '<div class="block' + which_block_catched_num + ' block3_position"></div>');
                break;
            case 2:
                turret_id.insertAdjacentHTML("afterbegin", '<div class="block' + which_block_catched_num + ' block4_position"></div>');
                break;
            case 1:
                turret_id.insertAdjacentHTML("afterbegin", '<div class="block' + which_block_catched_num + ' block5_position"></div>');
                break;
            case 0:
                turret_id.insertAdjacentHTML("afterbegin", '<div class="block' + which_block_catched_num + ' block6_position"></div>');
                break;
        }

        //TODO odtworz dzwiek click2
        click2_audio.load();
        click2_audio.play();

        turret1_bufor.classList.add("hidden");
        turret2_bufor.classList.add("hidden");
        turret3_bufor.classList.add("hidden");

        if (catch1_empty === false) {
            turret1_bufor.removeChild(turret1_bufor.childNodes[0]);
        }
        if (catch2_empty === false) {
            turret2_bufor.removeChild(turret2_bufor.childNodes[0]);
        }
        if (catch3_empty === false) {
            turret3_bufor.removeChild(turret3_bufor.childNodes[0]);
        }

        check_win();

        return true;
    }

    else {
        return false;
    }

} // end click_turret

//! FUNCTION check_win() - sprawdza czy udalo sie rozwiazac, jesli to to wywoolaj win()
function check_win() {

    // zmienna #turret3
    const check_turret3 = document.querySelector("#turret3").children;

    //* if ilosc blockow to 3 -> sprawdz czy turret3 jest ulozony
    if (how_many_blocks === 3) {
        //TODO if ktorys z blockow jest pusty = return false
        if (
            check_turret3[0] === undefined ||
            check_turret3[1] === undefined ||
            check_turret3[2] === undefined
        ) {
            return false;
        }
        //TODO jesli wszystkie blocki sie zgadzaja wywolaj win()
        else if (
            check_turret3[0].getAttribute("class").search("block1") === 0 &&
            check_turret3[1].getAttribute("class").search("block2") === 0 &&
            check_turret3[2].getAttribute("class").search("block3") === 0
        ) {

            win();

            return true;
        }
    }
    //* if ilosc blockow to 4 -> sprawdz czy turret3 jest ulozony
    else if (how_many_blocks === 4) {
        //TODO if ktorys z blockow jest pusty = return false
        if (
            check_turret3[0] === undefined ||
            check_turret3[1] === undefined ||
            check_turret3[2] === undefined ||
            check_turret3[3] === undefined
        ) {
            return false;
        }
        //TODO jesli wszystkie blocki sie zgadzaja wywolaj win()
        else if (
            check_turret3[0].getAttribute("class").search("block1") === 0 &&
            check_turret3[1].getAttribute("class").search("block2") === 0 &&
            check_turret3[2].getAttribute("class").search("block3") === 0 &&
            check_turret3[3].getAttribute("class").search("block4") === 0
        ) {

            win();

            return true;
        }
    }
    //* if ilosc blockow to 6 -> sprawdz czy turret3 jest ulozony
    else if (how_many_blocks === 6) {
        //TODO if ktorys z blockow jest pusty = return false
        if (
            check_turret3[0] === undefined ||
            check_turret3[1] === undefined ||
            check_turret3[2] === undefined ||
            check_turret3[3] === undefined ||
            check_turret3[4] === undefined ||
            check_turret3[5] === undefined
        ) {
            return false;
        }
        //TODO jesli wszystkie blocki sie zgadzaja wywolaj win()
        else if (
            check_turret3[0].getAttribute("class").search("block1") === 0 &&
            check_turret3[1].getAttribute("class").search("block2") === 0 &&
            check_turret3[2].getAttribute("class").search("block3") === 0 &&
            check_turret3[3].getAttribute("class").search("block4") === 0 &&
            check_turret3[4].getAttribute("class").search("block5") === 0 &&
            check_turret3[5].getAttribute("class").search("block6") === 0
        ) {

            win();

            return true;
        }
    }

} // end check_win()

//! FUNCTION newgame() - po kliknieciu rozpoczna grę od nowa
function new_game() {

    const reset_block_catch = document.getElementsByClassName("turret_block_catch");

    which_block_position = 6;
    time_start = undefined;
    score = 0;

    document.getElementById("game").innerHTML = '<div class="game_box">\n' +
        '\n' +
        '            <div id="turret1_box">\n' +
        '                <div class="turret_block_catch hidden"></div>\n' +
        '                <div id="turret1" onclick="click_turret(1)"><div class="block1"></div><div class="block2"></div><div class="block3"></div><div class="block4"></div><div class="block5"></div><div class="block6"></div></div>\n' +
        '                <div class="turret1_floor"></div>\n' +
        '            </div>\n' +
        '\n' +
        '            <div id="turret2_box">\n' +
        '                <div class="turret_block_catch hidden"></div>\n' +
        '                <div id="turret2" onclick="click_turret(2)"></div>\n' +
        '                <div class="turret2_floor"></div>\n' +
        '            </div>\n' +
        '\n' +
        '            <div id="turret3_box">\n' +
        '                <div class="turret_block_catch hidden"></div>\n' +
        '                <div id="turret3" onclick="click_turret(3)"></div>\n' +
        '                <div class="turret3_floor"></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

    document.getElementsByClassName("info_score_points")[0].innerHTML = "0000";

    reset_block_catch[0].innerHTML = "";
    reset_block_catch[1].innerHTML = "";
    reset_block_catch[2].innerHTML = "";

    reset_block_catch[0].classList.add("hidden");
    reset_block_catch[1].classList.add("hidden");
    reset_block_catch[2].classList.add("hidden");

    //* sprawdz ktora ilosc blockow jest zaznaczona (checked)
    if (document.getElementById("input_one").checked === true) how_many_blocks = 3;
    else if (document.getElementById("input_two").checked === true) how_many_blocks = 4;
    else if (document.getElementById("input_three").checked === true) how_many_blocks = 6;

    start();

} // end new_game()

//! FUNCTION win() - jesli udalo sie ulozyc turret na 3 platformie
function win() {

    // zmienna #game
    const game_id = document.querySelector("#game");

    // zmienne czasu
    var time_end = new Date().getTime();
    var time_dist = time_end - time_start;
    var minutes = Math.floor((time_dist % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time_dist % (1000 * 60)) / 1000);

    if (seconds < 10) seconds = "0" + seconds;

    //TODO odtworz dzwiek win
    win_audio.play();

    game_id.innerHTML = '<p class="win">Gratulację! Ułożyłeś/aś Wieżę Hanoi z <span style="color: #dfc76e">' + how_many_blocks + '</span> bloków! Twoja ilość ruchów to <span style="color: #dfc76e">' + score + '</span>, a twój czas to <span style="color: #dfc76e">' + minutes + ',' + seconds + 'min</span>.</p>';

} // end win()