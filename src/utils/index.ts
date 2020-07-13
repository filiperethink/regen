export const handleStrings = (fn, string) => {
  const toUpper = fn.upperCase(string);
  const trim = fn.trim(toUpper);
  const pascal = fn.pascalCase(trim);
  const text = fn.upperFirst(pascal);
  return text;
};
