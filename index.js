// Quando não declaro o tipo de metodo usando fecth,
// ele entende que é o GET (traz informações)
const response = fetch('https://jsonplaceholder.typicode.com/posts')
//Promisse que trata o sucesso é o método then(), 
// o parâmetro res recebe o retorno da função anterior
.then(res =>{
console.log(res.json())
})
// Promisse que trata o erro é o método catch()
.catch(error => {
    console.log(`Deu erro na Busca:${error}`)
})
// console.log(response)