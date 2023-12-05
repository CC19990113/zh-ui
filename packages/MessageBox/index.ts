import MessageBox from "./MessageBox.vue";
import { createApp } from "vue";

const createMessageBox = () => {
    const div = document.createElement("div");
    div.id = "v-MessageBox";
    document.body.appendChild(div);
    return createApp(MessageBox).mount("#v-MessageBox");
};

export default createMessageBox();