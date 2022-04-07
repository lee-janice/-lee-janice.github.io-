import React from 'react'

interface Props {
    readonly quote: string,
    readonly description?: string,
    readonly chapternum: number,
    readonly chaptertitle: string,
    readonly pagenum: number,
    readonly notes?: string,
    readonly importance: number,
    readonly tags?: [string],
}

const Quote: React.FC<Props> = ({
    quote,
    description = null,
    chapternum,
    chaptertitle,
    pagenum,
    notes = null,
    importance,
    tags = null,
    children = null
}) => {
    let desc = description.length > 0 ? description + '; ' : ''
    return (
        <blockquote>
            <p>{children || quote}</p>
            <footer>
                {desc}
                <em>chapter {chapternum} ({chaptertitle}), page {pagenum}</em>;
                importance: {importance}
            </footer>
        </blockquote>
    )
}

export default Quote