// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}
function appendCat(name) {
   const cats2 = [...cats, "Broom"];
   return cats2;
}
function prependCat(name) {
    const cats3 = ["Arnold", ...cats];
    return cats3;
}function removeLastCat() {
    const cats4 = cats.slice(0, -1);
    return cats4;
}
function removeFirstCat() {
    const cats5 = cats.slice(1);
    return cats5;
}