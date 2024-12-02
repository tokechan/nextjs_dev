# About Rendering 

Let's learn how Next.js handles client and server rendering.
Next.jsがクライアントとサーバーのレンダリングをどのようにするに処理するかを学びましょう

There are so many terms that are used with the term "Rendering". Let's break it down here.
「レンダリング」という用語で使用される用語は非行に多くある。ここでは詳しく違いを説明していきます。

Breaking down the terms 
ここで用語の分解をしていきます

With all these rendering-related terms being thrown around, it can get confusing! Let's break it down into two main comparisons
レンダリング関連の用語が飛び交うので、混乱しがちです。なので、２つの主な比較に分けて考えてみます

## Server Rendering vs Client Rendering
The key difference here is about where things happen:
ここでの主な違いは、物事が起こる場所に関するものです

- Where is JS downloaded?
    JSはどこからダウンロードされますか？
- Where is HTML pre-processed?
    HTMLはどこで前処理されますか？

## Static Rendering vs Dynamic Rendering
This comparison is about when rendering happens:
この比較は、レンダリングがいつ行われるかに関するものです

- Does it happen at build time?
    ビルド時に行われますか
- Or does it happen at request time?
    それもとリクエスト時に行われますか？


The cool thing about Next.js is that you're not locked into just one approach! You can mix these approaches based on your needs
素晴らしいことに、Next.jsでは１つのアプローチに縛られないことです。ニーズに応じてこれらのアプローチを組み合わせることができるのです。


## Static vs Dynamic Rendering

Here is a simple app called Mocky which generates mock products and renders them in a grid. We're rendering the same data in two different ways: Static and Dynamic.

ここではは簡単な模擬製品をもとに、同じデータを使い挙動の違いを確認します。
静的と動的の方法で行います。

### Here's how it works:
- The "Static Rendering" section shows how the data would be rendered at build time
    「静的レンダリング」セクションには、ビルド時にデータがどのようにレンダリングされるかが表示されます
- The "Dynamic Rendering" section shows how the data is fetched and rendered on each request
    「動的レンダリング」セクションには、各リクエストでデータがどのように取得されレンダリングされるかが表示されます。
- Notice the timestamp differences between static and dynamic renders
    静的レンダリングと動的レンダリングのタイムスタンプの違いに注意をしてみてください

In Static Rendering, the build time is 12:00 am ⏰ as that's when we kicked off the build.
静的レンダリングでは、ビルド時は12:00であり、これはビルドを開始した時間です。

In Static Rendering, the data is generated at build time and not fetched from an API. This means that the data will not change after the build is created. This is why Generated at time does not change.
静的レンダリングでは、データはビルド時に生成され、APIから取得されることはありません。つまり、ビルドの作成後はデータは変更されない。これがGenerated at timeが変更しない理由です。

On the other hand, in Dynamic Rendering, the data is fetched from an API on each request. This means that the data will change on each request. This is why Generated at time changes and also why the number of products changes.
一方で、ダイナミックレンダリングでは、リクエストごとにAPIからデータが取得されます。つまり、リクエストごとにデータが変更されます。これが、生成時刻が変わる理由であり、製品数も変わる理由でもあります。
