const helloVue = {

    template: ` 
        <h1>{{mensagem}}</h1>
        <p>Contador de cliques: {{contador}}</p>
        <button @click="somar">Somar </button>

        <div>
            <input type="text" v-model="meuTexto" placeholder="Digite algo aqui">
        </div>

        <p style="font-size: 3em;">{{meuTexto}}</p>

        <div v-show="meuTexto=='bmo'">
            <img width="120" src="bmo.jpg" alt="bmo">
        </div>

        <div>
            <input type="url" v-model="meuLink" placeholder="Informe uma URL">
        </div>
        <p>
            <a :href="meuLink" target="_blank">{{meuLink}}</a>
        </p>  
        
        <div>
            <h3>Linguagens</h3>
            <ul>
                <li v-for="(value, key) in linguagens">
                    [{{key}} - {{value.nome}} (<i>{{value.tipo}}</i>)]
                </li>
            </ul>
        </div>
    `,   
    data() {
        return{
            mensagem: "Hello World Vue!",
            contador: 0,
            meuTexto: null,
            meuLink: null,
            linguagens: [
                {nome: "HTML", tipo: "front-end"},
                {nome: "CSS", tipo: "front-end"},
                {nome: "JavaScript", tipo: "back-end"},
                {nome: "PHP", tipo: "back-end"}
            ]
        }
    },
    methods: {
        somar() {
            this.contador++
        }
    }
}


Vue.createApp(helloVue).mount('#app')