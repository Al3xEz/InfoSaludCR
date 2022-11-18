import { useContext } from "react";
import Context from "../context/contextProvider";

const useMyContext = () => {
  return useContext(Context);
};

export default useMyContext;
