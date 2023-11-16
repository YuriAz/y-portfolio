export default function SkillHolder({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="border-[4px] border-white p-1 rounded-lg bg-slate-800 skill-shadow origin-center rotate-45">
      <abbr title={title}>{children}</abbr>
    </div>
  )
}
