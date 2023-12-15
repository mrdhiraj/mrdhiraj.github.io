import AScore from './Ascore.js'

var app = new Vue({
    el: '#app',
    components:
    {
        Ascore: AScore
    },
    data: {
        plrsadd:true,
        debugmessage:"Debug Info will come here",
        collect:[{
            main:true,
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
        }],
        totalMal:0,
        winner:"",

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
           app.debugmessage=param
            
            let totalmal=0
            for (const x of app.collect)
            {
                totalmal=totalmal+x.mal                
            }
            app.totalMal = totalmal
        }
    },
    computed: {
        point() {
            return this.mal + 4
        }
    }
});
Vue.config.devtools = true;

 