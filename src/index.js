module.exports = function toReadable (number) {
  let num1 = {0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine'};
  let num2 = {10 : 'ten', 11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen'};
  let num3 = {2 : 'twenty', 3 : 'thirty', 4 : 'forty', 5 : 'fifty', 6 : 'sixty', 7 : 'seventy', 8 : 'eighty', 9 : 'ninety'};
  let hun = 'hundred';
  let res = '';
  
  let num = number.toString();
  let n = num.length;
  if (number == 0) return num1[0];
  if (n == 3) {
    res += num1[num[0]] + ' ' + hun;
    num = num.slice(1); 
    n--;
  }
  if (n == 2) {
    if (num[0] == 0)  {
        num = num.slice(1);
        n--;
    }    
    if (+num < 20 && +num > 9) {
        if(res.length != 0) {
            res += ' ' + num2[+num];
        } else {
            res += num2[+num];
        }
        return res;
    }
    if (+num >= 20) {
        if(res.length != 0) {
            res += ' ' + num3[num[0]]; 
        } else {
            res += num3[num[0]]; 
        }
        num = num.slice(1);
        n--;
    } 
  }
  if (n == 1) {
    if (num[0] == 0) return res;
    if(res.length != 0) {
        res += ' ' + num1[num[0]]
    } else {
        res += num1[num[0]];
    }
  }

  return res;
}
