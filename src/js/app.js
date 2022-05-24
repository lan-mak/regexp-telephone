export default function filterNumber(number) {
  if (/[a-z]/.test(number)) {
    throw new Error('номер неможет содержать буквы');
  }

  let data = number;

  if (/^7|^8[^86]/.test(number)) {
    data = data.replace(/^7|^8/, '+7');
  }

  data = data.replace(/[)(\s-]/g, '');
  return data;
}
