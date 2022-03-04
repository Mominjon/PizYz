const fathers = [...document.querySelectorAll(".plans")]
const allUls = [...document.querySelectorAll('ul')];

allUls.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

fathers.forEach((el) => {
    el.addEventListener('click', (e) => {
        const ul = e.currentTarget.querySelector('ul');
        if (ul.classList.contains('show')) {
            ul.classList.add('hide');
            ul.classList.remove('show')
        } else {
            ul.classList.add('show');
            ul.classList.remove('hide');
        }
    })
});