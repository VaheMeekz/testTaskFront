import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Posts from "../components/Posts/Posts";
import PostPagination from "../components/Posts/Pagination";
import AddPost from "../components/Posts/AddPost";
import {changePageHandler, getPosts} from "../redux/actions/postAction";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const posts = useSelector(state => state.posts.posts)
    const allPosts = useSelector(state => state.posts.allPosts)
    const pageSize = useSelector(state => state.posts.pageSize);

    let changePage = page => {
        setCurrentPage(page)
        dispatch(changePageHandler(page))
    }

    return (
        <>
            <AddPost/>
            <Posts posts={posts}
                   setCurrentPage={setCurrentPage}
            />
            <PostPagination pageSize={pageSize}
                            currentPage={currentPage}
                            totalPages={Math.ceil(allPosts.length / pageSize)}
                            changePage={changePage}
            />
        </>
    )
}

export default Home