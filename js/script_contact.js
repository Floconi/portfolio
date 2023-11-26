
/** 
* * Extention utilisé :
* * - Better Comments
*/
/** Légende des commentaires :
 *   Commentaire normale 
 * * Commentaire séparation de partie (pas réelement des commentaires juste pour ahérer le code)
 * ? questions
 * ! important
 * TODO : A faire
*/

/** 
* ? Pourquoi 3 script ?
* Oui j'ai fait plusieurs script car j'en ait besoin pour mon menu cacher en mode téléphone
* Si j'avais mis ce même script sur les page acceuil et à propos; il m'aurait dit erreur puisque
* avec add event listener il n'y a aucun champ nom (par ex) sur la page d'acceuil. Ce qui fesait 
* beugé mon script donc j'ai créer des fichiers spéparé 
*/


/** 
 * ****************************
 * * Menu en téléphone Contact 
 * ****************************
*/

var icone_menu = document.querySelector(".icone_menu")
var menu_cacher = document.querySelector(".menu_cacher")
var on_menu = false /* Afficher ou masquer le menu si afficher */
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



/** 
 **********************************************
 * * Contact 
 **********************************************
*/

/** Je défine mes variables globales. 
*  TODO: Simplifier le code pour éviter trop de variable globale
*/

/* Récupérations des Labels */

var label_nom = document.querySelector("#label_nom")
var label_prenom = document.querySelector("#label_prenom")
var label_email = document.querySelector("#label_email")
var label_telephone = document.querySelector("#label_telephone")
var label_message = document.querySelector("#label_message")

/* Récupérations des champs */

var champ_nom = document.querySelector("#champ_nom")
var champ_prenom  = document.querySelector("#champ_prenom")
var champ_email = document.querySelector("#champ_email")
var champ_telephone = document.querySelector("#champ_telephone")
var champ_message = document.querySelector("#champ_message")

/* Récupérations des erreurs champs */

var erreur_champ_nom = document.querySelector(".nom-error")
var erreur_champ_prenom  = document.querySelector(".prenom-error")
var erreur_champ_email = document.querySelector(".email-error")
var erreur_champ_telephone = document.querySelector(".tel-error")
var erreur_champ_message = document.querySelector(".message-error")

/* Indique à l'utilisateur le nombre de caractère minimum à saisir */

var nombre_caractere_minimum_nom = document.querySelector(".nomb_carac_minimum_nom")
var nombre_caractere_minimum_prenom = document.querySelector(".nomb_carac_minimum_prenom")
var nombre_caractere_minimum_email = document.querySelector(".nomb_carac_minimum_email")
var nombre_caractere_minimum_telephone = document.querySelector(".nomb_carac_minimum_telephone")
var nombre_caractere_minimum_message = document.querySelector(".nomb_carac_minimum_message")

/* Indique à l'utilisateur le nombre de caractère tapé dans un champs spécifique */

var nombre_caractere_nom = document.querySelector(".nomb_carac_nom")
var nombre_caractere_prenom = document.querySelector(".nomb_carac_prenom")
var nombre_caractere_email = document.querySelector(".nomb_carac_email")
var nombre_caractere_telephone = document.querySelector(".nomb_carac_telephone")
var nombre_caractere_message = document.querySelector(".nomb_carac_message")

/* Récupération du total des erreurs */
var btn_envoyer = document.querySelector("#btn_contact")
var erreurgenerale = document.querySelector(".erreur-generale")


/** On définie ces contentes une fois  et après tout le code est affecter
 *  TODO: Changer ses var en const car pas vraiment besoin de variables
*/

var requis_nom = true;
var requis_prenom = true;
var requis_email = true;
var requis_telephone = false;
var requis_message = true;

var nomb_carac_min = 0;

var nomb_carac_min_nom = 3; 
var nomb_carac_min_prenom = 3;
var nomb_carac_min_email = 10; /* un email doit contenir le domaine et un @*/
var nomb_carac_min_telephone = 10; 
var nomb_carac_min_message = 50; /* Je ne veux pas des message trop petit après avec les formule de politesse normalement c bon */

var nomb_carac_max = 0;

var nomb_carac_max_nom = 50; 
var nomb_carac_max_prenom = 50;
var nomb_carac_max_email = 100; /* Au cas ou l'adresse mail est longue*/
var nomb_carac_max_telephone = 15; /* Certains numéro peuvent contenir 15 caractères */
var nomb_carac_max_message = 2000;

