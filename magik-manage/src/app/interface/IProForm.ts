interface IProForm {
	label: string;
	name: string;
	required: boolean;
	initialValue: any;
	tag: string;
	attr?: Record<string, any>;
	group?: Record<string, any>[];
	isShowFile?: boolean;
}
export type { IProForm };
