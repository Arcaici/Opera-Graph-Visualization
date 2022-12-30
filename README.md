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
