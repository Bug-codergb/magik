export interface R<T> {
	code: number;
	message: string;
	data: T;
	rows: T[];
	total: number;
}
