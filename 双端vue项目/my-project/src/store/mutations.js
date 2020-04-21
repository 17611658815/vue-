import {
    SET_NUM,
    SHOW_LOADING,
    HIDE_LOADING,
    SET_HOT_ILLNESS

} from './mutation-types.js'

export default {
    // loading
    [SHOW_LOADING](state){
        state.LOADING = true    
    },
    [HIDE_LOADING] (state) {
        state.LOADING = false
    },
    [SET_NUM](state, num) {
        state.num += num;
    },
    [SET_HOT_ILLNESS](state, data) {
        state.hot_illness = data;
    },
}
