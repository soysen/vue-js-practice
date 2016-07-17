<template>
    <div class="card-panel editor">
        <div class="ctrl right floated">
            <div>
                <input type="radio" id="new-type-1" name="type" value="0" v-model="newItem.type" />
                <label for="new-type-1">記事</label>
            </div>
            <div>
                <input type="radio" id="new-type-2" name="type" value="1" v-model="newItem.type" />
                <label for="new-type-2">待辦事項</label>
            </div>
        </div>
        <div class="card-title">
            <input type="text" name="title" id="" placeholder="標題" v-model="newItem.title">
        </div>
        <div v-show="newItem.type==0">
            <textarea name="description" id="description" v-show="newItem.type==0" v-model="newItem.description">
            </textarea>
        </div>
        <div v-show="newItem.type==1" class="collection todo">
            <div class="collection-item todo-item">
                <div class="right floated">
                    <a v-on:click="addTodo"><i class="material-icons">check</i></a>
                </div>
                <div class="todo-input">
                    <input type="checkbox" name="done[]" v-model="newTodo.done" disabled />
                    <label for="">
                        <input type="text" placeholder="待辦事項" v-on:keyup.enter="addTodo" v-model="newTodo.title">
                    </label>
                </div>
            </div>
            <div v-for="item of newItem.list" class="collection-item todo-item">
                <div class="right floated">
                    <a v-on:click="deleteTodo(item, newItem.list)"><i class="material-icons">close</i></a>
                </div>
                <div class="todo-input">
                    <input type="checkbox" name="done[]" />
                    <label for="">
                        <input type="text" placeholder="待辦事項" v-model="item.title">
                    </label>
                </div>
            </div>
        </div>
        <div class="card-action right-align">
            <button type="reset" class="btn grey">取消</button>
            <button v-on:click="saveItem" class="waves-effect waves-light btn orange darken-2">儲存</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "editor",
        methods: {
            getTodoList() {
                return this.$http.get('/api/todo.js', function(response, status, request) {
                    if (request.status == 200) 
                        resolve(response); 
                    else 
                        reject(Error(request.statusText)); 
                });
            },
            addTodo() {
                this.newItem.list.push({
                    title: this.newTodo.title,
                    done: false,
                    edit: false
                });
                this.newTodo = {
                    title: "", done: false, edit: false
                };
            },
            deleteTodo(item, list) {
                list.$remove(item);
            }, 
            saveItem() {
                let item = this.newItem;
                item.id = this.$parent.list.length+1;
                this.$parent.list.push(item);
                this.newItem = {
                    title: "",
                    description: "",
                    list: [],
                    created_at: Date.now(),
                    type: 0
                }
            }
        },
        ready() {
            this.getTodoList().then((response) => {
                this.$set("list", response.json());
            });
        },
        data() {
            return {
                list: new Array(),
                edit: false,
                newTodo: {
                    title: "", done: false, edit: true
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