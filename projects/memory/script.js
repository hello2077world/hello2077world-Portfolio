window.onload = add_cards;

var score = 0;
var correct = 0;
var hm_cards = 1;
const boxes = 42;

var game_box = document.getElementById("game");
var cards_box = document.getElementsByClassName("cards");
var score_id = document.getElementById("score_int");

var bufor1 = "";
var bufor2 = "";
var which_card1 = "";
var which_card2 = "";
var check_class = NaN;

var time_now = new Date().getTime();
var time_start = 0;

var tab_mem = [
    '<img src="img/mem0.png">',
    '<img src="img/mem0.png">',
    '<img src="img/mem1.png">',
    '<img src="img/mem1.png">',
    '<img src="img/mem2.png">',
    '<img src="img/mem2.png">',
    '<img src="img/mem3.png">',
    '<img src="img/mem3.png">',
    '<img src="img/mem4.png">',
    '<img src="img/mem4.png">',
    '<img src="img/mem5.png">',
    '<img src="img/mem5.png">',
    '<img src="img/mem6.png">',
    '<img src="img/mem6.png">',
    '<img src="img/mem7.png">',
    '<img src="img/mem7.png">',
    '<img src="img/mem8.png">',
    '<img src="img/mem8.png">',
    '<img src="img/mem9.png">',
    '<img src="img/mem9.png">',
    '<img src="img/mem10.png">',
    '<img src="img/mem10.png">',
    '<img src="img/mem11.png">',
    '<img src="img/mem11.png">',
    '<img src="img/mem12.png">',
    '<img src="img/mem12.png">',
    '<img src="img/mem13.png">',
    '<img src="img/mem13.png">',
    '<img src="img/mem14.png">',
    '<img src="img/mem14.png">',
    '<img src="img/mem15.png">',
    '<img src="img/mem15.png">',
    '<img src="img/mem16.png">',
    '<img src="img/mem16.png">',
    '<img src="img/mem17.png">',
    '<img src="img/mem17.png">',
    '<img src="img/mem18.png">',
    '<img src="img/mem18.png">',
    '<img src="img/mem19.png">',
    '<img src="img/mem19.png">',
    '<img src="img/mem20.png">',
    '<img src="img/mem20.png">'
]

var tab_mem2 = [
    '<img src="img/mem0.png">',
    '<img src="img/mem0.png">',
    '<img src="img/mem1.png">',
    '<img src="img/mem1.png">',
    '<img src="img/mem2.png">',
    '<img src="img/mem2.png">',
    '<img src="img/mem3.png">',
    '<img src="img/mem3.png">',
    '<img src="img/mem4.png">',
    '<img src="img/mem4.png">',
    '<img src="img/mem5.png">',
    '<img src="img/mem5.png">',
    '<img src="img/mem6.png">',
    '<img src="img/mem6.png">',
    '<img src="img/mem7.png">',
    '<img src="img/mem7.png">',
    '<img src="img/mem8.png">',
    '<img src="img/mem8.png">',
    '<img src="img/mem9.png">',
    '<img src="img/mem9.png">',
    '<img src="img/mem10.png">',
    '<img src="img/mem10.png">',
    '<img src="img/mem11.png">',
    '<img src="img/mem11.png">',
    '<img src="img/mem12.png">',
    '<img src="img/mem12.png">',
    '<img src="img/mem13.png">',
    '<img src="img/mem13.png">',
    '<img src="img/mem14.png">',
    '<img src="img/mem14.png">',
    '<img src="img/mem15.png">',
    '<img src="img/mem15.png">',
    '<img src="img/mem16.png">',
    '<img src="img/mem16.png">',
    '<img src="img/mem17.png">',
    '<img src="img/mem17.png">',
    '<img src="img/mem18.png">',
    '<img src="img/mem18.png">',
    '<img src="img/mem19.png">',
    '<img src="img/mem19.png">',
    '<img src="img/mem20.png">',
    '<img src="img/mem20.png">'
]

