function includePopupHTMl() {
    let html = '<div id="vis-popup"><span id = "close" onclick="closePopUp()"><img id="npop" src="./images/close.jpg" alt="close"></span><img id="leftarrow" src="./images/left.jpg" alt="left arrow"><img id="rightarrow" src="./images/right.jpg" alt="right arrow"><img id="mainPopImage" src="./images/1.jpeg" alt="design"></div>';


    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild);
}

let img;
let current_image;
//function to init plugin
function imagePopupInit(target) {

    //select all images with class target
    img = document.getElementsByClassName(target);
    //adding event listener for the images clicked on
    for (var i = 0; i < img.length; i++) {
        //add pointer
        img[i].style.cursor = "pointer";
        img[i].addEventListener('click', function () {
            document.getElementById("mainPopImage").src = this.src;//to get the path of the image that was clicked, this.src is used
            document.getElementById("vis-popup").style.display = "block";
            checkarrow();
        });

    }
    includePopupHTMl();

    //next button
    document.getElementById("rightarrow").addEventListener("click", function () {
        nextimg();
    });


    //previous button
    document.getElementById("leftarrow").addEventListener("click", function () {
        previousimg();
    });




    //next image
    function nextimg() {
        getCurrentimage();
        current_image++;
        document.getElementById("mainPopImage").src = img[current_image].src;
        checkarrow();
    }


    //previous image
    function previousimg() {
        getCurrentimage();
        current_image--;
        document.getElementById("mainPopImage").src = img[current_image].src;
       checkarrow();
    }

}
//to get current image
function getCurrentimage() {
    for (var i = 0; i < img.length; i++) {
        if (img[i].src == document.getElementById("mainPopImage").src) {
            current_image = i;
            console.log(i);
        }
    }
}

//close function
function closePopUp() {
    document.getElementById("mainPopImage").src = "";
    document.getElementById("vis-popup").style.display = "none";
}
function checkarrow() {
    getCurrentimage();
    if (current_image == 0) {
        document.getElementById("leftarrow").style.display = "none";
        document.getElementById("rightarrow").style.display = "block";
    }
    else if (current_image == img.length - 1) {
        document.getElementById("rightarrow").style.display = "none";
        document.getElementById("leftarrow").style.display = "block";
    }
    // else if (current_image != 0 && current_image != img.length - 1) {
    //     document.getElementById("rightarrow").style.display = "block";
    //     document.getElementById("leftarrow").style.display = "block";
    // }
    else {
        document.getElementById("rightarrow").style.display = "block";
        document.getElementById("leftarrow").style.display = "block";
    }
}