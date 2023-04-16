// eslint-disable-next-line require-jsdoc
export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// сделав проверку
// if (typeof string !== 'string') {
//   return '';
// }
// мы всегда будем знать что из capitalize нам всегда
// вернется строка