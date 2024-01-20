import { NextResponse } from "next/server";

export default async function ValidateFile(
  file: Blob,
  filedName: string,
  size: { min: number; max: number },
  allowedTypes: string[]
): Promise<Buffer> {
  if (!file) {
    throw `${filedName} is required`;
  }
  if (!allowedTypes.includes(file.type)) {
    throw `${filedName} type is not allowed. Expected one of [${allowedTypes}], got ${file.type})}`;
  }
  if (file.size > size.max || file.size < size.min) {
    throw `${filedName} size is not compatible. Expected ${size.min}:${size.max}, got ${file.size}.`;
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer;
}
