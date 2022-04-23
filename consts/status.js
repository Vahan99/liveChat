module.exports = {
  error: () => {msg: 'Internal server error', status: 500},
  success: () => {msg: 'Success OK', status: 200},
  notfound: () => {msg: 'This resource was not found', status: 404},
  forbidden: () => {msg : 'You are forbidden from seeing this', status: 403},
  unvalidate: () => {msg : 'This is a validation error', status: 403},
  unauthorized: () => {msg : 'You need to login to view this', status: 401},
}
