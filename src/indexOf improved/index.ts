export function indexOfImproved(arr: any[], el: any) {
  return arr.findIndex(arrEl => Object.is(arrEl, el));
}
