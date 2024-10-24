import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deleteTask, updateTaskStatus } from "../Redux/Task/TaskSlice";
import EditModal from "./EditModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const statusCategories = ["Pending", "Processing", "Completed"];

  
  // editmodal section
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  // delete button dialog

  const deleteItem = (taskId) => {
    console.log('clicking the delete button')
    dispatch(deleteTask(taskId));
  };

  const editItem = (task) => {
    console.log('hello click to the edit button')
    setSelectedTask(task);
    setShowModal(true);
  };
  // console.log('status',category.status)

  const handleDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    // console.log("Draggable ID:", draggableId);
    // console.log("Source:", source);
    // console.log("Destination:", destination);

    if (!destination) {
      console.log("destination error");
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const draggedTaskId = parseInt(draggableId, 10);
    const newStatus = destination.droppableId;
    dispatch(updateTaskStatus({ id: draggedTaskId, status: newStatus }));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div>
        <div className=" flex justify-between mx-5 border-solid rounded-lg border-2 border-sky-900 text-center mt-5 bg-slate-200 p-5">
          {statusCategories.map((category) => (
            <div
              key={category}
              className="w-1/3 border-dashed border-2 border-sky-500 p-4 bg-white rounded-lg shadow-lg mx-2"
            >
              <h2 className="text-xl font-semibold mb-3">{category}</h2>
              <Droppable droppableId={category}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-3"
                  >
                    {tasks
                      .filter((item) => item.status === category)
                      .map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="p-3 bg-slate-100 flex justify-between items-center rounded shadow"
                            >
                              <span>{task.text}</span>
                              <div className="flex space-x-2">
                                <button
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() => deleteItem(task.id)}
                                >
                                  <AiFillDelete />
                                </button>
                                <button
                                  className="text-blue-500 hover:text-blue-700"
                                  onClick={() => editItem(task)}
                                >
                                  <AiFillEdit />
                                </button>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
        {showModal && (
          <EditModal task={selectedTask} onClose={() => setShowModal(false)} />
        )}
      </div>
    </DragDropContext>
  );
};

export default TaskList;
