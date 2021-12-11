const burgerFunction = () => {
    const burger = document.getElementById('burger');
    const burgerContent = document.querySelector('.burger-content');
    const closeBurgerBtn = document.getElementById('burger-close');
    const openBurgerBtn = document.getElementById('open-burger');

    function toggleBurger(event) {
        event.stopPropagation();
        burger.classList.toggle('hidden');
    }

    burger.addEventListener('click', toggleBurger.bind(this));
    closeBurgerBtn.addEventListener('click', toggleBurger.bind(this));
    openBurgerBtn.addEventListener('click', toggleBurger.bind(this));

    burgerContent.addEventListener('click', evt => {
        evt.stopPropagation();
    });

}

burgerFunction();