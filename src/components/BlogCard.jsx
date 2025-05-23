

// eslint-disable-next-line react/prop-types
function BlogCard({blogname, blogdesc, img, link}) {
  return (
    

<div className="max-w-xs rounded-md  bg-white overflow-hidden transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-8px_8px_0px_#808080] transition-all duration-300">
  <img className="w-full rounded-md" src={img} alt="Blogs Image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{blogname}</div>
    <p className="text-gray-700 text-base">
      {blogdesc}
    </p>
    <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-lg font-semibold font-[kanit] hover:no-underline"
            >
              Blog Link🔗
            </a>
  </div>
</div>

  )
}

export default BlogCard