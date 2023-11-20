

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
        menu_cacher.innerHTML = "<div class=\"menu_deroulant\"><a  href=\"index.html\">Acceuil</a><a  href=\"a-propos.html\">A propos</a><a class=\"page_active\" href=\"contact.html\">Contact</a></div>"
        on_menu = true

    }
}















/* Contact */

var label_nom = document.querySelector("#label_nom")
var label_prenom = document.querySelector("#label_prenom")
var label_email = document.querySelector("#label_email")
var label_telephone = document.querySelector("#label_telephone")
var label_message = document.querySelector("#label_message")



var champ_nom = document.querySelector("#champ_nom")
var champ_prenom  = document.querySelector("#champ_prenom")
var champ_email = document.querySelector("#champ_email")
var champ_telephone = document.querySelector("#champ_tel")
var champ_message = document.querySelector("#champ_message")


var erreur_champ_nom = document.querySelector(".nom-error")
var erreur_champ_prenom  = document.querySelector(".prenom-error")
var erreur_champ_email = document.querySelector(".email-error")
var erreur_champ_telephone = document.querySelector(".tel-error")
var erreur_champ_message = document.querySelector(".message-error")


var btn_envoyer = document.querySelector("#btn_contact")
var erreurgenerale = document.querySelector(".erreur-generale")
var erreur_totale = false
var nomb_erreur = 0

/* Déclancheur */

champ_nom.addEventListener(
    'click',
    event => gestion_label_click("nom")
);

champ_prenom.addEventListener(
    'click',
    event => gestion_label_click("prenom")
);

champ_email.addEventListener(
    'click',
    event => gestion_label_click("email")
);
champ_telephone.addEventListener(
    'click',
    event => gestion_label_click("telephone")
);

champ_message.addEventListener(
    'click',
    event => gestion_label_click("message")
);


champ_nom.addEventListener(
    'blur',
    event => gestion_label_onchange("nom")
);

champ_prenom.addEventListener(
    'blur',
    event => gestion_label_onchange("prenom")
);

champ_email.addEventListener(
    'blur',
    event => gestion_label_onchange("email")
);
champ_telephone.addEventListener(
    'blur',
    event => gestion_label_onchange("telephone")
);

champ_message.addEventListener(
    'blur',
    event => gestion_label_onchange("message")
);

btn_envoyer.addEventListener(
    'click',
    event => verify_information()

);






function gestion_label_click(nom_du_champ) {

    var champ_cliquer = trouver_champ(nom_du_champ)
    var label_cliquer = trouver_label(nom_du_champ)

   
    label_cliquer.classList.add("focus")
    champ_cliquer.placeholder = "entrer votre "+nom_du_champ

}
function gestion_label_onchange(nom_du_champ) {

    var champ_cliquer = trouver_champ(nom_du_champ)
    var label_cliquer = trouver_label(nom_du_champ)

    if (champ_cliquer.value == ""){
        label_cliquer.classList.remove("focus")
        champ_cliquer.placeholder = ""
    }
    

}

function verify_information(){

    effacerErreur(erreur_champ_nom)
    effacerErreur(erreur_champ_prenom)
    effacerErreur(erreur_champ_email)
    effacerErreur(erreur_champ_message)
    effacerErreur(erreur_champ_telephone)

    saisie_obligatoire(champ_nom,erreur_champ_nom)

    saisie_obligatoire(champ_prenom,erreur_champ_prenom)

    verifier_saisie_chiffre(champ_telephone,erreur_champ_telephone)
    nomb_caractère_mininum(champ_telephone,erreur_champ_telephone,10,false)
    
    

    var etat_du_champ = saisie_obligatoire(champ_email,erreur_champ_email)
    
    if( etat_du_champ != true){
        verifier_presence_caractere(champ_email,erreur_champ_email,"@")
        verifier_presence_caractere(champ_email,erreur_champ_email,".")
    }
    
    
    saisie_obligatoire(champ_message,erreur_champ_message)

    
    

    if ( nomb_erreur == 0){
        erreurgenerale.innerHTML = "Votre demande a bien été enregistrée avec succès :)"
        erreurgenerale.classList.add("alert")
        erreurgenerale.classList.remove("alert-danger")
        erreurgenerale.classList.add("alert-success")
        erreurgenerale.style.display = "block"
    }else{
        erreurgenerale.innerHTML = "Il reste "+nomb_erreur+" erreur(s) dans le formulaire, <br> Merci de les corriger avant de re-envoyer votre message"
        erreurgenerale.classList.add("alert")
        erreurgenerale.classList.add("alert-danger")
        erreurgenerale.style.display = "block"
    }

    nomb_erreur = 0
    erreur_totale = false;

}

