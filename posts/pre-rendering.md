---
title: "Two Forms of Pre-rendering"
date: "2020-6-23"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

Next.jsには2つの形式のプリレンダリングがあります。**静的生成**と**サーバーサイドレンダリング**です。違いは、ページのHTMLを生成する**時**にあります。

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

- **静的生成**は、**ビルド時**にHTMLを生成するプリレンダリング・メソッドです。プリレンダリングされたHTMLは、各リクエストで_再利用_されます。
- **サーバーサイドレンダリング**は、**リクエストごとにHTMLを生成するプリレンダリング・メソッドです**。

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

重要なことは、Next.jsではページごとにどのプリレンダリング・フォームを使用するかを**選択する**ことができるということです。ほとんどのページでスタティック生成を使用し、その他のページではサーバーサイドレンダリングを使用する「ハイブリッド」なNext.jsアプリを作成することができます。