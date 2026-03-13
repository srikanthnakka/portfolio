import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"

export default function IPLProject() {

const filePath = path.join(process.cwd(), "app/projects/ipl-analysis/readme.md")
const readme = fs.readFileSync(filePath, "utf8")

return (

<div className="readme-container">

{/* Top Navigation */}

<div className="project-nav">

<Link href="/#projects" className="back-btn">
← Back to Projects
</Link>

<Link href="/#projects" className="close-btn">
✕
</Link>

</div>

<ReactMarkdown remarkPlugins={[remarkGfm]}>
{readme}
</ReactMarkdown>

</div>

)

}