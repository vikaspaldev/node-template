import { add } from '../add';

describe('add', () => {
  it('should do addition', () => {
    expect.assertions(1);

    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
