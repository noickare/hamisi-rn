export const convertToLocalDate = (seconds: number, nanoseconds: number) => {
  const utcDate = new Date(seconds * 1000 + nanoseconds / 1000000);
  return utcDate.toString();
};
