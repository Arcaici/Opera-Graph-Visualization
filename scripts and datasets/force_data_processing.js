const { count, timeStamp } = require("console")
const fs = require("fs")

// Inizializzo gli array dei nodi e degli archi
nodes = []
edges = []

fs.readFile('./dataset.json', 'utf8', (err, data) => {

    // Leggo il dataset in input
    data = JSON.parse(data)
    data = data.opera_performances

    // Sviluppo l'array di nodi
    for (d of data) {

        if (!nodes.some(librettista => librettista.id == d.librettist.replace(",", ""))) {
            new_node_lib = {
                "id": d.librettist.replace(",", ""),
                "group": "librettista"
            }
            nodes.push(new_node_lib)
        }

        if (!nodes.some(compositore => compositore.id == d.composer.replace(",", ""))) {
            new_node_comp = {
                "id": d.composer.replace(",", ""),
                "group": "compositore"
            }
            nodes.push(new_node_comp)
        }
    }

    // Sviluppo l'array di archi
    for (d of data) {
        if (!edges.some(edge => edge.source == d.librettist.replace(",", "") && edge.target == d.composer.replace(",", ""))) {
            new_edge = {
                'source': d.librettist.replace(",", ""),
                'target': d.composer.replace(",", ""),
                'name': d.title,
                "weight" : 1,
                'group': d.performance_year
            }
            edges.push(new_edge)
        }

        else {
            id = edges.findIndex(edge => edge.source == d.librettist.replace(",", "") && edge.target == d.composer.replace(",", ""));
            edges.at(id).weight += 1

            temp = edges.at(id).name.split(",")
            console.log(temp)
            if(!temp.some(el => el == d.title)){
                edges.at(id).name += "," + d.title
            }
            if (d.performance_year < edges.at(id).group) {
                edges.at(id).group = d.performance_year
            }
        }
    }

    //fs.writeFile('nodes.json', JSON.stringify(nodes), 'utf-8', (err) => { })
    //fs.writeFile('edges.json', JSON.stringify(edges), 'utf-8', (err) => { })

})