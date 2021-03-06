    //Her reloades siden når der skær ændringer i localstorage
    window.addEventListener('storage', function(e) {
        window.location.reload(true);
    });


    window.onload = getwishlist()

    //Nu skal vi loope igennem ønskelisten og få javascript til lytte på click events på "Fjern" knappperne
    var removeFromWishlist = document.getElementsByClassName('removebtn')

    for (var i = 0; i < removeFromWishlist.length; i++) {
        var btn = removeFromWishlist[i]
        btn.addEventListener('click', removeFromWishlistClicked)
    }

    function removeFromWishlistClicked() {

        //fjerner elementet fra ønskelisten
        var btn = event.target
        var toyItem = btn.parentElement
        var locStorageKey = btn.id
        toyItem.parentElement.removeChild(toyItem)

        //Holde styr på localstorage
        window.localStorage.removeItem(locStorageKey);
        var wishcount = window.localStorage.getItem('Wishcount');
        Number(wishcount);
        wishcount--;
        String(wishcount)
        window.localStorage.setItem('Wishcount', wishcount);

    }

    function getwishlist() {

        //Her holder vi styr på antallet af ønsker - tom string bliver til nul
        var wishcount = window.localStorage.getItem('Wishcount');
        Number(wishcount);
        //Her løber vi igennem de ønsker der ligger i localstorage og skriver dem til ønskelisten
        for (var i = 0; i < wishcount; i++) {
            var wishListRow = document.createElement('div')
            var wish = window.localStorage.getItem(i + 1);
            var wishItems = document.getElementsByClassName('wishitems')[0]
            var wishRowContent = wish;
            wishListRow.innerHTML = wishRowContent
            wishItems.append(wishListRow)

        }

    }

    function getNameID() {
        document.getElementById("textTwo").value = localStorage.getItem("textValue");
        console.log(localStorage.getItem("textValue"));
      }
    window.onload = getNameID();