---
title: "Font Awesomeが効かず四苦八苦"
date: "2020-08-04"
tag: "開発"
---

いざ行かんとばかりに始めたはいいが、ものの2時間ほどで頓挫。

『Font Awesome』が効かない。ロゴを設置してすぐには表示されるが、リロードすると消える。Font AwesomeのSiteにある説明どおりにしているが解決しない。

半日かかってググっては実行を繰り返し、やっと本命の解決方法を見つけた。

この問題は、Font Awesome + Next.js + Sassの組み合わせで起こる問題だったようだ。

参考サイトは[Gist](https://gist.github.com/quad9/5c3741af854364c8f652cd6edfa0101c)しておいた。

多少のすり合わせはあったが、問題なく『Font Awesome』の設置に成功した。

独学でやれる。