const filterOutOdds = (...args) => args.filter (v => v % 2 === 0);

const findMin = (...values) => values.reduce((min, v) => v < min ? v : min);

const mergeOjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];

const removeRandom = (items) => {

  let index = Math.floor(Math.random() * items.length);

  return [...items.slice(0, index), ...items(index + 1)];

};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({...obj, [key] : val });

const removeKey = (obj, key) => {

  let newObj = {...obj};

  delete newObj[key];

  return newObj;

};

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key] : val})