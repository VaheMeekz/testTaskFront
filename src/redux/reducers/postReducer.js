import { GET_POSTS, CREATE_POST, CHANGE_PAGE, SORT_POSTS } from "../types";

const initialState = {
  allPosts: [],
  posts: [],
  pageSize: 3,
  currentPage: 1,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      let arrayOfPosts = action.payload.slice(
        state.currentPage - 1,
        state.pageSize
      );
      return {
        ...state,
        allPosts: action.payload,
        posts: arrayOfPosts,
      };
    case CREATE_POST:
      return { ...state, posts: [{ ...action.payload }, ...state.posts] };
    case CHANGE_PAGE:
      return {
        ...state,
        posts: state.allPosts.slice(
          (action.payload - 1) * state.pageSize,
          action.payload * state.pageSize
        ),
      };
    case SORT_POSTS:
      let sortedPosts = [];
      if (
        action.payload.str === "ascending" &&
        action.payload.type === "name"
      ) {
        sortedPosts = state.allPosts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (
        action.payload.str === "descending" &&
        action.payload.type === "name"
      ) {
        sortedPosts = state.allPosts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      if (
        action.payload.str === "ascending" &&
        action.payload.type === "email"
      ) {
        sortedPosts = state.allPosts.sort((a, b) =>
          a.email.localeCompare(b.email)
        );
      } else if (
        action.payload.str === "descending" &&
        action.payload.type === "email"
      ) {
        sortedPosts = state.allPosts.sort((a, b) =>
          b.email.localeCompare(a.email)
        );
      }
      if (action.payload.str === "Edited" && action.payload.type === "status") {
        sortedPosts = state.allPosts.sort((a, b) =>
          a.status.toString().localeCompare(b.status)
        );
      } else if (
        action.payload.str === "New" &&
        action.payload.type === "status"
      ) {
        sortedPosts = state.allPosts.sort((a, b) =>
          b.status.toString().localeCompare(a.status)
        );
      }

      let paginateSortedPosts = sortedPosts.slice(
        (state.currentPage - 1) * state.pageSize,
        state.currentPage * state.pageSize
      );

      return {
        ...state,
        allPosts: sortedPosts,
        posts: paginateSortedPosts,
      };
    default:
      return state;
  }
};
