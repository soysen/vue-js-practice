<template>
    <div class="col s12">
        <editor :item="newItem" :todo="newTodo"></editor>
        <div id="todo-list">
            <div v-for="item of list" class="card yellow lighten-4">
                <div class="card-content">
                    <h5 class="card-title">
                        <span v-if="!item.edit">{{ item.title }}</span>
                        <input type="text" v-if="item.edit" v-model="item.title">
                    </h5>
                    <div class="card-meta orange-text accent-text-3">{{ item.created_at | date_string }}</div>
                    <p v-if="item.type==0 && !item.edit">{{{ item.description | nl2br }}}</p>
                    <textarea v-if="item.type==0 && item.edit" v-model="item.description"></textarea>
                    <div v-if="item.type==1">
                        <p v-for="todo of item.list" class="todo-item">
                            <a class="right floated" @click="delTodo(todo, item.list)"><i class="material-icons">remove</i></a>
                            <input type="checkbox" class="filled-in" id="item-{{ item.id }}-{{ $index }}"
                             v-model="todo.done" value="true" />
                            <label for="item-{{ item.id }}-{{ $index }}">
                                <span v-if="!item.edit">{{ todo.title }}</span>
                                <input type="text" v-if="item.edit" v-model="todo.title">
                            </label>
                        </p>
                        <div v-if="item.type==1 && item.edit" class="todo-item">
                            <a @click="addTodo(item)" class="right floated"><i class="material-icons">add</i></a>
                            <input type="checkbox" class="filled-in" />
                            <label>
                                <input type="text" v-model="newTodo.title" @keyup.enter="addTodo(item)">
                            </label>
                        </div>
                    </div>
                </div>
                <div class="card-action">
                    <a @click="toggleEdit(item)" v-if="!item.edit" class="btn-flat orange-text accent-text-3">
                        <i class="tiny material-icons left">mode_edit</i>編輯
                    </a>
                    <a @click="toggleEdit(item)" v-if="item.edit" class="btn-flat orange-text accent-text-3">
                        <i class="tiny material-icons left">check</i>儲存
                    </a>
                    <a v-on:click="deleteItem(item)" class="btn-flat delete orange-text accent-text-3 right floated">
                        刪除<i class="tiny material-icons right">delete</i>
                    </a> 
                </div>
            </div>
        </div>
	</div>
</template>

<script>
    var Editor = require("../components/TodoEditor.vue");

    export default {
        components: {
            props: {
                newItem: Object,
                newTodo: Object
            },
            Editor
        },
        methods: {
            delTodo(item, list) {
                list.$remove(item);
            },
            addTodo(item) {
                console.log(item);
                item.list.push(this.newTodo);
                this.newTodo = {
                    title: "", done: false
                }
            },
            toggleEdit(item) {
                // console.log(item);
                item.edit = !item.edit;
            },
            getTodoList() {
                return this.$http.get('./api/todo.js', function(response, status, request) {
                    if (request.status == 200) 
                        resolve(response); 
                    else 
                        reject(Error(request.statusText)); 
                });
            },
            deleteItem(item) {
                this.list.$remove(item);
            }
        },
        ready() {
            this.getTodoList().then((response) => {
                let list = response.json();
                for(let item of list) {
                    item.edit = false;
                }
                this.$set("list", list);
            });
        },
        data() {
            return {
                list: new Array(),
                edit: false,
                newTodo: {
                    title: "", done: false
                },
                newItem: {
                    title: "",
                    description: "",
                    list: [],
                    created_at: Date.now(),
                    type: 0
                }
            }
        }
    }
</script>