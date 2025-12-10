// Auto-play background music
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('bgMusic');
    audio.volume = 0.5; // Set volume to 50%
    audio.loop = true;
    
    // Try to play immediately
    var playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(function() {
            console.log("Music playing successfully");
        }).catch(function(error) {
            console.log("Autoplay failed, waiting for user interaction");
            // Play on first user interaction
            document.addEventListener('click', function playOnClick() {
                audio.play();
                document.removeEventListener('click', playOnClick);
            }, { once: true });
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los elementos con la clase 'item'
    var elementos = document.querySelectorAll('.item-container');
    // Iterar sobre cada elemento
    elementos.forEach(function(elemento) {
        // Obtener la imagen y el párrafo dentro de cada elemento
        var imagen = elemento.querySelector('img');
        var parrafo = elemento.querySelector('p');
        // Obtener el atributo 'src' de la imagen
        var srcImagen = imagen.getAttribute('src');
        // Dividir la cadena del path y tomar la última parte (nombre del archivo)
        var nombreArchivo = srcImagen.split(/[\\\/]/).pop();
        // Asignar el nombre del archivo al contenido del párrafo
        parrafo.textContent = nombreArchivo;
    });
});

//DISPLAY

let comparComputer = 0;
let comparFile = 0;
let comparMusic = 0;

document.getElementById('myComputer').onclick = function() {displayWindow('computerWindow');};

document.getElementById("close_1").onclick = function() { undisplayWindow('computerWindow');};

document.getElementById('myFiles').onclick = function() { displayWindow('fileWindow');};

document.getElementById("close_2").onclick = function() { undisplayWindow('fileWindow');};

document.getElementById('myMusic').onclick = function() { displayWindow('musicWindow');};

document.getElementById("close_3").onclick = function() { undisplayWindow('musicWindow');};

document.getElementById("start_button").onclick = function() { undisplayWindow('all');};

function displayWindow(element) {
    switch (element) {
        case 'computerWindow':
            if (comparComputer == 0) {
                document.getElementById(element).style.display = 'block';
                document.getElementById(element).style.position = 'absolute';
                document.getElementById(element).style.top = '120px';
                document.getElementById(element).style.left = '30%';
                document.getElementById(element).style.zIndex = 1;
                comparComputer = 1;
            }
            break;
    
        case 'fileWindow':
            if (comparFile == 0) {
                document.getElementById(element).style.display = 'block';
                document.getElementById(element).style.position = 'absolute';
                document.getElementById(element).style.top = '135px';
                document.getElementById(element).style.left = '30%';
                document.getElementById(element).style.zIndex = 1;
                comparFile = 1;
            }
            break;
        case 'musicWindow':
            if (comparMusic == 0) {
                document.getElementById(element).style.display = 'block';
                document.getElementById(element).style.position = 'absolute';
                document.getElementById(element).style.top = '145px';
                document.getElementById(element).style.left = '41%';
                document.getElementById(element).style.zIndex = 1;
                comparMusic = 1;
            }
            break;
    }   
}

function undisplayWindow(element) {
    switch (element) {
        case 'computerWindow':
            if (comparComputer == 1) {
                document.getElementById(element).style.display = 'none';
                comparComputer = 0;        
            }
            break;
        case 'fileWindow':
            if (comparFile == 1) {
                document.getElementById(element).style.display = 'none';
                comparFile = 0;        
            }
            break;
        case 'musicWindow':
            if (comparMusic == 1) {
                document.getElementById(element).style.display = 'none';
                comparMusic = 0;
            }
            break;
        case 'all':
            document.getElementById('computerWindow').style.display = 'none';
            document.getElementById('fileWindow').style.display = 'none';
            document.getElementById('musicWindow').style.display = 'none';
            comparMusic = 0;
            comparComputer = 0;
            comparFile = 0;
            break;    
    }    
}

//CHANGE BG

