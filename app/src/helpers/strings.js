// Переделать
function converter(data, phrase) {
    const text = data.text;
    data.text = data.notchanged
        ? data.text.replace(
            new RegExp(phrase.from || ""), phrase.to || data.text
        ) : data.text;
    data.notchanged = text === data.text;
    return data;
}

function decorator(line, decor, guide = {}) {
    let data = {text: vsprintf(line, guide), notchanged : true};
    data = decor ? decor.reduce(converter, data) : data;
    return vsprintf(data.text, guide);
}
function vsprintf(line, guide) {
    return Object.keys(guide)
        .reduce((text, field) =>
            text.replace(new RegExp('##' + field), guide[field]), line) || line;
}

const strings = {
    // Просматривает записи в dictionary и последовательно меняет часть строки
    // phrase = { from : "RegExp", to : "Любая строка"}
    // data = { text : "строка в котой ищем", notchanged : true}
    // notchanged - изменялась ли строка
    // Конвертирование происходит до первого изменения
    converter : converter,
    // Декорирование по словарю (decor)
    // с подстановкой полей по шаблону ##fieldname
    // Справочник полей в объекте guide
    decorator : decorator,
    // Подставляет в строку значения из объекта guide по шаблону ##field
    vsprintf : vsprintf
}
export default strings;
