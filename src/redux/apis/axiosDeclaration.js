import defaultAxios from 'axios';
import env from '../../utils/env';

const axios = defaultAxios.create(env.CONFIG);

export {axios};
