

// let form =document.querySelector('form')
//
//  form.addEventListener('submit', (event) => {
//      event.preventDefault()
//  })

let id =1


const app = {
    data() {
        return {
            count: 0,
            color: "red",
            view: true,
            showText: true,
            text: '',
            name: '',
            word: '',
            title: 'Loops',
            open: false,
            list: [
                {id: id++, name: 'Html'},
                {id: id++, name: 'Javascript'},
                {id: id++, name: 'CSS'}
            ]
        }
    },

    computed: {
        getListLength() {
            return this.list.length;
        }
    },


    methods: {
        delNote(note) {
            // console.log(note);
       this.list = this.list.filter(item=>item.id !== note.id)
        },
    addNote () {
        if(this.text.length > 1 && isNaN(this.text)) {
            this.list.push({
                id: id++,
                name: this.text
            })
            this.text = ''
        }
    },


        addCount() {
            this.count++
        },

        minusCount() {
            this.count--
            this.color = 'green'
        }
    }
}

Vue.createApp(app).mount("#app")

// let titleMain =document.querySelector(".title")

// titleMain.textContent = count

// titleMain.innerHTML = text