/* Variables des programes */

var erreur_totale = false /* je crois que cette variable est plus néssésaire mais avant si car je n'avais pas le nombre d'erreur */
var nomb_erreur = 0 /* Compte le nombre d'erreur */
var erreur_minimum = false 


/** **************
 ** Déclancheurs 
 *****************
*/

/**Déclanchers si on clique sur le champs (Pour que le label monte :)) 
 * Voir fonctions partie 2
*/ 

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


/** Quand la personne quite le focus du champs, je remets le label et j'indique le nombre de 
 *  caractere
 * voir fonction partie 4
 *  Todo : Ecrire 2 fonctions dans le même addeventlistener puisque même déclancheur
 * 
*/
champ_nom.addEventListener(
    'focus',
    event => afficher_nomb_caractere("nom")
);

champ_prenom.addEventListener(
    'focus',
    event => afficher_nomb_caractere("prenom")
);

champ_email.addEventListener(
    'focus',
    event => afficher_nomb_caractere("email")
);
champ_telephone.addEventListener(
    'focus',
    event => afficher_nomb_caractere("telephone")
);

champ_message.addEventListener(
    'focus',
    event => afficher_nomb_caractere("message")
);

champ_nom.addEventListener(
    'blur',
    event => gestion_label_onchange("nom"),
);
champ_nom.addEventListener(
    'blur',
    event => elever_nomb_caractere("nom")
);

champ_prenom.addEventListener(
    'blur',
    event => gestion_label_onchange("prenom")
);
champ_prenom.addEventListener(
    'blur',
    event => elever_nomb_caractere("prenom")
);

champ_email.addEventListener(
    'blur',
    event => gestion_label_onchange("email")
);
champ_email.addEventListener(
    'blur',
    event => elever_nomb_caractere("email")
);

champ_telephone.addEventListener(
    'blur',
    event => gestion_label_onchange("telephone")
);
champ_telephone.addEventListener(
    'blur',
    event => elever_nomb_caractere("telephone")
);

champ_message.addEventListener(
    'blur',
    event => gestion_label_onchange("message")
);
champ_message.addEventListener(
    'blur',
    event => elever_nomb_caractere("message")
);

/**Mis à jour du nombre de caractère quand la personne aura relever la touche de son clavier
 * Voir fonctions partie 3 
*/

champ_nom.addEventListener(
    'keyup',
    event => ecriture_nomb_caractère("nom")

);
champ_prenom.addEventListener(
    'keyup',
    event => ecriture_nomb_caractère("prenom")

);
champ_email.addEventListener(
    'keyup',
    event => ecriture_nomb_caractère("email")

);
champ_telephone.addEventListener(
    'keyup',
    event => ecriture_nomb_caractère("telephone")

);
champ_message.addEventListener(
    'keyup',
    event => ecriture_nomb_caractère("message")

);
champ_nom.addEventListener(
    'blur',
    event => ecriture_nomb_caractère_minimum("nom")
);
champ_prenom.addEventListener(
    'blur',
    event => ecriture_nomb_caractère_minimum("prenom")
);
champ_email.addEventListener(
    'blur',
    event => ecriture_nomb_caractère_minimum("email")
);
champ_telephone.addEventListener(
    'blur',
    event => ecriture_nomb_caractère_minimum("telephone")
);

champ_message.addEventListener(
    'blur',
    event => ecriture_nomb_caractère_minimum("message")
);

/** Ddéclancheur de la fonction pour vérifier les infos 
 *  Voir fonction partie 1 
*/

btn_envoyer.addEventListener(
    'click',
    event => verify_information()

);

/** 
 * --------------
 * * Fonctions 
 * --------------
 */

/**
 * 1)
 **Fonctions verifier les informations des champs 
*/

/**
 **Fonction qui permet de vérifier toute la saisie utilisateur
 */
