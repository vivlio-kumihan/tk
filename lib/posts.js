import fs from "fs"
import path from "path"
import matter from "gray-matter"

// postsディレクトリまでのパスを変数に格納する。
const postsDir = path.join(process.cwd(), "posts")

export function getSortedPostsData() {
  // パスを辿って、postsディレクトリ内のファイル名を収集する。
  const fileNames = fs.readdirSync(postsDir)

  const allPostsData = fileNames.map(fn => {
    // 拡張子を取り去ったファイル名をidに格納する。
    const id = fn.replace(/\.md$/, "")
    // 該当ファイルのパスを変数に格納する。
    const fullPath = path.join(postsDir, fn)
    // パスを辿って、該当ファイルの中身を変数か格納する。
    const fileContents = fs.readFileSync(fullPath, "utf8")
    // gray-matterを使って、ファイルの内容をよしなに変更する。
    const matterResult = matter(fileContents)
    // id（titleとdate）と中身を返す。
    return { id, ...matterResult.data } 
  })
  // idのdateプロパティを参照して表示順を決定する。
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}