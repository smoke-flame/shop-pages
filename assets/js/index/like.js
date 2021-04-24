function triggerLikes() {

    let areasForLike = document.querySelectorAll('.main__cards__item__head__like');

    areasForLike.forEach(item => {
        item.addEventListener('click', onclick)
    })
};

function removeTrigger() {
    let areasForLike = document.querySelectorAll('.main__cards__item__head__like');

    areasForLike.forEach(item => {
        item.removeEventListener('click', onclick)
    })
}

function onclick(event) {
    if (event.currentTarget.classList.contains('active')) {
        removeCount()
    } else {
        addCount();
    }
    event.currentTarget.classList.toggle('active');
}