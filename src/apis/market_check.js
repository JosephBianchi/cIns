import axios from 'axios';

const KEY = 'AOv3PQT7NzbnMR08INKyMXaBAtMXb1vQ';

export default axios.create({
  baseURL: 'https://marketcheck-prod.apigee.net/v1'
})
