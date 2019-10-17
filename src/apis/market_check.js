import axios from 'axios';

const KEY = 'muePeyI8KYKnGGCwtJyas2fJKQqjDG6E';

export default axios.create({
  baseURL: 'https://marketcheck-prod.apigee.net/v1'
})
