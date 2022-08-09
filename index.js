const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (nm) => {
  cats.push(nm);
}

const destructivelyPrependCat = (nm) => {
  cats.unshift(nm);
}

const destructivelyRemoveLastCat = () => {
  cats.pop();
}

const destructivelyRemoveFirstCat = () => {
  cats.shift();
}

const appendCat = (nm) => {
  const arr = [...cats];
  arr.push(nm);
  return arr;
}

const prependCat = (nm) => {
  const arr = [...cats];
  arr.unshift(nm);
  return arr;
}

const removeLastCat = () => {
  const arr = [...cats];
  arr.pop();
  return arr;
}

const removeFirstCat = () => {
  const arr = [...cats];
  arr.shift();
  return arr;
}
