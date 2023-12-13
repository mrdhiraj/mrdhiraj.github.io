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
 
