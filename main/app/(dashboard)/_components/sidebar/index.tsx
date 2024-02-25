import { List } from "./list"
import { NewButton } from "./new-button"

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] h-full w-16 bg-[#1F2544] flex p-3 flex-col gap-y-4 text-white">
      <List />
      <NewButton />
    </aside>
  )
}
