const signInForm = document.querySelector('.sign-in__form');
const signInLabels = document.querySelectorAll('.form-label');
const signInInputs = document.querySelectorAll('.sign-in__input');
const signInEmail = document.querySelector('.sign-in__input--email');
const signInPass = document.querySelector('.sign-in__input--pass');
const signInError = document.querySelectorAll('.sign-in__error');


signInForm.onsubmit = function () {
    let emailVal = signInEmail.value;
    let emailPass = signInEmail.value;
    let emptyInputs = Array.from(signInInputs).filter(input => input.value === '');

    signInInputs.forEach( function (input) {
        if (input.value === '') {
            input.classList.add('sign-in__input--error');
            console.log('err');
        } else {
            input.classList.remove('sign-in__input--error');

        }
    });

    if (signInEmail.value === '') {
        signInError[0].classList.add('sign-in__error-active');
        signInLabels[0].classList.add('sign-in_input-label--error')
    } else {
        signInError[0].classList.remove('sign-in__error-active');
        signInLabels[0].classList.remove('sign-in_input-label--error')

    };

    if (signInPass.value === '') {
        signInError[1].classList.add('sign-in__error-active');
        signInLabels[1].classList.add('sign-in_input-label--error')
    } else {
        signInError[1].classList.remove('sign-in__error-active');
        signInLabels[1].classList.remove('sign-in_input-label--error')

    };

    if (emptyInputs.length !== 0) {
        console.log('not field');
        return false;
    };


}

signInEmail.onclick = function () {
    signInError[0].classList.remove('sign-in__error-active');
}

signInPass.onclick = function () {
    signInError[1].classList.remove('sign-in__error-active');
}
