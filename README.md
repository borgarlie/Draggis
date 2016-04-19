Draggis
=================
Easy to use JavaScript library to drag and drop elements with nested elements inside.

### Usage
1. Download and add the script to your project.
  ```
  <script type="text/javascript" src="draggis.js"></script>
  ```
  
2. Create a div as a container with an id.

3. Set every draggable object as: 
  ```
  draggable="true"
  ```
    
4. Set class for every dropzone:
  ```
  class="droptarget"
  ```
    
5. Create a new "Draggis" with the container element and a callback function to decide what to do with the 2 Id's (dragged target id and dropped target id). E.g:
  ```
  var container = document.getElementById("container");
  var drag = new Draggis(container, (dragged_id, dropped_id) => {
    console.log("Dragged id: " + dragged_id);
    console.log("Dragged to: " + dropped_id);
  });
  ```

### Dependencies
* Browser must support draggable

### Example
* See index.html
