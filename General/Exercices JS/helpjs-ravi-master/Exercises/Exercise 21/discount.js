const productValue = () => {
    $('body .user-number').on('keyup', function () {
        var _value = $(this).val()

        $('body .user-number').val(_value.replace(',', '.'))
    })

    $('#result').after('<br>', $('#result').clone().attr('id', 'result2'))

    $('body form').on('submit', function (ev) {
        ev.preventDefault()

        var _objValue = $(this).serializeArray(),
            _theValue = parseFloat(_objValue[0].value),
            _discount = (_theValue * 5) / 100

        $('#result')
            .html('Valor descontado: R$ ' + _discount.toFixed(2) + ' ☻')

        $('#result2')
            .text('Valor bruto a ser pago com desconto aplicado: R$ ' + (_theValue - _discount.toFixed(2)))
    })
}

$(function () {
    productValue()
})