---
title: "My First Post"
date: "2020-06-23"
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

静的生成を使うことで、あなたのページは一度構築され、CDNによって提供されるため、サーバーがリクエストのたびにページをレンダリングするよりもはるかに高速になります。

You can use Static Generation for many types of pages, including:

静的生成は、以下のような多くのタイプのページで使用することができます。

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

"このページをユーザーの**リクエストに先立ってレンダリング**するほうがいいだろうか"と自問自答してみて、答えがイエスならば静的生成を選択すべきです。

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

一方で、ユーザーのリクエストに先立ってページをプリレンダリングできない場合、スタティック生成は**良いアイデアではありません**。あなたのページは頻繁に更新されるデータを表示し、ページの内容はリクエストのたびに変化しているかもしれいからです。

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

このようなケースでは、サーバーサイド・レンダリングを使うべきです。実行速度は遅くなりますが、プリレンダリングされたページは常に最新の状態で表示されます。あるいは、プリレンダリングをスキップして、クライアント側の JavaScript を使用してデータを入力することもできます。