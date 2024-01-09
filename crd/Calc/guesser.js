import Acard from './guesser_component.js'

class Crd {
    color = "S"
    value = 1

    probability_j = 0
    probability_tip = 0
    probability_alt = 0
    probability_jhip = 0
    probability_pop = 0
    probability_total = 0

    actions = {
        picked: 0,
        discarded: 0,
    }

    constructor(color, value) {
        this.color = color
        this.value = value
    }
    logitem(params) {
        console.log(JSON.stringify(this, null) + params);
    }

    gettotal() {
        this.probability_total = this.probability_j + this.probability_tip + this.probability_alt + this.probability_jhip + this.probability_pop
    }
}

class Deck {
    decks = ['S', 'H', 'C', 'D']
    cards = []
    constructor() {
        for (let i = 1; i <= 13; i++) {
            let card = { 'S': new Crd('S', i), 'H': new Crd('H', i), 'C': new Crd('C', i), 'D': new Crd('D', i) }
            this.cards.push(card)
        }
    }

    picked(value, color) {
        this.cards[value - 1][color].actions.picked += 1;
        this.doaction(value, color, 1)
    }

    discarded(value, color) {
        this.cards[value - 1][color].actions.discarded += 1
        this.doaction(value, color, -1)
    }

    doaction(value, color, increament) {
        let altcolor = this.getaltcolors(color)
        let downvalue = this.getdown(value)
        let upvalue = this.getup(value)

        //j
        for (const key in this.cards[value - 1]) {
            this.cards[value - 1][key].probability_j += increament;
        }

        for (const key in this.cards[upvalue]) {
            this.cards[upvalue][key].probability_j += increament / 2;
        }

        for (const key in this.cards[downvalue]) {
            this.cards[downvalue][key].probability_j += increament / 2;
        }


        //tip
        this.cards[value - 1][color].probability_tip += increament;

        this.cards[upvalue][color].probability_tip += increament;

        this.cards[downvalue][color].probability_tip += increament;


        //alt        
        this.cards[value - 1][altcolor].probability_alt += increament;

        this.cards[upvalue][altcolor].probability_tip += increament;

        this.cards[downvalue][altcolor].probability_tip += increament;


        //jhip below        
        this.cards[downvalue][color].probability_jhip += increament;

        //pop up
        this.cards[upvalue][color].probability_pop += increament;

        this.cards[value - 1][color].gettotal()
        this.cards[value - 1][altcolor].gettotal()
        this.cards[upvalue][color].gettotal()
        this.cards[downvalue][color].gettotal()
        for (const key in this.cards[value - 1]) {
            this.cards[value - 1][key].gettotal()
        }
    }

    getparallels = function (value, color) {
        return this.cards[value - 1]
    }

    getaltcolors(color) {
        let altcolor = color == 'S' ? 'C' : color == 'C' ? 'S' : color == 'D' ? 'H' : color == 'H' ? 'D' : ''
        return altcolor
    }

    getup(value) {
        let index = value - 1
        let upvalue = index == 12 ? index = 0 : index = index + 1
        return upvalue
    }

    get2up(value) {
        let v = value + 2
        let upvalue = 0
        upvalue = v > 13 ? v - 13 : v
        return upvalue
    }

    getdown(value) {
        let index = value - 1
        let downvalue = index == 0 ? index = 12 : index = index - 1
        return downvalue
    }

    get2down(value) {
        let v = value - 2
        let upvalue = 0
        upvalue = v < 1 ? v + 13 : v
        return upvalue
    }
}

var app = new Vue({
    el: '#app',
    components:
    {
        Acard: Acard
    },    
    data: {
        debugmessage: "Debug Info will come here",
        deck: new Deck()
    },
    methods: {
        addsubs(color,value,action) {           
            let s= action =="a"? this.deck.picked(value, color): this.deck.discarded(value, color)
            this.$forceUpdate();
        }
    },
    computed:{
        showme(){
            let a=window.navigator.userAgent.match(/windows/i)
            return a.length==0;
        }
    }
});
Vue.config.devtools = true;


