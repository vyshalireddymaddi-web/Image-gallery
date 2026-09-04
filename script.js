let currentImage = 0;

let visibleImages = [];


/* Filter Images */

function filterImages(category) {

    let images =
        document.querySelectorAll(".image-box");

    images.forEach(function(image) {

        if (
            category === "all" ||
            image.classList.contains(category)
        ) {

            image.style.display = "block";

        } else {

            image.style.display = "none";

        }

    });

}


/* Open Image */

function openImage(image) {

    let allImages =
        document.querySelectorAll(".image-box");

    visibleImages = [];

    allImages.forEach(function(box) {

        if (box.style.display !== "none") {

            let img =
                box.querySelector("img");

            visibleImages.push(img);

        }

    });


    currentImage =
        visibleImages.indexOf(image);


    document.getElementById("largeImage").src =
        image.src;

    document.getElementById("lightbox").style.display =
        "flex";

}


/* Close Image */

function closeImage() {

    document.getElementById("lightbox").style.display =
        "none";

}


/* Next Image */

function nextImage() {

    currentImage++;

    if (currentImage >= visibleImages.length) {

        currentImage = 0;

    }

    document.getElementById("largeImage").src =
        visibleImages[currentImage].src;

}


/* Previous Image */

function previousImage() {

    currentImage--;

    if (currentImage < 0) {

        currentImage =
            visibleImages.length - 1;

    }

    document.getElementById("largeImage").src =
        visibleImages[currentImage].src;

}