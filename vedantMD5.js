let md5 = "Vedant";
const byteSize = (str) => new Blob([str]).size;

function calculation(performedValue, a, b, value, shiftBy, constantVal) {
  let a1 = add(a, performedValue);
  let b1 = add(value, constantVal);
  a1 = add(a1, b1);
  a1 = circularShift(a, shiftBy);
  return add(a1, b);
}

function add(x, y) {
  let leftMost = (x & 0xffff) + (y & 0xffff);
  let rightMost = (x >> 16) + (y >> 16) + (l >> 16);
  return (rightMost << 16) | (leftMost & 0xffff);
}

function circularShift(n, shiftBy) {
  return (n << shiftBy) | (n >>> (32 - shiftBy));
}
function funF(a, b, c, d, value, shiftBy, constantVal) {
  return calculation((b & c) | (~b & d), a, b, value, shiftBy, constantVal);
}
// funF :- First calculate (b & c) | (~b & d) // Logic of MD5
//      :- Process Block 1
//      :- pass calculated value and rest parameter to calculation function
//      :- Fix logic

function funG(a, b, c, d, value, shiftBy, constantVal) {
  return calculation((b & d) | (c & ~d), a, b, value, shiftBy, constantVal);
}
function funH(a, b, c, d, value, shiftBy, constantVal) {
  return calculation(b ^ c ^ d, a, b, value, shiftBy, constantVal);
}
function funH(a, b, c, d, value, shiftBy, constantVal) {
  return calculation(b ^ c ^ d, a, b, value, shiftBy, constantVal);
}

