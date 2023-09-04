import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Post = {
  id: string,
  title?: string,
  date?: string,
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const postMap = function(fileName: string): Post {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    };
  }

  const allPostsData = fileNames.map(postMap);

  let sorted = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return - 1;
    }
  })

  return sorted
}
