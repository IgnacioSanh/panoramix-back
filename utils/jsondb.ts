import path from "path";
import fs from "fs";
import { readFile, writeFile } from "fs/promises";

const ENCODING = "utf-8";

export class JSONDB<T extends object> {
	private readonly filePath: string;
	private _size = 0;

	get size() {
		return this._size;
	}

	constructor(private fileName: string) {
		this.filePath = path.join(__dirname, "../data", `${fileName}.json`);

		if (!fs.existsSync(this.filePath)) {
			fs.writeFileSync(this.filePath, "[]", ENCODING);
		}
	}

	async read() {
		try {
			return JSON.parse(await readFile(this.filePath, ENCODING));
		} catch (error) {
			console.log(error);
		}
	}

	private async save(data: T | Array<T>) {
		try {
			let content: Array<T>;

			if (!Array.isArray(data)) {
				content = await this.read();
				content.push(data);
			} else {
				content = data;
			}
			return writeFile(this.filePath, JSON.stringify(content));
		} catch (error) {
			console.log(error);
		}
	}

	async insert(data: T) {
		await this.save(data);
		this._size += 1;

		return data;
	}
}
