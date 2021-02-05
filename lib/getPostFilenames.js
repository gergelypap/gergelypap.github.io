import path from "path";
import fs from "fs";

export const postsDirectory = path.join(process.cwd(), "posts");

export default function getPostFilenames() {
  return fs.readdirSync(postsDirectory);
}
