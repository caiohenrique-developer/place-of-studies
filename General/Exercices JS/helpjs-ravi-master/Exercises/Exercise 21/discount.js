const productValue = () => {
    $('body .user-number').on('keypress', function () {
        var _value = $(this).val()

        _value.replace(',', '.')
    })

    $('body form').on('submit', function (ev) {
        ev.preventDefault()

        var _objValue = $(this).serializeArray(),
            _theValue = parseFloat(_objValue[0].value),
            _discount = (_theValue * 5) / 100

        console.log(_discount)

        // $('#result')
        //     .html('Valor descontado: R$ ' + _discount + ' ☻')
        //     .append('<br>')
        //     .after(
        //         $('#result')
        //             .clone()
        //             .text('Valor bruto a ser pago com desconto aplicado: R$ ' + (_theValue - _discount))
        //     )
    })
}

$(function () {
    productValue()
})