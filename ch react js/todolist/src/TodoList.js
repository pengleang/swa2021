import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
class TodoList extends Component {
	constructor(props){
		super(props);
		this.state={items: []}; 
		this.addItem=this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e){
		//itemArray stores the current value of  items state object
		var itemArray = this.state.items;
		if (this._inputElement.value !== "") {
			itemArray.unshift({ 
			//check to see if the input element has contents inside it
				text: this._inputElement.value,
				key: Date.now()
			});
			this.setState({
			//set state’s items property to the value of itemArray
				items: itemArray
			});
			this._inputElement.value = "";
		}
		console.log(itemArray);
		e.preventDefault();
		//By default, when you submit a form, the page reloads 
		//and clears everything out. By calling preventDefault, 
		//we block the default behavior.
		//function(a) { this._inputElement = a }
					//we’re storing a reference to our input element 
					//in the appropriately named _inputElement property
	}
	deleteItem(key) {
		//we check this key against all the items
		//we’re storing currently via the filter method
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
		//We create a new array called filteredItems that contains 
		//everything except the item we are removing. This filtered array 
		//is then set as our new items property on our state object
		this.setState({
			items: filteredItems
		});
	}
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a}
						placeholder="enter task"></input>
						<button type="submit">add</button>
					</form>
				</div>
				<TodoItems entries={this.state.items} 
					delete={this.deleteItem} />
			</div>
			);
		}
	}
	export default TodoList;