document.getElementById('bg1').onclick = function() {changeBG('1');};
document.getElementById('bg2').onclick = function() {changeBG('2');};
document.getElementById('bg3').onclick = function() {changeBG('3');};
document.getElementById('bg4').onclick = function() {changeBG('4');};
document.getElementById('bg5').onclick = function() {changeBG('5');};
document.getElementById('bg6').onclick = function() {changeBG('6');};
document.getElementById('bg7').onclick = function() {changeBG('7');};
document.getElementById('bg8').onclick = function() {changeBG('8');};
document.getElementById('bg9').onclick = function() {changeBG('9');};
document.getElementById('bg10').onclick = function() {changeBG('10');};
document.getElementById('bg11').onclick = function() {changeBG('11');};
document.getElementById('bg12').onclick = function() {changeBG('12');};

function changeBG(elemnt) {
    switch (elemnt) {
        case '1':
            document.querySelector('main').style.backgroundImage = 'url(srcs/SRL.jpg)';
            break;
    
        case '2':
            document.querySelector('main').style.backgroundImage = 'url(srcs/SRLW.png)';
            break;

        case '3':
            document.querySelector('main').style.backgroundImage = 'url(srcs/SRLW2.png)';
            break;

        case '4':
            document.querySelector('main').style.backgroundImage = 'url(srcs/SRLW3.png)';
            break;
        case '5':
            document.querySelector('main').style.backgroundImage = 'url(srcs/AW.png)';
            break;
    
        case '6':
            document.querySelector('main').style.backgroundImage = 'url(srcs/AW2.png)';
            break;

        case '7':
            document.querySelector('main').style.backgroundImage = 'url(srcs/AW3.png)';
            break;

        case '9':
            document.querySelector('main').style.backgroundImage = 'url(srcs/wp6600251.jpg)';
            break;
        case '10':
            document.querySelector('main').style.backgroundImage = 'url(srcs/wp6600254.jpg)';
            break;
        case '11':
            document.querySelector('main').style.backgroundImage = 'url(srcs/wp6600307.jpg)';
            break;
        case '12':
            document.querySelector('main').style.backgroundImage = 'url(srcs/wp6600355.jpg)';
            break;
    }
}


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let bar = '.';

    if (elmnt === document.getElementById("computerWindow")) {
        bar = 'windowBar1';
    }

    if (elmnt === document.getElementById("fileWindow")) {
        bar = 'windowBar2';
    }

    if (elmnt === document.getElementById("musicWindow")) {
        bar = 'windowBar3';
    }

    if (document.getElementById(bar)) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(bar).onmousedown = dragMouseDown;
            
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }
    
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      if (elmnt === document.getElementById("computerWindow")) {
        elmnt.style.zIndex = 2;
        document.getElementById('fileWindow').style.zIndex = 1;
        document.getElementById('musicWindow').style.zIndex = 1;
      }
      if (elmnt === document.getElementById("fileWindow")) {
        document.getElementById('computerWindow').style.zIndex = 1;
        document.getElementById('musicWindow').style.zIndex = 1;
        document.getElementById('fileWindow').style.zIndex = 2;
      }
      if (elmnt === document.getElementById("musicWindow")) {
        document.getElementById('computerWindow').style.zIndex = 1;
        document.getElementById('musicWindow').style.zIndex = 2;
        document.getElementById('fileWindow').style.zIndex = 1;
      }
      
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

dragElement(document.getElementById("computerWindow"));
dragElement(document.getElementById("fileWindow"));
dragElement(document.getElementById("musicWindow"));


//SELECTOR IMAGES

