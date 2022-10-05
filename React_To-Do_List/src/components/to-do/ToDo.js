import { useState } from "react";
import "./styles.css";
import List from "./List/List";

function ToDo() {
  const [tasks, tasksSet] = useState([
    { value: "Complete the to-do list", view: "completed", id: 0 },
    { value: "Study at Patika", view: "", id: 1 },
    { value: "Do all homework.", view: "", id: 2 },
    { value: "Share on github", view: "", id: 3 },
  ]);
  const [filter, filterSet] = useState("all");
  return (
    <div>
      <List
        tasks={tasks}
        tasksSet={tasksSet}
        filter={filter}
        filterSet={filterSet}
      />
    </div>
  );
}

export default ToDo;
