<template lang="">
	<div>
		<TodoHeader></TodoHeader>
		<TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
		<TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
		<TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
	</div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
	components: {
		TodoHeader,
		TodoInput,
		TodoList,
		TodoFooter
	},
	data() {
		return {
			todoItems: [],
		}
	},
	created() {
		if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                // console.log(localStorage.key(i))
                // this.todoItems.push(localStorage.key(i))
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                // console.log(localStorage.getItem(localStorage.key(i)))
            }
        }	
	},
	methods: {
		addOneItem(todoItem) {
			const obj = {
				completed: false,
				item: todoItem
			}

			localStorage.setItem(todoItem, JSON.stringify(obj)); 
			this.todoItems.push(obj);
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
	},
}
</script>

<style>
body {
	text-align: center;
	background-color: #F6F6F6;
}
input {
	border-style: groove;
	width: 200px;
}
button {
	border-style: groove;
}
.shadow {
	box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
