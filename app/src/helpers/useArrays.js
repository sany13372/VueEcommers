export default function useArrays(){
  const isObject = (obj) =>
    obj != null && obj.constructor.name === "Object"

  const isEmpty = (val, emptyValues = [null, undefined]) => {
    val = isObject(val) ? Object.values(val) : val;
    const empt = emptyValues.indexOf(val) > -1;
    return Array.isArray(val) ? val.length === 0 : empt;
  }

  const cutbykeys = (obj = {}, list = []) => {
    return Object.fromEntries(
      // eslint-disable-next-line no-prototype-builtins
      list.filter((key) => obj.hasOwnProperty(key))
        .map((n) => [n, obj[n]])
    );
  }
  const filter = (obj = {}, list = []) =>
    Object.fromEntries(arrays.isEmpty(list)
      ? Object.keys(obj)
        .filter((key) => !arrays.isEmpty(obj[key], [undefined, null]))
        .map((n) => [n, obj[n]])
      : Object.keys(obj)
        .filter((key) => list.indexOf(key) === -1)
        .map((n) => [n, obj[n]]));

  const column = (arrayOFobjs, column) => {
    const empty = Math.random().toString();
    return Array.from(arrayOFobjs, obj => obj[column] || empty)
      .filter(line => line !== empty);
  }

  const getNested = (obj, ...args) =>
    args.reduce((obj, level) => obj && obj[level], obj)

  const valOrdefault = (obj, def, ...path) =>
    getNested(obj, ...path) || def;

  const objOrdefault = (obj, def, ...path) => {
    const res = getNested(obj, ...path);
    return Array.isArray(res)
      ? res.reduce((a, v) => ({...a, [v]: true}), {})
      : (res || def);
  }

  const setObjProp = (obj, val, ...path) => {
    var o = obj
    while (path.length - 1) {
      var n = path.shift()
      o[n] = n in o ? o[n] : {};
      o[n] = isObject(o[n]) ? o[n] : {};
      o = o[n]
    }
    o[path[0]] = val
  }

  const fill = (keys, def = null) =>
    keys.reduce((d, k) => ({...d, [k] : def}))

  const isSame = (obj1, obj2) =>
    JSON.stringify(obj1) === JSON.stringify(obj2)

  return {
    // Делает новый объект из obj, набрав поля по списку list
    cutbykeys,
    // Отфильтровывает из объекта все поля с названиями в list
    // Если лист пустой, отбрасывает все undefined и null-поля
    filter,
    // Возвращает true, если val среди emptyValues
    isEmpty, isObject, isSame,
    // Возвращает глубоко вложенное свойство объекта либо undefined
    deepProp : getNested,
    // Контролирует наличие "глубокого свойства" у объекта.
    // Если есть, возвращает содержимое. Если нет, возвращает def
    valOrdefault,
    // Контролирует наличие "глубокого свойства" у объекта и является ли оно массивом.
    // Если да, возвращает объект с именами свойств - записями массива и значениями true.
    // Если не массив, возвращает свойство. Если свойства нет, возвращает def/
    objOrdefault,
    // Из массива объектов делает массив с содержимым одного свойства
    column,
    // Устанавливает глубокое свойства объекта
    deepSet : setObjProp,
    // Возвращает объект с полями из keys и значениями def
    fill
  }
}
