export const capitalize = (sentence: string): string => {
  if (!sentence) return "";
  const words = sentence.split(" ");
  return words
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
};
