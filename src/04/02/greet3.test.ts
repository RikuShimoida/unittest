import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
  greet: (name: string) => `Hello! ${name}. GoodBye!`,
}));

test("挨拶が未実装（本来の実装ではない）", () => {
  expect(greet("Taro")).toBe("Hello! Taro. GoodBye!");
});

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