function trouver_champ(nom_du_champ){
    var champ
    if (nom_du_champ == "nom"){
        champ = champ_nom
    }
    if (nom_du_champ == "prenom"){
        champ = champ_prenom
    }
    if (nom_du_champ == "email"){
        champ = champ_email
    }
    if (nom_du_champ == "telephone"){
        champ = champ_telephone
    }
    if (nom_du_champ == "message"){
        champ = champ_message
    }
    return champ

}

function trouver_label(nom_du_champ){
    var label
    if (nom_du_champ == "nom"){
        label = label_nom
    }
    if (nom_du_champ == "prenom"){
        label = label_prenom
    }
    if (nom_du_champ == "email"){
        label = label_email
    }
    if (nom_du_champ == "telephone"){
        label = label_telephone
    }
    if (nom_du_champ == "message"){
        label = label_message
    }
    return label

}


function effacerErreur(erreur_champ){
    erreur_champ.innerHTML=""
    erreur_champ.style.display = "none"
}


function saisie_obligatoire(champ , erreur_champ){
    var champ_vide =false;
       if(champ.value == ""){
            erreur_champ.innerHTML = "Le champ "+champ.name+" est requis pour continuer"
            erreur_champ.classList.add("alert")
            erreur_champ.classList.add("alert-danger")
            erreur_champ.style.display = "block"
            erreur_totale = true
            nomb_erreur = nomb_erreur + 1 
            champ_vide = true
        }
    return champ_vide

}

function verifier_presence_caractere(champ,erreur_champ,caractère){
    if( champ.value.includes(caractère) == false){
        if (erreur_champ.value == ""){
             erreur_champ.innerHTML = "Le champ "+champ.name+" doit contenir le caractère suivant : \""+caractère+"\" ."
        }else{
            erreur_champ.innerHTML += "<br>Le champ "+champ.name+" doit contenir le caractère suivant : \""+caractère+"\" ."
        }
            erreur_champ.classList.add("alert")
            erreur_champ.classList.add("alert-danger")
            erreur_champ.style.display = "block"; 
            erreur_totale = true
            nomb_erreur = nomb_erreur + 1 
    }
}

function verifier_saisie_chiffre(champ, erreur_champ){
    if(isNaN(champ.value) == true){
        
        if (erreur_champ.innerHTML == ""){
            erreur_champ.innerHTML = "Le champ "+champ.name+" doit contenir uniquement des chiffres"
        }else {
            erreur_champ.innerHTML += "<br> Le champ "+champ.name+" doit contenir uniquement des chiffres" 
        }
        erreur_champ.classList.add("alert")
        erreur_champ.classList.add("alert-danger")
        erreur_champ.style.display = "block"; 
        erreur_totale = true
        nomb_erreur = nomb_erreur + 1 
    }


}

function nomb_caractère_mininum(champ, erreur_champ, nomb_min_carac, requis){
    
    if(requis == true){
        if(champ.value.length < nomb_min_carac){
            if (erreur_champ.value == ""){
                erreur_champ.innerHTML = "Le champ "+champ.name+" doit au mois contenir "+nomb_min_carac+" caractères"
            }else{
                erreur_champ.innerHTML += "<br> Le champ "+champ.name+" doit au mois contenir "+nomb_min_carac+" caractères"
            }
            erreur_champ.classList.add("alert")
            erreur_champ.classList.add("alert-danger")
            erreur_champ.style.display = "block"; 
            erreur_totale = true
            nomb_erreur = nomb_erreur + 1 
        }
    }else{
        if(champ.value.length < nomb_min_carac && champ.value != ""){
            if (erreur_champ.value == undefined){
                erreur_champ.innerHTML = "Le champ "+champ.name+" doit au mois contenir "+nomb_min_carac+" caractères"
            }else{
                erreur_champ.innerHTML += "<br>Le champ "+champ.name+" doit au mois contenir "+nomb_min_carac+" caractères"
            }
            erreur_champ.classList.add("alert")
            erreur_champ.classList.add("alert-danger")
            erreur_champ.style.display = "block"; 
            erreur_totale = true
            nomb_erreur = nomb_erreur + 1 
        }
    }
}