import Vue from "vue";
import toast from "./index.vue";

const Toast = Vue.extend(toast);

export const showToast = (msg, type) => {
    const app = new Toast({
        el: document.createElement('div'),
        data() {
            return {
                msg,
                type,
            }
        },
    });
    document.body.appendChild(app.$el)
    setTimeout(() => {
        app.show = false
    }, 3000)
    setTimeout(() => {
        app.flag = false
    }, 3300)
}

