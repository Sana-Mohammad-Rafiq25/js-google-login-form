let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ValidateEmail(inputText) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.form1.email.focus();
        window.location = "password.html";
        // alert('you have entered correct email');
        return true;

    } else {
        alert("You have entered an invalid email address!");
        document.form1.email.focus();
        return false;
    }
}
// const password = document.getElementById('password');
// const toggle = document.getElementById('toggle');

// function showHide() {
//     if (password.type === 'password'); {
//         password.setAttribute('type', 'text');
//         toggle.classList.add('hide');
//         alert('its working');
//     } else {
//         
//         password.setAttribute('type', 'password');
//         toggle.classList.remove('hide');
//         alert('its not working');


//     }
// }


function CheckPassword(inputpassword) {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputpassword.value.match(decimal)) {
        alert('Correct, try another...')
        return true;
    } else {
        alert('Wrong...!')
        return false;
    }
}