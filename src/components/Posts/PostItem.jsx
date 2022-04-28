import React from "react";

const PostItem = ({ post, setCurrentId, setModalShow, token }) => {
  const handleSelect = () => {
    setCurrentId(post.id);
    setModalShow(true);
  };
  return (
    <tr>
      <td>{post.name}</td>
      <td>{post.email}</td>
      <td>{post.text}</td>
      <td>{post.status}</td>
      {token ? <td onClick={handleSelect}>edit</td> : null}
    </tr>
  );
};

export default PostItem;
