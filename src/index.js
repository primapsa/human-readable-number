const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',	
    'fourteen',	
    'fifteen',	
    'sixteen',	
    'seventeen',	
    'eighteen',	
    'nineteen'    
    ];
  const exceptions = {'20' : 'twenty',
                      '30': 'thirty',
                      '40': 'forty',
                      '50': 'fifty',
                      '80': 'eighty'};
  
module.exports = function toReadable (number) {
    let digit = [];
    let hundreds;
    let dozens;
    let tens;
    let units;
    let exception;
    let ten; 
    let tenstring;
    hundreds = Math.floor(number / 100);
    dozens = number - hundreds * 100;
    tens = Math.floor(dozens/10);
    units = dozens % 10;
    if (number === 0){
        digit.push(numbers[number]);
    }
    if (hundreds >= 1){ 
      digit.push(numbers[hundreds]);  
      digit.push('hundred');
    }
    if(dozens < 20 && dozens >= 10)
      {
        digit.push(numbers[dozens])
      }

    if(dozens < 100 && dozens >= 20){ 
       exception = Object.keys(exceptions);     
       tenstring = numbers[tens]+'ty';
        
        
             if(dozens % 10 == 0){  
                if(exception.includes(String(dozens))){         
                  digit.push(exceptions[dozens]);
                }
                else{               
                  digit.push(tenstring);
                } 
             }
             else {  
                 ten = dozens-units;
                if(exception.includes(String(ten))){
                digit.push(exceptions[ten]);
                digit.push(numbers[units]);    
                } 
                else
                {                  
                digit.push(tenstring);
                digit.push(numbers[units]);
                } 
            }         
             
    } 
    if(dozens <10 && dozens>0 ){
      digit.push(numbers[units]);
    }  
    return digit.join(' ');
}
