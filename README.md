# GraphDrawingProject
grafi:
* Grafo a mappa
* Grafo force directed

## Grafo a mappa

### Domanda
* In che modo le performance hanno viaggiato geograficamente e nel tempo?
* Come si sono spostate le opere durante il tempo?
* Quali opere sono rimaste nello stesso posto e quali hanno attraversato l'Europa?

### Struttura del grafo

#### Nodi
* id: città
* contengono :
  * posizione[longitudine, latitudine]  
#### Archi Diretti
* id: coppia(opera, anno)
* contengono :
  * opera: nome opera
  * anno: anno dell'esibizione nel nodo sorgente
* colore: ogni arco è rappresentata con un colore specifico che identifica l'opera in modo univoco.
#### Interazioni
Quando avviene un evento di mouseOver su un arco viene visualizzata un etichetta contenente l'anno/i dell'avveninmento delle/a performance.  

Quando l'utente esegue un evento clik su un nodo viene generato un grafo force directed che ha come nodi i librettisti e i compositori di tutte le opere(archi entranti e uscenti) che sono state fatte all'interno di quella città.

## Grafo Force directed

### Domanda
* DA DEFINIRE

### Struttura del grafo

#### Nodi
* id: nome librettista o compositore
* contengono :
  * tipo: (librettista o compositore o entrambi)
* colore: ogni nodo a un colore specifico che identifica il tipo in modo univoco.
#### Archi NON diretti
* id: coppia(opera, anno)
* contengono :
  * opera: nome opera
  * anno: anno dell'esibizione nel nodo sorgente
* colore: ogni arco è rappresentata con un colore specifico che identifica l'anno in modo univoco.
#### Interazioni
Quando avviene un evento di mouseOver su un arco viene visualizzata un etichetta contenente l'anno/i dell'avveninmento delle/a performance.  

Quando l'utente esegue un evento clik su un nodo viene generato un grafo force directed che ha come nodi i librettisti e i compositori di tutte le opere(archi entranti e uscenti) che sono state fatte all'interno di quella città.