const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

const allUsers = []

const signUp = () => {
    if (firstName.value === '' || lastName.value === '' || email.value === '' || password.value === '') {
        // errorMsg.style.display = 'block'
        const firstName = document.getElementById('fristName')
        toast('Haba now, fill in the inputs joor😠👿', '#f00', '#fff')
        sub.innerHTML = '...loading'
        setTimeout(() => {
            sub.innerHTML = 'Submit' 
        }, 1000)
    } else {
        errorMsg.style.display = 'none'

        const fName = document.getElementById('firstName').value
        const lName = document.getElementById('lastName').value
        const mail = document.getElementById('email').value
        const pass = document.getElementById('password').value

        const userObj = { fName, lName, mail, pass }
        // console.log(userObj);
        allUsers.push(userObj)
        toast('Sign up successful😁💕😍🥳', '#006400', '#fff')
        console.log(allUsers);

        document.getElementById('firstName').value = ''
        document.getElementById('lastName').value = ''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
    }
}
function validForm() {
    const fristName = document.getElementById('fristName').value
    const lastName = document.getElementById('lastName').valuee
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    if (fristName && lastName && email && password)
        window.location.href = 'signin.html'
    else {
        toast('Sign up successful😁', '#006400', '#fff')
    }
}