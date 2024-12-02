# Next.js Image Componet
Image Component in Next.js is quite powerful but is also quite complex. You need to pass in the right properties for you to take advantage of the performance optimizations.
Next.jsのイメージコンポーネントは非常に強力ですが、非常に複雑でもあります。パフォーマンスの最適化活用するには、適切なプロパティを渡す必要がある。

## What is a Image Component?
To understand the Image component better, you need to understand what Aspect Ratio is. Let's look at it in the video lesson.
画像コンポーネントをより深く理解するには、アスペクト人は何かを理解する必要があります。ビデオレッスンを見てみましょう。

## Aspect Ratio
- Aspect Ratio is the width and height of an image.
    アスペクト比は画像の幅と高さです。
- For example, an image with a width of 100 and a height of 200 has an aspect ratio of 100 / 200 = 0.5
    たえとえば、幅が100、高さが200の画像アスペクト比は100/200 = 0.5
- Another example, an image with a width of 100 and a height of 100 has an aspect ratio of 100 / 100 = 1
    別の例として、幅が100、高さが100の画像アスペクト比は100/100 = 1
- Another example, an image with a width of 200 and a height of 100 has an aspect ratio of 200 / 100 = 2
    別の例として、幅が200、高さが100の画像アスペクト比は200/100 = 2
- When the aspect ratio is 16/9, it means the width is 16 and the height is 9 which is typically used for landscape images like videos. 16/9 refers to the size of a laptop screen.
    アスペクト比が 16/9 の場合、幅が 16、高さが 9 であることを意味し、これは通常、ビデオなどの横長画像に使用されます。16/9 は、ラップトップ画面のサイズを指します。


## Image Component Features
- Extends img tag and adds more performance optimizations
    imgタグを拡張し、パフォーマンスの最適化をさらに追加する
- Prevents Layout Shift automatically when images are loading
    画像の読み込み時にレイアウトシフトを自動的に防止します
- Sizes prop allows you to specify the size of the image based on screen size using modern formats like webp and avif
    Sizesプロパティを使用すると、webpやavifなどの最新の形式を使用して、画面サイズに基づいて画像のサイズを指定できる
- We get faster page loads as images are only loaded when they enter the viewport
    画像はビューポートに入った時のい読み込まれるため、ページの読み込みが早くなります
- We have asset flexibility as next.js resizes images on demand even if they are stored on a CDN
    next.jsはCDNに保存されている画像でもオンデマンドでサイズで変更できるため、アセットの柔軟性が高まります


## Local image path string -Known Width and Height

```
<Image
  src="/images/photo.jpg"
  alt="Local image example"
  width={400}
  height={300}
  className="object-cover group-hover:scale-110 transition-all duration-700"
/>
```

### When should I use this method?

Use this approach when you have images stored in your project's public directory and you know their dimensions. This is ideal for static assets that are part of your project, such as logos or icons.
プロジェクトのパブリックディレクトリに画像が保存されていて、そのサイズがわかっている場合は、この方法を使用します。これは、ロゴやアイコンなど、プロジェクトの一部である静的アセットに最適です。


## Local image static import -Known Width and Height


```
import photoSrc from '@/public/images/photo.jpg';

<Image
  src={photoSrc}
  alt="Local image example"
  width={400}
  height={300}
  className="object-cover group-hover:scale-110 transition-all duration-700"
/>
```

## When should I use this method?

Use static imports when you want to leverage build-time optimization for your local images. This method is best for images that are part of your source code and won't change between builds. It's particularly useful for critical images that benefit from automatic optimization and lazy loading.
ローカルイメージのビルド時の最適化を活用する場合は、静的インポートを使用します。この方法は、ソースコードの一部であり、ビルド間で変更されないイメージに最適です。これは、自動最適化と遅延読み込みの恩恵を受ける重要な画像に特に役立ちます。


## Blur Data URL

You can just use the Image component with the placeholder=blur property as Next.js will automatically generate a blur-up effect for you as the import is static.
インポートは静的なので、Next.jsが自動的にぼかし効果を生成するので、Placeholder=blurプロパティを持つ Imageコンポーネントを使用するだけで済みます。


