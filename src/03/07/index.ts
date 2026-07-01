export function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const str = 'Hello, World!';
      resolve(str);
    }, duration);
  });
}

export function timeout(duration: number) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(duration);
    }, duration);
  });
}
