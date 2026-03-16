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
            <p>{role.description}</p>
          </div>
        )
      })}
    </div>
  )
}
