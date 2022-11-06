import loadUser from '../loadUser';
import httpGet from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test('следует вызвать load User один раз с указанными аргументами', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  loadUser(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});
