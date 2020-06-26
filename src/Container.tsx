import React, { useContext } from "react";
import shortid from "shortid";
import {
  DragDropContext,
  Droppable,
  DroppableProvided
} from "react-beautiful-dnd";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";
import { GlobalContext } from "./context/GlobalContext";
import { TodoListType } from "./context/TodoListType";

interface IResult {
  source: { index: number; droppableId: string };
  destination: { index: number; droppableId: string };
}

export const Container = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const rearrange = (
    array: TodoListType,
    source: number,
    destination: number
  ) => {
    const newArray = [...array];
    const newItem = array[source];
    newArray.splice(source, 1);
    newArray.splice(destination, 0, newItem);

    return newArray;
  };

  /*########### DRAG END ###########*/
  const dragEnd = (result: IResult) => {
    // spread - no need to write result.destination etc.
    const { source, destination } = result;

    //console.log("source: ", source)

    //If there is no destination, we can exit function
    if (!destination) {
      return;
    }
    //if the item is dropped in the same location, we can exit function
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    } else {
      let newTodoListOrder = rearrange(state, source.index, destination.index);

      dispatch({
        type: "endDrag",
        payload: newTodoListOrder
      });
    }
  };

  /*########### RENDERING ###########*/
  return (
    <DragDropContext
      onDragEnd={dragEnd}
      //onDragStart={}
    >
      <div style={{ padding: "24px", backgroundColor: "#f2f2f2" }}>
        <Input />
        <Droppable droppableId={shortid.generate()}>
          {(provided: DroppableProvided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <TodoList />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

// NOTE: For some reason ref={provided.innerRef} only works on html tags. See more here: https://github.com/atlassian/react-beautiful-dnd
