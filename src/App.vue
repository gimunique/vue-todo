<template lang="">
	<div>
		<TodoHeader></TodoHeader>
		<TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
		<TodoList v-bind:propsdata="todoItems"></TodoList>
		<TodoFooter></TodoFooter>
	</div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
	components: {
		'TodoHeader': TodoHeader,
		'TodoInput': TodoInput,
		'TodoList': TodoList,
		'TodoFooter': TodoFooter
	},
	data() {
		return {
			todoItems: [],
		}
	},
	created() {
		if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                // console.log(localStorage.key(i))
                // this.todoItems.push(localStorage.key(i))
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                // console.log(localStorage.getItem(localStorage.key(i)))
            }
        }	
	},
	methods: {
		addOneItem: function(todoItem) {
			var obj = {
				completed: false,
				item: todoItem
			}

			localStorage.setItem(todoItem, JSON.stringify(obj)); 
			this.todoItems.push(obj);
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
