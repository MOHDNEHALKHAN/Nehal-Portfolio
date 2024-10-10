

function ProjectCard() {
  return (
    <div className="max-w-xs rounded-md  bg-white overflow-hidden transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-8px_8px_0px_#fb7185] transition-all duration-300">
  <img className="w-full rounded-md" src="" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2"></div>
    <p className="text-gray-700 text-base">
     
    </p>
    <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 text-lg font-semibold font-[kanit] hover:no-underline"
            >
                Project Link🚀
            </a>
  </div>
</div>
  )
}

export default ProjectCard