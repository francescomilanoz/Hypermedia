<template>
  <div id="chat">
    <div v-if="isOpen" id="chat-container">
      <div id="chat-bar">
        <h4>Hypermood Chatbot</h4>
        <div id="circle"></div>
      </div>
      <div id="chat-window" ref="chatWindow" class="chat-window">
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
    <div
      @click="
        isOpen = !isOpen
        scrollBottom()
      "
    >
      <button v-if="!isOpen" id="button" type="button">
        <div class="button-container">
          <img
            id="chatbot-logo"
            src="https://img.icons8.com/windows/10x/chatbot.png"
            alt="Chatbot icon"
          />
          Chat with me!
        </div>
      </button>
      <button v-else id="button" type="button">
        <div class="button-container">
          <img
            id="chatbot-logo"
            src="https://img.icons8.com/windows/10x/chatbot.png"
            alt="Chatbot icon"
          />
          Close
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
  watch: {
    chatList: {
      handler() {
        this.scrollBottom()
      },
    },
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
    scrollBottom() {
      setTimeout(() => {
        if (this.$refs.chatWindow) {
          this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight
        }
      }, 0)
    },
  },
}
</script>

<style scoped>
#chat {
  position: fixed;
  bottom: 73px;
  right: 20px;
  z-index: 1000000000;
}

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
#chat-container {
  display: block;
  border: 1px solid var(--blue);
  border-radius: 20px;
  height: 50%;
  width: 300px;
  position: fixed;
  bottom: 123px;
  right: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
@media (max-width: 500px) {
  #chat-container {
    height: 40%;
    width: 80%;
  }
}
.chat-window {
  overflow-y: scroll;
  height: calc(100% - 90px);
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

input {
  border: none;
  background: transparent;
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

textarea:focus,
input:focus {
  outline: none;
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
  margin-left: 14px;
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

#chat-bar {
  display: inline-flex;
  border-top: 1px solid var(--blue);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  width: 100%;
  height: 40px;
  background: var(--blue);
  z-index: 1000000000;
}

#circle {
  background: greenyellow;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
