import Vuex from 'vuex';
import Vue from 'vue';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({ 
    state: {
        messages: [],
        token: localStorage.getItem('token') || '',
        user: localStorage.getItem('user') || ''
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message) {
            state.messages.push(message);
        },
        auth(state, { user, token }) {
            state.token = token;
            state.user = user;
        },
        logout(state) {
            state.token = '';
            localStorage.clear('token');
            localStorage.clear('user');
        }
    },
    actions: { //perform assync actions
        async getMessages({commit}) {
            let messages = (await axios.get("http://localhost:3000/messages")).data
            commit('updateMessages', messages);
        },
        async newMessage({commit}, messageBody) {
            axios.defaults.headers.common['Authorization'] = this.state.token;
            let msg = (await axios.post("http://localhost:3000/messages", {
                    message: messageBody
                })).data;
            commit('newMessage', msg.message);
        },
        /* eslint-disable no-unused-vars */
        async getMessage({commit}, id) {
            return (await axios.get(`http://localhost:3000/messages/${id}`)).data;
        },
        async register({commit}, registerData) {
            let resData = (await axios.post("http://localhost:3000/register", registerData)).data;
            let token = resData.token;
            let user = resData.user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth', { user, token });
        },
        async login({commit}, registerData) {
            let resData = (await axios.post("http://localhost:3000/login", registerData)).data;
            let token = resData.token;
            let user = resData.user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth', { user, token });
        }
        /* eslint-enable no-unused-vars */
    }
})