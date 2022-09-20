import React from "react";

const Overview = (props) => {
  const { tasks, delFn } = props;

  return (
    <div>
      {tasks.map((task, index) => {
        return <div key={task.id}>
            {index+1}. {task.text}
            <button data-delete={task.id} onClick={delFn}>Delete</button>
          </div>;
      })}
    </div>
  );
};

export default Overview;
