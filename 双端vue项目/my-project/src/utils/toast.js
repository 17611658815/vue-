import { Toast } from 'vant';

export default {
  /**
   * loading提示文案
   * @param content string
   * @param mask    boolean
   */
  showLoading(content, mask) {
    Toast.loading({
      message: content,
      forbidClick: mask,
      loadingType: 'spinner',
    });
  },
  hideLoading() {
    Toast.clear();
  },
  /**
   * 提示文本内容
   * @param content string
   */
  showToast(content) {
    Toast({
      message: content,
    });
  }
}
