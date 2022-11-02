// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];
const capitalsArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialArr = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let passwordLength = 15
let passwordOne = ""
let passwordTwo = ""
const passwordOneEl = document.getElementById("password-one")
const passwordTwoEl = document.getElementById("password-two")
const lightModeBodyEl = document.body
const lightModeTitleEl = document.getElementById("hero-title")
const lightModeSubtitleEl = document.getElementById("hero-subtitle")
const lightModeHeroEl = document.getElementById("hero-el")
const lightModeBtnEl = document.getElementById("light-mode-btn-el")
const lightModeBtnIconEl = document.getElementById("light-mode-btn-icon-el")
const lightModeBtnTextEl = document.getElementById("light-mode-btn-text-el")
const lightModeBtnWrapperEl = document.getElementById("light-mode-btn-wrapper-el")
const lightModeCheckboxesEl = document.getElementById("checkboxes-el")
const capitalsEl = document.getElementById("capitals")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const specialEl = document.getElementById("special")
const errorMessageEl = document.getElementById("error-message-el")
let isLightMode = false
document.getElementById("lowercase").required = true

function handleClick() {
    if (document.querySelector("input[type='checkbox']:checked")) {
        passwordOne = generatePassword()
        passwordTwo = generatePassword()
        // console.log("pwOne", passwordOne, "pwTwo", passwordTwo)
        passwordOneEl.textContent = passwordOne
        passwordTwoEl.textContent = passwordTwo
        errorMessageEl.textContent = " "
    } else {
        errorMessageEl.innerHTML = "Check at least one box."
    }
}

function generatePassword() {
    let newPassword = ""
    let availableCharacters = []
    if (capitalsEl.checked) {
        availableCharacters.push(...capitalsArr)
    }
    if (lowercaseEl.checked) {
        availableCharacters.push(...lowercaseArr)
    }
    if (numbersEl.checked) {
        availableCharacters.push(...numbersArr)
    }
    if (specialEl.checked) {
        availableCharacters.push(...specialArr)
    }
    // console.log("availableCharacters", availableCharacters)
    for (let i = 0; i < passwordLength; i++) {
        newPassword += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    }
    // console.log("newPassword", newPassword)
    return newPassword
}

function checkPasswordLength() {
    passwordLength = document.getElementById("password-length").value
    if (passwordLength < 6) {
        passwordLength = 6
        document.getElementById("password-length").value = 6
    } else if (passwordLength > 24) {
        passwordLength = 24
        document.getElementById("password-length").value = 24
    } 
    // console.log("password-length", passwordLength)
}

function lightMode() {
    isLightMode = !isLightMode
    // console.log("isLightMode", isLightMode)
    if (isLightMode) {
        lightModeBodyEl.style.backgroundColor="#ECFDF5";
        lightModeTitleEl.style.color="#2B283A"
        lightModeSubtitleEl.style.color="#6B7280"
        lightModeHeroEl.style.borderBottomColor="#D5D4D8"
        lightModeBtnIconEl.classList.remove("fa-toggle-on")
        lightModeBtnIconEl.classList.add("fa-toggle-off")
        lightModeBtnTextEl.textContent = "DARK "
        lightModeBtnWrapperEl.style.color = "#1F2937"
        lightModeBtnIconEl.style.color = "#1F2937"
        lightModeCheckboxesEl.style.color = "black"
    } else {
         lightModeBodyEl.style.backgroundColor="#1F2937";
         lightModeTitleEl.style.color="#fff"
         lightModeSubtitleEl.style.color="#D5D4D8"
         lightModeHeroEl.style.borderBottomColor="#2F3E53"
         lightModeBtnIconEl.classList.remove("fa-toggle-off")
         lightModeBtnIconEl.classList.add("fa-toggle-on")
         lightModeBtnTextEl.textContent = "LIGHT "
         lightModeBtnWrapperEl.style.color = "#ECFDF5"
         lightModeBtnIconEl.style.color = "#ECFDF5"
         lightModeCheckboxesEl.style.color = "white"
    }
}

function copyToClipboard(isFirstBtn) {
    // console.log("isFirstBtn", isFirstBtn)
    if (isFirstBtn) {
        var copyText = document.querySelector("#password-one").textContent
    } else {
        var copyText = document.querySelector("#password-two").textContent
    }
    // console.log("copyText", copyText)
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard: " + copyText);
    })
}
