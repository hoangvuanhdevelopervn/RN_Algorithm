
// generate randomId
  generatedUUID = () => {
    let char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '~', '@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '>', '<'];
    let uuid = '';
    for (let i = 0; i < 64; i++) {
      var rand = char[Math.floor(Math.random() * char.length)];
      uuid = uuid.concat(rand);
    }
    console.log('uuid: ---------------------------------------> ', uuid);
  };
  
  generatedValue = input_text => {
    let valueObject = {
      a: '21', b: '22', c: '23', d: '31', e: '32', f: '33', g: '41', h: '42', i: '43', j: '51', k: '52',
      l: '53', m: '61', n: '62', o: '63', p: '71', q: '72', r: '73', s: '74', t: '81', u: '82', v: '83',
      w: '91', x: '92', y: '93', z: '94'
    };
    let value = '';
    let arrayCharacter = input_text.split('');
    console.log(arrayCharacter);
    arrayCharacter.forEach(function(item) {
      if (item === ' ') {
        value = value.concat('0');
      }
      if (item === '!') {
        value = value.concat('00');
      }
      value = value.concat(valueObject[item]);
    });
    console.log('value: ==================>', value.replace(/undefined/ig, ''));
  };
  