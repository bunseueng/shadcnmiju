// lib/getComponent.ts
"use server"

import { promises as fs } from "fs";
import path from "path";

export async function getFileContent(componentPath: string) {
  try {
    // 1. Remove the "@/" alias and replace with "src/"
    // 2. Ensure the path points to a file (add extension if missing)
    const relativePath = componentPath.replace(/^@\//, "src/");
    const absolutePath = path.join(process.cwd(), relativePath + ".tsx");

    const content = await fs.readFile(absolutePath, "utf8");
    return content;
  } catch (error) {
    console.error("File Read Error:", error);
    return "// Error: Could not read file at " + componentPath;
  }
}
