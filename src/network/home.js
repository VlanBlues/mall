import {request} from "./request";

export function getHomeMultidata() {
    return request({
        url: '/equipment/all'
    })
}