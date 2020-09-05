const names = ['Rachel', 'Paula', 'Maria', 'Nani', 'Rubia', 'Ana', 'Amélia']

const namesWithA = names.map(name => {
    if (name[1] === 'a'){
        return name
    }
})

console.log(namesWithA)