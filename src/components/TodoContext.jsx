import React from 'react';

const TodoContext = React.createContext();

function ToDoProvider(props) {
    
    
  
    const [searchToDo, setSearchToDo] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    return(
        <TodoContext.Provider value={{
            
            searchToDo,
            setSearchToDo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, ToDoProvider }