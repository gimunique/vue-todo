<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo"><i class="fas fa-plus addBtn"></i></span>

        <ModalComponent v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                알림
                <i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i>
            </h3>
            <p slot="body">내용을 입력해 주세요.</p>
            <!-- <p slot="footer">정말 닫으시겠습니까?</p> -->
        </ModalComponent>
    </div>
</template>

<script>
import ModalComponent from './common/ModalComponent.vue'

export default {
    components: {
        ModalComponent,
    },
    data() {
        return {
            newTodoItem: '',
            showModal: false,
        }
    },
    methods: {
        addTodo() {
            // console.log(this.newTodoItem)
            if (this.newTodoItem !== '') {
                /* var obj = {
                    completed: false,
                    item: this.newTodoItem
                }

                localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); */
                
                this.$emit('addTodoItem', this.newTodoItem)
                this.clearInput();
            } else {
                this.showModal = !this.showModal
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    },
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983
}
</style>