import FoodItem from './FoodItem.js'

var app = new Vue({
    el: '#app',
    data :{
        product : ' The product is Apple '
    },
    methods :{  
        gotEvent(param)
        {
            //this is called from event
            this.product = param
        }  ,
        updateAcomponent()   
        {
            this.$refs.myComponent.produ="Japan" //or
            this.$refs["myComponent"].produ="Japan"
            console.log(this)//this.$refs.component1.open = true
        }
    },
    components:
    {
        Fooditem:FoodItem
    },
    computed :
    {
       
    },
    
})
 
