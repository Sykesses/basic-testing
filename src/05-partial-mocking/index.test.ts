import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

const originalUnmockedFunction = unmockedFunction;

jest.mock('./index', () => ({
  ...jest.requireActual('./index'),
  mockOne: jest.fn(),
  mockTwo: jest.fn(),
  mockThree: jest.fn(),
  unmockedFunction: jest.fn(),
}));

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    mockOne();
    mockTwo();
    mockThree();
    expect(mockOne).toHaveBeenCalled();
    expect(mockTwo).toHaveBeenCalled();
    expect(mockThree).toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    originalUnmockedFunction();
    expect(unmockedFunction).toHaveBeenCalled();
  });
});
