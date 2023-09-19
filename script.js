const form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`

    if (bmi < 18.6) {
        results.innerHTML = `${Math.round(bmi)} - You are underweight`;
    } else if (bmi <= 24.9) {
        results.innerHTML = `${Math.round(bmi)} - You have Normal Weight`;
    } else {
        results.innerHTML = `${Math.round(bmi)} - You are overweight`;
    }
    

})