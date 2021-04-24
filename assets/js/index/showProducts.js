const typesParent = document.querySelector('.main__types');
const AllTypes = document.querySelectorAll('.main__types__item');



AllTypes.forEach(item => {
    item.addEventListener('click', event => {
        AllTypes.forEach(item => item.classList.remove('active'))
        event.currentTarget.classList.add('active');
        let index = Number(event.currentTarget.getAttribute('data-count'));

        switch (index) {
            case 0:
                removeTrigger();
                container.innerHTML = '';
                arrayOfSneakers.forEach(item => {
                    container.insertAdjacentElement('beforeend', item);
                })
                triggerLikes();
                break;
            case 1:
                removeTrigger();
                container.innerHTML = '';
                arrayOfWatches.forEach(item => {
                    container.insertAdjacentElement('beforeend', item);
                })
                triggerLikes();
                break;
            case 2:
                removeTrigger();
                container.innerHTML = '';
                arrayOfBackpackes.forEach(item => {
                    container.insertAdjacentElement('beforeend', item);
                })
                triggerLikes();
                break;

        }
    })
})