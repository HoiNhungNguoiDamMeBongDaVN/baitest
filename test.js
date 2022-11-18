
    let number=document.getElementById("sum");
    var sumNumber=0;
    let arrayNumber=[];
    // function sum(){
    //     let number1=parseInt(document.getElementById("number1").value);
    //     let number2=parseInt(document.getElementById("number2").value);
    //     let result=document.querySelector(".result");

    //     sumNumber=number1+number2;
        
        
    //     arrayNumber.push(sumNumber);
        
    //     const setJson=JSON.stringify(arrayNumber);
    //     localStorage.setItem('key',setJson);

    //     const obj=JSON.parse(localStorage.getItem('key'));
        
    //     result.innerHTML=arrayNumber.map(item=>
    //         `
    //         <p>Kết quả ${item}</p>
    //         `
    //     )
    // }

    function sum(){
        //get data from dom HTML
        let number1=document.getElementById("number1").value;
        let number2=document.getElementById("number2").value;
        let result=document.querySelector(".result");


        let num1=reverseString(number1);
        let num2=reverseString(number2);
        let length1=number1.length;
        let length2=number2.length;
        let maxLength=null;
        let stringSum='';
        let resultString='';
        let resultNumber=0;
       

        if (length1>length2) {
            maxLength=length1;
            for (let i = maxLength-1; i >= length2; i--) {
                num2+="0";
            }
        }
        if (length2>length1) {
            maxLength=length2;
            for (let i = maxLength-1; i >= length1; i--) {
                num1+="0";
            }
           
        }
        if(length1==length2){
            maxLength=length1;
        }
        
        let numberMemorize=0;
        let sumAll=0;

        for (let x = 0; x < maxLength; x++) {
            let sum=0;
            sum=(parseFloat(num1.charAt(x))+parseFloat(num2.charAt(x))+numberMemorize);
            sumAll=sum%10
            numberMemorize=Math.floor(sum/10);
            stringSum+=sumAll.toString();
        }
        if(numberMemorize==1){
            stringSum+="1";
        }
        resultString=reverseString(stringSum);
        resultNumber=parseFloat(resultString)
            
        //render to interface
        arrayNumber.push(resultNumber);
        const setJson=JSON.stringify(arrayNumber);
        localStorage.setItem('key',setJson);

        const obj=JSON.parse(localStorage.getItem('key'));
        
        result.innerHTML=arrayNumber.map(item=>
            `
            <p>Kết quả ${item}</p>
            `
        )
    }

    function reverseString(number){
        let newString='';
        for (let x =  number.length -1; x >= 0; x--) {
            let element = number[x];
            newString+=element;
        }
        return newString;
    }
