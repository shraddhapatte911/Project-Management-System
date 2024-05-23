import * as React from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { appContext } from "../context/app.context";

export const Main = ({ PageTitle }) => {
  const { globalStates } = React.useContext(appContext);
  const { handleClickOpen } = globalStates;
  return (
    <div className="sticky top-0 py-5 bg-white flex justify-between align-middle">
      <h2 className="text-xl font-bold">{PageTitle == "" ? "Projects": PageTitle}</h2>
      <section>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Create {PageTitle}
        </Button>
      </section>
    </div>
  );
};
