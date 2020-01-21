const productValue = () => {
    $('body .user-number').on('keypress', function () {
        var _value = $(this).val()

        $('body .user-number').val(_value.replace(',', '.'))
    })

    $('body form').on('submit', function (ev) {
        ev.preventDefault()

        var _objValue = $(this).serializeArray(),
            _theValue = parseFloat(_objValue[0].value),
            _discount = (_theValue * 5) / 100

        // $('#result')
        //     .html('Valor descontado: R$ ' + _discount.toFixed(2) + ' ☻')
        //     .append('<br>')
        //     .after(
        //         $('#result')
        //             .clone()
        //             .text('Valor bruto a ser pago com desconto aplicado: R$ ' + (_theValue - _discount.toFixed(2)))
        //     )
    })
}

$(function () {
    productValue()
})