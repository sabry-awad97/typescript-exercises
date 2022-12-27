export interface AttributeMapping {
  [key: string]: [string | string[], null | ((val: any) => any), any];
}

export interface Record {
  [key: string]: any;
}

export function createRecords<T extends Record, U extends AttributeMapping>(
  sourceRecords: T[],
  attributeMapping: U,
  filterFn?: (record: T) => boolean,
  sortFn?: (recordA: T, recordB: T) => any
): T[] {
  let newRecords: T[] = [];
  for (const sourceRecord of sourceRecords) {
    const newRecord: T = {} as T;
    for (const [key, mapping] of Object.entries(attributeMapping)) {
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
      newRecord[key as keyof T] = value;
    }
    newRecords.push(newRecord);
  }
  if (filterFn) {
    newRecords = newRecords.filter(filterFn);
  }
  if (sortFn) {
    newRecords.sort(sortFn);
  }
  return newRecords;
}
