import todoDispatcher from '../dispatchers/todoDispatcher';

export function addNewTask(inputValue){
    
      todoDispatcher.dispatch({
        actionType: 'TODO_ADD_TASK',
        data: inputValue
      });
    
}
export function deleteTask(taskId){
    
      todoDispatcher.dispatch({
        actionType: 'DELETE_TASK',
        data: taskId
      });
    
}