## 『CSSページ組版入門』での質問

> 環境
> MacOS 11.2.3
> node v14.2.0

### Vivlio ViewerではなくVivlio CLIで学習を進める準備をする

#### 210414

#### 質問）

CSSページ組版の技術を身につけるために『CSSページ組版入門』（アンテナハウス株式会社 第4版）を教科書に、Vivliostyleでで挙動を確認しながら学習を進めようと思っています。

最初は、[このようなHTMLとCSSだけの素の状態](https://github.com/vivlio-kumihan/vivlio-kumihan)から`Vivlio Viewer`で挙動を確認しようとしました。

ただ、調べていて[こちら](https://docs.vivliostyle.org/#/ja/vivliostyle-viewer#%E4%BD%BF%E3%81%84%E6%96%B9)を参照して、`Vivlio Viewer`自体をダウンロードし、その中で`HTML`と`CSS`を素の状態にして始める方針に切り替えました。

そこで、質問です。

説明通りに該当のディレクトリでコマンドを打つのですがviewerが起動しません。

```
$ vivliostyle-viewer-latest $ pwd
$ /Users/quad9/dev/vivlio-kumihan/vivliostyle-viewer-latest
$ vivliostyle-viewer-latest $ start-webserver
$ -bash: start-webserver: command not found
$ vivliostyle-viewer-latest $ start-viewer
$ -bash: start-viewer: command not found
```

どう対応すればよろしいでしょうか？
よろしくお願いいたします。

## 村上さんの回答

`bash`ではスクリプトのファイル名だけでなくディレクトリ・パスも付ける必要があるからです。
コマンドプロンプトに`./start-webserver`と入力する必要があります。

ただし、制作作業にVivliostyleを使うにはこれよりも[Vivliostyle CLI](https://docs.vivliostyle.org/#/ja/vivliostyle-cli)を使う方が便利だと思います。

```
$ npm install -g @vivliostyle/cli
```

により`Vivliostyle CLI`をインストールすると`vivliostyle`コマンドが使えるようになります。 HTMLファイル`index.html`を`Vivliostyle`で表示するには、

```
$ vivliostyle preview index.html
```
とします。そうすると、`Vivliostyle Viewer`でHTMLファイルが表示されます。
HTMLやCSSを編集して更新すると更新した結果をすぐに確認できます。

---

#### 210418

#### 質問）

> 環境
> MacOS 11.2.3
> node v14.2.0

`Vivliostyle CLI`をインストールし`vivliostyle`コマンドを使い、HTMLファイル`index.html`を`Vivliostyle Viewer`で表示させたいです。結果が`Viola print previewer`で表示されますが、これは正常な挙動でしょうか？

これに関連しまして、`Vivliostyle.js` `Vivliostyle CLI` `Vivliostyle VFM` など新しいバージョンがリリースされた時にどのように対処すればいいのか、また、解説されているサイトがありましたらリンクを教えてください。

現状の私の環境とバージョンアップを試してみた経緯です。

```
$ vivliostyle -v
cli: 3.0.3
core: 2.4.2
```

どうすればいいか分からなかったのですが、npmコマンドでアップデートが出来るか試しました。

```
$ npm update vivliostyle
$ vivliostyle -v
cli: 3.0.3
core: 2.4.2
```

アップグレードを試すとnpm自体をアップデートするように示唆されたので実行しました。

```
$ npm upgrade vivliostyle
   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │      New major version of npm available! 6.14.8 → 7.10.0       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v7.10.0   │
   │               Run npm install -g npm to update!                │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯
```

```
$ npm install -g npm
$ npm -v
7.10.0
```

改めてアップグレードとアップデートを試しましたが結果が得られませんでした。

```
$ npm upgrade vivliostyle
removed 369 packages, and audited 1 package in 4s
found 0 vulnerabilities
$ vivliostyle -v
cli: 3.0.3
core: 2.4.2
```

```
$ npm update vivliostyle
up to date, audited 1 package in 231ms
found 0 vulnerabilities
$ vivliostyle -v
cli: 3.0.3
core: 2.4.2
```

以上、よろしくお願いします。

## spring-rainingさんの回答

 GlobalにインストールしたVivliostyle CLIのアップデートは以下のコマンドでできます、お試しください。

```
$ npm update -g @vivliostyle/cli
```


---

#### 210418

#### 質問）

『CSSページ組版入門』P1・P98〜を参照しました。
CSSでは、 `@mediaルール` `@importルール` `@pageルール` によってスクリーンと印刷用にデザインを振り分けることが出来ると知りました。

そこで、Indesignで組版をする時の要領で、ページにレイアウトグリッドを設定して文章を流し込むという作業をCSS組版で置き換えてみました。（[コード置き場](https://github.com/vivlio-kumihan/vivlio-kumihan)）

> __仕様__
版：　B5
本文：　14Q
行送り：　24H
行文字数：40字
行数：　36行


``` css
@page {
    size: 182mm 257mm;　<=JISB5にすると縦が1mm少なかったので数値で指定した。
    marks: crop cross;
    bleed: 3mm;
    margin: 21mm 21mm 20mm 21mm;
}

body {
    margin: 0mm 0mm;
    padding: 0mm 0mm;
    color:black;
    background-color:rgba(0, 0, 0, 0.1);
}

p {
    margin: 0em;
    font-family: YuMin_36pKn-Medium;
    font-size: 3.5mm;
    line-height: 6mm;
    text-align:justify;
}
```

Vivliostyleで表示させたものをPDFにしたものと、それにIndesignで作ったもの（文字色：赤）を重ね合わせた画像を添付します。

文章が入るグレー表示させている領域に文章の36行が、Indesignでやったときのようにきっちり治りません。一行分行送りがおかしいです。対処方法はございませんでしょうか？

---

#### 質問）

五月雨式で申し訳ありません。
先程の質問の続きです。

『CSSページ組版入門』P101〜でヘッダーとノンブルの作成方法を学びました。

これを参照し、先程質問したページの仕様については、行数を二行減らし34行で設定で改変を試みました。

今度もやはり設定したマージンの枠内（Indesign風にいうとドキュメントグリッド内）にしっかり収まったかと一瞬思ったのですが、やはり一行分多く入ってしまうようです。

Indesignの文字組みを赤色に着色しレイアウトに重ねたものを添付します。

現状のCSS組版では、行送りに関しては数値指定できないものとして、紙面設計する際に留意するしかないという認識でよろしいでしょうか？

## 村上さんの回答

Chromeブラウザの行送りは1px単位で行われるという問題があります。
`line-height` を`px`単位に変換した値の端数は切り捨てられるために、指定した `line-height` よりも行送りが小さくなります。そのために、ページに入る行数が多くなります。

`line-height: 6mm` の場合、`px`単位に変換すると 22.677px です。この端数が切り捨てられて行送り量は 22px になります。`mm`単位に直すと5.82mmです。このため6mmの行送りならば36行入る領域に、実際は5.82mmの行送りになるので1行多い37行入ってしまう、ということが起きます。

この問題の回避策としては、`px`単位の整数倍の `line-height` を使うことです。`line-height: 23px` など。