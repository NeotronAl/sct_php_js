document.getElementById('main-form').addEventListener('submit', checkForm);

function checkForm(event) {
    event.preventDefault();
    var form = document.getElementById('main-form');

    var name = form.name.value;
    var phone = form.phone.value;
    var mail = form.mail.value;
    var theme = form.theme.value;
    var text = document.getElementById('main-text').value;

    var error_msg = '';

    var phoneCheck = /\+?\d+/;
    var nameCheck = /[A-Za-zА-Яа-я\s]+/;
    var mailCheck = /\w+@{1}\w+\.{1}\w+/;

    if (name === '' || phone === '' || mail === '' || theme === '' || text === '') {
        error_msg = 'Поля не должны быть пустыми';
    } else if (!nameCheck.test(name)) {
        error_msg = 'Введите корректное имя';
    } else if (!phoneCheck.test(phone)) {
        error_msg = 'Введите корректный номер телефона';
    } else if (!mailCheck.test(mail)) {
        error_msg = 'Введите корректную электронную почту';
    }

    if (error_msg) {
        document.getElementById('error-msg').innerHTML = error_msg;
        return false;
    }
    location.reload();
    alert('Сообщение отправлено');
    return true;
}