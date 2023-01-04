const { count } = require("console")
const fs = require("fs");
const { off } = require("process");

cities = [
    {
        id: "Sankt Petersburg",
        title: "Sankt Petersburg",
        geometry: { type: "Point", coordinates: [30.35167579963314, 59.93370893284516] },
    },
    {
        id: "Venezia",
        title: "Venezia",
        geometry: { type: "Point", coordinates: [12.309056323431884, 45.434618615660035] },
    },
    {
        id: "Dresden",
        title: "Dresden",
        geometry: { type: "Point", coordinates: [13.7258255689387, 51.04885065748165] },
    },
    {
        id: "Hamburg",
        title: "Hamburg",
        geometry: { type: "Point", coordinates: [9.989278274731264, 53.5439039631002] },
    },
    {
        id: "Padova",
        title: "Padova",
        geometry: { type: "Point", coordinates: [11.87812507896718, 45.40679797600407] },
    },
    {
        id: "Napoli",
        title: "Napoli",
        geometry: { type: "Point", coordinates: [14.266838282176906, 40.84834906599953] },
    },
    {
        id: "Roma",
        title: "Roma",
        geometry: { type: "Point", coordinates: [12.48352678418407, 41.908002951825644] },
    },
    {
        id: "Bologna",
        title: "Bologna",
        geometry: { type: "Point", coordinates: [11.339190587672393, 44.50153392281393] },
    },
    {
        id: "Torino",
        title: "Torino",
        geometry: { type: "Point", coordinates: [7.655927411000004, 45.10461427516563] },
    },
    {
        id: "Weimar",
        title: "Weimar",
        geometry: { type: "Point", coordinates: [11.326952960572052, 50.98117812118344] },
    },
    {
        id: "Bonn",
        title: "Bonn",
        geometry: { type: "Point", coordinates: [7.092999512455711, 50.76727422833096] },
    },
    {
        id: "Paris",
        title: "Paris",
        geometry: { type: "Point", coordinates: [2.348747661558289, 48.85681441359952] },
    },
    {
        id: "Braunschweig",
        title: "Braunschweig",
        geometry: { type: "Point", coordinates: [10.509338513695626, 52.269168267349414] },
    },
    {
        id: "Wien",
        title: "Wien",
        geometry: { type: "Point", coordinates: [16.336594141635345, 48.24038301149403] },
    },
    {
        id: "Genova",
        title: "Genova",
        geometry: { type: "Point", coordinates: [8.949324417579788, 44.43021661082748] },
    },
    {
        id: "Breslau",
        title: "Breslau",
        geometry: { type: "Point", coordinates: [17.044992144980665, 51.12236534383523] },
    },
    {
        id: "Donaueschingen",
        title: "Donaueschingen",
        geometry: { type: "Point", coordinates: [8.498447178387188, 47.98783157749402] },
    },
    {
        id: "Osnabrück",
        title: "Osnabrück",
        geometry: { type: "Point", coordinates: [8.03182109998037, 52.280946361545816] },
    },
    {
        id: "Dessau",
        title: "Dessau",
        geometry: { type: "Point", coordinates: [12.23835330054324, 51.83050692938663] },
    },
    {
        id: "Praha",
        title: "Praha",
        geometry: { type: "Point", coordinates: [14.427850973738192, 50.0750115881651] },
    },
    {
        id: "Amsterdam",
        title: "Amsterdam",
        geometry: { type: "Point", coordinates: [4.872272590512766, 52.39686546477397] },
    },
    {
        id: "Verona",
        title: "Verona",
        geometry: { type: "Point", coordinates: [10.986085557820767, 45.45799355742827] },
    },
    {
        id: "Valletta",
        title: "Valletta",
        geometry: { type: "Point", coordinates: [14.527628236582373, 35.9019143525629] },
    },
    {
        id: "Milano",
        title: "Milano",
        geometry: { type: "Point", coordinates: [9.181844510893601, 45.49128554321814] },
    },
    {
        id: "Ravenna",
        title: "Ravenna",
        geometry: { type: "Point", coordinates: [12.24358035628033, 44.44190980667087] },
    },
    {
        id: "Frankfurt am Main",
        title: "Frankfurt am Main",
        geometry: { type: "Point", coordinates: [8.733857890550357, 50.139530654996186] },
    },
    {
        id: "Leipzig",
        title: "Leipzig",
        geometry: { type: "Point", coordinates: [12.366118345079634, 51.347063263096274] },
    },
    {
        id: "Pillnitz",
        title: "Pillnitz",
        geometry: { type: "Point", coordinates: [13.87972675009762, 51.00997731315861] },
    },
    {
        id: "Detmold",
        title: "Detmold",
        geometry: { type: "Point", coordinates: [8.86557697748835, 51.938107304713085] },
    },
    {
        id: "Carskoe Selo",
        title: "Carskoe Selo",
        geometry: { type: "Point", coordinates: [30.394503192438187, 59.717338594828114] },
    },
    {
        id: "Firenze",
        title: "Firenze",
        geometry: { type: "Point", coordinates: [11.175485712359881, 43.79889113503871] },
    },
    {
        id: "Graz",
        title: "Graz",
        geometry: { type: "Point", coordinates: [15.31606928487744, 47.116779778085586] },
    },
    {
        id: "Castelnuovo",
        title: "Castelnuovo",
        geometry: { type: "Point", coordinates: [13.849914024134497, 42.627852563179594] },
    },
    {
        id: "Salzburg",
        title: "Salzburg",
        geometry: { type: "Point", coordinates: [12.95267781693314, 47.83156049437746] },
    },
    {
        id: "Regensburg",
        title: "Regensburg",
        geometry: { type: "Point", coordinates: [12.0808368161296, 49.01331901352374] },
    },
    {
        id: "Hannover",
        title: "Hannover",
        geometry: { type: "Point", coordinates: [9.718960579772038, 52.3968341779847] },
    },
    {
        id: "Bad Lauchstädt",
        title: "Bad Lauchstädt",
        geometry: { type: "Point", coordinates: [11.842973944538112, 51.384459424082195] },
    },
    {
        id: "Karlsruhe",
        title: "Karlsruhe",
        geometry: { type: "Point", coordinates: [8.388022471367961, 49.04464977777094] },
    },
    {
        id: "London",
        title: "London",
        geometry: { type: "Point", coordinates: [-0.1982040265378188, 51.538903154609834] },
    },
    {
        id: "Udine",
        title: "Udine",
        geometry: { type: "Point", coordinates: [13.179066927928623, 46.094146455223594] },
    },
    {
        id: "Potsdam",
        title: "Potsdam",
        geometry: { type: "Point", coordinates: [13.057396980969225, 52.39157672404678] },
    },
    {
        id: "Vicenza",
        title: "Vicenza",
        geometry: { type: "Point", coordinates: [11.524167338813312, 45.55128322864351] },
    },
    {
        id: "Faenza",
        title: "Faenza",
        geometry: { type: "Point", coordinates: [11.877841835779298, 44.28995439047325] },
    },
];

