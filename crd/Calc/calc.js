import AScore from './ascore.js'

var app = new Vue({
    el: '#app',
    components:
    {
        Ascore: AScore
    },
    data: {
        plrsadd:true,
        collect:[{
            name:"p1",
            mal:0,
            point:0,
            seen:false,
            win:false
        },{
            name :"p2",
            mal:0,
            point:0,
            seen:false,
            win:false
        }]
    },
    methods: {
        noplrs() {            
            
            if (app.plrsadd){
                app.collect.push ({
                    name:"p"+(app.collect.length+1),
                    mal:0,
                    point:0,
                    seen:false,
                    win:false
                })
            }
            else{
                app.collect.pop()
            }

            if (app.collect.length==2)
            {
                app.plrsadd=true
            }
            if (app.collect.length==6)
            {
                app.plrsadd=false
            }
        },
        calculatecalled(param)
        {
           // alert(param)
            //add up here
        }
    },
    computed: {
        point() {
            return this.mal + 4
        }
    }
});
Vue.config.devtools = true;

 
