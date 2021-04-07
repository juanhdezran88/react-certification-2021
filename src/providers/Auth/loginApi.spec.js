import loginApi from './loginApi';

describe('Login API', () => {
  it('should authenticate successfully', () => {
    loginApi('wizeline', 'Rocks!').then((data) => {
      expect(data.id).toBe('123');
      expect(data.name).toBe('Wizeline');
    });
  });

  it('should return an error', () => {
    loginApi('wizeline', 'Rocs').then().catch((error) => {
        expect(error).toBe('Username or password invalid');
      });
  });
});
