# Introduction to Server and Client Components
Server and Client Components are the foundation of the Modern React Ecosystem including Next.js.
サーバー コンポーネントとクライアント コンポーネントは、Next.js を含む最新の React エコシステムの基盤です。

In this module, you'll learn how to use Server and Client Components to build a scalable and performant web application, what are their pros and cons, and how to use them together to build a great user experience.
このモジュールでは、サーバー コンポーネントとクライアント コンポーネントを使用してスケーラブルでパフォーマンスの高い Web アプリケーションを構築する方法、それぞれの長所と短所、それらを一緒に使用して優れたユーザー エクスペリエンスを構築する方法について学習します。

There are many gotchas that come with using Server and Client Components, and in this module, you'll learn how to avoid them and build a production-ready application.
サーバー コンポーネントとクライアント コンポーネントの使用には多くの注意点がありますが、このモジュールでは、それらを回避して本番環境に対応したアプリケーションを構築する方法を学習します。

For a very long time, Server and Client Components were only available in Next.js and nowhere else. This grew the popularity of Next.js as framework.
長い間、サーバー コンポーネントとクライアント コンポーネントは Next.js でのみ使用可能で、他の場所では使用できませんでした。これにより、フレームワークとしての Next.js の人気が高まりました。


## What are Server Components?
Let's learn about server components in Next.js. This is our favourite topic of discussion and we have been referring it throughout the course.
Next.js のサーバー コンポーネントについて学びましょう。これは私たちのお気に入りの議論のトピックであり、コース全体を通して言及してきました。

In this lesson, let's go over what server components are, how they work, and how they are different from client components.
このレッスンでは、サーバー コンポーネントとは何か、どのように機能するか、クライアント コンポーネントとどう違うのかについて説明します。

## Sever Components
by default, server components
Don't re-render
Not inculded in Browser Bundle
RSC stram
Can't pass a fa as prop
No Brawser API's


## Client Components
'use client'
Can re-render
In browser bundle
Lifecycle hooks are allowed 
Can't have RSC as a Child
Browser API's are allowed

## What are Client Components?
Client Components are components that are rendered on the client side. They are rendered on the client side because they are not statically generated.
クライアント コンポーネントは、クライアント側でレンダリングされるコンポーネントです。静的に生成されないため、クライアント側でレンダリングされます。

Client Components are useful when you need to interact with the DOM or when you need to use a library that requires the DOM.
クライアント コンポーネントは、DOM と対話する必要がある場合、または DOM を必要とするライブラリを使用する必要がある場合に便利です。

If your component needs a Browser, be it window object, document object or browser specific API, it is a Client Component.

コンポーネントにブラウザが必要な場合、それがウィンドウ オブジェクト、ドキュメント オブジェクト、またはブラウザ固有の API であっても、それはクライアント コンポーネントです。

Even if your component needs React Lifecycle methods, it is a Client Component.
コンポーネントに React ライフサイクル メソッドが必要な場合でも、それはクライアント コンポーネントです。

## Exercise: Exposing API Keys 🔑
One common security risk in SaaS applications, especially those interacting with APIs, is the exposure of private API keys. 
SaaS アプリケーション、特に API と対話するアプリケーションに共通するセキュリティ リスクの 1 つは、プライベート API キーの公開です。

Most APIs require an API key for access, and a significant security flaw in Next.js applications can occur when these keys are inadvertently exposed to clients. This exposure presents a substantial security risk.
ほとんどの API ではアクセスに API キーが必要であり、これらのキーが誤ってクライアントに公開されると、Next.js アプリケーションに重大なセキュリティ上の欠陥が発生する可能性があります。この公開は、重大なセキュリティ リスクをもたらします。


In this lesson, we'll

- Demonstrate an example of this security vulnerability.
このセキュリティ脆弱性の例を示します。

- Explain how to identify such security flaws in your Next.js applications.
Next.js アプリケーションでこのようなセキュリティ上の欠陥を特定する方法を説明します。

- Provide guidance on how to avoid this security issue.
このセキュリティ問題を回避する方法についてのガイダンスを提供します。

Let's dive into a common security pitfall and fix it!
よくあるセキュリティの落とし穴を詳しく調べて、解決しましょう。

ここはSever ComponentとClient Componentの比較できるサイトをStackbrigeでトライできるのでやってみる

## Exercise 
### only use Client Components.

Linkを開いてスタックブリッツ上でDemoを触る

### Conclusion
These exercises will help you practice the conversion between Server and Client Components in Next.js. 
これらの演習は、Next.js でのサーバー コンポーネントとクライアント コンポーネント間の変換を練習するのに役立ちます。

Remember, the goal is to use Server Components wherever possible for better performance, and Client Components only when necessary for interactivity or client-side state.
目標は、パフォーマンスを向上させるために可能な限りサーバー コンポーネントを使用し、対話性やクライアント側の状態に必要な場合にのみクライアント コンポーネントを使用することです。