## Remote image - Known Dimensions

```
<Image
  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
  alt="Scenic mountain landscape"
  width={400}
  height={300}
  priority
  className="object-cover hover:scale-105 transition-all duration-700"
/>
```

## When should I use this method?

Use this method for external images hosted on other domains when you know their exact dimensions. This is useful for integrating images from content management systems, APIs, or other external sources where the image sizes are consistent or known in advance.
他のドメインでホストされている外部画像の正確な寸法がわかっている場合は、この方法を使用します。これは、画像サイズが一貫しているか事前にわかっているコンテンツ管理システム、API、またはその他の外部ソースからの画像を統合する場合に便利です。


## Remote image - Unknown Dimensions

```
<div className="relative aspect-[4/2] rounded-lg overflow-hidden">
  <Image
    src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
    alt="Scenic mountain landscape"
    fill
    priority
    className="object-cover hover:scale-105 transition-all duration-700"
  />
</div>
```

## When should I use this method?
Use the fill property when working with remote images of unknown or variable sizes, or when you need the image to adapt to its container's dimensions. This is particularly useful for responsive designs, hero images, or when integrating user-generated content where image dimensions may vary.
不明または可変サイズのリモート イメージを操作する場合、またはイメージをコンテナーのサイズに合わせて調整する必要がある場合は、fill プロパティを使用します。
これは、レスポンシブ デザイン、ヒーロー イメージ、または画像のサイズが異なる可能性があるユーザー生成コンテンツを統合する場合に特に便利です。


## When to use BlurDataURL
When you have a static image, you don't need to use BlurDataURL. You can just use the Image component with the placeholder=blur property as Next.js will automatically generate a blur-up effect for you as the import is static.
静的な画像がある場合は、BlurDataURL を使用する必要はありません。インポートが静的であるため、Next.js が自動的にぼかし効果を生成するため、placeholder=blur プロパティを持つ Image コンポーネントを使用するだけで済みます。

When you have a remote image, you should use BlurDataURL. This is because the image is not static and Next.js cannot generate a blur-up effect at runtime.
リモート画像がある場合は、BlurDataURL を使用する必要があります。これは、画像が静的ではなく、Next.js が実行時にぼかし効果を生成できないためです。

You can use the following tool to generate a blur-up effect for your image: https://png-pixel.com/
次のツールを使用して、画像にぼかし効果を生成できます: https://png-pixel.com/


## ChatGPT Prompt(使用する場合のプロンプト)

Need your help determining the aspect ratio for an image. I will give you the width and height of the image and you will tell me what the aspect ratio is. Ask me for the width and height of the image if you understand.
画像のアスペクト比を決定するのにご協力ください。画像の幅と高さをお伝えしますので、アスペクト比を教えてください。ご理解いただけましたら、画像の幅と高さをお知らせください。




## Next.js Image Optimization Performance
Performance is crucial in Next.js, and the framework provides many built-in components to help. One of the most powerful is the Image component, which offers:
Next.js ではパフォーマンスが非常に重要であり、フレームワークにはパフォーマンス向上に役立つ組み込みコンポーネントが多数用意されています。最も強力なコンポーネントの 1 つが Image コンポーネントで、次の機能を提供します。

- Automatic image optimization
    自動画像最適化
- Responsive image handling
    レスポンジブな画像処理
- Lazy loading
    遅延読み込み
- And more!
    他にもたくさん


## The Next.js Image Component
Next.js recommends using the Image component whenever you would typically use an <img> tag. This component enhances your images with powerful optimizations.
Next.js では、通常 <img> タグを使用する場合は常に Image コンポーネントを使用することをお勧めします。このコンポーネントは、強力な最適化によって画像を強化します


## The sizes Prop
 While the Image component is great on its own, it becomes even more powerful when you utilize the sizes prop. This prop isn't unique to Next.js; it's actually a standard HTML attribute for <img> elements.
 Image コンポーネントは単体でも優れていますが、sizes プロパティを利用するとさらに強力になります。このプロパティは Next.js に固​​有のものではなく、実際には <img> 要素の標準 HTML 属性です。

