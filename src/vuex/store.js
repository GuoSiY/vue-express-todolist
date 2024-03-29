import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state={
    todoList:[]
};

const mutations={
    editTodo(state,data){
        state.todoList=data;
    }
};

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
});