function verify_information(){

    /* Comme plusieurs erreur sont à détecter, je préfère tout effacer et partir
    du principe qu'il y est aucune erreur */
    
    nomb_erreur = 0 

    effacerErreur(erreur_champ_nom)
    effacerErreur(erreur_champ_prenom)
    effacerErreur(erreur_champ_email)
    effacerErreur(erreur_champ_message)
    effacerErreur(erreur_champ_telephone)
    

    /* Verification Nom */

    var etat_du_champ = saisie_obligatoire(champ_nom,erreur_champ_nom)
    if( etat_du_champ != true){ /* J'ai désider de ne pas afficher les autres erreur si la personne n'a pas rempli le champ (Pour expérience utilisateur) */
        caractere_interdit(champ_nom,erreur_champ_nom)
        presence_lettre(champ_nom,erreur_champ_nom)
        nomb_caractère_mininum(champ_nom,erreur_champ_nom,nomb_carac_min_nom,requis_nom)
        nomb_caractère_maximum(champ_nom,erreur_champ_nom,nomb_carac_max_nom)

    }

    /* Vérification Prénom */

    etat_du_champ = saisie_obligatoire(champ_prenom,erreur_champ_prenom)

    if( etat_du_champ != true){
        caractere_interdit(champ_prenom,erreur_champ_prenom)
        presence_lettre(champ_prenom,erreur_champ_prenom)
        nomb_caractère_mininum(champ_prenom,erreur_champ_prenom,nomb_carac_min_prenom,requis_prenom)
        nomb_caractère_maximum(champ_prenom,erreur_champ_prenom,nomb_carac_max_prenom)
    }

    /* Vérification Tel */

    caractere_interdit(champ_telephone,erreur_champ_telephone) /* Par principe mais inutile puisque on vérifie uniquement des chiffres donc pas de caractere interdit */ 
    verifier_saisie_chiffre(champ_telephone,erreur_champ_telephone)
    nomb_caractère_mininum(champ_telephone,erreur_champ_telephone,nomb_carac_min_telephone,requis_telephone)
    nomb_caractère_maximum(champ_telephone,erreur_champ_telephone,nomb_carac_max_telephone)
    
    /* Vérification Email */

    etat_du_champ = saisie_obligatoire(champ_email,erreur_champ_email)
    
    if( etat_du_champ != true){
        caractere_interdit(champ_email,erreur_champ_email)
        verifier_presence_caractere(champ_email,erreur_champ_email,"@")
        verifier_presence_caractere(champ_email,erreur_champ_email,".")
        nomb_caractère_mininum(champ_email,erreur_champ_email,nomb_carac_min_email,requis_email)
        nomb_caractère_maximum(champ_email,erreur_champ_email,nomb_carac_max_email)
    }

    /* Vérification message */
   
    etat_du_champ =saisie_obligatoire(champ_message,erreur_champ_message)

    if( etat_du_champ != true){
        caractere_interdit(champ_message,erreur_champ_message)
        nomb_caractère_mininum(champ_message,erreur_champ_message,nomb_carac_min_message,requis_message)
        nomb_caractère_maximum(champ_prenom,erreur_champ_prenom,nomb_carac_max_message)
    }
    
    /* Cette partie est importente ! Elle définie le nombre d'erreur restante et surtout elle 
    indique à l'utilisateur si son formulaire à été valider ou non */

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
}

/**
 **Fonction qui efface toutes les erreurs
 * @param {*} erreur_champ prends le bloc erreurs
 */
function effacerErreur(erreur_champ){
    erreur_champ.innerHTML=""
    erreur_champ.style.display = "none"
}    

/**
 **Fonction qui vérifie si l'utilisateur à inscrit une valeur dans le champ
 * @param {*} champ prends la valeur contenu dans le champ
 * @param {*} erreur_champ indique si il y'a une erreur
 * @returns si il y'a une erreur il va l'indiquer par un bolléan true sinon faux
*/
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

/**
 **Fonction qui permet de ne pas rentrer certains caractères pour empécher l'injecton de code dans les champs 
 * ( liste non exostive)
 * @param {*} champ prends la valeur contenu dans le champ
 * @param {*} erreur_champ indique si il y'a une erreur
*/
function caractere_interdit(champ,erreur_champ){
    var Tab_carac_interdit = new Array("<",">","/","\","/"","(",")","'","=","!")
    var index = 0
    var erreur_interdit = false

    for (index = 0 ; index < Tab_carac_interdit.length; index++) {
        if(champ.value.includes(Tab_carac_interdit[index]) == true){
            if (erreur_champ.textContent == ""){
                
                erreur_champ.innerHTML = "Le champ "+champ.name+" contient le caractère interdit suivant \""+Tab_carac_interdit[index]+"\""
            }else{
                erreur_champ.innerHTML += "<br>Le champ "+champ.name+" contient le caractère interdit suivant \""+Tab_carac_interdit[index]+"\""
            }
            
            erreur_champ.classList.add("alert")
            erreur_champ.classList.add("alert-danger")
            erreur_champ.style.display = "block"; 
            erreur_totale = true 
            erreur_interdit = true
        }
    
    }
    /* Pour compter l'erreur qu'une fois */
    if (erreur_interdit == true) {
        nomb_erreur = nomb_erreur + 1 
    }
    




}

