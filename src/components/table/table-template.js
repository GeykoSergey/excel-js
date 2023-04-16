const CODES = {
  A: 65,
  Z: 90,
};

// eslint-disable-next-line require-jsdoc
function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `;
}

// eslint-disable-next-line require-jsdoc
function toColumn(col) {
  return `
    <div class="column">${col}</div>
  `;
}

// eslint-disable-next-line require-jsdoc
function createRow(index, content) {
  return `
    <div class="row">
      <div class="row-info">${index ? index : ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

// ============================== 1 ============================
// eslint-disable-next-line require-jsdoc
// export function createTable(rowsCount = 15) {
//   const colsCount = CODES.Z - CODES.A + 1;
//   const rows = [];
//   const cols = new Array(colsCount)
//       .fill('')
//       .map((el, index) => {
//         return String.fromCharCode(CODES.A + index);
//       })
//       .map((el) => {
//         return toColumn(el);
//       })
//       .join('');
//   console.log(cols);

//   rows.push(createRow(cols));

//   for (let i =0; i < rowsCount; i++) {
//     rows.push(createRow());
//   }

//   return rows.join('');
// }
// ============================== 1 ============================

// ============================== 2 ============================
// eslint-disable-next-line require-jsdoc
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}
// eslint-disable-next-line require-jsdoc
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');
  console.log(cols);

  rows.push(createRow(null, cols));

  for (let i =0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}
// ============================== 2 ============================
