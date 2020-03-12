import {Api} from '../api/Api.js'
import {
    GET_HOTILLNESSLIST
} from './mutation-types.js'
export default {
    // vuex 公共方法
    getHomeList(store,params) {
        Api.getHomeList(params).then(data => {
            store.commit(GET_HOTILLNESSLIST, data.content)
            console.log(data.content)
        });
    },
}