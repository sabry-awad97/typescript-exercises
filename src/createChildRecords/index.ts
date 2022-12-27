export interface Mapping {
  [key: string]: [string | string[], null | ((val: any) => any), any];
}

export interface Record {
  [key: string]: any;
}

export interface TransformOptions<V extends Record> {
  filterFn?: (record: V) => boolean;
  sortFn?: (recordA: V, recordB: V) => any;
  [key: string]: any;
}

export function transformRecords<
  T extends Record,
  U extends Mapping,
  V extends Record = T
>(
  sourceRecords: T[],
  attributeMapping: U,
  options: TransformOptions<V> = {}
): V[] {
  let newRecords: V[] = [];
  for (const sourceRecord of sourceRecords) {
    const newRecord: Partial<V> = {} as Partial<V>;
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
      newRecord[key as keyof V] = value;
    }
    newRecords.push(newRecord as V);
  }
  if (options.filterFn) {
    newRecords = newRecords.filter(options.filterFn);
  }
  if (options.sortFn) {
    newRecords.sort(options.sortFn);
  }
  return newRecords;
}
