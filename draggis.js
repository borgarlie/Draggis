var Draggis = class {

	constructor(container, drop_callback) {
		this.max_recursion_depth = 10;
		this.recursions = 0;
		this.container = container;
		this.container_id = container.id;
		this.drop_callback = drop_callback;
		this.setup();
	}

	setup() {
		this.container.addEventListener("dragstart", (event) => {
	        event.dataTransfer.setData("dragData", event.target.id);
	    });

	    this.container.addEventListener("dragover", (event) => {
	        event.preventDefault();
	    });

	    this.container.addEventListener("drop", (event) => {
	        event.preventDefault();
	        this.recursions = 0;
	        var dragged_id = event.dataTransfer.getData("dragData");
	        this.look_for_drop_target(event.target, dragged_id);
	    });
	}

	check_class_names(target) {
		if (target.className == undefined) return false;
		var names = target.className.split(" ");
		var d = "droptarget";
		for (var i in names) {
			if (names[i] == d) return true;
		}
		return false;
	}

	look_for_drop_target(target, dragged_id) {
		this.recursions++;
		if(target.id == this.container_id) return;
		if (this.check_class_names(target)) {
			if(dragged_id == target.id) return;
			this.drop_callback(dragged_id, target.id)
			return;
		}
		if(this.recursions == this.max_recursion_depth) return;
		this.look_for_drop_target(target.parentElement, dragged_id);
	}

}