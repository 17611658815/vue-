import {
    SET_NUM,
    GET_HOTILLNESSLIST,
    SHOW_LOADING,
    HIDE_LOADING

} from './mutation-types.js'

export default {
    // loading
    [SHOW_LOADING](state){
        state.LOADING = true    
    },
    [HIDE_LOADING] (state) {
        state.LOADING = false
    },

    [GET_HOTILLNESSLIST](state, data) {
		    state.data = data;
    },
    [SET_NUM](state, num) {
            state.num += num;
    },
}
