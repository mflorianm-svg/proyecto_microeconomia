import type { Member } from '../../types';

interface MembersSectionProps {
  members: Member[];
}

export default function MembersSection({ members }: MembersSectionProps) {
  return (
    <section aria-labelledby="members-heading" className="px-4 md:px-8 py-12">
      <h2
        id="members-heading"
        className="font-serif text-2xl md:text-3xl text-text-primary font-semibold mb-8"
      >
        Integrantes del Grupo
      </h2>
      <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member) => (
          <li key={member.name}>
            <div className="border-t-4 border-harvard-crimson bg-white p-6 shadow-sm rounded-b">
              <span className="font-sans font-medium text-text-primary text-base">
                {member.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