function hashGenerate(md5) {
  let i;
  let inputValue = md5;
  let noOfBlocks = ((inputValue.length + 8) >> 6) + 1; // No of blocks will be decided // For first 55 input nblk = 1
  //padding bits
  let arr = new Array(noOfBlocks * 16); // Size of array will be
  for (i = 0; i < noOfBlocks * 16; i++) arr[i] = 0;
  for (i = 0; i < inputValue.length; i++) {
    arr[i >> 2] |= inputValue.charCodeAt(i) << ((i % 4) * 8); // Logic 1
  }
  arr[i >> 2] |= 0x80 * Math.pow(2, (i % 4) * 8); // Logic 2
  arr[noOfBlocks * 16 - 2] = inputValue.length * 8;
  console.log(arr);
  inputValue = arr;

  let a = 1732584193,
    b = -271733879,
    c = -1732584194,
    d = 271733878,
    olda,
    oldb,
    oldc,
    oldd;
  let constantArray = [
    -680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426,
    -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162,
    1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632,
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848,
    568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784,
    1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556,
    -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222,
    -722521979, 76029189, -640364487, -421815835, 530742520, -995338651,
    -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606,
    -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649,
    -145523070, -1120210379, 718787259, -343485551,
  ];

  for (i = 0; i < inputValue.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = funF(a, b, c, d, x[i + 0], 7, constantArray[0]);
    d = funF(d, a, b, c, x[i + 1], 12, constantArray[1]);
    c = funF(c, d, a, b, x[i + 2], 17, constantArray[2]);
    b = funF(b, c, d, a, x[i + 3], 22, constantArray[3]);
    a = funF(a, b, c, d, x[i + 4], 7, constantArray[4]);
    d = funF(d, a, b, c, x[i + 5], 12, constantArray[5]);
    c = funF(c, d, a, b, x[i + 6], 17, constantArray[6]);
    b = funF(b, c, d, a, x[i + 7], 22, constantArray[7]);
    a = funF(a, b, c, d, x[i + 8], 7, constantArray[8]);
    d = funF(d, a, b, c, x[i + 9], 12, constantArray[9]);
    c = funF(c, d, a, b, x[i + 10], 17, constantArray[10]);
    b = funF(b, c, d, a, x[i + 11], 22, constantArray[11]);
    a = funF(a, b, c, d, x[i + 12], 7, constantArray[12]);
    d = funF(d, a, b, c, x[i + 13], 12, constantArray[13]);
    c = funF(c, d, a, b, x[i + 14], 17, constantArray[14]);
    b = funF(b, c, d, a, x[i + 15], 22, constantArray[15]);
    a = funG(a, b, c, d, x[i + 1], 5, constantArray[16]);
    d = funG(d, a, b, c, x[i + 6], 9, constantArray[17]);
    c = funG(c, d, a, b, x[i + 11], 14, constantArray[18]);
    b = funG(b, c, d, a, x[i + 0], 20, constantArray[19]);
    a = funG(a, b, c, d, x[i + 5], 5, constantArray[20]);
    d = funG(d, a, b, c, x[i + 10], 9, constantArray[21]);
    c = funG(c, d, a, b, x[i + 15], 14, constantArray[22]);
    b = funG(b, c, d, a, x[i + 4], 20, constantArray[23]);
    a = funG(a, b, c, d, x[i + 9], 5, constantArray[24]);
    d = funG(d, a, b, c, x[i + 14], 9, constantArray[25]);
    c = funG(c, d, a, b, x[i + 3], 14, constantArray[26]);
    b = funG(b, c, d, a, x[i + 8], 20, constantArray[27]);
    a = funG(a, b, c, d, x[i + 13], 5, constantArray[28]);
    d = funG(d, a, b, c, x[i + 2], 9, constantArray[29]);
    c = funG(c, d, a, b, x[i + 7], 14, constantArray[30]);
    b = funG(b, c, d, a, x[i + 12], 20, constantArray[31]);
    a = funH(a, b, c, d, x[i + 5], 4, constantArray[32]);
    d = funH(d, a, b, c, x[i + 8], 11, constantArray[33]);
    c = funH(c, d, a, b, x[i + 11], 16, constantArray[34]);
    b = funH(b, c, d, a, x[i + 14], 23, constantArray[35]);
    a = funH(a, b, c, d, x[i + 1], 4, constantArray[36]);
    d = funH(d, a, b, c, x[i + 4], 11, constantArray[37]);
    c = funH(c, d, a, b, x[i + 7], 16, constantArray[38]);
    b = funH(b, c, d, a, x[i + 10], 23, constantArray[39]);
    a = funH(a, b, c, d, x[i + 13], 4, constantArray[40]);
    d = funH(d, a, b, c, x[i + 0], 11, constantArray[41]);
    c = funH(c, d, a, b, x[i + 3], 16, constantArray[42]);
    b = funH(b, c, d, a, x[i + 6], 23, constantArray[43]);
    a = funH(a, b, c, d, x[i + 9], 4, constantArray[44]);
    d = funH(d, a, b, c, x[i + 12], 11, constantArray[45]);
    c = funH(c, d, a, b, x[i + 15], 16, constantArray[46]);
    b = funH(b, c, d, a, x[i + 2], 23, constantArray[47]);
    a = funI(a, b, c, d, x[i + 0], 6, constantArray[48]);
    d = funI(d, a, b, c, x[i + 7], 10, constantArray[49]);
    c = funI(c, d, a, b, x[i + 14], 15, constantArray[50]);
    b = funI(b, c, d, a, x[i + 5], 21, constantArray[51]);
    a = funI(a, b, c, d, x[i + 12], 6, constantArray[52]);
    d = funI(d, a, b, c, x[i + 3], 10, constantArray[53]);
    c = funI(c, d, a, b, x[i + 10], 15, constantArray[54]);
    b = funI(b, c, d, a, x[i + 1], 21, constantArray[55]);
    a = funI(a, b, c, d, x[i + 8], 6, constantArray[56]);
    d = funI(d, a, b, c, x[i + 15], 10, constantArray[57]);
    c = funI(c, d, a, b, x[i + 6], 15, constantArray[58]);
    b = funI(b, c, d, a, x[i + 13], 21, constantArray[59]);
    a = funI(a, b, c, d, x[i + 4], 6, constantArray[60]);
    d = funI(d, a, b, c, x[i + 11], 10, constantArray[61]);
    c = funI(c, d, a, b, x[i + 2], 15, constantArray[62]);
    b = funI(b, c, d, a, x[i + 9], 21, constantArray[63]);
    a = ad(a, olda);
    b = ad(b, oldb);
    c = ad(c, oldc);
    d = ad(d, oldd);
  }
}

hashGenerate(md5);
