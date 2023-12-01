var app = new Vue({
    el: '#app',
    data :{
        product : 'Rocks',
        description :'hello this is red ',
        message :'Jk',
        jk :[1,2,3,4,5,6,7,8,9,10,11,12,13],
        reject :[],
        accept :[],
        current :''
    },
    methods :{
        myth(c,p,n)
        {
            j=c+p+n
            app.current=j
            if(p=='m')
            {
            app.jk.indexOf(n) !== -1 && app.jk.splice(app.jk.indexOf(n), 1) // remove item
            app.reject.push(c+n)
            }
            else
            {
            app.accept.push(c+n)
            }            
        }
    }
    
})

Vue.config.devtools = true