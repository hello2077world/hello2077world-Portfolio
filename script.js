window.onload = start;

//! FUNCTION start() -
function start() {

    //! jQuery - scrollTo()
    jQuery(function($)
        {
            //zresetuj scrolla
            $.scrollTo(0);

            $('.menu-aboutme').click(function() { $.scrollTo($('#section_two'), 500); });
            $('.menu-projects').click(function() { $.scrollTo($('#section_three'), 500); });
            $('.menu-contact').click(function() { $.scrollTo($('#section_four'), 500); });
            $('.sectionone_arrow').click(function() { $.scrollTo($('#section_two'), 500); });
            $('.sectiontwo_arrow_up').click(function() { $.scrollTo($('#nav'), 500); });
            $('.sectiontwo_arrow_down').click(function() { $.scrollTo($('#section_three'), 500); });
            $('.sectionthree_arrow_up').click(function() { $.scrollTo($('#section_two'), 500); });
            $('.sectionthree_arrow_down').click(function() { $.scrollTo($('#section_four'), 500); });
            $('.sectionfour_arrow').click(function() { $.scrollTo($('#section_three'), 500); });
        }
    ); // end jQuery()

    // class projektow
    var projects_class = document.getElementsByClassName("sectionthree_projects");
    // numer adresu obrazka
    var address_img = 1;

    //? dodaj bgImg do kazdego projekru (/project$.png)
    for(i=0; i<projects_class.length; i++) {
        projects_class[i].style.backgroundImage = "url('img/project"+address_img+".png')";
        address_img++;
    }

} // end start()

