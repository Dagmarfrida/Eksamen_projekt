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
    addToyToWishlist(iteminfo, imgsrc)
}
//Tilføjer det klikkede til ønskelisten, men skal på anden side
function addToyToWishlist(iteminfo, imgsrc) {
    var wishListRow = document.createElement('wishitem')
    var wishRowContent = `      
    <element class="wishitem">
        <img class="toyimage" src="${imgsrc}" alt="1">
        <div class="toyinfo">${iteminfo}</div>
    </element>`
    wishListRow.innerHTML = wishRowContent
        //Her holder vi styr på antallet af ønsker - tom string bliver til nul
    var wishcount = window.localStorage.getItem('Wishcount');
    Number(wishcount)
    wishcount++;
    String(wishcount)
    window.localStorage.setItem('Wishcount', wishcount);
    addWishToLocalStorage(wishcount, wishListRow.innerHTML)
}
//Her gemmer vi ønsket i hukommelsen så vi kan hente det ind når ønskeliste siden åbnes
function addWishToLocalStorage(key, HTMLstring) {
    window.localStorage.setItem(key, HTMLstring);

}