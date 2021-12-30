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

function tabsFunction() {
    const tabsControls = document.querySelectorAll('.tab-control');
    const tabs = document.querySelectorAll('.service-tab');
    tabsControls.forEach(control => {
        control.addEventListener('click', e => {
            resetTabs();
            findTab(e.target.value);
        })
    });


    function findTab(tabName) {
        tabs.forEach(tab => {
            if(tab.dataset.tabName === tabName) {
                tab.classList.add('active');
            }
        });

        tabsControls.forEach(control => {
            if(control.value === tabName) {
                control.classList.add('active');
            }
        })
    }

    function resetTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabsControls.forEach(control => {
            control.classList.remove('active');
        })
    }
}

tabsFunction();
burgerFunction();