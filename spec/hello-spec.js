import { hello } from '../src/main';

describe('hello', function() {
  it('should return hello', function() {
    var message = hello();
    expect(message).toEqual("Hello");
  });
});