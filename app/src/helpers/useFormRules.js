
import validator from 'validator/validator.min'

export default function useFormRules(options = {}){
  const getOpt = (rule, name, def = '') => (
    options[rule] || {[name] : def}
  )[name] || def;

  const forSplitDigits = /\d{1,3}(?=(\d{3})+(?!\d))/g
  const splitDigits = (val , sep = '`') => {
    val = (val || '').toString();
    return val.replace(forSplitDigits, '$&' + sep)
  };

  const ruleUrl = (val) => validator.isURL(val)
    || getOpt('ruleUrl', 'error','Формат ссылки: http[s]://domain.zone[/xxx[/xxx]]');

  const ruleEmail = (val) => validator.isEmail(val)
    || getOpt('ruleEmail', 'error','Формат адреса почты: название@домен.зона');

  const ruleTelegram = (val) => !!val && /^@.{2,100}$/.test(val)
    || getOpt('ruleTelegram', 'error','Формат адреса telegram: @названиеаккаунта');

  const minLen = getOpt('ruleLen','minlength', null)
    || getOpt('ruleMinLen','length', 3);

  const maxLen = getOpt('ruleLen','maxlength', null)
    || getOpt('ruleMaxLen','length', 10);

  const ruleMinLen = (val) => !!val && val.length > minLen
      || getOpt('ruleLen', 'minerror', null)
      || getOpt('ruleMinLen', 'error',
        `Строка должна быть больше`)

  const ruleDate = (val) => !!val && /^\d{1,2}\.\d{1,2}\.\d{4}$/.test(val)
    || getOpt('ruleDate', 'error',
      "Правильный формат данных: дд.мм.гггг")

  const rulePhone = (val) => validator.isMobilePhone(val)
    || getOpt('rulePhone', 'error',
      "Номер дожен бытьиз 10 цифр: +7... или 8...")
  const rulePassportN = (val) => !!val && /^\d{6}$/.test(val)
    || getOpt('rulePassportN', 'error',
      "Номер дожен состоять из 6 цифр.")
  const rulePassportS = (val) => !!val && /^\d{4}$/.test(val)
    || getOpt('rulePassportS', 'error',
      "Серия состоит из 4-х цифр")
  const ruleLen = (val) => {
    const r = new RegExp(`^.{${minLen},${maxLen}}$`)
    return !!val&&r.test(val)
      || getOpt('ruleLen', 'error',
      `Строка должна быть больше ${minLen} символов, но меньше ${maxLen}`)
  }

  const cutDomain = (str, def = '') =>{
    const regexp = /(?:[\w-]+\.)+[\w-]+/g
    const res = [...(regexp.exec(str)||[def])]
    return res[0]
  }
  const isValid = val => (Array.isArray(val) ? val : [val])
    .filter(v=>v.length > 0).length === 0
  return {
    forSplitDigits, splitDigits, cutDomain, isValid,
    ruleMinLen,  ruleDate, ruleLen, ruleUrl,
    rulePhone, rulePassportS, rulePassportN,
    ruleEmail, ruleTelegram
  }
}
