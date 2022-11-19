
    let number=document.getElementById("sum");
    let arrayNumber=[];

    //code old-------------------------------------------------------------------------------------------------------------
    // var sumNumber=0;
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

    //code old-------------------------------------------------------------------------------------------------------------
    // function sum(){
    //     //get data from dom HTML
    //     let number1=document.getElementById("number1").value;
    //     let number2=document.getElementById("number2").value;
    //     let result=document.querySelector(".result");


    //     let num1=reverseString(number1);
    //     let num2=reverseString(number2);
    //     let length1=number1.length;
    //     let length2=number2.length;
    //     let maxLength=null;
    //     let stringSum='';
    //     let resultString='';
    //     let resultNumber=0;
       

    //     if (length1>length2) {
    //         maxLength=length1;
    //         for (let i = maxLength-1; i >= length2; i--) {
    //             num2+="0";
    //         }
    //     }
    //     if (length2>length1) {
    //         maxLength=length2;
    //         for (let i = maxLength-1; i >= length1; i--) {
    //             num1+="0";
    //         }
           
    //     }
    //     if(length1==length2){
    //         maxLength=length1;
    //     }
        
    //     let numberMemorize=0;
    //     let sumAll=0;

    //     for (let x = 0; x < maxLength; x++) {
    //         let sum=0;
    //         sum=(parseFloat(num1.charAt(x))+parseFloat(num2.charAt(x))+numberMemorize);
    //         sumAll=sum%10
    //         numberMemorize=Math.floor(sum/10);
    //         stringSum+=sumAll.toString();
    //     }
    //     if(numberMemorize==1){
    //         stringSum+="1";
    //     }
    //     resultString=reverseString(stringSum);
    //     resultNumber=parseFloat(resultString)

    //     //render to interface
    //     arrayNumber.push(resultNumber);
    //     const setJson=JSON.stringify(arrayNumber);
    //     localStorage.setItem('key',setJson);

    //     const obj=JSON.parse(localStorage.getItem('key'));
        
    //     result.innerHTML=arrayNumber.map(item=>
    //         `
    //         <p>Kết quả ${item}</p>
    //         `
    //     )
    // }

    //code new -------------------------------------------------------------------------------------------------------------
    function sum(){
        //get data from dom HTML
        let number1=(document.getElementById("number1").value);
        let number2=(document.getElementById("number2").value);
        let result=document.querySelector(".result");

        let maxLength=null;
        let stringSum='';
        let resultString='';
        let resultNumber=0;

        //call function to check the numbers
        if (checkNumber1(number1,number2)) {
            alert("Nhập số phải lớn hơn 0!");
        }
        if (checkNumber2(number1,number2)) {
                alert("Bạn không được nhập ký tự");
        }
        else{
            //convert string to array
            let numberArray1=number1.split('');
            let numberArray2=number2.split('');
            //------------------

            let length1=numberArray1.length;
            let length2=numberArray2.length;
        

            if (length1<length2) {
                maxLength=length2;
                for (let i = length1; i < maxLength; i++) {
                    // using unshift add "a" to the string
                    numberArray1.unshift("0");
                }
            }
            if (length2<length1) {
                maxLength=length1;
                for (let i = length2; i < maxLength ; i++) {
                    // using unshift add "a" to the string
                    numberArray2.unshift("0");
                }
            
            }
            if(length1==length2){
                maxLength=length2;
            }
            //convert array to string
            let num1=numberArray1.join('');
            let num2=numberArray2.join('');
            //------------------
            let numberMemorize=0;
            let sumAll=0;
        
            for (let x = (maxLength)-1; x >=0; x--) {
            let sum=0;
                sum=(parseFloat(num1.charAt(x))+parseFloat(num2.charAt(x))+numberMemorize);
              
                sumAll=sum%10;
                numberMemorize=Math.floor(sum/10);
                stringSum+=sumAll.toString();
            }
        
            if(numberMemorize==1){
                stringSum+="1";
            }
            resultString=reverseString(stringSum);
            resultNumber=parseFloat(resultString);
                
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
        
    }

    function checkNumber1(number1,number2){
        let numArray=[number1,number2]
        for (let x = 0; x < numArray.length; x++) {
            const element = numArray[x];
            if (element < 0) {
                return true;
            }
        }
    }

    function checkNumber2(number1,number2){
        let num1=number1.split('');
        let num2=number2.split('');
        let numArray=[...num1,...num2];
        for (let x = 0; x < numArray.length; x++) {
            let e=parseInt(numArray[x]);
            if (Number.isNaN(e)==true) {
                return true;
            }
        }
    }

    function reverseString(number){
        let newString='';
        for (let x =  number.length -1; x >= 0; x--) {
            let element = number[x];
            newString+=element;
        }
        return newString;
    }
