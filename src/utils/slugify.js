export function slugify(str) {
  // console.log("slugify called with:", str);

  if (!str) {
    return "";
  }

  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
