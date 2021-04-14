### 210414

## 『CSSページ組版入門』での質問

> 環境
> MacOS 11.2.3
> node v14.2.0

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