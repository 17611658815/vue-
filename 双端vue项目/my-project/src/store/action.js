import {Api} from '../api/Api.js';
import Toast from '../utils/toast.js';
import {
    SET_HOT_ILLNESS,
    SHOW_LOADING,
    HIDE_LOADING
} from './mutation-types.js'
export default {
    // vuex 公共方法
    getHomeList(store,params) {
        Toast.showLoading('加载中',true)
        Api.getHomeList(params).then(data => {
            store.commit(GET_HOTILLNESSLIST, data.content)
            Toast.hideLoading()
        });
    },
    getHotIllness(store) {
        Api.getHotIllness().then(data => {
            store.commit(SET_HOT_ILLNESS, data.illness)
        });
    }
}