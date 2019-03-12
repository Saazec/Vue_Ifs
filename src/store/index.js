import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authStatus: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).token : false,
        ifsData: [],
        operationalData: []
    },
    mutations: {
        // all 'state' chnages must happen through mutations
        loggedInStatus(state, val) {
            state.authStatus = val;
            localStorage.setItem('userData', JSON.stringify({ token: val }));
        },
        retrieveIfsData(state, val) {
            state.ifsData = val;
        },
        retrieveOpData(state, val) {
            state.operationalData = val;
        },
        addNewRecord(state, val) {
            state.ifsData.push(val);
        },
        updateRecord(state, val) {
            // let _index = this.lodash.indexOf(state.ifsData, {
            //     caseNumber: val.caseNumber
            //   });
            let _index = state.ifsData.forEach((value, index) => {
                if (value.caseNumber == val.caseNumber) return index;
                return -1;
            })
            if (_index > -1) this.lodash.assign(state.ifsData[_index], val);
        }
    },
    getters: {
        ifsData(state) {
            return state.ifsData;
        },
        opData(state) {
            return state.operationalData;
        },
        token(state) {
            if (localStorage.getItem('userData')) {
                return localStorage.getItem('userData').token;
            } else {
                return state.loggedInStatus;
            }
        }
    },
    actions: {
        getUserData({ commit }, userData) {
            return axios.post('/api/login', userData)
                .then(result => commit('loggedInStatus', result.data.token));
            // .catch(err => console.log(err));
        },
        getIfsData({ commit }) {
            return axios.get('/api/ifs', { headers: { Authorization: 'Bearer ' + this.state.authStatus } })
                .then(result => commit('retrieveIfsData', result.data))
            // .catch(err => console.error(err));
        },
        getOperationalData({ commit }) {
            return axios.get('/api/operational', {
                headers: {
                    Authorization: 'Bearer ' + this.state.authStatus
                }
            })
                .then(result => commit('retrieveOpData', result.data))
        },
        addNewIfsRecord({ commit }, record) {
            return axios.post('/api/ifs', record, { headers: { Authorization: 'Bearer ' + this.state.authStatus } })
                .then(result => commit('addNewRecord', result.data))
        },
        updateRecord({ commit }, record) {
            return axios.patch('/api/ifs', record, { headers: { Authorization: 'Bearer ' + this.state.authStatus } })
            .then(result => commit('updateRecord', result.data))
        }
    }
});
