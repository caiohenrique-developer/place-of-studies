$(function(){
    var input   = $("input[type='text']"),
        button  = $("input[type='button']");
    $(button).click(function (){
        alert(input.value);
    });
});