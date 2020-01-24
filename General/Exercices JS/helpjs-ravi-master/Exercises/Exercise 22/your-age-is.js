const yourAgeIs = () => {
    $('body form').on('submit', function (ev) {
        ev.preventDefault()

        var _currentDate = new Date().getFullYear(),
            _inputValue = $('.date-born').val()

        showResult(_inputValue, _currentDate)
    })
}

const showResult = (_inpVal, _curDate) => {
    var _userVal = parseInt(_inpVal),
        _currentDate = _curDate,
        _age = (_currentDate - _userVal) - 1

    // reference
    // https://www.webcid.com.br/calendario/calcular-idade

    if (_age < 18 && _age > 0 || _age === 0) {
        console.log('Você ainda é menor de idade: ' + _age + ' anos')
    } else if (_age >= 18) {
        console.log('Você é maior de idade: ' + _age + ' anos')
    } else if (_userVal >= _currentDate) {
        console.log('Data informada é maior ou igual que a atual!')
    }
}

$(function () {
    yourAgeIs()
})