function calculateBtn() {
	var weight = parseFloat(document.getElementById("weightInput").value);
	var height = parseFloat(document.getElementById("heightInput").value) / 100;
    var resultFinal = document.getElementById("result");

    if(weight === "" || isNaN(weight)){
        resultFinal.innerHTML = "Please provide a valid weight";
    }else if(height === "" || isNaN(height)){
        resultFinal.innerHTML = "Please provide a valid height";
    }else{
        
        let bmi = (weight / (height * height)).toFixed(2)
    
        if (bmi < 18.5){
            resultFinal.innerHTML = `Underweight: <span>${bmi}</span>`
        }else if (bmi >= 18.5 && bmi < 24.9){
            resultFinal.innerHTML = `Normal: <span>${bmi}</span>`
        }else if (bmi >= 25.0 && bmi < 29.9){
            resultFinal.innerHTML = `Overweight: <span>${bmi}</span>`
        }else{
            resultFinal.innerHTML = `Obese: <span>${bmi}</span>`
        }
    }
}

function reset(){
    window.location.reload();
    resultFinal.innerHTML="";
}
