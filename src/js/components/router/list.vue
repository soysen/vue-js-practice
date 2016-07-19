<style type="text/css">
    .cards > .col {
        float: none;
        max-width: 100%;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .row.cards > .col {
        margin-left: 0 !important;
        left: 0 !important;
        right: 0 !important;
    }
    .cards {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    .card .card-content p {
        color: #666;
        font-weight: 300;
    }
    .card .card-content, 
    .card .card-action {
        padding: 10px 15px;
    }
    .card .card-image {
        position: relative;
        display: block;
        padding-bottom: 100%;
        overflow: hidden;
    }
    .card .card-image img {
        position: absolute;
        width: auto;
        height: 100%;
        left: -100%;
        right: -100%;
        margin: auto;
    }
    @media(max-width: 600px) {
        .card .card-content > .card-title {
            font-size: 1.5em;
        }
        .card .card-content > p {
            font-size: 0.8em;
        }
    }
</style>

<template>
    <div>
        <h3>{{ $route.params.category | uppercase }}</h3>
        <div class="row cards">
            <div class="col s12 m6 l4" v-for="item of list">
                <div class="card">
                    <div class="card-image">
                        <img v-bind:src="item.cover" alt="{{ item.title }}">
                    </div>
                    <div class="card-content">
                        <div class="card-title">
                            {{ item.title }}
                        </div>
                        <p>{{ item.description }}</p>
                    </div>
                    <div class="card-action right-align">
                        <a href="{{ item.link }}" target="_blank">View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    var toolService = require('../../services/tool.js');

    export default {
        route: {
            data: function (transition) {
                console.log(transition.to.params);
                return toolService
                    .get(this.setType(transition.to.params.category))
                    .then(function (list) {
                        console.log(list);
                        return { list: list }
                    });
            }
        },
        methods: {
            setType(category) {
                if(category=="design")
                    return 1;
                if(category=="frontend")
                    return 2;
                if(category=="backend")
                    return 3;
            },
            getListById() {
                return this.$http.get('../api/tools.js', function(response, status, request) {
                    if (request.status == 200) 
                        resolve(response); 
                    else 
                        reject(Error(request.statusText)); 
                });
            },
            setList() {
                let categoryList = [];
                this.getListById().then((response) => {
                    let list = response.json();
                    // let type = this.type;
                    for(let item of list) {
                        if(item.category==this.type) categoryList.push(item);
                    }
                    return categoryList;
                });
            }
        },
        ready() {
            console.log(this.list);
            // this.$set("type", this.setType());
            // this.setList();  
        },
        data() {
            return {
                list: [],
                type: 1
            }
        }
    }
</script>
