# Authy Demo
Let's build a simple auth system called Authy to see how Next.js handles authentication. 
Authy というシンプルな認証システムを構築して、Next.js が認証をどのように処理するかを見てみましょう
We'll use next-auth which is rebranded to Auth.js to handle all the auth stuff, but more importantly, you'll learn about:
認証関連の処理はすべて Auth.js にリブランドされた next-auth を使って行いますが、さらに重要な点として、次の点について学習します。

- Protected routes
- Middleware
- How layouts work with auth
- Route protection
- OAuth setup




- Create a basic authentication system with the following routes:
    -/ - Public home page
    -/login - Login page
    -/dashboard - Protected dashboard page
    -/dashboard/settings - Protected settings page
    -/dashboard/profile - Protected profile page
- Implement route protection using middleware
- Create different layouts for authenticated and non-authenticated pages
- Add dynamic navigation based on auth state
- Handle "not found" and error pages


The app has a simple header with navigation links that change based on whether you're logged in or not.
アプリには、ログインしているかどうかに応じて変化するナビゲーション リンクを含むシンプルなヘッダーがあります。
There's also a handy auth panel that shows your current path and login status - super useful for debugging!
また、現在のパスとログイン ステータスを表示する便利な認証パネルもあり、デバッグに非常に便利です。



## Route Grouos and Organization
Learn how to effectively organize your Next.js application routes using route groups and folder conventions.
ート グループとフォルダー規則を使用して Next.js アプリケーション ルートを効果的に整理する方法を学びます。

### What are Route Groups?
Route groups allow you to organize routes without affecting the URL path structure. They are created by wrapping folder names in parentheses:
ルート グループを使用すると、URL パス構造に影響を与えずにルートを整理できます。ルート グループは、フォルダー名を括弧で囲むことで作成されます。

```
app/
  (marketing)/
    about/
    contact/
  (shop)/
    products/
    cart/
```

In the above example, the marketing and shop folders are route groups. This means that the routes inside them are not prefixed with /marketing or /shop in the URL.
上記の例では、マーケティング フォルダーとショップ フォルダーはルート グループです。つまり、それらのフォルダー内のルートの URL には /marketing または /shop のプレフィックスが付いていません

They are purely meant for organization and do not affect the URL path structure.
これらは純粋に整理を目的としており、URL パスの構造には影響しません。

The cool thing about route groups is that you can still access the routes in the parent folder by using the ../ syntax. For example, the about route can be accessed at /about and does not have to be prefixed with /marketing/about.
ルート グループの優れた点は、../ 構文を使用して親フォルダー内のルートにアクセスできることです。たとえば、about ルートは /about でアクセスでき、/marketing/about をプレフィックスとして付ける必要はありません。

## middkeware and Route Protection
Middleware is a powerful feature in Next.js that allows you to add custom logic to your routes. Before any route tries to access any page in the app, it has to go through the middleware.
ミドルウェアは、ルートにカスタム ロジックを追加できる Next.js の強力な機能です。ルートがアプリ内のページにアクセスしようとする前に、ミドルウェアを通過する必要があります。

Middleware is like a parent of a child. The child can't go on any field trips without the parent's permission. Typically, you'll use middleware to protect routes just like a parent would protect their child from danger.
ミドルウェアは子供の親のようなものです。子供は親の許可なしに校外学習に行くことはできません。通常、親が子供を危険から守るのと同じように、ミドルウェアを使用してルートを保護します。

## Implementing Middleware
Simply, create a middleware.ts file in the root of your app and add the following code:
```
// middleware.ts
export function middleware(request: NextRequest) {
  // Your middleware logic here
}
```

Middleware can get really complex though so don't worry if you don't understand it right away.
ただし、ミドルウェアは非常に複雑になる可能性があるため、すぐに理解できなくても心配しないでください。

Middleware has 2 params:

- request: The request object
- event: The event object

Next.js extends the Request object with NextRequest and the Response object with NextResponse. This gives you more options to meddle with the request and response.
Next.js は、Request オブジェクトを NextRequest で拡張し、Response オブジェクトを NextResponse で拡張します。これにより、リクエストとレスポンスを操作するためのオプションが増えます。

I'm not a big fan of this feature. Why? Because, when you try to look up docs for this, the docs are not that robust and you'll find yourself reading through the source code to figure out how to do something.
私はこの機能があまり好きではありません。なぜでしょうか? この機能に関するドキュメントを調べようとすると、ドキュメントがそれほど充実しておらず、何かを実行する方法を理解するためにソース コードを読み通す必要があるからです。

And an API design should be intuitive and easy to understand. Try to follow web standards and keep your API as close to web standards as possible.
また、API 設計は直感的で理解しやすいものでなければなりません。Web 標準に従い、API をできるだけ Web 標準に近づけるようにしてください。

On top of this, Next.js team now has to maintain 2 sets of APIs:
これに加えて、Next.js チームは次の 2 セットの API を保守する必要があります。

NextRequest and NextResponse and if there are any changes in underlying API's, it has become their job to communicate to us.
NextRequest と NextResponse は、基盤となる API に変更があった場合に、私たちに通知する役割を担っています。

Anyway, that middleware is still very powerful just like we'll see in the Authy system.
いずれにせよ、そのミドルウェアは、Authy システムで見られるように、依然として非常に強力です。
