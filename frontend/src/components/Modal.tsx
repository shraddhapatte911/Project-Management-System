import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useContext } from "react";
import { appContext } from "../context/app.context";
import { useQuery } from "@tanstack/react-query";
import { createProject, getAllUsers } from "../apis/api.service";

export const ModalComponent = () => {
  const [teamLead, setTeamLead] = React.useState([]);
  const [developers, setDevelopers] = React.useState([]);
  const [selectedLead, setSelectedLead] = React.useState("");
  const [selecteMember, setSelectedMember] = React.useState<any[]>([]);

  const { globalStates } = useContext(appContext);
  const { open, handleClose } = globalStates;
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string[];
    setSelectedMember(value);
  };

  useEffect(() => {
    if (data?.data) {
      setTeamLead(() =>
        data?.data.filter((user: any) => user.role === "TEAM LEAD")
      );
      setDevelopers(() =>
        data?.data.filter((devs: any) => devs.role === "TEAM MEMBER")
      );
    }
  }, [open, data?.data]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            createProject(formJson)
            handleClose();
          },
        }}
      >
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="project_id"
            name="name"
            label="Project Title"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="project_id"
            name="description"
            label="Project Description"
            type="text"
            fullWidth
            variant="standard"
          />

          {/* Project Lead */}
          <Box sx={{ minWidth: 120, marginTop: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Project Lead
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="project_lead"
                value={selectedLead}
                label="Assign Developer"
                onChange={(e) => setSelectedLead(e.target.value)}
              >
                {teamLead.map((leader: any) => (
                  <MenuItem key={leader._id} value={leader.name}>
                    {leader.name}
                  </MenuItem>
                ))}
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </Box>

          {/* Project Developers */}
          <Box sx={{ minWidth: 120, marginTop: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Project Developers
              </InputLabel>
              <Select
                multiple
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="project_devs"
                value={selecteMember}
                label="Assign Developer"
                onChange={(e)=>handleChange(e)}>
                {developers.map((devs: any) => (
                  <MenuItem key={devs?._id} value={devs?.name}>
                    {devs.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
