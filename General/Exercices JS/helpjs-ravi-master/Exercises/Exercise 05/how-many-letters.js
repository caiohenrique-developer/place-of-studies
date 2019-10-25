$(function(){
    var input   = $("input[type='text']"),
        button  = $("input[type='button']");
    $(button).click(function (){
        alert("O nome completo é: " +'"'+ input.val() +'"'+" // "+ input.val().length);
    });
});