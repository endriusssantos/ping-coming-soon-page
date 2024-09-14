const btn = document.getElementById('btn');
const input = document.getElementById('input');
const errorMsg = document.getElementById('message');

btn.addEventListener('click', () => {
    const inputValue = input.value.trim();
    
    if (!isEmail(inputValue)) {
        input.classList.add('error-input');
        errorMsg.textContent = 'Please provide a valid email address';
    } else {
        input.classList.remove('error-input');
        errorMsg.textContent = '';
    }
});

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};