export function getOnlyId() {
  return URL.createObjectURL(new Blob()).substring(36)
}
