
    let number=document.getElementById("sum");
    var sumNumber=0;
    let arrayNumber=[];
    function sum(){
        let number1=parseInt(document.getElementById("number1").value);
        let number2=parseInt(document.getElementById("number2").value);
        let result=document.querySelector(".result");
        sumNumber=number1+number2;
        
        
        arrayNumber.push(sumNumber);
        
        const setJson=JSON.stringify(arrayNumber);
        localStorage.setItem('key',setJson);

        const obj=JSON.parse(localStorage.getItem('key'));
        
        result.innerHTML=arrayNumber.map(item=>
            `
            <p>Kết quả ${item}</p>
            `
        )
    }