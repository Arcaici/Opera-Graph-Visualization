# Visualization Project

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

Types of graphs used:
* Map graphs
* Force Directed graph

## Map Graphs
The map graph aims to focus on the cities where the opera took place.
The nodes represent the cities while the edges between two nodes are present if and only if a opera was performed in both cities (the source and destination are established on the basis of the year in which the opera took place in the two cities).
A second map graph shows only a few cities that hosted a opera that took place nowhere else. 
The edges represent this common feature between the various cities in question.

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
