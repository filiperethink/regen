export const handleStrings = (stringFunc, str) => {
  const toUpper = stringFunc.upperCase(str);
  const trim = stringFunc.trim(toUpper);
  const pascal = stringFunc.pascalCase(trim);
  const text = stringFunc.upperFirst(pascal);
  return text;
};
