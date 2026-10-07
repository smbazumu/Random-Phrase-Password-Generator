const theme = document.getElementById("theme")
const copy = document.getElementById("copy")
const wordCount = document.getElementById("wordcount")
const rangeCount = document.getElementById("rangecount")
const password = document.getElementById("password")
const checks = document.querySelectorAll(".check")
const generate = document.getElementById("generate")
const range = document.getElementById("range")

const words = [
    "cobalt", "lantern", "meadow", "river", "velvet", "orbit", "cedar",
    "comet", "maple", "harbor", "sunset", "rocket", "forest", "coffee",
    "thunder", "pepper", "silver", "garden", "pixel", "ocean", "marble",
    "breeze", "cactus", "violet", "pocket", "planet", "yellow", "castle"
]
const capital = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
const symbols = ["!", "@", "#", "$", "%", "&", "*", "?"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let box
let numberActive = false
let symbolActive = false
let capitalizeActive = false
let separateActive = false
let themeStatus = false

function generatePassword() {
    if (!numberActive && !symbolActive && !capitalizeActive && !separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += words[random]
        }
        password.textContent = passwordLetters
    } else if (numberActive && !symbolActive && !capitalizeActive && !separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += words[random]
        }
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * 10)
            passwordLetters += numbers[random]
        }
        password.textContent = passwordLetters
    } else if (!numberActive && symbolActive && !capitalizeActive && !separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += words[random]
        }
        let random = Math.floor(Math.random() * 8)
        passwordLetters += symbols[random]
        password.textContent = passwordLetters
    } else if (!numberActive && !symbolActive && capitalizeActive && !separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += capital[random]
        }
        password.textContent = passwordLetters
    } else if (!numberActive && !symbolActive && !capitalizeActive && separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += words[random] + '-'
        }
        passwordLetters = passwordLetters.slice(0, passwordLetters.length - 1)
        password.textContent = passwordLetters
    } else if (numberActive && symbolActive && !capitalizeActive && !separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += words[random]
        }
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * 10)
            passwordLetters += numbers[random]
        }
        let random = Math.floor(Math.random() * 8)
        passwordLetters += symbols[random]
        password.textContent = passwordLetters
    } else if (numberActive && !symbolActive && capitalizeActive && !separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += capital[random]
        }
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * 10)
            passwordLetters += numbers[random]
        }
        password.textContent = passwordLetters
    } else if (numberActive && !symbolActive && !capitalizeActive && separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += words[random] + '-'
        }
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * 10)
            passwordLetters += numbers[random]
        }
        password.textContent = passwordLetters
    } else if (!numberActive && symbolActive && capitalizeActive && !separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += capital[random]
        }
        let random = Math.floor(Math.random() * 8)
        passwordLetters += symbols[random]
        password.textContent = passwordLetters
    } else if (!numberActive && symbolActive && !capitalizeActive && separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += words[random] + '-'
        }
        let random = Math.floor(Math.random() * 8)
        passwordLetters += symbols[random]
        password.textContent = passwordLetters
    } else if (!numberActive && !symbolActive && capitalizeActive && separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += capital[random] + '-'
        }
        passwordLetters = passwordLetters.slice(0, passwordLetters.length - 1)
        password.textContent = passwordLetters
    } else if (numberActive && symbolActive && capitalizeActive && !separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += capital[random]
        }
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * 10)
            passwordLetters += numbers[random]
        }
        let random = Math.floor(Math.random() * 8)
        passwordLetters += symbols[random]
        password.textContent = passwordLetters
    } else if (numberActive && symbolActive && !capitalizeActive && separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += words[random] + '-'
        }
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * 10)
            passwordLetters += numbers[random]
        }
        let random = Math.floor(Math.random() * 8)
        passwordLetters += symbols[random]
        password.textContent = passwordLetters
    } else if (!numberActive && symbolActive && capitalizeActive && separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += capital[random] + '-'
        }
        let random = Math.floor(Math.random() * 8)
        passwordLetters += symbols[random]
        password.textContent = passwordLetters
    } else if (numberActive && !symbolActive && capitalizeActive && separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += capital[random] + '-'
        }
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * 10)
            passwordLetters += numbers[random]
        }
        password.textContent = passwordLetters
    } else if (numberActive && symbolActive && capitalizeActive && separateActive) {
        let passwordLetters = ""
        for (let i = 0; i < range.value; i++) {
            let random = Math.floor(Math.random() * 28)
            passwordLetters += capital[random] + '-'
        }
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * 10)
            passwordLetters += numbers[random]
        }
        let random = Math.floor(Math.random() * 8)
        passwordLetters += symbols[random]
        password.textContent = passwordLetters
    }
}

function copyPassword() {
    navigator.clipboard.writeText(password.textContent)
    copy.textContent = "Copied"
    setTimeout(() => {
        copy.textContent = "Copy"
    }, 1843)
}

range.addEventListener('click', () => {
    wordCount.textContent = `${range.value} words`
    rangeCount.textContent = `${range.value}`
})

generate.addEventListener('click', () => {
    checks.forEach(checkbox => {
        if (checkbox.checked) {
            box = checkbox.name
            if (box === 'number') {
                numberActive = true
            }
            if (box === 'symbol') {
                symbolActive = true
            }
            if (box === 'capitalize') {
                capitalizeActive = true
            }
            if (box === 'separate') {
                separateActive = true
            }
        } else {
            box = checkbox.name
            if (box === 'number') {
                numberActive = false
            }
            if (box === 'symbol') {
                symbolActive = false
            }
            if (box === 'capitalize') {
                capitalizeActive = false
            }
            if (box === 'separate') {
                separateActive = false
            }
        }
    })
    generatePassword()
})

copy.addEventListener('click', () => {
    copyPassword()
})

theme.addEventListener('click', () => {
    if (themeStatus === false) {
        document.body.classList.add("dark")
        theme.src = "icon-sun.svg"
        themeStatus = true
    } else {
        document.body.classList.remove("dark")
        theme.src = 'icon-moon.svg'
        themeStatus = false
    }
})