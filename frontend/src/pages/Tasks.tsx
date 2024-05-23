import { Card, Chip, Divider, Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { mernTasks } from "./mock/tasks";
import { Link } from "react-router-dom";

export const Tasks = () => {
  return (
    <Link to="/tasks/5">
      {mernTasks.map((task: any) => (
        <div key={task._id} className="my-10 grid hover:shadow-xl cursor-pointer">
          <Card
            className="shadow-2xl grid grid-cols-2"
            sx={{ padding: "1em" }}
            
          >
            <div>
              <h1 className="font-bold">{task.task}</h1>
              <span className="text-sm mt-2">Assigned By: <p className="font-bold">{task.assignedBy}</p></span>
            </div>
            <div>
              <div className="gap-xl scroll">
                <p className="text-xs font-extralight">Description</p>
                <p className="text-sm mt-2">{task.description}</p>
              </div>
              <Stack direction="row" spacing={1}>
                <Chip label="Pending" color="success" variant="outlined" />
                <Chip label="Completed" color="primary" variant="outlined" />
              </Stack>
            </div>
          </Card>
          <Divider />
        </div>
      ))}
    </Link>
  );
};
