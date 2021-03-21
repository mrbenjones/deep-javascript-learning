# Graph Component List for Vue
* Components for each type of Graph we might see. 
   * Multiple line graphs
   * Multiple bar graphs
   * Multiple Scatterplots
   * Heatmaps
   
* Overall sketch

Each component has a specification object that defines the data, and either defines the configuration
or provides for a function that will define the configuration.  The component has the following characteristics: 
* Height and Width
* Working height and width (take out core label)
* Core label
* Object mapping name -> axes (maximum of two)
* Object mapping name to datalist and name to axes. 

Mouseover actions. 
* Every data point has an appropriate mouseover that highlights the mapped axis, and highlights the point. 
* 