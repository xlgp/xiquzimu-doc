import { Ref, onUnmounted } from "vue";

import ClipboardJS from "clipboard"

import { showToast } from "vant";
import "vant/es/toast/style";

export const useClipboard = (text: Ref<string>, copyBtnRef: Ref) => {

    let clipboard: ClipboardJS | null;

    function createClipboard() {
        if (!copyBtnRef.value) {
            return;
        }
        if (!clipboard) {
            clipboard = new ClipboardJS(copyBtnRef.value.$el, {
                text: () => text.value
            });
            clipboard.on('success', function (e) {
                e.clearSelection();
                showToast("已复制");
            });

            clipboard.on('error', function (e) {
                console.error(e);
                showToast("复制失败");
            });
        }
    }

    const copyHandler = () => {
        if (!clipboard) {
            createClipboard();
            if (clipboard) {
                copyBtnRef.value.$el.click();
            }
        }
    }

    onUnmounted(() => {
        clipboard?.destroy();
    });

    return {
        copyHandler,
        createClipboard
    }
}
