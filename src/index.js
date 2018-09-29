module.exports = function check(str, bracketsConfig) {
    let bracketsCol = 0;
    str = str.split('');

    let pair = [];
    for (let i = 0; str.length-1 >= i; i++) {
        pair[0] = str[i];
        let openBrackets = 0;
        for (let j = i+1; str.length-1 >= j; j++) {
            pair[1] = str[j];
            for (let configIndex = 0, length = bracketsConfig.length; length-1 >= configIndex; configIndex++) {
                if (JSON.stringify(bracketsConfig[configIndex]) == JSON.stringify(pair)) {
                    if (openBrackets != 0) {
                        openBrackets--;
                        break;
                    }

                    delete str[i];
                    delete str[j];
                    bracketsCol++;

                    let bracketsBetweenDeleted = j - i - 1;
                	if (bracketsBetweenDeleted % 2 != 0) {
                   	    return false;
                	} else { 
                        j = str.length - 1;
                        break;
                	}
                } else if (pair[0] == pair[1] && configIndex == length-1) {
                    openBrackets++;
                    break;
                }
            }  
        }
    }

    if (str.length/bracketsCol == 2 ) {
        return true;
    } else {
        return false;
    }
}