edges = []

fs.readFile("script and datasets/dataset.json", 'utf8', (err, data) => {

    // Leggo il dataset in input
    data = JSON.parse(data)
    data = data.opera_performances

    // Sviluppo l'array di nodi
    for (d of cities) {
        d.opere = []
        for (original of data) {
            if (d.title == original.placename) {
                insert = false
                for (opere_inserite of d.opere) {
                    if (original.title == opere_inserite.name) {
                        opere_inserite.years.push(original.performance_year)
                        opere_inserite.years.sort()
                        insert = true
                    }
                }

                if (!insert) {
                    d.opere.push({ "name": original.title, "years": [original.performance_year] })
                }
            }
        }
    }

    // Sviluppo l'array di archi
    let temp_source;
    let temp_target;
    let title = {}
    let opera_years = [];
    let opera_places = [];
    for (d of data) {
        if (title == d.title) {
            continue
        }
        title = d.title;
        for (d of data) {
            if (d.title == title) {
                opera_years.push(d.performance_year)
                opera_places.push({ "year": d.performance_year, "place": d.placename })
            }
        }
        opera_years.sort()

        for (i = 0; i < opera_years.length - 1; i++) {
            if (opera_years[i] != opera_years[i + 1]) {
                temp_source = opera_places.filter(el => el.year == opera_years[i])
                temp_target = opera_places.filter(el => el.year == opera_years[i + 1])
                for (el_S of temp_source) {
                    for (el_T of temp_target) {
                        new_edge = {
                            "source": el_S.place,
                            "target": el_T.place,
                            "opera": title
                        }
                        edges.push(new_edge);
                    }
                }
            }
        }
        opera_years = [];
        opera_places = [];

    }

    edges = edges.filter(el => el.source != el.target);

    //fs.writeFile('city_nodes.json', JSON.stringify(cities), 'utf-8', (err) => { })
    //fs.writeFile('city_edges2.json', JSON.stringify(edges), 'utf-8', (err) => { })

})