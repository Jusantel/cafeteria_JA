var slideImg = document.getElementById("sliderImg");

    var img = new Array(
        "./img/chocolates.jpg",
        "./img/postre.jpg",
        "./img/prensa.jpg",
        "./img/te.jpg"
    );
    var len= img.length;
    var i=0;
    function slider(){
        if(i > len-1){
            i=0;
        }
        slideImg.src = img[i];
        i++;
        setTimeout('slider()',4000);
    }

    function muestra_oculta(id) {
        let div = document.getElementById(id);
        
        // Corregir la lógica condicional
        if (div.style.display === "none" || div.style.display === "") {
            div.style.display = "flex";  // Cambiar a "flex" o el valor que desees
        } else {
            div.style.display = "none";
        }
    }
