let yellowPicturesHTML = parseToHTML(yellowPictures);
let redPicturesHTML = parseToHTML(redPictures);
let pinkPicturesHTML = parseToHTML(pinkPictures);
let bluePicturesHTML = parseToHTML(bluePictures);
const allPictures = [yellowPicturesHTML, redPicturesHTML, pinkPicturesHTML, bluePicturesHTML];


function parseToHTML(array) {
    let newArray = array.map(item => {
        return `
                <div class="main__product__carusel__item">
                <div class="main__product__bg">
                <div class="main__product__background">
                    <div class="main__product__background__photo">
                    <img src="${item}" alt="sneaker" />
                    </div>
                </div>
                </div>
            </div>
        `
    });
    return newArray
}