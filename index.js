//  task1

export function isEmpty(obj) {
  return (
    Object.keys(obj).length === 0 ||
    Object.keys(obj).every((key) => {
      const value = obj[key];
      return (
        value === '' ||
        value === null ||
        Number.isNaN(value) ||
        value === undefined
      );
    })
  );
}

// task2

export const without = (object, ...args) => {
  if (!object || !args) return;
  const newObject = { ...object };

  args.forEach((arg) => {
    delete newObject[arg];
  });

  return newObject;
};

// task 3
export const isEmptyDeep = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return ['', null, NaN, undefined].includes(obj);
  }
  for (const key of Object.keys(obj)) {
    if (!isEmptyDeep(obj[key])) {
      return false;
    }
  }
  return true;
};

// task 4

export const intersection = (firstObj, secondObj) => {
  if (!firstObj || !secondObj) return;
  const firstObjKeys = Object.keys(firstObj);
  return firstObjKeys.reduce((acc = {}, key) => {
    if (firstObj[key] === secondObj[key]) {
      acc = {
        ...acc,
        [key]: firstObj[key],
      };
    }
    return acc;
  }, {});
};

// task 5
export const intersectionDeep = (firstObj, secondObj) => {
  if (!firstObj || !secondObj) return;
  let newObj = {};
  for (const key in firstObj) {
    if (typeof firstObj[key] === 'object') {
      let obj = intersectionDeep(firstObj[key], secondObj[key]);
      newObj[key] = obj;
    } else if (firstObj[key] == secondObj[key]) {
      newObj[key] = firstObj[key];
    }
  }
  return newObj;
};
