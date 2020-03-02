import Vuex from 'vuex';
import Vue from 'vue';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({ 
    state: {
        messages: ['msg1', 'msg2'],
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message) {
            state.messages.push(message);
        },
        auth(state, token) {
            state.token = token;
        },
        logout(state) {
            state.token = '';
            localStorage.clear('token');
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
        },
        /* eslint-disable no-unused-vars */
        async getMessage({commit}, id) {
            console.log(id);
            return (await axios.get(`http://localhost:3000/messages/${id}`)).data;
        },
        async register({commit}, registerData) {
            let token = (await axios.post("http://localhost:3000/register", registerData)).data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth', token);
        },
        /* eslint-enable no-unused-vars */
    }
})