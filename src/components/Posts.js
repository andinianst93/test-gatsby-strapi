import React from "react"
import { Link } from "gatsby"
import Post from "./Post"

const Posts = ({ posts, title }) => {
  return (
    <section className="posts">
      <h4 className="posts-title">{title}</h4>
      <div className="posts-center">
        <article>
          {posts.map((post, index) => {
            return <Post key={post.id} index={index} {...post} />
          })}
        </article>
        <article>
          <Link to="/blog">
            <button className="btn center-btn">Read More Posts</button>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default Posts
