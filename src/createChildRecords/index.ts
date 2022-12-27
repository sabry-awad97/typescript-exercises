export interface AttributeMapping {
  [key: string]: [string | string[], null | ((val: any) => any), any];
}

export interface ParentRecord {
  [key: string]: any;
}

export function createChildRecords<T extends ParentRecord, U extends AttributeMapping>(
  parentRecords: T[],
  attributeMapping: U,
  filterFn?: (record: T) => boolean,
  sortFn?: (recordA: T, recordB: T) => any
): T[] {
  let childRecords: T[] = [];
  for (const parentRecord of parentRecords) {
    const childRecord: T = {} as T;
    for (const [key, mapping] of Object.entries(attributeMapping)) {
      const [sourceKey, mappingFn, defaultValue] = mapping;
      let value: any;
      if (Array.isArray(sourceKey)) {
        value = sourceKey.reduce((acc, k) => acc[k as keyof T], parentRecord);
      } else {
        value = parentRecord[sourceKey as keyof T];
      }
      if (value === undefined) {
        value = defaultValue;
      }
      if (mappingFn) {
        value = mappingFn(value);
      }
      childRecord[key as keyof T] = value;
    }
    childRecords.push(childRecord);
  }
  if (filterFn) {
    childRecords = childRecords.filter(filterFn);
  }
  if (sortFn) {
    childRecords.sort(sortFn);
  }
  return childRecords;
}
