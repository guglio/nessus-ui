import axios  from 'axios';
import config from '../config.json';

const getHosts = (n = 0) => {
  return axios(`${config.APIurl}${n}`);
}

export {
  getHosts
};
