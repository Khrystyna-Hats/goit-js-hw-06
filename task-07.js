const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


const handleRange = (event) => { 

    const currentFont = range.value
    text.style.fontSize = `${currentFont}px`;
}

range.addEventListener('input', handleRange)
