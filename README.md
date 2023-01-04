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
The map graph aims to focus on the cities where the opera took place.  
The nodes represent the cities while the edges between two nodes are present if and only if a opera was performed in both cities (the source and destination are established on the basis of the year in which the opera took place in the two cities).  
A second map graph shows only a few cities that hosted a opera that took place nowhere else.  
The edges represent this common feature between the various cities in question.  

## Force Directed Graph

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
