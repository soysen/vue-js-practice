
module.exports =  {
    get (category_id) {
        return new Promise(function (resolve, reject) {
            $.get('/vue-js/api/tools.js', function(response, status, request) {
                var data = JSON.parse(response);
                var list = [];
                for(var item of data) {
                    if(item.category===category_id)
                        list.push(item);
                }
                resolve(list); 
            });
        });
        
    }
}