//dodaje karty do do kazdego diva cards
function add_cards() {

    var card1_img = undefined;
    var card2_img = undefined;
    var i = 0;

    while (boxes != i) {
        //dodaj po kolei do diva losowy obrazek
        let losuj = Math.floor(Math.random() * tab_mem.length);
        tab_mem2[i] = cards_box[i].innerHTML = tab_mem[losuj];

        //usuwa wylosowana pozycje w tabeli tab_mem
        tab_mem.splice(losuj, 1);

        i++;
    }
    check(card1_img, card2_img);
}

//po kliknieciu w diva wywolaj funkcje show_card
function check(item1, item2) {
    
    if (correct == 21) gratz();
    if (item1 != undefined && item2 != undefined) matched(item1, item2);



    if (item1 == undefined || item2 == undefined) {
        if (check_class != 0 && cards_box[0].classList.item(2) != "correct") {
            cards_box[0].onclick = function () {
                check_class = 0;
                show_card(0, item1, item2);
            };
        } else {
            cards_box[0].onclick = function () {
                return false
            };
        }
        if (check_class != 1 && cards_box[1].classList.item(2) != "correct") {
            cards_box[1].onclick = function () {
                check_class = 1;
                show_card(1, item1, item2);
            };
        } else {
            cards_box[1].onclick = function () {
                return false
            };
        }
        if (check_class != 2 && cards_box[2].classList.item(2) != "correct") {
            cards_box[2].onclick = function () {
                check_class = 2;
                show_card(2, item1, item2);
            };
        } else {
            cards_box[2].onclick = function () {
                return false
            };
        }
        if (check_class != 3 && cards_box[3].classList.item(2) != "correct") {
            cards_box[3].onclick = function () {
                check_class = 3;
                show_card(3, item1, item2);
            };
        } else {
            cards_box[3].onclick = function () {
                return false
            };
        }
        if (check_class != 4 && cards_box[4].classList.item(2) != "correct") {
            cards_box[4].onclick = function () {
                check_class = 4;
                show_card(4, item1, item2);
            };
        } else {
            cards_box[4].onclick = function () {
                return false
            };
        }
        if (check_class != 5 && cards_box[5].classList.item(2) != "correct") {
            cards_box[5].onclick = function () {
                check_class = 5;
                show_card(5, item1, item2);
            };
        } else {
            cards_box[5].onclick = function () {
                return false
            };
        }
        if (check_class != 6 && cards_box[6].classList.item(2) != "correct") {
            cards_box[6].onclick = function () {
                check_class = 6;
                show_card(6, item1, item2);
            };
        } else {
            cards_box[6].onclick = function () {
                return false
            };
        }
        if (check_class != 7 && cards_box[7].classList.item(2) != "correct") {
            cards_box[7].onclick = function () {
                check_class = 7;
                show_card(7, item1, item2);
            };
        } else {
            cards_box[7].onclick = function () {
                return false
            };
        }
        if (check_class != 8 && cards_box[8].classList.item(2) != "correct") {
            cards_box[8].onclick = function () {
                check_class = 8;
                show_card(8, item1, item2);
            };
        } else {
            cards_box[8].onclick = function () {
                return false
            };
        }
        if (check_class != 9 && cards_box[9].classList.item(2) != "correct") {
            cards_box[9].onclick = function () {
                check_class = 9;
                show_card(9, item1, item2);
            };
        } else {
            cards_box[9].onclick = function () {
                return false
            };
        }
        if (check_class != 10 && cards_box[10].classList.item(2) != "correct") {
            cards_box[10].onclick = function () {
                check_class = 10;
                show_card(10, item1, item2);
            };
        } else {
            cards_box[10].onclick = function () {
                return false
            };
        }
        if (check_class != 11 && cards_box[11].classList.item(2) != "correct") {
            cards_box[11].onclick = function () {
                check_class = 11;
                show_card(11, item1, item2);
            };
        } else {
            cards_box[11].onclick = function () {
                return false
            };
        }
        if (check_class != 12 && cards_box[12].classList.item(2) != "correct") {
            cards_box[12].onclick = function () {
                check_class = 12;
                show_card(12, item1, item2);
            };
        } else {
            cards_box[12].onclick = function () {
                return false
            };
        }
        if (check_class != 13 && cards_box[13].classList.item(2) != "correct") {
            cards_box[13].onclick = function () {
                check_class = 13;
                show_card(13, item1, item2);
            };
        } else {
            cards_box[13].onclick = function () {
                return false
            };
        }
        if (check_class != 14 && cards_box[14].classList.item(2) != "correct") {
            cards_box[14].onclick = function () {
                check_class = 14;
                show_card(14, item1, item2);
            };
        } else {
            cards_box[14].onclick = function () {
                return false
            };
        }
        if (check_class != 15 && cards_box[15].classList.item(2) != "correct") {
            cards_box[15].onclick = function () {
                check_class = 15;
                show_card(15, item1, item2);
            };
        } else {
            cards_box[15].onclick = function () {
                return false
            };
        }
        if (check_class != 16 && cards_box[16].classList.item(2) != "correct") {
            cards_box[16].onclick = function () {
                check_class = 16;
                show_card(16, item1, item2);
            };
        } else {
            cards_box[16].onclick = function () {
                return false
            };
        }
        if (check_class != 17 && cards_box[17].classList.item(2) != "correct") {
            cards_box[17].onclick = function () {
                check_class = 17;
                show_card(17, item1, item2);
            };
        } else {
            cards_box[17].onclick = function () {
                return false
            };
        }
        if (check_class != 18 && cards_box[18].classList.item(2) != "correct") {
            cards_box[18].onclick = function () {
                check_class = 18;
                show_card(18, item1, item2);
            };
        } else {
            cards_box[18].onclick = function () {
                return false
            };
        }
        if (check_class != 19 && cards_box[19].classList.item(2) != "correct") {
            cards_box[19].onclick = function () {
                check_class = 19;
                show_card(19, item1, item2);
            };
        } else {
            cards_box[19].onclick = function () {
                return false
            };
        }
        if (check_class != 20 && cards_box[20].classList.item(2) != "correct") {
            cards_box[20].onclick = function () {
                check_class = 20;
                show_card(20, item1, item2);
            };
        } else {
            cards_box[20].onclick = function () {
                return false
            };
        }
        if (check_class != 21 && cards_box[21].classList.item(2) != "correct") {
            cards_box[21].onclick = function () {
                check_class = 21;
                show_card(21, item1, item2);
            };
        } else {
            cards_box[21].onclick = function () {
                return false
            };
        }
        if (check_class != 22 && cards_box[22].classList.item(2) != "correct") {
            cards_box[22].onclick = function () {
                check_class = 22;
                show_card(22, item1, item2);
            };
        } else {
            cards_box[22].onclick = function () {
                return false
            };
        }
        if (check_class != 23 && cards_box[23].classList.item(2) != "correct") {
            cards_box[23].onclick = function () {
                check_class = 23;
                show_card(23, item1, item2);
            };
        } else {
            cards_box[23].onclick = function () {
                return false
            };
        }
        if (check_class != 24 && cards_box[24].classList.item(2) != "correct") {
            cards_box[24].onclick = function () {
                check_class = 24;
                show_card(24, item1, item2);
            };
        } else {
            cards_box[24].onclick = function () {
                return false
            };
        }
        if (check_class != 25 && cards_box[25].classList.item(2) != "correct") {
            cards_box[25].onclick = function () {
                check_class = 25;
                show_card(25, item1, item2);
            };
        } else {
            cards_box[25].onclick = function () {
                return false
            };
        }
        if (check_class != 26 && cards_box[26].classList.item(2) != "correct") {
            cards_box[26].onclick = function () {
                check_class = 26;
                show_card(26, item1, item2);
            };
        } else {
            cards_box[26].onclick = function () {
                return false
            };
        }
        if (check_class != 27 && cards_box[27].classList.item(2) != "correct") {
            cards_box[27].onclick = function () {
                check_class = 27;
                show_card(27, item1, item2);
            };
        } else {
            cards_box[27].onclick = function () {
                return false
            };
        }
        if (check_class != 28 && cards_box[28].classList.item(2) != "correct") {
            cards_box[28].onclick = function () {
                check_class = 28;
                show_card(28, item1, item2);
            };
        } else {
            cards_box[28].onclick = function () {
                return false
            };
        }
        if (check_class != 29 && cards_box[29].classList.item(2) != "correct") {
            cards_box[29].onclick = function () {
                check_class = 29;
                show_card(29, item1, item2);
            };
        } else {
            cards_box[29].onclick = function () {
                return false
            };
        }
        if (check_class != 30 && cards_box[30].classList.item(2) != "correct") {
            cards_box[30].onclick = function () {
                check_class = 30;
                show_card(30, item1, item2);
            };
        } else {
            cards_box[30].onclick = function () {
                return false
            };
        }
        if (check_class != 31 && cards_box[31].classList.item(2) != "correct") {
            cards_box[31].onclick = function () {
                check_class = 31;
                show_card(31, item1, item2);
            };
        } else {
            cards_box[31].onclick = function () {
                return false
            };
        }
        if (check_class != 32 && cards_box[32].classList.item(2) != "correct") {
            cards_box[32].onclick = function () {
                check_class = 32;
                show_card(32, item1, item2);
            };
        } else {
            cards_box[32].onclick = function () {
                return false
            };
        }
        if (check_class != 33 && cards_box[33].classList.item(2) != "correct") {
            cards_box[33].onclick = function () {
                check_class = 33;
                show_card(33, item1, item2);
            };
        } else {
            cards_box[33].onclick = function () {
                return false
            };
        }
        if (check_class != 34 && cards_box[34].classList.item(2) != "correct") {
            cards_box[34].onclick = function () {
                check_class = 34;
                show_card(34, item1, item2);
            };
        } else {
            cards_box[34].onclick = function () {
                return false
            };
        }
        if (check_class != 35 && cards_box[35].classList.item(2) != "correct") {
            cards_box[35].onclick = function () {
                check_class = 35;
                show_card(35, item1, item2);
            };
        } else {
            cards_box[35].onclick = function () {
                return false
            };
        }
        if (check_class != 36 && cards_box[36].classList.item(2) != "correct") {
            cards_box[36].onclick = function () {
                check_class = 36;
                show_card(36, item1, item2);
            };
        } else {
            cards_box[36].onclick = function () {
                return false
            };
        }
        if (check_class != 37 && cards_box[37].classList.item(2) != "correct") {
            cards_box[37].onclick = function () {
                check_class = 37;
                show_card(37, item1, item2);
            };
        } else {
            cards_box[37].onclick = function () {
                return false
            };
        }
        if (check_class != 38 && cards_box[38].classList.item(2) != "correct") {
            cards_box[38].onclick = function () {
                check_class = 38;
                show_card(38, item1, item2);
            };
        } else {
            cards_box[38].onclick = function () {
                return false
            };
        }
        if (check_class != 39 && cards_box[39].classList.item(2) != "correct") {
            cards_box[39].onclick = function () {
                check_class = 39;
                show_card(39, item1, item2);
            };
        } else {
            cards_box[39].onclick = function () {
                return false
            };
        }
        if (check_class != 40 && cards_box[40].classList.item(2) != "correct") {
            cards_box[40].onclick = function () {
                check_class = 40;
                show_card(40, item1, item2);
            };
        } else {
            cards_box[40].onclick = function () {
                return false
            };
        }
        if (check_class != 41 && cards_box[41].classList.item(2) != "correct") {
            cards_box[41].onclick = function () {
                check_class = 41;
                show_card(41, item1, item2);
            };
        } else {
            cards_box[41].onclick = function () {
                return false
            };
        }
    } else {
        cards_box[0].onclick = function () {
            return false
        };
        cards_box[1].onclick = function () {
            return false
        };
        cards_box[2].onclick = function () {
            return false
        };
        cards_box[3].onclick = function () {
            return false
        };
        cards_box[4].onclick = function () {
            return false
        };
        cards_box[5].onclick = function () {
            return false
        };
        cards_box[6].onclick = function () {
            return false
        };
        cards_box[7].onclick = function () {
            return false
        };
        cards_box[8].onclick = function () {
            return false
        };
        cards_box[9].onclick = function () {
            return false
        };
        cards_box[10].onclick = function () {
            return false
        };
        cards_box[11].onclick = function () {
            return false
        };
        cards_box[12].onclick = function () {
            return false
        };
        cards_box[13].onclick = function () {
            return false
        };
        cards_box[14].onclick = function () {
            return false
        };
        cards_box[15].onclick = function () {
            return false
        };
        cards_box[16].onclick = function () {
            return false
        };
        cards_box[17].onclick = function () {
            return false
        };
        cards_box[18].onclick = function () {
            return false
        };
        cards_box[19].onclick = function () {
            return false
        };
        cards_box[20].onclick = function () {
            return false
        };
        cards_box[21].onclick = function () {
            return false
        };
        cards_box[22].onclick = function () {
            return false
        };
        cards_box[23].onclick = function () {
            return false
        };
        cards_box[24].onclick = function () {
            return false
        };
        cards_box[25].onclick = function () {
            return false
        };
        cards_box[26].onclick = function () {
            return false
        };
        cards_box[27].onclick = function () {
            return false
        };
        cards_box[28].onclick = function () {
            return false
        };
        cards_box[29].onclick = function () {
            return false
        };
        cards_box[30].onclick = function () {
            return false
        };
        cards_box[31].onclick = function () {
            return false
        };
        cards_box[32].onclick = function () {
            return false
        };
        cards_box[33].onclick = function () {
            return false
        };
        cards_box[34].onclick = function () {
            return false
        };
        cards_box[35].onclick = function () {
            return false
        };
        cards_box[36].onclick = function () {
            return false
        };
        cards_box[37].onclick = function () {
            return false
        };
        cards_box[38].onclick = function () {
            return false
        };
        cards_box[39].onclick = function () {
            return false
        };
        cards_box[40].onclick = function () {
            return false
        };
        cards_box[41].onclick = function () {
            return false
        };
    }
}

