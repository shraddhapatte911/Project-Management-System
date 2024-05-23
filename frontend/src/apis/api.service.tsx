import axios from "axios";

export const getAllUsers = async () => {
  const response = await axios.get("/api/users");
  return response;
};

export const getProjects = async () => {
  const response = await axios.get("/api/projects");
  return response;
};

export const deleteProject = async (_id: String) => {
  try {
    const response = await axios.delete(`/api/projects/${_id}`,);
    return response;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const createProject = async (body: any) => {
  try {
    const response = await axios.post("/api/projects/create", { ...body });
    return response;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
