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

module.exports = {
    minSize,
    minUppercase,
    minLowercase,
    minDigit,
    minSpecialChars,
    noRepeted
}
      


