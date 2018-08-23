import axios  from 'axios';
import config from '../config.json';

const getNodes = (n = 0) => {
  return axios(`${config.APIurl}${n}`);
}

export {
  getNodes
};
