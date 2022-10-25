import { a, b } from '../src/index';
describe('function a', () => {
  a();
  expect(b).toBeCalled();
});
