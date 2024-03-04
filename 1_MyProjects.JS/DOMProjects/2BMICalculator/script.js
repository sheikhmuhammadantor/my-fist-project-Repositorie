const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('.results');

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `You Enter an Invalid Value - ${height}
                                 Please Give a Valid Height !`;
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `You Enter an Invalid Value - ${weight}
                                 Please Give a Valid Weight !`;
    }else if (!isNaN(height) || !isNaN(weight)){
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    }else{
        //  This Code Does't Run and Output ;
        // results.innerHTML = `Something Is Wrong Please Try Again !`
        alert('Something Is Wrong Please Try Again !');
    }
});