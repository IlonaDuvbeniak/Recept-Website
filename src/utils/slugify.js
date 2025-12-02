export function slugify(str) {}

return str
  .toLowerCase()
  .replace(/&/g, "and")
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-")
  .trim();
