// import { Component, ViewChildren } from "@angular/core";
import { Component } from "@angular/core";
import { ElementRef } from "@angular/core/src/linker/element_ref";
import { OnInit, OnChanges, SimpleChanges } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  items = [];
  newItem = "";
  itemFilter = "All";
  myTodoStorage = window.localStorage;

ngOnInit(){
  this.getTodoListFromStorage();
}

  pushItem() {
    if (this.newItem) {
      this.items.push({
        title: this.newItem,
        edit: false,
        isCompleted: false 
      });
      this.newItem = "";
      //save changes to local storage
      this.saveTodoListToStorage()
    } else alert("*Введите задание!");
  }

  changeStatus(item) {
      if(!item.isCompleted) {
        item.isCompleted = true;
      }else {
        item.isCompleted = false;
      }
      //save changes to local storage
      this.saveTodoListToStorage()   
  }

  editItem(event, item) {
    // get value from input
    const title = event.target.value.trim();
    item.title = title;

    // hide edit input field
    item.edit = false;

    //save changes to local storage
    this.saveTodoListToStorage()
  }

  removeItem(index) {
    this.items.splice(index, 1);

    //save changes to local storage
    this.saveTodoListToStorage()
  }

  ClearItem(){
    this.items = [];

    //save changes to local storage
    this.saveTodoListToStorage()
  }

  dbClickInput(item) {
    item.edit = true;
  }

  changeFilter(str){
    this.itemFilter = str;
  }
  getColor(str){
    if (this.itemFilter == str)
      return '#bebebe';
  }
  
  saveTodoListToStorage() {
    this.myTodoStorage.setItem('todos', JSON.stringify(this.items));
  }

  getTodoListFromStorage() {
    this.items = JSON.parse(this.myTodoStorage.getItem('todos'));
  }
}

