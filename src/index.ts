export const b = (): void => {
  console.log('function b is running');
};

export const a = (): void => {
  console.log('run function b');
  b();
};
