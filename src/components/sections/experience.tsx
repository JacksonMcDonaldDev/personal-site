import PAST_ROLES from '@/data/experience'

export default function Experience() {
  return (
    <div className="mb-16">
      {PAST_ROLES.map((role, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="font-heading text-lg sm:text-xl">
              {role.role} @ {role.company}
            </h3>

            <p className="mt-0.5 mb-4 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            {role.description.length > 1 ? (
              <ul className="list-disc space-y-1 pl-5">
                {role.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{role.description[0]}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