/**
 **Fonctions qui permet de ne rentrer uniquement du texte
 * @param {*} champ  prends la valeur contenu dans le champ
 * @param {*} erreur_champ  indique si il y'a une erreur
*/
function presence_lettre(champ,erreur_champ){

    var Tab_chiffre = new Array("0","1","2","3","4","5","6","7","8","9")
    var index = 0
    var erreur_lettre = false
    
    for (index = 0 ; index < Tab_chiffre.length; index++) {
        if(champ.value.includes(Tab_chiffre[index]) == true){
            if(erreur_lettre == false){
                if (erreur_champ.textContent == ""){
                    erreur_champ.innerHTML = "Le champ "+champ.name+" doit contenir que des lettres"
                }else{
                    erreur_champ.innerHTML += "<br> Le champ "+champ.name+" doit doit contenir que des lettres"
                }
            
                erreur_champ.classList.add("alert")
                erreur_champ.classList.add("alert-danger")
                erreur_champ.style.display = "block"; 
                erreur_totale = true 
                erreur_lettre = true
            }   
        }
    
    }
    if (erreur_lettre == true) {
        nomb_erreur = nomb_erreur + 1 
    }
    
}
/**
 **Fonctions qui vérifie si le champ contient uniquement des chiffres
 * @param {*} champ prend la saisie utilisateur
 * @param {*} erreur_champ permet d'indiquer si il y a une erreur
 */
