function choose(x){
    let img = document.getElementById('glowny-obraz')
    let imie  = document.getElementById('imie-auto')
    imie.innerHTML = x
    img.src = x + ".png"
}
