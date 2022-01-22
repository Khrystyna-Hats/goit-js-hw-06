const inp = document.querySelector('#validation-input');


const handleInputBlur = (event) => { 

    inp.classList.add('invalid')

    if (parseInt(inp.getAttribute('data-length')) === event.currentTarget.value.length) {
        inp.classList.replace('invalid','valid');
    }
    
}
    
inp.addEventListener('blur', handleInputBlur)



