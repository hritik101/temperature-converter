// alert("hii");

// const celcius = document.querySelector("#celcius");
// const fahrenheit = document.querySelector("#fahrenheit");



const mainFunction = () => {
    const degreeNumber = document.querySelector(".numberinput").value;
    // const button = document.querySelector("button");
    const answer = document.querySelector(".answer");

    const optionValue = document.querySelector("#temperature");
    const selectedValue = temperature.options[optionValue.selectedIndex].value;



    

    const celTOfehren = (degreevalfeh)=>{
        
        let fahResult = (degreevalfeh*1.8)+32;
        return fahResult;
    };

    const fehrenTOcel = (degreevalcel)=>{
        let celResult = (degreevalcel-32)/1.8;
        return celResult;
    };


    if (degreeNumber != ""){
        let Result;

        if (selectedValue == "fahrenheit"){
            Result = celTOfehren(degreeNumber);
            answer.innerHTML = `answer is ${(Result.toFixed(2))} °F`
            
        }else if(selectedValue == "celcius"){
            
            Result = fehrenTOcel(degreeNumber);
            answer.innerHTML = `answer is ${(Result.toFixed(2))} ℃`;
        }
    }else{
        answer.innerHTML = "enter number";
    }

    
    


};    
    
// button.addEventListener("click",mainFunction);



