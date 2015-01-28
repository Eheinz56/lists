//Eric Heinzman
//CMP 344
//1/27/15
//This program is intended to Create a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list

	//function to look through a list for numbers greater than i
	function small(num, after) {
			
		for(var i = 0; i < this.dataStore.length; i++) {
			if(num >= this[i]){
				return false;
	}
		}
		insert(num,after);

} 
		//find function given in the book to find an item to remove
		function find(element) {
			for (var i = 0; i < this.dataStore.length; ++i){
				if (this.dataStore[i] == element) {
					return i;
				}
			}
			return -1;
		}
		//length function given in book to return number of elements
		function length() {
			return this.listSize;
		}
		//insert function given in book to insert element 
		function insert(element, after) {
			var insertPos = this.find(after);
			if (insertPos > -1) {
				this.dataStore.splice(insertPos+1, 0, elements);				++this.listSize;
				return true;
			}
			return false;
	}
			//appened function given in book
			function appened(element) {
				this.dataStore[this.listSize++] = element;
			}
		//list class implementation
		function List() {
			this.find = find;
			this.insert = insert;
			this.length = length;
			this.append = append;
			this.listSize = 0;
	} 
		//creating a new list 
	var list = new List(); 
		list.append(5);
		list.insert(3,0);
		list.insert(6,1);
		list.insert(5,2);
//	list.small(1,3);
