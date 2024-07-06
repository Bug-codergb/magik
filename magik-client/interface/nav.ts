interface INav {
  id: string;
  title: string;
  icon: Component;
  isRoute: boolean;
  path: string;
  header: Component | Element | string | null;
}
export type { INav };
