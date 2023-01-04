# Visualization Project

## Authors
- [Maiorani Simone](https://github.com/maioranisimone)
- [Venturi Marco](https://github.com/Arcaici)

## Introduction
The project carried out aims to display information relating to a collection of opera performances that took place throughout Europe between 1775 and 1833.

Types of graphs used:
* Map graphs
* Force Directed graph

## Map Graphs
The map graph aims to focus on the cities where the opera took place. The nodes represent the cities while the edges between two nodes are present if and only if a opera was performed in both cities (the source and destination are established on the basis of the year in which the opera took place in the two cities).  
A second map graph shows only a few cities that hosted a opera that took place nowhere else.
The edges represent this common feature between the various cities in question.


### Struttura del grafo

#### Nodi
* id: nome_città
* contengono :
  * title: nome della città
  * geometry: coordinate di tipo punto.
* colore: univoco per ogni stato. {si potrebbe fare}.
#### Archi Diretti
* contengono :
  * opera: nome opera
  * anno: anno dell'esibizione del nodo sorgente e del nodo destinatario
* colore: ogni arco è rappresentata con un colore specifico che identifica l'opera in modo univoco.
#### Interazioni
Quando avviene un evento di mouseOver su un arco viene visualizzata un etichetta contenente l'anno dell'avveninmento della performance sia del nodo sorgente che del nodo destinatario.  

Quando l'utente esegue un evento OnClik su un nodo viene generato un grafo force directed che ha come nodi i librettisti e i compositori di tutte le opere(archi entranti e uscenti univoci rispetto alle opere.) che sono state fatte all'interno di quella città.

## Grafo Force directed

### Domanda (da ridefinire)
* esiste una relazione tra i librettisti e compositori che si sono esibiti nella stessa città?
* tra questi c'è una collaborazione nel tempo?

### Struttura del grafo

#### Nodi
* id: nome librettista o compositore
* contengono :
  * tipo: (librettista o compositore o entrambi)
* colore: ogni nodo a un colore specifico che identifica il tipo in modo univoco.
#### Archi NON diretti
* contengono :
  * opera: nome opera
  * anno: anno della prima esibizione  dell'opera
* colore: ogni arco è rappresentato con un colore specifico che identifica l'anno in modo univoco.
* dimensione: gli archi tra librettisti sono di uno spessore più grande rispetto agli archi tra librettista e compositore.
