import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

const postsDir = path.join(process.cwd(), "posts")

export function getSortedPostsData() {
  // postsディレクトリ下のファイル名を取得する。
  const fileNames = fs.readdirSync(postsDir)
  const allPostsData = fileNames.map(fn => {
    // ファイル名から拡張子「.md」を取って変数idを収集する。
    const id = fn.replace(/\.md/, "")
    // 文字列（string型）としてマークダウンファイルを読む。
    const fullPath = path.join(postsDir, fn)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    // metadata sectionの投稿をパースするためにgray-matterを使う。
    const matterResult = matter(fileContents)
    // idを伴ってデータを取り寄せる。
    return {
      id, ...matterResult.data
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(postsDir)
  return filenames.map(fn => {
    return {
      params: {
        id: fn.replace(/\.md/, "")
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  // metadata sectionの投稿をパースするためにgray-matterを使う。
  const matterResult = matter(fileContents)
  // remarkを使ってマークダウンをHTMLに変換する。
  const processContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processContent.toString()
  // idを伴ってデータを取り寄せる。
  return {
    id, contentHtml, ...matterResult.data
  }
}