//pokaz karte po kliknieciu
function show_card(i, element1, element2) {

    if (hm_cards == 1) { //karta nr 1

        // wlacza czas w momencie klikniecia w pierwszego diva
        if(time_start==0) {
            time_now = new Date().getTime();
            time_start++;
        }

        element1 = tab_mem2[i];
        bufor1 = element1;
        which_card1 = i;

        cards_box[i].classList.remove("hidden");
        cards_box[i].classList.add("show");

        hm_cards++;
        check(bufor1);

    } else if (hm_cards == 2) { //karta nr 2
        element2 = tab_mem2[i];
        bufor2 = element2;
        which_card2 = i;

        cards_box[i].classList.remove("hidden");
        cards_box[i].classList.add("show");

        check_class = NaN;
        element1 = bufor1;
        element2 = bufor2;
        hm_cards++;
        check(bufor1, bufor2);
    } 
}

// sprawdza czy dwie karty pasuja do siebie
function matched(component1, component2) {

    //jesli obrazek1 == obrazek2 to dodaj klase correct do tych divow
    if (component1 == component2) {
        console.log("UDALO SIE");
        setTimeout(function () {
            cards_box[which_card1].classList.add("correct");
            cards_box[which_card2].classList.add("correct");

            hm_cards = 1;
            correct++;
            check(undefined, undefined);
        }, 500);

    //jesli obrazek1 != obrazek2 to dodaj klase hidden do tych divow i dodaj+wypisz punkt
    } else {
        score_id = document.getElementById("score_int");
        console.log("NIE UDALO SIE");
        setTimeout(function () {
            cards_box[which_card1].classList.add("hidden");
            cards_box[which_card2].classList.add("hidden");
            check_class = NaN;
            hm_cards = 1;
            check(undefined, undefined);
        }, 500);

        score++;
        if (score < 10)
            score_id.innerHTML = "00" + score;
        else if (score >= 10 && score < 100)
            score_id.innerHTML = "0" + score;
        else
            score_id.innerHTML = score;
    }
}

//wypisuje gratulacje, ilosc skuch, czas, pokazuje wszystkie divy z img
function gratz() {
    var gratz_id = document.getElementById("gratz");
    var time_end = new Date().getTime();
    var time_dist = time_end - time_now;
    var minutes = Math.floor((time_dist % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time_dist % (1000 * 60)) / 1000);

    if(seconds<10) seconds = "0"+seconds;

    //pokaz wszystkie divy z obrazkami usuwajac klase correct
    for(s=0; s<boxes; s++) {
    cards_box[s].classList.remove("correct");
    hm_cards=NaN;
    }
    
    
    gratz_id.innerHTML = "Gratulacje! Udalo ci sie! Twoja ilosc skuch to " + score + ". Twoj czas to "+minutes+","+seconds+"min.";
    window.stop;
}