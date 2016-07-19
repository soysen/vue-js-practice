var Vue = require("vue");

Vue.filter('date_string', function (val) {
    var date = new Date(val);
    return date.toLocaleString();
});

Vue.filter('nl2br', function (text) {
    return text.replace(/[\r|\n]/g,"<br/>");
});