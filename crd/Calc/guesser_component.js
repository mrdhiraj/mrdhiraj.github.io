export default {
  data() {
    return {
      plr: {
        name: "hi"
      }
    };
  }, 
  methods: {
    changeFontSize() {
      this.$refs.myParagraph.style.fontSize = '20px';
    }
  },
  template: ` <div>
  <button @click ="changeFontSize">hello</button>
  <span ref="myParagraph" style="font-size: ${1 + 9}px"> {{datum.color}} {{datum.value}} {{datum.probability_total}} </span>
  </div>`,
  props: ['datum'],
  name: "Acard"
}


