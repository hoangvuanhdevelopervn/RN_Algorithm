
// generate randomId
generatedUUID = length => {
  let char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '~', '@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '>', '<'];
  let uuid = '';
  for (let i = 0; i <= length; i++) {
    uuid = uuid.concat(char[Math.floor(Math.random() * char.length)]);
  }
  return uuid;
};

// xoa duplicate trung lap => member_id
removeDuplicate = originArray => {
  const things = {};
  things.thing = [];
  originArray.forEach(function(item) {
    things.thing.push({ at: item.at, member_id: item.member_id });
  });
  return Array.from(
    things.thing.reduce((m, t) => m.set(t.member_id, t), new Map()).values()
    );
  };

  // T9 Keyboard
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
      if(item === '.'){
        value = value.concat('000');
      }
      if(item === '?'){
        value = value.concat('0000');
      }
      value = value.concat(valueObject[item]);
    });
    return value.replace(/undefined/ig, '');
  };

  // ma hoa thanh a => b, b => c
  generatedValue = input_text => {
    let value = '';
    let arrayInputText = input_text.trim(' ').toLowerCase().split('');
    let arrayCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    arrayInputText.forEach(function(text) {
      for (let i = 0; i < arrayCharacters.length; i++) {
        let item = arrayCharacters[i];
        if (text === item) {
          if (i === arrayCharacters.length - 1) {
            value = value.concat(arrayCharacters[0]);
          } else {
            value = value.concat(arrayCharacters[i + 1]);
          }
        }
      }
    });
    return value;
  };
