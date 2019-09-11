window.onload = start;

// sentencje
var content = ["Bez pracy nie ma kołaczy", "Lepszy wróbel w garści niż gołąb na dachu", "Apetyt rośnie w miarę jedzenia", "Co ma wisieć nie utonie", "Grosz do grosza a będzie kokosza", "Nosił wilk razy kilka ponieśli i wilka", "Na bezrybiu i rak ryba", "Jak Kuba Bogu tak Bóg Kubie", "Kuć żelazo póki gorące", "Kto pyta nie błądzi"];

// znaki polskiego alfebetu (+ Q V X)
var tab_char = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż']; // 35 znakow

// przechowuje znaki wylosowanej sentencji
var tab_sentence = [];

// liczba skuch
var loss = 2;

// wylosuj
var random = Math.floor(Math.random() * content.length);

// id & class
var sentence_box = document.getElementById("sentence");
var letter_box = document.getElementsByClassName("letter_box");

// 9 czesci hangmana
var hangman1_box = document.getElementById("hangman1");
var hangman2_box = document.getElementById("hangman2");
var hangman3_box = document.getElementById("hangman3");
var hangman4_box = document.getElementById("hangman4");
var hangman5_box = document.getElementById("hangman5");
var hangman6_box = document.getElementById("hangman6");
var hangman7_box = document.getElementById("hangman7");
var hangman8_box = document.getElementById("hangman8");
var hangman9_box = document.getElementById("hangman9");

// dzwieki
var audio_corerct = new Audio("sounds/correct.wav");
var audio_fail = new Audio("sounds/fail.wav");
var audio_win = new Audio("sounds/win.wav");
var audio_lose = new Audio("sounds/lose.wav");


/* ----------------------------------------------------- */
//! FIRST FUNCTION start
function start() {
    sentence_box = document.getElementById("sentence");

    // TODO dodaj wylosowane haslo do id=sentence
    sentence_box.innerHTML = content[random];

    // ukryta sentencja "_"
    var hidden_sentence = "";
    // zmienna sentencja (wszystkie litery sa duze)
    var sentence = sentence_box.textContent.toUpperCase();


    //? wypisz 35 litery alfabetu
    for (i = 0; i < tab_char.length; i++) {
        letter_box[i].childNodes[0].innerHTML = tab_char[i];
        let random = Math.floor(Math.random() * 36 + 1); //losuj od 1 do 35
        // console.log(":", random);
    }

    //? dodaj znaki z sentencji do tablicy i zakryj je znakiem "_"
    for (i = 0; i < sentence.length; i++) {

        if (sentence.charAt(i) !== " ") hidden_sentence += "_";
        else hidden_sentence += " ";

        tab_sentence[i] = sentence.charAt(i);
    }

    //TODO dodaj ukryta sentencje do id=sentence
    sentence_box.innerHTML = hidden_sentence;

    console.log("---------");
} // end func start


//! FUNCTION check - wywoluje sie po kliknieciu w odpowiedni div
function check(nr) {

    //* jesli box jest juz false lub true to nie mozna kliknac
    if (letter_box[nr - 1].classList.item(1) === "true" || letter_box[nr - 1].classList.item(1) === "false") return false;

    // id & class
    sentence_box = document.getElementById("sentence");
    letter_box = document.getElementsByClassName("letter_box");

    // kliknieta litera
    var char = letter_box[nr - 1].textContent;
    // zamien string na array
    var sentence_reveal = sentence_box.textContent.split("");
    // bufor sentencji array jako string
    var sentencje_bufor = sentence_reveal.join('');
    // zwraca array jako string
    var sentence_join;

    // 9 czesci hangmana
    hangman1_box = document.getElementById("hangman1");
    hangman2_box = document.getElementById("hangman2");
    hangman3_box = document.getElementById("hangman3");
    hangman4_box = document.getElementById("hangman4");
    hangman5_box = document.getElementById("hangman5");
    hangman6_box = document.getElementById("hangman6");
    hangman7_box = document.getElementById("hangman7");
    hangman8_box = document.getElementById("hangman8");
    hangman9_box = document.getElementById("hangman9");

    // TODO dodaje class=false do litery, potem sprawdza jesli ok, usuwa
    letter_box[nr - 1].classList.add("false");

    // ? odkrywa wybrane znaki lub dodaje czesc hangmana
    for (i = 0; i < tab_sentence.length; i++) {

        //* if znak jest w sentencji, dodaj klase true i usuwa false
        if (char === tab_sentence[i]) {

            sentence_reveal[i] = char;
            letter_box[nr - 1].classList.remove("false");
            letter_box[nr - 1].classList.add("true");
        }

    }

    // zwraca array jako string (inicjalizacja)
    sentence_join = sentence_reveal.join('');

    //* if w sentence_reveal nie ma juz "_" to
    if (sentence_reveal.indexOf("_") === -1) {
        win();
    }

    //* if zaden znak nie zostal dodany dodaj czesc hangmana
    if (sentencje_bufor === sentence_join) {
        audio_corerct.pause();
        audio_fail.load();
        audio_fail.play();
        if (loss === 2) {
            hangman2_box.classList.remove("visible");
            loss++;
        }
        else if (loss === 3) {
            hangman3_box.classList.remove("visible");
            loss++;
        }
        else if (loss === 4) {
            hangman4_box.classList.remove("visible");
            loss++;
        }
        else if (loss === 5) {
            hangman5_box.classList.remove("visible");
            loss++;
        }
        else if (loss === 6) {
            hangman6_box.classList.remove("visible");
            loss++;
        }
        else if (loss === 7) {
            hangman7_box.classList.remove("visible");
            loss++;
        }
        else if (loss === 8) {
            hangman8_box.classList.remove("visible");
            loss++;
        }
        else if (loss === 9) {
            hangman9_box.classList.remove("visible");
            lose();
        }
    }
    //* else dodaj trafiona litere do sentencji
    else {
        audio_fail.pause();
        audio_corerct.load();
        audio_corerct.play();

        // TODO dodaj do id=sentence zmieniona sentencje
        sentence_box.innerHTML = sentence_join;
    }


} // end func check


//! FUNCTION win - wywoluje sie gdy wszystkie litery sa odkryte
function win() {
    audio_win.play();

    // zmienna z id=letters
    var letters_box = document.getElementById("letters");
    // zmienna ahref z napisalem "JESZCZE RAZ?"
    var again = '<a href="index.html">JESZCZE RAZ?</a>';

    // TODO dodaje do id=letters div z win tekstem
    letters_box.innerHTML = '<div class="win">GRATULACJE UDALO SIE! :) ' + again + '</div>';
} // end func win


//! FUNCTION lose - wywoluje sie w czasie dodanie 9 czesci hangmana
function lose() {
    audio_lose.play();

    // zmienna z id=letters
    var letters_box = document.getElementById("letters");
    // zmienna ahref z napisalem "JESZCZE RAZ?"
    var again = '<a href="index.html">JESZCZE RAZ?</a>';

    // TODO pokaz prawidlowe haslo
    sentence_box.innerHTML = content[random].toUpperCase();
    // TODO dodaje do id=letters div z lose tekstem
    letters_box.innerHTML = '<div class="lose">NIE UDALO SIE! :( ' + again + '</div>';

} // end func lose