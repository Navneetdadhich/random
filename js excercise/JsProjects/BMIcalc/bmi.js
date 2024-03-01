const forms = document.querySelector('form')

forms.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const result2 = document.querySelector('#result2');


    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `error 404 ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `error 404 ${weight}`;
    }

    else{
         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is : ${bmi}`;

        if(bmi <= 18){
            result2.innerHTML = `You are UnderWeight !! Eat More`;
        }

        else if(bmi >= 25){
            result2.innerHTML = `You are OverWeight !! Eat Less`;
        }
        else{
            result2.innerHTML = `Hurray ! You are a Fitness Freak`;
        }

    }

} );
