function cleanSlug(slug: string) {
  return slug
    .replace(/-\d+\.html$/, "") // remove id + .html
    .replace(/\.html$/, "")
    .replace(/-\d+$/, "")
    .replace(/-/g, " ")        // remove hyphens
}

export default cleanSlug