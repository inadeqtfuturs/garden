export function slugifyTag(tag) {
  const slug = tag
    .toString()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  return slug;
}

export default slugifyTag;
