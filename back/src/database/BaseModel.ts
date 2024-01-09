import * as fs from "fs/promises";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class BaseModel<T> {
  constructor(private path: string) {}

  protected async loadData(): Promise<T[]> {
    return JSON.parse((await fs.readFile(this.path)).toString());
  }

  protected async onFinish(data: T[]): Promise<void> {
    await timeout(200 * data.length);
  }

  protected async saveData(data: T[]): Promise<void> {
    await fs.writeFile(this.path, JSON.stringify(data));
  }
}
