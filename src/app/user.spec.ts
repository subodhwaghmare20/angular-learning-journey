import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    const directive = new User();
    expect(directive).toBeTruthy();
  });
});
