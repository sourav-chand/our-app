import Image from "next/image";

const team = [
  {
    name: "Tuya Terekh",
    role: "Mid-Level Developer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    offset: "mt-10",
  },
  {
    name: "Oliver Kugar",
    role: "Mid-Level Web Designer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    offset: "mt-0",
  },
  {
    name: "Fedor Chalov",
    role: "Senior Developer",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80",
    offset: "mt-10",
  },
  {
    name: "Yudai Kunar",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
    offset: "mt-0",
  },
];

export default function ContactTeam() {
  return (
    <section className="w-full bg-[#111111] py-20 px-8">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-white text-4xl font-black mb-4">Quality team</h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
          We deploy world-class creative design, team on demand, that can design surest measure&apos;s
          of success is when a client partner with more than once build, ship scale your vision most efficient.
        </p>
      </div>

      {/* Team grid — staggered vertically */}
      <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto items-start">
        {team.map((member) => (
          <div key={member.name} className={`flex flex-col gap-3 ${member.offset}`}>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="20vw"
              />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{member.name}</p>
              <p className="text-gray-500 text-xs mt-0.5">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
