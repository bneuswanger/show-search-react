export function deHyphenateObjKeys(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const dehyphenatedKey = key.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    acc[dehyphenatedKey] = obj[key];
    return acc;
  }, {});
}
