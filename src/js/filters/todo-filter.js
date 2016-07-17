var Vue = require("vue");

Vue.filter('getKeyword', function (id, list) {
    let item;
    for(let i of this.keywords) {
        if(i.id===id) item = i;
    }
    return item.name;
});

Vue.filter('date_string', function (val) {
    let date = new Date(val);
    console.log(date.toLocaleString()); 
    return date.toLocaleString();
    
});