import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Work() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Work</h1>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <AspectRatio
                className="border-border shadow-shadow rounded-base -bottom-[2px]! border-2"
                ratio={16 / 9}
              >
                {project.previewVideo ? (
                  <video
                    className="rounded-base h-full w-full object-cover"
                    src={project.previewVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    className="rounded-base w-full"
                    src={`${project.previewImage}`}
                    alt={project.name}
                  />
                )}
              </AspectRatio>

              <div className="text-main-foreground font-base mt-5">
                <div className="flex items-center gap-3">
                  <h2 className="font-heading text-xl sm:text-2xl">
                    {project.name}
                  </h2>
                  {project.company && (
                    <span className="border-border bg-secondary-background rounded-base border-2 px-2 py-0.5 text-xs sm:text-sm">
                      {project.company}
                    </span>
                  )}
                </div>

                <p className="mt-2">{project.description}</p>

                {(project.liveLink || project.repoUrl) && (
                  <div
                    className={`mt-8 grid gap-5 ${project.liveLink && project.repoUrl ? 'grid-cols-2' : 'grid-cols-1'}`}
                  >
                    {project.liveLink && (
                      <a
                        className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                        href={project.liveLink}
                        target="_blank"
                      >
                        Visit
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                        href={project.repoUrl}
                        target="_blank"
                      >
                        Github
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
