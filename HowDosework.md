# How Dose Next.js Works?

Next.js is a powerful React framework that automatically pre-renders content, making your website accessible even when JavaScript is disabled.

Next.jsはコンテンツを自動的に事前レンダリングする。なので、JSが無効になっている場合でも、WebサイトにアクセスできるようにするReactフレームワークです。

 This pre-rendering capability not only enhances SEO by ensuring content is available in the page source for search engine bots but also improves the overall user experience.

事前レンダリング機能は、検索エンジンボットのページソースで根ンテンツクリエイターが確実に利用できるようになることでSEOを強化するだけでなく全体的なUXを向上させる

This is a Pokédex site built with Vite as well as a identical Pokédex site built with Next.js. In the video lesson, let's look at how they're different under the hood.

ここで、Viteで作ったポケモン図鑑サイトとNext.jsで作った同じ内容のサイトでJSを無効した時に起きる挙動を確認する。
確かに、Next.jsの方は無効にしても事前にレンダリングしているのでしっかり機能する！一方でViteの方は事前レンダリングではないので無反応で真っ暗になる。

## Exercisese part!!
実際にNext.js使用してるサイトとしてないサイトを探してきて、devtoolでJSオフって見て挙動確認。
devtool com+i or fu+F12 
そのあとはcom+pからの>keyを押してRun>という表示になったらdisableでJSをオフると良い


## Hydration in Next.js
Hydration in Next.js is a process where JavaScript connects with the HTML to make the page fully interactive.
Nest.jsではJSがHTMLに接続してページを完全にインタラクティブにするプロセスのことを言う。

the following processs occurs:
SSR(Sever-Side-Rendrign) Next.js approach
- The requset gost to the server
    リクエストはサーバーに送られる
- The server sends back the pre-renderdHTML
    サーバーば事前にレンダリングされたHTMLを返す
- The browser downloads the necessary JS
    ブラウザは必要なJSをダウンロードします
- Hydration occurs - this it the process where JS connects with the HTML to make the page fully intaractive
    ハイドレーションが発生！これは、JSがHTMLに接続してページを完全にインタラクティブにするプロセスです

CSR(Client-Side Rendering) Vite approach
- When visiting the page(e.g, pokedex.com)
    ページにアクセスすると（例、pokedex.com）
- The browser downloads JS(which includes the HTML)
    ブラウザはJS（HTMLを含む）をダウンロードします
- Hydratio happens to make the page intaractive
    ハイドレーションが発生！JSがHTMLに接続してページを完全にインタラクティブにするプロセスです

Key Differences
- In Next.js (Server Rendering), you get pre-generated HTML from the server first
    Next.jsではまず、サーバーから事前に生成されたHTMLを取得する
- In Client-Side Rendering (like Vite), everything is handled by JavaScript
    クライアントサイドレンダリングでは、すべてがJSによって処理される

CSRでは毎回、HTMLを一から生成が必要なので遅くなる。
つまり、事前にレンダリングされたHTMLの利点がないということ。

** Important: Whether server-side or client-side rendered, the process of making a page fully interactive is called hydration.
重要なこと：SSR か　CSRでレンダリングされるかに関係なく、ページを完全にインタラクティブにするプロセスをハイドレーションと呼ばれます
