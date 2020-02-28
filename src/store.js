import Vuex from 'vuex';
import Vue from 'vue';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({ 
    state: {
        messages: ['msg1', 'msg2']
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message) {
            state.messages.push(message);
        }
    },
    actions: { //perform assync actions
        async getMessages({commit}) {
            let messages = (await axios.get("http://localhost:3000/messages")).data
            commit('updateMessages', messages);
        },
        async newMessage({commit}, messageBody) {
            let msg = (await axios.post("http://localhost:3000/messages", {
                    message: messageBody
                })).data;
            commit('newMessage', msg.message);
        }
    }
})