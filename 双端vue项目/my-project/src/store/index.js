import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
		num:0,
		hot_illness:[],
		LOADING:false,//laoding开关
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})