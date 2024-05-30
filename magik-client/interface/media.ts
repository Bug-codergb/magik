interface IWarn {
  value: string;
  checked: boolean;
}
interface IMedia {
  url: string;
  file: File | Blob;
  description: string;
  warn: IWarn[];
}
export type { IMedia, IWarn };