document.getElementById('mscSelector').addEventListener('change', function(){
    var selectedValue = this.value;
    switch (selectedValue) {
        case 'Yasushi Ishii - Hellsing: Unreleased TV OST/Soundtrack':
            document.querySelector("div.image").style.backgroundImage = 'url(https://i.ytimg.com/vi/sn7nmnLwWN4/hqdefault.jpg?sqp=-oaymwE8CKgBEF5IWvKriqkDLwgBFQAAAAAYASUAAMhCPQCAokN4AfABAfgBzgWAAtAFigIMCAAQARh_IBMoLzAP&rs=AOn4CLAeoyHOfsyenDKuJc6t5BoKrY3ETw)';
            document.getElementById('buttonRedirect').href = "https://youtube.com/playlist?list=PLk_xwpTMJK22fJGLbCMMYTKBlrreutyU3&si=3NmbfX_bUr3lyo0f";
            break;
        case 'Serial Experiments Lain OST [Full Album + Duvet]':
            document.querySelector("div.image").style.backgroundImage = 'url(https://i.ytimg.com/vi/WAhFBhCXbrg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDRS_9R5YyXgvB9DbGPsWlHL3SD1Q)';
            document.getElementById('buttonRedirect').href = "https://youtube.com/playlist?list=PLWVM3dHlYANf2-UUc7_jxt56zEMKDhROn&si=9LalS4LPBKbFDiK5";
            break;
        case 'Serial Experiments Lain OST - Cyberia Mix [Full Album]':
            document.querySelector("div.image").style.backgroundImage = 'url(https://i.ytimg.com/vi/bEHUFRRK9Sk/hqdefault.jpg?sqp=-oaymwE9CPYBEIoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYYyBAKGUwDw==&rs=AOn4CLDlCFad1LkQrBb73oDK4jDO5XN8Vg)';
            document.getElementById('buttonRedirect').href = "https://www.youtube.com/watch?v=bEHUFRRK9Sk&t=318s";
            break;
        case 'Suilen - Hita-Hita':
            document.querySelector("div.image").style.backgroundImage = 'url(srcs/icons/HitaHita.jpg)';
            document.getElementById('buttonRedirect').href = "https://www.mediafire.com/file/fmotdja2zhonaod/suilen_-_hita-hita.rar/file";
            break;
        case 'Suilen - licca-no-ne':
            document.querySelector("div.image").style.backgroundImage = 'url(srcs/icons/Licca-no-ne.jpg)';
            document.getElementById('buttonRedirect').href = "https://www.mediafire.com/file/i5vai7sr5hoz7yy/suilen_-_licca-no-ne.rar/file";
            break;
        case 'Suilen - Neo Haram':
             document.querySelector("div.image").style.backgroundImage = 'url(srcs/icons/Neo_Haram.webp)';
            document.getElementById('buttonRedirect').href = "https://www.mediafire.com/file/1c7ser9635b8j4n/suilen_-_neo-haram.rar/file";
            break;
        case 'Suilen - Spine':
            document.querySelector("div.image").style.backgroundImage = 'url(srcs/icons/1685367837573.jpg)';
            document.getElementById('buttonRedirect').href = "https://www.mediafire.com/file/oic4cn1w5sqcuof/Suilen_-_Spine.rar/file";               
            break;
        case 'Suilen - The Dawn':
            document.querySelector("div.image").style.backgroundImage = 'url(srcs/icons/cover-dawn.jpg)';
            document.getElementById('buttonRedirect').href = "https://www.mediafire.com/file/smot2ykl0ui6938/suilen_-_the_dawn.rar/file";
            break;
        case "Destiny 2 RASPUTIN'S NODES":
            document.querySelector("div.image").style.backgroundImage = 'url(https://i.scdn.co/image/ab67706c0000da842cdd788289ca675d93bd6bd4)';
            document.getElementById('buttonRedirect').href = "https://open.spotify.com/playlist/4P44TnouAvrMR2uINoAQW9?si=e121b920e33a42ed";
            break;
        case "Call of Duty Zombies Mix":
            document.querySelector("div.image").style.backgroundImage = 'url(https://mosaic.scdn.co/300/ab67616d00001e024799eecf1843c6d9742bc023ab67616d00001e0266422c5ecbe12c27a44ba666ab67616d00001e026c62e46fa22df6cbafaaf123ab67616d00001e0294695e0e42ce2be29d783573)';
            document.getElementById('buttonRedirect').href = "https://open.spotify.com/playlist/3gPi90iO3JI7TCDIyOuo31?si=d39632477b0d4514";
            break;
        case 'GORILLAZ':
            document.querySelector("div.image").style.backgroundImage = 'url(https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b75039b96e14621f44218f83)';
            document.getElementById('buttonRedirect').href = "https://open.spotify.com/playlist/3u8qm7ggcwxvd8p9gYPS5v?si=7cbf4619dbe94f54";
            break;
        case 'RUINER TRACKS':
            document.querySelector("div.image").style.backgroundImage = 'url(https://i.scdn.co/image/ab67706c0000da84ca98b68bed3a495e45696918)';
            document.getElementById('buttonRedirect').href = "https://open.spotify.com/playlist/0UgLHGrlYfJMLVyy0fAvhJ?si=5634e45a29e2443f";
            break;
    }
    

});




