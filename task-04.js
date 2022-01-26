const btns = document.querySelectorAll('button')

btns.forEach(btn => { 
    btn.addEventListener('click', function () { 
        const action = this.dataset.action;
        const inp = document.querySelector('#value');
        const counterValue = +inp.textContent;
        let newValue;
        

        if (action === 'decrement') {
            newValue = counterValue - 1;
        } else { 
            newValue = counterValue + 1;    
        }

        inp.textContent = newValue;
    })
})
