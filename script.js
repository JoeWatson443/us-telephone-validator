const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
    if (input === '') {
        alert('Please enter a number')
    }

    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\))|[0-9]{3}[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${phoneNumber}`
    )

    console.log(phoneRegex.test(input));

    if (phoneRegex.test(input)) {
        return resultsDiv.innerHTML += `
        <div id="item-structure" class="flex">
            <i class="fa-regular fa-circle-check" style="font-size: 32px; color: var(--primary);"></i>
            <div id="result-item">
                <p>${input}</p>
                <p>Is a valid US phone number</p>
            </div>
        </div>
        `
    } else {
        return resultsDiv.innerHTML += `
        <div id="item-structure" class="flex">
            <i class="fa-regular fa-circle-xmark" style="font-size: 32px; color: var(--error);"></i>
            <div id="result-item">
                <p>${input}</p>
                <p>Is not a valid US phone number</p>
            </div>
        </div>
        `      
    }
}

checkBtn.addEventListener('click', () => {
    checkValidNumber(userInput.value);
    userInput.value = '';
})

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkValidNumber(userInput.value);
        userInput.value = '';
    }
})

clearBtn.addEventListener('click', () => {
    resultsDiv.innerHTML = ''
})