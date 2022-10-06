const chessApp = Vue.createApp({
    data() {
      return {
        showOpening: true,
        openings: [
          {openName: 'Queens Gambit', moveOrder: '1.d4 d5 2.c4', moves: 3},
          {openName: 'Sicilian Defense', moveOrder: '1.e4 c5', moves: 2},
          {openName: 'Stafford Gambit', moveOrder: '1.e4 e5 2. Nf3 Nf6', moves: 4}
        ]


  
      };
    },
    methods: {
      toggleShowOpening()
      {
        this.showOpening = !this.showOpening
      },
      handleEvent(ev)
      {
        console.log(ev, ev.type)
      }
    }
    
  })


  .component('to-play-opening', {
    template: '#todo-item-template'
  })
  chessApp.mount('#chessApp')