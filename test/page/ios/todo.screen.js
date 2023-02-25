class ToDoList{
    get createListBtn(){
        return $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Create list"`]');
    }
    get listName(){
        return $('-ios predicate string: value == "List Name"');
    }
    get create(){
        return $('~Create');
    }
    listNameField(name){
        return $(`~${name}`);
    }
    get createItem(){
        return $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Create item"`]');
    }
    get title(){
        return $('-ios predicate string:value == "Title"');
    }
    get due(){
        return $('-ios predicate string:value == "Due"');
    }
    get datePicker(){
        return $('-ios predicate string:label == "Date Picker"');
    }
     date(date){
        return $(`~${date}`);
    }
    get outsideWindow(){
        return $('//XCUIElementTypeWindow[@index=2]');
    }
     titleName(name){
        return $(`~${name}`);
    }
     dueDate(date){
        return $(`~${date}`);
    }
}
module.exports = new ToDoList();