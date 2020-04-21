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
        return getRequest('/api/app/api/mfk_shipin_app2.php', paramObj);
    },
     /**
     * 主页热门疾病
     */
    getHotIllness: function (paramObj) {
        return getRequest('/api/app/api/mfk_shipin_app2.php?type=hot_illness', paramObj);
    },
}