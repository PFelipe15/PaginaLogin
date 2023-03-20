function heandleEyeToClose() {

    let eyeNone = document.querySelector('.eye-none')
    let eyeOpen = document.querySelector('.eye-open')
    eyeNone.style.visibility = 'hidden'
    eyeOpen.style.visibility = 'visible'
    document.querySelector('.passwordEye').type = "text"
}


function heandleEyeToOpen() {


    let eyeNone = document.querySelector('.eye-none')
    let eyeOpen = document.querySelector('.eye-open')
    eyeNone.style.visibility = 'visible'
    eyeOpen.style.visibility = 'hidden'
    document.querySelector('.passwordEye').type = "password"
}