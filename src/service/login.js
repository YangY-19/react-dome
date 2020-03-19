import { get, post } from '../utils/request.js'

export function login (params) {
   return post({
       url: '/v1/token',
       params
   })
}

export function getHotNews () {
    return get({
        url: '/v1/hotnews',
    })
 }