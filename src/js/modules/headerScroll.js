export function initScroll() {
    
    let preScrollPos = window.pageYOffset;

    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;

        if (preScrollPos > currentScrollPos)  {
            document.getElementById('navScroll').style.top = '0';
        } else {
            document.getElementById('navScroll').style.top = '-100px';     
        }

        preScrollPos = currentScrollPos;
    }

}