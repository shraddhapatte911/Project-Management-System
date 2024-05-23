import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { deleteProject, getProjects } from "../apis/api.service";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react"; 

function createData(
  name: string,
  p_lead: string,
  p_manager: string,
  p_devs: string,
  p_id: string
) {
  return { name, p_lead, p_manager, p_devs, p_id };
}

export const ProjectList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const projectInfo = data?.data.map((project: any) =>
    createData(
      project.name,
      project.project_lead,
      project.project_manager,
      project.project_devs,
      project._id
    )
  );

  console.log("PROJECT_INFO", projectInfo);

  useEffect(()=>{
    return (()=>{console.log("Cleanup function")})
  },[data?.data])

  return (
    <TableContainer component={Paper}>
      {isLoading ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "fixed",
            top: "50%",
            left: "50%",
            zIndex: "9999",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Serial No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Project Lead</TableCell>
              <TableCell align="center">Project Manager</TableCell>
              <TableCell align="center">Developers</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectInfo.map((row: any, idx: number) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {idx + 1}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">
                  {!row.p_lead ? "NA" : row.p_lead}
                </TableCell>
                <TableCell align="center">
                  {!row.p_manager ? "NA" : row.p_manager}
                </TableCell>
                <TableCell align="center">
                  {row.p_devs?.length == 0 ? "NA" : row.p_devs}
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <div>
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => deleteProject(row.p_id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};
