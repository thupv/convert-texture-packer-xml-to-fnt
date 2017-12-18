export function attr(node, key, defaultValue = undefined) {
  if (!node) {
    return defaultValue;
  }
  if (node.attributes[key]) {
    return node.attributes[key].value;
  }
  return defaultValue;
}
