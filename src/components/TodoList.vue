<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    /* data() {
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
    }, */
    methods: {
        removeTodo: function(todoItem, index) {
            localStorage.removeItem(todoItem)
            this.todoItems.splice(index, 1)
        },
        toggleComplete: function(todoItem) {
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
        }
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62ACDE;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    color: #b3adad;
    text-decoration: line-through;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
</style>