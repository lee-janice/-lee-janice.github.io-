import React from 'react'
import { Link } from 'gatsby'

interface Props {
    readonly title?: string,
    readonly slug: string,
    readonly date: string,
    readonly topics: [string],
    readonly excerpt: string,
}

const PostPreview: React.FC<Props> = ({
    title, 
    slug, 
    date,
    topics, 
    excerpt
}) => {
    console.log(slug)
    return (
        <div key={slug}>
            <h3>
                <Link to={slug}>{title || slug}</Link>
            </h3>
            <small>
                {date} ○
                topics: {topics.map((topic, i, arr) => 
                    <Link to={`/topics/${topic}/`}>
                        {(i < arr.length - 1) ? topic + ', ' : topic}
                    </Link>)}
            </small>
            <p dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
    )
}

export default PostPreview