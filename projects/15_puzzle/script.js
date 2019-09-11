window.onload = start;

// arr liczb od 1-15 i pustego
var tab_num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ""];

// arr z prawidlowym rozwiazaniem
const tab_num_solution = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ""];

// array zawiera liczby poukladane w stanie rzeczywistym
var tab_num_real = [];

// wszystkie boxy z liczbami od 1-15 + ""
var box_class = document.getElementsByClassName("num_box");


// czas
var start_time = new Date().getTime();
var stop_time = new Date().getTime();

// wynik/ilosc skuch
var fails = 0;

// pierwsze klikniecie uruchamia czas
var first_click = 0;

// ilosc wszystkich boxow
const quantity_boxes = 16;

// dziewki audio
var click_audio = new Audio("sounds/click.wav");
var win_audio = new Audio("sounds/win.wav");


/* ---------------------------------------------- */

//! FUNCTION start() - window.onload
function start() {
    // box_class = document.getElementsByClassName("num_box");

    //? wylosuj z tab_num[] liczbe i dodaj do boxow (+usun dodana liczbe)
    for (i = 0; i < quantity_boxes; i++) {

        // losuj liczbe wedlug tab_num.length
        let random = Math.floor(Math.random() * tab_num.length);

        //* if random jest pusty zmien bgcolor w boxie z #eee na #555
        if(tab_num[random]==="") {
            box_class[i].classList.remove("show_class");
            box_class[i].classList.add("hidden_class");
        }

        // TODO wpisz liczbe do boxu[i] i usun z arr wylosowana liczbe
        box_class[i].innerHTML = tab_num[random];
        tab_num.splice(random, 1);


        // TODO jesli liczby maja byc ulozone po kolei
        /*if (tab_num[i] !== "") {
        }
        else {
            box_class[i].classList.remove("show_class");
            box_class[i].classList.add("hidden_class");
        }
        box_class[i].innerHTML = tab_num[i];*/
    }

} // end start()

//! FUNCTION click_func(clicked_box) - wywolywana po kliknieciu
function click_func(clicked_box) {

    // pozycja pustego boxa
    var empty_box_pos = 0;

    //* if pierwsze klikniecie, zaczyna odliczac czas
    if(first_click===0) {
        start_time = new Date().getTime();
        first_click++;
    }

    //? zapisz w tab_num_real[] rzeczywisty uklad liczb w boxach
    for (i = 0; i < quantity_boxes; i++) {
        tab_num_real[i] = box_class[i].textContent;
        if (tab_num_real[i] === "") empty_box_pos = i;
    }

    //* if sprawdza czy pusty box znajduje sie w poblizu kliknietego boxa
    // TODO gorny box
    if (clicked_box + 4 === empty_box_pos) {
        change_boxes(clicked_box, empty_box_pos);
        check_solution();

        // TODO play audio if click
        click_audio.load();
        click_audio.play();
    }
    // TODO prawy box
    else if (clicked_box - 1 === empty_box_pos && clicked_box !== 4 && clicked_box !== 8 && clicked_box !== 12) {
        change_boxes(clicked_box, empty_box_pos);
        check_solution();

        // TODO play audio if click
        click_audio.load();
        click_audio.play();
    }
    // TODO dolny box
    else if (clicked_box - 4 === empty_box_pos) {
        change_boxes(clicked_box, empty_box_pos);
        check_solution();

        // TODO play audio if click
        click_audio.load();
        click_audio.play();
    }
    // TODO lewy box
    else if (clicked_box + 1 === empty_box_pos && clicked_box !== 11 && clicked_box !== 7 && clicked_box !== 3) {
        change_boxes(clicked_box, empty_box_pos);
        check_solution();

        // TODO play audio if click
        click_audio.load();
        click_audio.play();
    }

} // end click_func(clicked_box)

//! FUCNTION change_boxes(filled, empty) - zamienia boxy miejscami
function change_boxes(filled, empty) {

    // przechowuja content z kliklietego boxa(filled) i z pustego (empty)
    var filled_bufor = box_class[filled].textContent;
    var empty_bufor = box_class[empty].textContent;

    // TODO zamien niepusty box na pusty
    box_class[filled].innerHTML = empty_bufor;
    box_class[filled].classList.remove("show_class");
    box_class[filled].classList.add("hidden_class");

    // TODO zamien pusty box na niepusty
    box_class[empty].innerHTML = filled_bufor;
    box_class[empty].classList.remove("hidden_class");
    box_class[empty].classList.add("show_class");

} // end change_boxes(filled, empty)

//! FUNCTION check_solution() - sprawdza czy rozwiazanie sie zgadza
function check_solution() {

    // id wyniku #score
    var score_id = document.getElementById("score");
    // ilosc poprawnych boxow
    var correct = 0;

    //? zapisz w tab_num_real[] rzeczywisty uklad liczb w boxach
    for (i = 0; i < quantity_boxes; i++) {
        tab_num_real[i] = box_class[i].textContent;
        if (tab_num_real[i] === tab_num_solution[i]) correct++;
    }

    //* if correct=16 wywolaj win() else fails++ i wpisz wynik do score_id
    if (correct === 16) {
        win();
    }
    else {
        fails++;
        if (fails < 10) score_id.innerHTML = "00" + fails;
        else if (fails < 100) score_id.innerHTML = "0" + fails;
        else score_id.innerHTML = fails;
    }

} // end check_solution()

//! FUNCTION win() - jesli wszystkie boxy sa prawidlowo ulozone
function win() {

    // id = game_box
    var game_box = document.getElementById("game_box");
    // inicjalizuje stop_time
    stop_time = new Date().getTime();
    // czas liczony od nacisniecia pierwszego boxu do wywolania win()
    var time_result = stop_time-start_time;
    // minuty
    var minutes = Math.floor((time_result % (1000 * 60 * 60)) / (1000 * 60));
    // sekundy
    var seconds = Math.floor((time_result % (1000 * 60)) / 1000);

    // TODO play audio if win
    win_audio.load();
    win_audio.play();

    //* dodaj "0" jesli sekundy sa mniejsze od 10
    if(seconds<10) seconds = "0"+seconds;

    // TODO dodaj style do game_boxa
    game_box.style.backgroundImage = "linear-gradient(to bottom, #5ad62e, #74ce22, #87c619, #96bd16, #a1b518)";
    game_box.style.fontSize = "4.5em";
    game_box.style.textAlign = "left";
    game_box.style.color = "#293847";
    game_box.style.fontWeight = "700";

    // TODO dodaje koncowa wiadomosc do #game_box
    game_box.innerHTML = '<p class="winner">Gratulacje! Udalo Ci się! Twoja ilość skuch to <span style="color: darkred">' + fails + '</span>, a twój czas to <span style="color: darkred">'+minutes+','+seconds+'</span>min.</p>';

} // end win()
