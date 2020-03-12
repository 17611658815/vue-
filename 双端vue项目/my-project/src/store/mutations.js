import {
    SET_NUM,
    GET_HOTILLNESSLIST,

} from './mutation-types.js'

export default {
    [GET_HOTILLNESSLIST](state, data) {
		    state.data = data;
    },
    [SET_NUM](state, num) {
            state.data += num;
    },
}
