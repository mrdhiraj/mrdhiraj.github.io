export default {
  data() {
    return {
      plr: 1
    };
  },
  methods: {
    add() {
      this.$emit('my-event', this.datum.color,this.datum.value,"a")    
    },
    subs() {
      this.$emit('my-event', this.datum.color,this.datum.value,"s")
    }
  },
  template: `<div><span @click="add()" class="btnplus"> + </span>          
  <span ref="myParagraph" class="score"> {{datum.probability_total}} </span>
  <span @click="subs()" class="btnminus"> - </span></div>`,
  props: ['datum'],
  name: "Acard"
}


