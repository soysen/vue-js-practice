<template>
  <div class="column six">
    <ul class="list tree" v-if="tree.length">
      <child v-for="item in tree" :item="item"></child>
    </ul>
  </div>
  <div class="column six">
    <blockquote>
      <h5 class="header">My Github</h5>
      <a href="https://github.com/soysen/vue-js-practice/" target="_blank">https://github.com/soysen/vue-js-practice/</a>
    </blockquote>
  </div>
</template>

<script>
  var Child = require('../components/Child.vue');
  var newItem = {
    name: "",
    parent: null
  };
  var tree = [
    {
      name: "vue-js",
      child: [{
        name: "dist",
        child: [
          { 
            name: "css", 
            child: [
              { name: "app.css",type: 'file', child: [] }
            ] 
          },
          { name: "fonts", child: [] },
          { name: "js", 
            child: [
              { name: "app.js",type: 'file', child: [] },
              { name: "rainbow.min.js",type: 'file', child: [] }
            ] 
          },
          { name: "index.html", type: "file", child: [] }
        ]
      }, {
        name: "node_modules/",
        child: []
      }, {
        name: "src/",
        child: [
          { 
            name: "js",
            child: [
              { 
                name: "components", 
                child: [
                  { name: "App.vue", type:'file' , child: [] },
                  { name: "Child.vue", type:'file' , child: [] },
                  { name: "List.vue", type:'file' , child: [] },
                  { name: "Project.vue", type:'file' , child: [] },
                  { name: "Tree.vue", type:'file' , child: [] }
                ] 
              },
              { name: "app.js", type:'file' , child: [] }
            ]
          }, { 
            name: "sass",
            child: [
              { 
                name: "components", 
                child: [
                  { name: "tab.sass", type:'file' , child: [] }
                ] 
              },
              { 
                name: "elements", 
                child: [
                  { name: "form.sass", type:'file' , child: [] },
                  { name: "header.sass", type:'file' , child: [] },
                  { name: "list.sass", type:'file' , child: [] }
                ] 
              },
              { 
                name: "globals", 
                child: [
                  { name: "global.sass", type:'file' , child: [] },
                  { name: "grid.sass", type:'file' , child: [] },
                  { name: "variables.sass", type:'file' , child: [] }
                ] 
              },
              { 
                name: "style.sass", 
                type:'file',
                child: [] 
              }
            ]
          },
        ]
      }]
    }
  ];
  
  export default {
    components: {
      child: Child,
      props: {
        item: Object
      }
    },
    name: "project", 
    props: {
      item: Object
    }, 
    methods: {
      createItem () {
        this.tree.push({
          name: "New Item",
          child: [],
          open: false,
          edit: false
        })
      }
    },
    data () {
      return { 
        tree: tree,
        newItem: newItem
      }
    }
  }
</script>