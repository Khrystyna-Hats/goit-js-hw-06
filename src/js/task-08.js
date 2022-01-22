const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === "" || formElements.password.value === "") { 
        alert("Please, fill in all inputs")
    }

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = { mail, password };
    console.log(formData);

    form.reset();

    // * Second variant *
    // const formData = new FormData(event.currentTarget);
    // console.log(formData)

    // formData.forEach((value, name) => {
    //     console.log('onFormSubmit -> name', name);
    //     console.log('onFormSubmit -> value', value);
    //  })







}
