Quick Question #1

{1,2,3,4}


Quick Question #2

'ref'


Quick Question #3

0: {Array(3) => true}

1: {Array(3) => false}


hasDuplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length;


vowelCount

const isVowel = (char) => 'aeiou'.includes(char);

const vowelCount = (str) => {

  const vowelMap = new Map();

  for (let char of str) {

    if (isVowel(char)) {

      if (vowelMap.has(char)) {

        vowelMap.set(char, vowelMap.get(char) + 1)

      } else {

        vowelMap.set(char, 1);

      }

    }

  }

  return vowelMap;

}