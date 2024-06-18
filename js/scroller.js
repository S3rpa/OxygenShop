const indicator = document.getElementById("indicator")

const progressBar = () => {
    const {scrollTop, scrollHeight} = document.documentElement;

    const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

    indicator.style.width = `${scrollPercent}%`
}

window.addEventListener('scroll',progressBar)