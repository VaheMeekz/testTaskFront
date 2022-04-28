import React from "react";
import {Pagination} from "react-bootstrap";
import styles from './posts.module.css'

const PostPagination = ({totalPages, currentPage, changePage}) => {

    return (
        <div className={styles.paginationField}>
            <Pagination size="sm">
                {
                    Array.from(Array(totalPages).keys()).map((item) => (
                        <Pagination.Item key={item}
                                         active={item + 1 === currentPage}
                                         onClick={() => changePage(item + 1)}
                        >
                            {item + 1}
                        </Pagination.Item>
                    ))
                }
            </Pagination>
        </div>
    )
}

export default PostPagination