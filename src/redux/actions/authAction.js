import axios from "axios";
import Swal from "sweetalert2";
import { API_URI, myUrl } from "../../utils/keys";
import { SIGN_IN_POST } from "../types";

export const goSignIn = (data) => {
  return (dispatch) => {
    axios
      .post(`${API_URI}/auth/sign-in`, data)
      .then((res) => {
        dispatch({ type: SIGN_IN_POST, payload: res.data });
        localStorage.setItem("myToken", res.data.token);
        Swal.fire({
          icon: "success",
          title: "Success",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href = myUrl;
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 1500,
        });
      });
  };
};
