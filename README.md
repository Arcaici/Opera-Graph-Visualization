# Opera-Graph-Visualization

## Authors
- [Maiorani Simone](https://github.com/maioranisimone)
- [Venturi Marco](https://github.com/Arcaici)

## Introduction
The project carried out aims to display information relating to a collection of opera performances that took place throughout Europe between 1775 and 1833.

```json
{
  "opera_performances": [
    {
      "rism_id": "125794",
      "composer": "Paisiello, Giovanni",
      "librettist": "Metastasio, Pietro",
      "title": "Achille in Sciro",
      "performance_year": "1778",
      "placename": "Sankt Petersburg"
    },
    {
      "rism_id": "101479",
      "composer": "Mayr, Johann Simon",
      "librettist": "Rossi, Gaetano",
      "title": "Adelaide di Guesclino",
      "performance_year": "1799",
      "placename": "Venezia"
    },
    ...
```
### Question We Asked
Before Starting this adveture in first 800's, we asked to ourself what we would learn from these data. After some documentation about opera world we were curios about:

* How operas move throught nations and time?
* Which are the most important cities where operas are perform?
* How librettist and composer worked toghether?
* How many operas they made?
* With how many composers a librettist can work and vice versa?
* ...

These are just some of the questions that we tried to answer using graph visualization.

Types of graphs used:
* Map graphs
* Force Directed graph

### Libraries and Technologies
Tecnologies:
* [Node.js v18.0.0](https://nodejs.org/en/)
* [Electron](https://www.electronjs.org/)

Libraries:
* [Bootstrap v5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
* [D3.js v7](https://d3js.org/)
* [amCharts v5](https://www.amcharts.com/)

## Map Graphs
The map graphs aims to focus on the cities where the opera took place.
The **nodes represent the cities** while the edges between two nodes are present **if and only if** a opera was performed in both cities (the source and destination are established on the basis of the year in which the opera took place in the two cities).
A second map graph shows only a few cities that hosted a opera that took place nowhere else. 
The edges represent this common feature between the various cities in question.  

![Map Graph](https://github.com/Arcaici/Opera-Graph-Visualization/blob/main/images/Map%20Graph.png)

### Interactions
When the mouse passes over the nodes, the name of the city appears. If you select a node, information on the names and years of the opera that took place in that city appears.  
By clicking on the legend you have a focus on the individual opera, highlighting only the edges involved.  

![Map Graph] <img src="https://github.com/Arcaici/Opera-Graph-Visualization/blob/main/images/Interaction_Map.png" width="105">  <img src="https://github.com/Arcaici/Opera-Graph-Visualization/blob/main/images/Interaction_Map2.png" width="105">

## Force Directed Graph
The force directed graph aim to focus on reletionship between **librettist** and **composer**.
Blu nodes reppresent composer, while orange nodes are librettist. These nodes are connected by edges if and only if they worked toghether at least one time, while edges color and thickness, represent respectively the first year that a librettist and a composer worked toghether and  the number of time that they worked toghether.  

![Force Directed Graph](https://github.com/Arcaici/Opera-Graph-Visualization/blob/main/images/force_main.png)

### Interactions
When a click event happen on a edge the two nodes connected to that edge change color to red, while dark grey rectangle under nodes legend, it shows operas titles and number of operas which librettist and composer made toghether.

![Force Directed Graph Interactions](https://github.com/Arcaici/Opera-Graph-Visualization/blob/main/images/force_interaction.png)

#### Header
The header is a composition of 3 button:
1. *Mappa del Mondo*: Load Map graph 
2. *Rigenera Colori*: Reload the page and assign new edges colors 
3. *Reset info*: Restore Information and red nodes to their original appearance.
