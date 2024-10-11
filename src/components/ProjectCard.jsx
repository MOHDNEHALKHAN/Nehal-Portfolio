
// eslint-disable-next-line react/prop-types
function ProjectCard({ProjectName, ProjectImg, GitHubLink, LiveLink}) {
  return (
    <div className="max-w-xs rounded-md  bg-white overflow-hidden transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-8px_8px_0px_#fb7185] transition-all duration-300">
  <img className="object-contain rounded-md" src={ProjectImg} alt="Project Image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{ProjectName}</div>
    <div className="flex justify-between">
    <a
              href={GitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 text-lg font-semibold font-[kanit] hover:no-underline"
            >
                GitHub Link🚀
            </a>
             <a
              href={LiveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 text-lg font-semibold font-[kanit] hover:no-underline"
            >
                Live Project🚀
            </a>
            </div>
  </div>
</div>
  )
}

export default ProjectCard