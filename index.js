// Quando não declaro o tipo de metodo usando fecth,
// ele entende que é o GET (traz informações)
const response = fetch('https://jsonplaceholder.typicode.com/users')
//Promisse que trata o sucesso é o método then(), 
// o parâmetro res recebe o retorno da função anterior
.then(res =>{
console.log(res)
return res.json();
})
.then(data => {
    for (var i = 0; i < data.length; i++){
        console.log(`\nPessoa ${i+1}`)
        console.log(data[i].name)
        console.log(data[i].email)

    }
    
})
// Usamos para inteirar (percorrer o array), o map()
// que é um método para percorrer todo o array como um for
// .then(data => {
//     data.map(user => {
//         console.log(`Nome: ${user.name}`,`Email: ${user.email}`)
//     })
// })
// Promisse que trata o erro é o método catch()
.catch(error => {
    console.log(`Deu erro na Busca:${error}`)
})
// console.log(response)