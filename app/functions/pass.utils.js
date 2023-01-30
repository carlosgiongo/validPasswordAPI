/**
 * @param {string} value 
 * @param {number} size 
 */
function minSize (value, size) {
    return value.length >= size
}

/**
 * @param {string} value 
 * @param {number} size 
 */
function minUppercase (value, size) {
    return value.replace(/[^A-Z]/g, '').length >= size
}

/**
 * @param {string} value 
 * @param {number} size 
 */
function minLowercase (value, size) {
    return value.replace(/[^a-z]/g, '').length >= size
}

/**
 * @param {string} value 
 * @param {number} size 
 */
function minDigit (value, size) {
    return value.replace(/[^0-9]/g, '').length >= size
}

/**
 * @param {string} value 
 * @param {number} size 
 */
function minSpecialChars (value, size) {
    return value.replace(/[^!@#$%^&*()-+\/{}[]]/g, '').length >= size
}

/**
 * @param {string} value
 */
function noRepeted(value) {
    return !/(.)\1{1,}/.test(value)
}

function verify(_password, _rules) {
    const password = _password
    const rules = _rules || []
    let errors = []

    if(rules.length > 0) {
        for (let rule of rules) {
            eval(`if(!${rule.rule}('${password}', ${rule.value})) errors.push('${rule.rule}')`)
        }
    }

    //Remover duplicados dos erros
    errors = errors.filter((item, index) => errors.indexOf(item) === index)

    return {
        verify: errors.length > 0 ? false : true,
        noMatch: errors
    }
}

module.exports = {
    minSize,
    minUppercase,
    minLowercase,
    minDigit,
    minSpecialChars,
    noRepeted, 
    verify
}
      


