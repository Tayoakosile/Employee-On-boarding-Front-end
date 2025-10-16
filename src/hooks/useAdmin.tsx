import { useMutation, useQuery } from "@tanstack/react-query";
// import axios from 'axios'
import useApi from "./useApi";

const useAdmin = () => {
  const { JOL_BASE_URL } = useApi();

  const fetchEmployeesQuery = useQuery({
    queryKey: ["admins"],
    queryFn: async () => {
      const { data } = await JOL_BASE_URL.get("/employees");
      return data;
    },
  });

  const fetchInvitesQuery = useQuery({
    queryKey: ["invites"],
    queryFn: async () => {
      const { data } = await JOL_BASE_URL.get("/invites");
      return data;
    },
  });

  const generateInviteMutation = useMutation({
    mutationFn: async () => {
      const { data } = await JOL_BASE_URL.post("/invites/generate");
      return data;
    },
  });

  return { fetchEmployeesQuery, fetchInvitesQuery, generateInviteMutation };
};

export default useAdmin;
