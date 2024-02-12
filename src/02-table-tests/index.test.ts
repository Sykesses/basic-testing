import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 4, b: 2, action: Action.Subtract, expected: 2 },
  { a: 5, b: 2, action: Action.Multiply, expected: 10 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
];

describe('simpleCalculator', () => {
  testCases.forEach(({ a, b, action, expected }) => {
    test(`should return ${expected} when calculating ${a} ${action} ${b}`, () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({
      a: 5,
      b: 3,
      action: 'InvalidAction' as Action,
    });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: 'invalid', b: 3, action: Action.Add });
    expect(result).toBeNull();
  });
});
