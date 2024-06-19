let bttnTop = document.getElementById('bttnTop');

    const scrollTop = () => {
        if(document.body.scrollTop > 16 || document.documentElement.scrollTop > 16){
            bttnTop.style.display = 'block';
        }
        else{
            bttnTop.style.display = 'none';
        }
    }


const toTop = () => {
    document.body.scrollTop = 0;
    documen.documentElement.scrollTop = 0;
}

window.addEventListener('click',toTop);