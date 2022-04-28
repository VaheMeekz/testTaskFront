import {GET_POSTS, CREATE_POST, EDIT_POST, CHANGE_PAGE, SORT_POSTS} from "../types";
import axios from "axios";
import {API_URI} from "../../utils/keys";
import Swal from "sweetalert2";

export function getPosts() { 
    return async dispatch => {
        const response = await axios.get(`${API_URI}/post/`)
        dispatch({
            type: GET_POSTS,
            payload: response.data
        })
    }
}

export function changePageHandler(page) {
    return dispatch => {
        dispatch({type: CHANGE_PAGE, payload: page})
    }
}

export function createPost(data) {
    return dispatch => {
        axios.post(`${API_URI}/post/create`, data)
            .then(res => {
                dispatch({type: CREATE_POST, payload: res.data})
                Swal.fire({
                    icon: 'success',
                    title: 'Car has been deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function editPost(data) {
    return dispatch => {
        axios.post(`${API_URI}/post/edit`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("myToken")}`
            }
        })
            .then(res => {
                dispatch({type: EDIT_POST, payload: res.data})
                Swal.fire({
                    icon: 'success',
                    title: 'Car has been deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(e => {
                console.log(e)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }
}

export function sortPost(data) {
    return dispatch => {
        dispatch({type: SORT_POSTS, payload: data})
    }
}