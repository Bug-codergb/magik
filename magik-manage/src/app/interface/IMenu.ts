export interface IMenu {
  id: string
  parent: any
  children: IMenu[]
  title: string
  path: string
  redirect: string
  icon: string
  component: string
  meta: string
  createTime: string
  updateTime: string
}
