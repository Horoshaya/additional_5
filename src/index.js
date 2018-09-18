module.exports = function check(str, bracketsConfig) {
			var count = 0;
			str = str.split('');
			pair1 = ['(', ')'];
			pair2 = ['[', ']'];
			pair3 = ['{', '}'];
			pair4 = ['|', '|'];

			var col = 0;


			for (var i = 0; str.length-1 >= i; i++) {
				var pair = [];

				pair[0] = str[i];

				for (var j = i+1; str.length-1 >= j; j++) {
					pair[1] = str[j];

					if (JSON.stringify(pair)==JSON.stringify(pair1) || JSON.stringify(pair)==JSON.stringify(pair2) || JSON.stringify(pair)==JSON.stringify(pair3) || JSON.stringify(pair)==JSON.stringify(pair4)) {

						delete str[i];
						delete str[j];

						col = j - i - 1;
						count++;

						if (col % 2 != 0) {
							return false;
						} else break;
					}
				}	
			}

			if (str.length/count == 2 ) {
				return true;
			} else {
				return false;
			}
}	

