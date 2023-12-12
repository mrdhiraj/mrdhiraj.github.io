export default {
  template: `<h1 @click="up">hi  {{produ}}  <slot></slot> {{data1}} 
  and the data is {{v1}}
  </h1>
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
      }
  }
} 