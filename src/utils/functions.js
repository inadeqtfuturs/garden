export function slugifyTag(tag) {
  const slug = tag
    .toString()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  return slug;
}

export function isEmptyArray(arr) {
  if (Array.isArray(arr) && arr.length === 0) {
    return true;
  }
  return false;
}

export default slugifyTag;
