const toDoList = require('../../page/ios/todo.screen');
before(async () =>{
    console.log('Before Hook');
});
beforeEach(async () =>{
    console.log('Before Each Hook');
});
describe('Create a To Do list: ', async()=>{
    it('Todo list', async()=>{
    await toDoList.createListBtn.click();
    await toDoList.listName.addValue('Reminder');
    await toDoList.create.click();
    await toDoList.listNameField('Reminder').click();
    await toDoList.createItem.click();
    await toDoList.title.addValue('Food');
    await toDoList.due.click();
    await toDoList.datePicker.click();
    await toDoList.date('Monday, February 27').click();
    await toDoList.outsideWindow.click();
    await toDoList.create.click();
    await expect(toDoList.titleName('Food')).toBeExisting();
    await expect(toDoList.dueDate('Due February 27, 2023')).toBeExisting();

});
});

describe('First test case describe block', async()=>{
    it('First testCase It block', async()=>{console.log('First Test Case');});});

describe('second test case describe block', async()=>{
    it('Second testCase It block', async()=>{console.log('Second test case');});});

afterEach(async () =>{
        console.log('After Each Hook');
    });

after(async () =>{
        console.log('After Hook');
    });
