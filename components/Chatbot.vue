<template>
  <div class="chat">
    <div v-if="isOpen" class="chat-container">
      <div id="chat-window" class="chat-window">
        <div class="chat-bar">
          <h4>Hypermood Chatbot</h4>
          <div v-if="isOpen" class="close" @click="isOpen = !isOpen"></div>
        </div>
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="message"
          :class="{ sender: message.sender }"
        >
          <div class="message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
      </div>
      <input
        id="chatbotTextField"
        v-model="messageToSend"
        type="text"
        placeholder="Write your message here and press enter"
        aria-label="Field for message to send to the chatbot"
        @keypress.enter="sendMessage"
      />
    </div>
    <!-- <div class="button" @click="isOpen = !isOpen">
      <img
        src="https://img.icons8.com/ios-filled/452/chat--v1.png"
        alt="Chatbot button"
      />
    </div> -->
    <div @click="isOpen = !isOpen">
      <button id="button" type="button">
        <div class="button-container">
          <img
            id="chatbot-logo"
            src="https://img.icons8.com/windows/2x/chatbot.png"
            alt="Chatbot icon"
          />
          Chat with me!
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: false,
    }
  },
  methods: {
    sendMessage() {
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend,
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''
    },
  },
}
</script>

<style scoped>
.chat {
  position: fixed;
  bottom: 90px;
  right: 20px;
  z-index: 1000000000;
}
/* 
.button {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  border-radius: 100%;
  padding: 10px;
  float: right;
}
.button img {
  width: 100%;
} 
*/

#button {
  min-width: 95px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  background: var(--blue);
  color: white;
  font-weight: bold;
  margin: auto;
  padding: 15px;
  border: solid 2px white;
  display: flex;
  align-items: center;
  /* margin-top: 20px; */
}

#chatbot-logo {
  height: 35px;
  padding-right: 10px;
  filter: brightness(0) invert(1);
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.chat-container {
  border: 1px solid var(--blue);
  border-radius: 6px;
  height: 500px;
  width: 300px;
  /* position: absolute; */
  position: fixed;
  bottom: 140px;
  right: 20px;
  background-color: white;
}
.chat-window {
  overflow-y: scroll;
  height: calc(100% - 50px);
  border-bottom: 1px solid var(--blue);
}
.message {
  width: calc(100% - 8px);
  display: flex;
  justify-content: flex-end;
}
.message.sender {
  justify-content: flex-start;
}
.message-content {
  padding: 5px 10px;
  margin: 4px;
  width: auto;
  background: var(--blue);
  color: white;
  border-radius: 15px;
  border-top-right-radius: 0px;
}
.message-content.sender {
  background: #e9e9e9;
  color: var(--blue);
  border-top-left-radius: 0px;
  border-top-right-radius: 15px;
}
/* input {
  width: 98%;
  position: absolute;
  z-index: 20;
  height: 30px;
  border-top: 1px solid black;
} */

input {
  border: none;
  /* border-radius: 6px; */
  /* border-color: var(--blue); */
  box-shadow: none;
  /* border-width: 1px; */
  /* border-style: solid; */
  padding-left: 10px;
  width: 90%;
  height: 30px;
  margin-top: 7px;
  margin-left: 2px;
  color: var(--blue);
  resize: none;
}

input:focus {
  outline-color: var(--blue);
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: grey;
  font-size: 13px;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: grey;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: grey;
}

h4 {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  display: inline-flex;
  color: white;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}

h3:hover {
  cursor: default;
}

.chat-bar {
  display: inline-flex;
  border-top: 1px solid var(--blue);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: 100%;
  height: 40px;
  background: var(--blue);
  /* position: fixed;
  bottom: 20px;
  right: 20px; */
  z-index: 1000000000;
}

.close {
  position: absolute;
  right: 25px;
  top: 10px;
  /* bottom: 573px;
  right: 25px; */
  width: 20px;
  height: 20px;
  opacity: 1;
  z-index: 10000000000;
}
.close:hover {
  cursor: pointer;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: white;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
