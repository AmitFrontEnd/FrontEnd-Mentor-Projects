let notifications = document.querySelectorAll('.notification');
let counter = 0;
let notificationList = document.querySelector('.num');
let spanIn = document.querySelectorAll('#dot')
let allnotbtn = document.querySelector('.btn')

notifications.forEach((elem) => {
    if (elem.classList.contains('notification-in')) {
        counter++;
        elem.querySelector('#dot').classList.add('dot');
    }

    elem.addEventListener('click', () => {
        if (elem.classList.contains('notification-in')) {
            elem.classList.remove('notification-in');
            elem.querySelector('#dot').classList.remove('dot');
            counter--;
            notificationList.innerText = counter;
        }
    });
});

allnotbtn.addEventListener('click', () => {

    notifications.forEach((elem) => {
        if (elem.classList.contains('notification')) {
            elem.classList.remove('notification-in')
           spanIn.forEach((dot)=>{
            dot.classList.remove('dot')
           })
        }
    })
    counter = 0
    notificationList.innerText = counter;


})
notificationList.innerText = counter;
