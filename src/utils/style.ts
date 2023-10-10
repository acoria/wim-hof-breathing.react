/**
 * This function concatenates css styles into a single string
 */
export const style = (...styles: (string | undefined)[]): string => {
  let value = "";
  styles.forEach((style) => {
    if (style) {
      if (value.length === 0) {
        value = style;
      } else {
        value = `${value} ${style}`;
      }
    }
  });
  return value;
};
