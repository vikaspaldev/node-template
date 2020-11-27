/* eslint-disable global-require */

describe('index', () => {
  it('should perform addition', () => {
    expect.assertions(1);

    const mockLog = jest.spyOn(console, 'log');

    require('../index');
    expect(mockLog).toHaveBeenCalledWith(4);
  });
});
