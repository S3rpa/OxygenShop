const bttnTop = document.getElementById('bttnTop');

    const scroll = () => {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            bttnTop.style.display = 'block';
        }
        else{
            bttnTop.style.display = 'none';
        }
    }


const toTop = () => {
    setTimeout(() => {
        document.documentElement.scrollTop = ({top:0, behavior:"smooth"});
    },200);
}

// Enseñar el botón a los 20px
window.onscroll = () => {scroll()};


bttnTop.addEventListener('click',toTop);