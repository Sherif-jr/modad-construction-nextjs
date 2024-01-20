import { existsSync, mkdirSync } from "fs";
import { writeFile } from "fs/promises";

export default async function saveFile(
  filePath: string,
  file: Buffer,
  filename: string,
  uniqueName?: boolean
): Promise<string> {
  if (!existsSync(filePath)) {
    mkdirSync(filePath, { recursive: true });
  }
  const random = Date.now();
  const fileName = filename.replaceAll(" ", "-");
  const path = `${filePath}/${uniqueName ? `${random}-${fileName}` : fileName}`;
  await writeFile(path, file);

  return path;
}
