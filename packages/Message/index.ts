import Message from "./Message.vue";
import { createApp } from "vue";

const createMessage = (/*options*/) => {
  // switch (options.type) {
  //   case 'info':
  //     return Message.info(options)
  //     case 'success':
  //     return Message.success(options)
  //     case 'danger':
  //     return Message.danger(options)
  //     case 'warning':
  //       return Message.warning(options)
  //   default:
  //     break;
  // }
    const div = document.createElement("div");
    div.id = "v-message";
    document.body.appendChild(div);
    return createApp(Message).mount("#v-message");
};

export default createMessage();