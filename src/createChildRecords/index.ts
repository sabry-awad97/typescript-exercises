export interface Mapping {
  [key: string]: [string | string[], null | ((val: any) => any), any];
}

export interface Record {
  [key: string]: any;
}

export function transformRecords<
  T extends Record,
  U extends Mapping,
  V extends Record = T
>(
  sourceRecords: T[],
  attrMapping: U,
  filterFn?: (record: V) => boolean,
  sortFn?: (recordA: V, recordB: V) => any
): V[] {
  let newRecords: V[] = [];
  for (const sourceRecord of sourceRecords) {
    const newRecord: Partial<V> = {} as Partial<V>;
    for (const [key, mapping] of Object.entries(attrMapping)) {
      const [sourceKey, mappingFn, defaultValue] = mapping;
      let value: any;
      if (Array.isArray(sourceKey)) {
        value = sourceKey.reduce((acc, k) => acc[k as keyof T], sourceRecord);
      } else {
        value = sourceRecord[sourceKey as keyof T];
      }
      if (value === undefined) {
        value = defaultValue;
      }
      if (mappingFn) {
        value = mappingFn(value);
      }
      newRecord[key as keyof V] = value;
    }
    newRecords.push(newRecord as V);
  }
  if (filterFn) {
    newRecords = newRecords.filter(filterFn);
  }
  if (sortFn) {
    newRecords.sort(sortFn);
  }
  return newRecords;
}
