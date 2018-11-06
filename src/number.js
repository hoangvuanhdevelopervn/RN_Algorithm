
  function abbrNum(number, decPlaces) {
      decPlaces = Math.pow(10,decPlaces);
      var abbrev = [ "k", "m", "b", "t", "qua", "qui"];
      for (var i=abbrev.length-1; i>=0; i--) {
          var size = Math.pow(10,(i+1)*3);
          if(size <= number) {
               number = Math.round(number*decPlaces/size)/decPlaces;
               if((number == 1000) && (i < abbrev.length - 1)) {
                   number = 1;
                   i++;
               }
               number += abbrev[i];
               break;
          }
      }
      return number;
  }

    // return string like this: 1k, 1.23k, 3.23m, 3.35b
    formatNumber = (number, dec) => {
      let value = '';
      // 1,000  =>  999,999 => thousand 1k
      if (value.length >= 4 && value.length < 7) {
        let divider = ''.concat(number / 1000);
        let text_separate = divider.split('.');
        if (text_separate && text_separate[1]) {
          value = text_separate[0] + '.' + text_separate[1].substring(0, dec) + 'k';
        } else {
          value = text_separate[0] + 'k';
        }
        return value;
      }

      // 1,0000,000 => 999,999,999  => million 1m
      if (value.length >= 7 && value.length < 10) {
        let divider = ''.concat(number / 1000000);
        let text_separate = divider.split('.');
        if (text_separate && text_separate[1]) {
          value = text_separate[0] + '.' + text_separate[1].substring(0, dec) + 'm';
        } else {
          value = text_separate[0] + 'm';
        }
        return value;
      }

      // 1,000,000,000 => 999,999,999,999  => billion 1b
      if (value.length >= 10 && value.length < 13) {
        let divider = ''.concat(number / 1000000000);
        let text_separate = divider.split('.');
        if (text_separate && text_separate[1]) {
          value = text_separate[0] + '.' + text_separate[1].substring(0, dec) + 'b';
        } else {
          value = text_separate[0] + 'b';
        }
        return value;
      }

      // 1,000,000,000,000 => 999,999,999,999,999 => trillion 1t
      if (value.length >= 13 && value.length < 16) {
        let divider = ''.concat(number / 1000000000000);
        let text_separate = divider.split('.');
        if (text_separate && text_separate[1]) {
          value = text_separate[0] + '.' + text_separate[1].substring(0, dec) + 't';
        } else {
          value = text_separate[0] + 't';
        }
        return value;
      }

      // > 1,000, 000, 000, 000, 000
      if (value.length >= 16) {
        let divider = ''.concat(number / 1000000000000000);
        let text_separate = divider.split('.');
        if (text_separate && text_separate[1]) {
          value = text_separate[0] + '.' + text_separate[1].substring(0, dec) + 'q';
        } else {
          value = text_separate[0] + 'q';
        }
        return value;
      }
      return value;
    };
