<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem.item, index)"><i class="fas fa-trash-alt"></i></span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    // props: ['propsdata'],
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
        removeTodo(todoItem, index) {
            // this.$emit('removeItem', todoItem, index)
            // const obj = {
            //     todoItem: todoItem,
            //     index: index
            // }
            this.$store.commit('removeOneItem', {todoItem, index})
        },
        toggleComplete(todoItem, index) {
            // this.$emit('toggleItem', todoItem, index)

            this.$store.commit('toggleOneItem', {todoItem, index})
        }
    },
    computed: {
        /* todoItems() {
            return this.$store.getters.storedTodoItems;
        } */
        ...mapGetters(['storedTodoItems'])
    }
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
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
</style>