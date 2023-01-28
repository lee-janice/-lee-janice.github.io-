import React from "react"
import { Link } from "gatsby"

interface Props {
    readonly title?: string
    readonly subtitle: string
    readonly slug: string
    readonly date: string
    readonly lastUpdated: string
    readonly topics: [string]
    readonly excerpt: string
    readonly showExcerpt: boolean
}

const PostPreview: React.FC<Props> = ({
    title,
    subtitle,
    slug,
    date,
    lastUpdated,
    topics,
    excerpt,
    showExcerpt,
}) => {
    date = date.slice(0, 10)
    lastUpdated = lastUpdated.slice(0, 10)
    return (
        <div>
            <h3>
                <Link to={slug}>{title || slug}</Link>
            </h3>
            <small>
                {date} ○ last updated: {lastUpdated} ○ topics:{" "}
                {topics.map((topic, i, arr) => (
                    <Link to={`/topics/${topic}/`} key={topic}>
                        {i < arr.length - 1 ? topic + ", " : topic}
                    </Link>
                ))}
            </small>
            {showExcerpt ? (
                <p dangerouslySetInnerHTML={{ __html: excerpt }} />
            ) : (
                <p dangerouslySetInnerHTML={{ __html: subtitle }} />
            )}
        </div>
    )
}

export default PostPreview
