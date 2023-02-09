import React from "react"

interface Props {
    readonly quote: string
    readonly description?: string
    readonly chapternum: number
    readonly chaptertitle: string
    readonly pagenum: number
    readonly notes?: string
    readonly importance: number
    readonly tags?: [string]
}

const Quote: React.FC<Props> = ({
    quote,
    description = null,
    chapternum,
    chaptertitle = null,
    pagenum,
    notes = null,
    importance,
    tags = null,
}) => {
    // determine if there should be a semicolon after the quote location description
    let sc = ""
    chapternum || chaptertitle || pagenum ? (sc = "; ") : (sc = "")
    return (
        <div>
            <span className="marginnote">
                {notes ? <div>{notes}</div> : ""}
            </span>
            <blockquote>
                <p>{quote}</p>
                <footer>
                    {description ? description + "; " : ""}
                    <em>
                        {chapternum ? "chapter " + chapternum + " " : ""}
                        {chaptertitle ? "(" + chaptertitle + ")" : ""}
                        {pagenum ? " page " + pagenum : ""}
                    </em>
                    {sc}
                    importance: {importance}
                </footer>
            </blockquote>
            <br />
        </div>
    )
}

export default Quote
