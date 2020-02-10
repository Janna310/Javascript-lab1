let names = [];
 
const name1 = prompt("please enter name one")
const name2 = prompt("please enter name two")
const name3 = prompt("please enter name three")
 
//names.push(name1,name2,name3);
 
function longest_string(str_ara) {
  let max = str_ara[0].length;
  const result = str_ara.map(v => max = Math.max(max, v.length));
  console.log(result);
  return result;
}
console.log(longest_string([name1, name2, name3]));
names.push(longest_string([name1, name2, name3]));
 
const getNames = names => {
 
  if (!names[0].length) {
    return 'No names!';
  }
 
  if (names[0].length === 1) {
    return names[0] +" is the longest name";
  }
 
  if (names[0].length <= 2) {
    return names.join(' and ') + " are the longest names."
  }
 
  if (names[0].length > 2) {
    const last = names.pop()
    return `${names.join(', ')} and ${last}` + " are all the longest names."
  }
 
}
console.log (getNames(names))