Here's an example of using the Image component with the sizes prop:
```
import Image from 'next/image';
import profilePic from '../public/og-hot-tips.png';

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">
        Next.js Image Component with sizes prop
      </h1>
      <Image
        src={profilePic}
        alt="Example image"
        width={900}
        height={400}
        sizes="(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
      <p className="mt-4">
        The image above uses the sizes prop to optimize loading based on
        viewport size.
      </p>
    </main>
  );
}
```

## Try it out yourself
In the app, you will see an image of the banner for this course. We are going to open up browser developer tools and learn about the sizes prop.
アプリでは、このコースのバナーの画像が表示されます。ブラウザ開発者ツールを開いて、sizes プロパティについて学習します。

実際にコンテンツのリンクを使えば、デスクトップ版とモバイル版でのサイズの違いを確認できるので、やってみるべし

### To see this in action:
- Go to the StackBlitz Project link above in a new tab
  スタックブリッツのリンクを新しくタブで開く
- Open Browser's developer tools of the StackBlitz project
    開いたら、dev開発機能を立ち上げる
    - In Chrome, you can do this by right clicking on the page and selecting "Inspect"
    Chromeでは右クリックして出てくる検証をおす
- Go to the Network tab
    ツールの中にあるネットワークタブを開く
- Reload the page
    開いているスタックブリッツを再読み込みする
- Observe how images are loaded and optimized especially the size of the image downloaded.
    画像が読み込まれるのを観察する。特に画像サイズが最適化されるのをみてみる
- Note the image size on desktop and compare that to mobile. (Refer the screenshot below to see where to look)
    注意して欲しいのは、デスクトップとモバイルを比較してみること

### Here's what's going on:
- As you resize the browser window, the image size changes (make sure to reload the page after resizing)
    ブラウザウィンドウのサイズを変更すると、画像のサイズが変わります (サイズを変更した後は必ずページを再読み込みしてください)
- Images are loaded lazily as they enter the viewport
    画像はビューポートに入ると遅延して読み込まれます
- They're served in modern formats like WebP when supported
    サポートされている場合は、WebPアドの最新の形式で提供されます
- Images are resized to fit the container and device
    画像はコンテナとデバイスに合わせてサイズ変更されます

But, Notice, how the image size is different on desktop: 19.2 KB and mobile: 16 KB.
ただし、デスクトップでは画像サイズが 19.2 KB、モバイルでは 16 KB と異なることに注意してください。

I know what you're thinking, "That's a small difference!". Well, you are right! Although, imagine if you had 100 images on the page. The difference would add up! The Web is full of images and every byte saved counts!This would get worse on slow networks 🐌.
「それは小さな違いだ！」とお考えでしょう。その通りです。しかし、ページに 100 枚の画像があったらどうなるでしょうか。違いは積み重なって大きなものになります。Web には画像があふれており、節約できる 1 バイト 1 バイトが重要です。低速ネットワークでは状況はさらに悪化します🐌。

## Best Practices for Using the Image Component
- Always provide width and height to prevent layout shift
    レイアウトのずれを防ぐために、常に幅と高さを指定します 
- Use the priority prop for above-the-fold images
    スクロールせずに見える画像には優先度プロパティを使用します
- Utilize the sizes prop for responsive designs
    レスポンシブ デザインには sizes プロパティを活用する 
- Opt for static imports for local images when possible
    可能な場合はローカル画像の静的インポートを選択する


## Conclusion
The Next.js Image component, especially when used with the sizes prop, is a powerful tool for optimizing images in your web applications. By using it effectively, you can significantly improve your site's performance and user experience.
Next.js の Image コンポーネントは、特に sizes プロパティと組み合わせて使用​​すると、Web アプリケーション内の画像を最適化するための強力なツールになります。
これを効果的に使用することで、サイトのパフォーマンスとユーザー エクスペリエンスを大幅に向上させることができます。

Remember to experiment with different settings and always test on various devices to ensure optimal performance across all screen sizes.さまざまな設定を試し、常にさまざまなデバイスでテストして、すべての画面サイズで最適なパフォーマンスを確保することを忘れないでください。