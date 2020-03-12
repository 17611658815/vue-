import {postRequest,getRequest} from "@/api/HttpRequest";
/**
 * 接口请求
 */
export const Api = {
    /**
     * @param paramObj
     * @returns {Promise}
     */

    /**
     * 主页视频列表
     */
    getHomeList: function (paramObj) {
        return getRequest('/api/listmore.json', paramObj);
    },
}