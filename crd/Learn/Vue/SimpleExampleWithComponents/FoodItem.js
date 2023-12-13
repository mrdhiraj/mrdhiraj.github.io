export default {
  template: `<h4 @click="up">Component says :Hi  {{produ}}  <slot></slot> {{data1}} 
  and the data is {{v1}}
  </h4>
  <h2 :v1></h2>y`
  ,
  props:["data1"],
  data(){
    return {
    produ:'nepal',
    v1:0
    }
  },
  methods:{
      up(){      
        this.v1=this.v1+2
        this.data1="hello"
        this.$emit('my-event',"The product is ball");// we need to emit events to share data to outside world
      }
  }
} 