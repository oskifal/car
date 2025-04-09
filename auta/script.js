function choose(x){
    let img = document.getElementById('zdjecie')
    let imie  = document.getElementById('opis')
    imie.innerHTML = x
    img.src = x + ".png"
}
