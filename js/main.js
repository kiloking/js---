
var optionSelect = document.getElementById('option-select')

var submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click' , function() {
    var option = optionSelect.value
    var currency = document.getElementById('currency').value
    var result = document.getElementById('result')
    if(currency === NaN || currency === '') {
        result.innerHTML = '<h4>請輸入正確數字</h4>';
    }

    if(option === 'nt2us'){
        var outcome = parseFloat(currency) /30 ;
        result.innerHTML = 'US' + outcome.toFixed(2);
    } else if (option === 'us2nt') {
        var outcome = parseFloat(currency)*30;
        result.innerHTML = 'Nt' + outcome.toFixed(2); 
    }


})


//console.log(optionSelect.value)