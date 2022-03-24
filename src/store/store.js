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
    mutations: {
        addOneItem(state, todoItem) {
			const obj = {
				completed: false,
				item: todoItem
			}

			localStorage.setItem(todoItem, JSON.stringify(obj)); 
			state.todoItems.push(obj);
		},
		removeOneItem(todoItem, index) {
			localStorage.removeItem(todoItem.item)
            this.todoItems.splice(index, 1)
		},
		toggleOneItem(todoItem, index) {
			// todoItem.completed = !todoItem.completed;
			this.todoItems[index].completed = !this.todoItems[index].completed;

            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
		},
		clearAllItems() {
			localStorage.clear();
			this.todoItems = [];
		}
    }
});