import Link from "next/link"
import React from "react"

const PostLink = function(props) {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>
          {props.title}
        </a>
      </Link>
    </li>
  )
}

export default PostLink
