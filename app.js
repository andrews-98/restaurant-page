
// Menu Change
let tabMenu = function () {
    let selectMenu = document.querySelectorAll('.menu_select_item')
    let showMenu = document.querySelectorAll('.show_menu')
    let dataName;

    selectMenu.forEach(item => {
        item.addEventListener('click', ClickSelectMenu)

    })
    function ClickSelectMenu() {
        selectMenu.forEach(item => {
            item.classList.remove('active')
        })
        this.classList.add('active');
        let dataName = this.getAttribute('data-tab-name');
        selectShowMenu(dataName)
    }
    function selectShowMenu(dataName) {
        showMenu.forEach(item => {
            item.classList.contains(dataName) ? item.classList.add('active') : item.classList.remove('active')
        })
    }
}


tabMenu();


//TypeText//
function TypeText(string1, string2) {
    let typed = new Typed(string1, {
        stringsElement: string2,
        typeSpeed: 10,
        backSpeed: 0,
        startDelay: 500,
        showCursor: false

    })
}

TypeText('#typed-title', '#typed-string-title')
TypeText('#typed-text', '#typed-string-text')

//Background change
// function changeBackground(){
// $('.intro').css('background','url("/img/intro_.png")')
// }

// asetTimeout(chngeBackground,5000)

