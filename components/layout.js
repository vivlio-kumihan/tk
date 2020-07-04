import peculiar_style from "./layout.module.css"

export default function Layout({children}) {
  return <div className={peculiar_style.container}>{children}</div>
}