module.exports = function check(str, bracketsConfig) {
    const brackets = bracketsConfig.map(item => item.join(''));

    for (let i = 0; i < brackets.length; i++) {
        const bracket = brackets[i];

        if(str.includes(bracket)) {
            str = str.split(bracket).join('')
            i = -1
        }
        
    }
      
    return str.length === 0 ? true : false
}
