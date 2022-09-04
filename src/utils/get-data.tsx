export function getDataFromObject(object: any, key: string) {
  try {
    const keys = key.split('.');
    let value = object;
    for (const k of keys) {
      value = value[k];
    }
    return value || null;
  } catch (err) {
    return null;
  }
}
