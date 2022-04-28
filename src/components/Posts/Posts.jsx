import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import PostItem from "./PostItem";
import { useDispatch } from "react-redux";
import { sortPost } from "../../redux/actions/postAction";
import EditModal from "./EditModal";
import { token } from "../../utils/keys";

const Posts = ({ posts, setCurrentPage }) => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const sortByName = (e) => {
    setCurrentPage(1);
    dispatch(sortPost({ str: e.target.value, type: "name" }));
  };

  const sortByEmail = (e) => {
    setCurrentPage(1);
    dispatch(sortPost({ str: e.target.value, type: "email" }));
  };

  const sortByStatus = (e) => {
    setCurrentPage(1);
    dispatch(sortPost({ str: e.target.value, type: "status" }));
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>
            <div
              className={"d-flex align-items-center justify-content-between"}
            >
              Name
              <Form.Select
                style={{ width: "150px" }}
                onChange={sortByName}
                size="sm"
              >
                <option value="ascending">A-Z</option>
                <option value="descending">Z-A</option>
              </Form.Select>
            </div>
          </th>
          <th>
            <div
              className={"d-flex align-items-center justify-content-between"}
            >
              Email
              <Form.Select
                style={{ width: "150px" }}
                onChange={sortByEmail}
                size="sm"
              >
                <option value="ascending">A-Z</option>
                <option value="descending">Z-A</option>
              </Form.Select>
            </div>
          </th>
          <th>Text</th>
          <th>
            <div
              className={"d-flex align-items-center justify-content-between"}
            >
              Status
              <Form.Select
                style={{ width: "150px" }}
                onChange={sortByStatus}
                size="sm"
              >
                <option value="New">New</option>
                <option value="Edited">Edited by admin</option>
                {/* <option value="Done">Done</option> */}
              </Form.Select>
            </div>
          </th>
          {token ? (
            <th>
              <div
                className={"d-flex align-items-center justify-content-between"}
              >
                Edit
              </div>
            </th>
          ) : null}
        </tr>
      </thead>
      <tbody>
        {posts
          ? posts.map((post) => (
              <PostItem
                key={post.id}
                post={post}
                setCurrentId={setCurrentId}
                setModalShow={setModalShow}
                token={token}
              />
            ))
          : null}
      </tbody>
      <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={currentId}
      />
    </Table>
  );
};

export default Posts;
