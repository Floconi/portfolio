
/* Menu en téléphone */


var icone_menu = document.querySelector(".icone_menu")
var menu_cacher = document.querySelector(".menu_cacher")
var on_menu = false
icone_menu.addEventListener(
    'click',
    event => affichermenu()
);


function affichermenu(){
    if (on_menu == true){
        menu_cacher.classList.replace("d-block","d-none") 
        on_menu = false
    }else{
        menu_cacher.classList.replace("d-none","d-block")
        menu_cacher.innerHTML = "<div class=\"menu_deroulant\"><a  href=\"index.html\">Acceuil</a><a class=\"page_active\" href=\"a-propos.html\">A propos</a><a  href=\"contact.html\">Contact</a></div>"
        on_menu = true

    }
}