function verifier_saisie_chiffre(champ, erreur_champ){
    if(isNaN(champ.value) == true){
        
        if (erreur_champ.textContent == ""){
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

/**
 **Fonction qui vérifie si un caractère bien spécifique est présent dans la saisie
 * @param {*} champ prend la saisie utilisateur
 * @param {*} erreur_champ permet d'indiquer si il y a une erreur
 * @param {*} caractère le caractère à vouloir inclure dans le champs
 */
function verifier_presence_caractere(champ,erreur_champ,caractère){
    if( champ.value.includes(caractère) == false){
        if (erreur_champ.textContent == ""){
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

/**
 **Fonction qui vérifie si la saisie à au mininum un certains nombre de caractère
 * @param {*} champ prend la saisie utilisateur
 * @param {*} erreur_champ  permet d'indiquer si il y a une erreur
 * @param {*} nomb_min_carac le nombre de caractere au minimum pour que la saisie soit valider
 * @param {*} requis indique si le champ est obligatoire
 */
function nomb_caractère_mininum(champ, erreur_champ, nomb_min_carac, requis){
    
    if(requis == true){
        if(champ.value.length < nomb_min_carac){
            if (erreur_champ.textContent == ""){
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
            if (erreur_champ.textContent == ""){
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

/**
 **Fonction qui vérifie si la saisie ne dépasse pas un certains nombre de caractères
 * @param {*} champ prend la saisie utilisateur
 * @param {*} erreur_champ  permet d'indiquer si il y a une erreur
 * @param {*} nomb_min_carac le nombre de caractere au minimum pour que la saisie soit valider
 * @param {*} requis indique si le champ est obligatoire
 */
function nomb_caractère_maximum(champ, erreur_champ, nomb_max_carac){
    
        if(champ.value.length > nomb_max_carac){
            if (erreur_champ.textContent == ""){
                erreur_champ.innerHTML = "Le champ "+champ.name+" ne doit pas contenir plus de "+nomb_max_carac+" caractères"
            }else{
                erreur_champ.innerHTML += "<br> Le champ "+champ.name+" ne doit pas contenir plus de "+nomb_max_carac+" caractères"
            }
            erreur_champ.classList.add("alert")
            erreur_champ.classList.add("alert-danger")
            erreur_champ.style.display = "block"; 
            erreur_totale = true
            nomb_erreur = nomb_erreur + 1 
        } 
}


/**
 * 2)
 **Fonctions Permettant de récupérer l'élément à partir d'un nom
*/

/**
 **Fonction qui permet de trouver le champ cliquer par l'utilisateur à partir de son nom
 * @param {*} nom_du_champ Le nom du champ
 * @returns l'element champ assosié au champ cliquer par l'utilisateur
*/
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

/**
 **Fonction qui permet de trouver l'élément label à partir de son nom
 * @param {*} nom_du_champ son nom
 * @returns le label assosié au champ cliquer par l'utilisateur
*/
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

/**
 **Fonction qui permet de trouver l'éléement nombre de caractère cliquer par l'utilisateur à partir de son nom
 * @param {*} nom_du_champ Le nom du champ
 * @returns l'element nombre de caractère assosié au champ cliquer par l'utilisateur
*/

function trouver_champ_nomb_carac(nom_du_champ){
    var champ
    if (nom_du_champ == "nom"){
        champ = nombre_caractere_nom
        nomb_carac_min = nomb_carac_min_nom
        nomb_carac_max = nomb_carac_max_nom
        
    }
    if (nom_du_champ == "prenom"){
        champ = nombre_caractere_prenom
        nomb_carac_min = nomb_carac_min_prenom
        nomb_carac_max = nomb_carac_max_prenom
    }
    if (nom_du_champ == "email"){
        champ = nombre_caractere_email
        nomb_carac_min = nomb_carac_min_email
        nomb_carac_max = nomb_carac_max_email
    }
    if (nom_du_champ == "telephone"){
        champ = nombre_caractere_telephone
        nomb_carac_min = nomb_carac_min_telephone
        nomb_carac_max = nomb_carac_max_telephone
    }
    if (nom_du_champ == "message"){
        champ = nombre_caractere_message
        nomb_carac_min = nomb_carac_min_message
        nomb_carac_max = nomb_carac_max_message
    }
    return champ

}

/**
 **Fonction qui permet de trouver l'élement nombre de caractère minimum cliquer par l'utilisateur à partir de son nom
 * @param {*} nom_du_champ Le nom du champ
 * @returns l'element nombre de caractère assosié au champ cliquer par l'utilisateur
*/

function trouver_champ_nomb_carac_minimum(nom_du_champ){
    var champ
    if (nom_du_champ == "nom"){
        champ = nombre_caractere_minimum_nom
        nomb_carac_min = nomb_carac_min_nom
        nomb_carac_max = nomb_carac_max_nom
        
    }
    if (nom_du_champ == "prenom"){
        champ = nombre_caractere_minimum_prenom
        nomb_carac_min = nomb_carac_min_prenom
        nomb_carac_max = nomb_carac_max_prenom
    }
    if (nom_du_champ == "email"){
        champ = nombre_caractere_minimum_email
        nomb_carac_min = nomb_carac_min_email
        nomb_carac_max = nomb_carac_max_email
    }
    if (nom_du_champ == "telephone"){
        champ = nombre_caractere_minimum_telephone
        nomb_carac_min = nomb_carac_min_telephone
        nomb_carac_max = nomb_carac_max_telephone
    }
    if (nom_du_champ == "message"){
        champ = nombre_caractere_minimum_message
        nomb_carac_min = nomb_carac_min_message
        nomb_carac_max = nomb_carac_max_message
    }
    return champ

}

/**
 * 3)
 **Fonctions de gestion label et placeholder
 */

/**
 **Fonction qui affiche le placeholder et déplace(par le css) le label
 * @param {*} nom_du_champ nom du champ cliquer par l'utilisateur
 */
function gestion_label_click(nom_du_champ) {

    var champ_cliquer = trouver_champ(nom_du_champ)
    var label_cliquer = trouver_label(nom_du_champ)

   
    label_cliquer.classList.add("focus")
    champ_cliquer.placeholder = "entrer votre "+nom_du_champ

}

/**
 **Fonction qui permet de masquer le placeholder et déplace(en css) le label
 * @param {*} nom_du_champ nom du champ cliquer par l'utilisateur
 */
function gestion_label_onchange(nom_du_champ) {
    var champ_cliquer = trouver_champ(nom_du_champ)
    var label_cliquer = trouver_label(nom_du_champ)

    if (champ_cliquer.value == ""){
        label_cliquer.classList.remove("focus")
        champ_cliquer.placeholder = ""
    }
    

}

/**
 * 4)
 **Fonction de gestion de affichage nombre de caractère
 */

function afficher_nomb_caractere(nom_du_champ){
    var champ_cliquer = trouver_champ(nom_du_champ)
    var champ_cliquer_nomb_carac = trouver_champ_nomb_carac(nom_du_champ)
    champ_cliquer_nomb_carac.style.display = "flex"
    champ_cliquer_nomb_carac.classList.add("active");
    champ_cliquer_nomb_carac.classList.add("longeur_accept");
     champ_cliquer_nomb_carac.innerHTML ="<div class=\"d-flex justify-content-end compter-carac\">"+champ_cliquer.value.length+" / "+nomb_carac_max+"</div>";
}


/**
 **Fonction qui permet d'écrire (en direct[onkeyup]) le nombre de caractère du champ
 * @param {*} nom_du_champ Le nom du champ cliquer par l'utilisateur
 */
function ecriture_nomb_caractère(nom_du_champ){


    var champ_cliquer = trouver_champ(nom_du_champ)
    var champ_cliquer_nomb_carac = trouver_champ_nomb_carac(nom_du_champ)
    champ_cliquer_nomb_carac.classList.remove("longeur_refuse", "longeur_limit")
    champ_cliquer_nomb_carac.innerHTML ="<div class=\"d-flex justify-content-end compter-carac\">"+champ_cliquer.value.length+" / "+nomb_carac_max+"</div>";
    champ_cliquer_nomb_carac.classList.add("active");
    champ_cliquer_nomb_carac.classList.add("longeur_accept");

    /** 
     * ? code non utiliser
     * if(champ_cliquer.value.length < nomb_carac_min  && champ_cliquer.value.length !=0 ){
        champ_cliquer_nomb_carac.classList.remove("longeur_accept")
        champ_cliquer_nomb_carac.classList.add("longeur_refuse")
    }*/
    if(champ_cliquer.value.length > nomb_carac_max) {
        champ_cliquer_nomb_carac.classList.remove("longeur_accept")
        champ_cliquer_nomb_carac.classList.add("longeur_refuse")
    }
    if(champ_cliquer.value.length > ((nomb_carac_max*80)/100)){
        champ_cliquer_nomb_carac.classList.remove("longeur_accept")
        champ_cliquer_nomb_carac.classList.add("longeur_limit")
    }

}


/**
 **Fonctions qui permet de masquer le nombre de caractère si le champ est non rempli
 * @param {*} nom_du_champ prend le nom du champ afin de pouvoir le cibler
 */
function elever_nomb_caractere(nom_du_champ){
    var champ_cliquer = trouver_champ(nom_du_champ)
    var champ_cliquer_nomb_carac = trouver_champ_nomb_carac(nom_du_champ)
    if (champ_cliquer.value.length == 0){
        champ_cliquer_nomb_carac.innerHTML = ""
    }
}
/**
 **Fonction qui indique à l'utilisateur le nombre de caractere minimum à la sortie du champ si l'utilisateur a fait une erreur
 * @param {*} nom_du_champ Le nom du champ cliquer
 */

function ecriture_nomb_caractère_minimum(nom_du_champ){
    console.log("hellossssss")
    var champ_cliquer = trouver_champ(nom_du_champ)
    var champ_cliquer_nomb_carac = trouver_champ_nomb_carac(nom_du_champ)
    var champ_cliquer_nomb_carac_miminum = trouver_champ_nomb_carac_minimum(nom_du_champ)

    if (champ_cliquer.value.length < nomb_carac_min && champ_cliquer.value.length != 0){
        champ_cliquer_nomb_carac_miminum.innerHTML = "<div class= \"message_caractere_minimum\"> nombre de caractère minmum : "+nomb_carac_min
        champ_cliquer_nomb_carac_miminum.style.display = "block"
        champ_cliquer_nomb_carac_miminum.classList.add("longeur_refuse")
        champ_cliquer_nomb_carac.classList.add("longeur_refuse")
    }else {
        champ_cliquer_nomb_carac_miminum.style.display = "none"
        


    }
}


















