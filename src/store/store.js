import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
    },
    getters: {
        storedTodoItem(state) {
            return state.todoItems;
        }
    },
    mutations: {
        // 값을 변경하기 위해 필요
        addOneItem(state, todoItem) {
			const obj = {
				completed: false,
				item: todoItem
			}

			localStorage.setItem(todoItem, JSON.stringify(obj)); 
			state.todoItems.push(obj);
		},
		removeOneItem(state, payload) {
			localStorage.removeItem(payload.todoItem.item)
            state.todoItems.splice(payload.index, 1)
		},
		toggleOneItem(state, payload) {
			state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem, JSON.stringify(payload.todoItem))
		},
		clearAllItems(state) {
			localStorage.clear();
			state.todoItems = [];
		}
    },
    actions: {
        // 비동기 처리
    }
});