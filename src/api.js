
let api = `http://newsapi.org`
const API_KEY = '57e4c06b9dcf49ac93575f6a042c31bf'

const apiHost = host => { api = host }
const urlFor = resource => `${api}${resource}`

const HTTP_OK = 200

const throwResponseError = response => {
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const emitNativeError = error => {
  throw error
}

const statusCheck = successStatuses => response => {
  if (successStatuses.includes(response.status)) {
    return response
  } else {
    throwResponseError(response)
  }
}

const okCheck = statusCheck([HTTP_OK])

const headers = {
  'Content-Type': 'application/json'
}

const paramsWithApiKey = params => {
  const result = new URLSearchParams(params)
  // result.set('api_key', API_KEY)
  return result
}

const query = (resource, params) => fetch(`${urlFor(resource)}?${paramsWithApiKey(params)}`, {
  headers
}).then(okCheck, emitNativeError)
  .then(response => response.json())


const searchArticles = (search) => {
    query(`/v2/everything`, `q=${search}&apiKey=${API_KEY}`)
}

const topHeadlines = () => {

}

export {
    searchArticles,
    topHeadlines
}