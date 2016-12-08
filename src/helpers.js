// https://codepad.co/snippet/zRykJud8
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function titleize(str) {
  var string_array = str.split(' ');
  string_array = string_array.map(str => capitalize(str));
  return string_array.join(' ');
}