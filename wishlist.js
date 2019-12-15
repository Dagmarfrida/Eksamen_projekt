/*Inspireret af denne video: https://www.youtube.com/watch?v=YeFzkC2awTM og tilpasset
så det passer til vores Fætter BR ønskeliste*/

/* Test - er der hul igennem?
console.log("Ved du hvad det bedste er? Legetøj fra BR");*/


//kun til test
//window.localStorage.clear();

//Nu skal vi loope igennem varekataloget og få javascript til lytte på click events på de enkelte elemter i kataloget
var addToWishlist = document.getElementsByClassName('toyimage')

for (var i = 0; i < addToWishlist.length; i++) {
    var itemimage = addToWishlist[i]
    itemimage.addEventListener('click', addToWishlistClicked)
}

//Her henter vi information om varen i kataloget når der klikkes på varens billede
function addToWishlistClicked(event) {
    var itemimage = event.target
    var toyItem = itemimage.parentElement
    var iteminfo = toyItem.getElementsByClassName('toyinfo')[0].innerText
    var imgsrc = toyItem.getElementsByClassName('toyimage')[0].src
    var imgalt = toyItem.getElementsByClassName('toyimage')[0].alt
    addToyToWishlist(iteminfo, imgsrc, imgalt)
}
//Tilføjer det klikkede til ønskelisten, men skal på anden side
function addToyToWishlist(iteminfo, imgsrc, imgalt) {
    var answer;
    var answer = confirm("Vil du tilføje den til din ønskeliste?");
    if (answer == true) {
        var wishListRow = document.createElement('wishitem')

        //Her holder vi styr på antallet af ønsker - tom string bliver til nul
        var wishcount = window.localStorage.getItem('Wishcount');
        Number(wishcount);
        wishcount++;

        var wishRowContent = `      
    <element class="wishitem">
        <img class="toyimage" src="${imgsrc}" alt="${imgalt}">
        <p class="toyinfo"> "${iteminfo}"</p>
        <button class="removebtn" id="${wishcount}">Fjern</button>
    </element>`
        wishListRow.innerHTML = wishRowContent
        String(wishcount);
        window.localStorage.setItem('Wishcount', wishcount);
        addWishToLocalStorage(wishcount, wishListRow.innerHTML)


        window.localStorage.setItem('Wishcount', wishcount);
        addWishToLocalStorage(wishcount, wishListRow.innerHTML)

    } else { //hænger sammen med confirm dialog

    }




}
//Her gemmer vi ønsket i hukommelsen så vi kan hente det ind når ønskeliste siden åbnes
function addWishToLocalStorage(key, HTMLstring) {
    window.localStorage.setItem(key, HTMLstring);

}