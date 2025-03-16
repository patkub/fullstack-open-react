import axios from 'axios'
const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// const newNameObject = {
//   name: newName,
//   number: newPhoneNumber
// }

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteById = (id) => {
  const request = axios.delete(baseUrl + "/" + id)
  return request.then(response => response.data)
}

export default { 
  getAll: getAll,
  create: create,
  update: update,
  deleteById: deleteById
}