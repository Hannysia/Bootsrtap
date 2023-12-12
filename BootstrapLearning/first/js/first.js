function triangle(){

    var tr_bottom = document.getElementById('triangle_bottom');
    let e_el = tr_bottom.childElementCount;
    if(e_el != 0){
        let children = tr_bottom.children;
        for(let i = 0; i < e_el; i++){
            var childToRemove1 = tr_bottom.querySelector('.triangle'); // Вибираємо дочірній елемент, який хочемо видалити
            tr_bottom.removeChild(childToRemove1);
        }
    }
    else{
        let w = window.innerWidth;
        let traingles_amount = Math.floor(w / 10.065)-1;
        for(let i = 0; i < traingles_amount; i++){
            let div_elem = document.createElement('div');
            div_elem.className = 'triangle'
            div_elem.classList.add('t' + i);
            div_elem.style.left = (10*i) + 'px';
            tr_bottom.appendChild(div_elem);
        }
    }

    let w = window.innerWidth;
    let traingles_amount = Math.floor(w / 10.065)-1;
    for(let i = 0; i < traingles_amount; i++){
        let div_elem = document.createElement('div');
        div_elem.className = 'triangle'
        div_elem.classList.add('t' + i);
        div_elem.style.left = (10*i) + 'px';
        tr_bottom.appendChild(div_elem);
    }
}





document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('load', triangle);
    window.addEventListener('resize', triangle);
});

window.addEventListener("resize", function() {
    window.addEventListener('load', triangle);
    window.addEventListener('resize', triangle);
});