const baseUrl = 'https://new-2c9g.onrender.com';

import { apiInstance } from '../index.js';
const api = apiInstance();

function getService(param, success, fail) {
  api.get(`${baseUrl}${param}`).then(success).catch(fail);
}
export { getService };