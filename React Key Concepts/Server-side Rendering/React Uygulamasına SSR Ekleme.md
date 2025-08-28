## React Uygulamasına SSR Ekleme

SSR özellikli React uygulamalarının iki ortamda (server ve tarayıcı) kod çalıştırması gerektiğini, client tarafı React uygulamalarının ise yalnızca tarayıcıya dayandığını anlamak son derece önemlidir. Bu nedenle, SSR'yi kullanmak için React projesine server tarafı ortamı eklenmelidir; React kodunu birkaç yerde ayarlamak yeterli değildir.

Örneğin, standart Vite tabanlı projeler SSR'yi hazır olarak desteklemez. Sonuç olarak, SSR'yi desteklemek istiyorsak, hem client hem de server tarafında React kodunun çalıştırılmasını sağlamak için Vite proje kurulumumuzu (ve bazı proje kod dosyalarımızı) düzenlemeliyiz. Örneğin, gelen HTTP isteklerini işleyen (render eden) ve server tarafında React kodunun çalıştırılmasını tetikleyen bazı kodlar eklemeliyiz.

SSR'yi manuel olarak etkinleştirmenin, ileri düzey Node.js ve backend geliştirme bilgisi gerektiren önemsiz olmayan bir işlem olması, resmi React belgelerinin Next.js gibi framework'ların yardımıyla yeni React projeleri oluşturulmasını önermesinin nedenlerinden biridir. ([Bkz.](https://react.dev/learn/creating-a-react-app))

Ancak bu tek neden değildir.

**Not:** SSR'yi manuel olarak etkinleştirmek için, React bilgisinin yanı sıra backend geliştirme ve derleme (build) süreci yapılandırma bilgisi de gereklidir. Bu kurulum sürecini kendimizi gerçekleştirebilir veya Next.js gibi framework'lardan yararlanarak bu zor işi başkalarına bırakabiliriz. Vite tabanlı projelerde SSR'yi manuel olarak yapılandırmakla ilgileniyorsak, resmi Vite SSR belgeleri bu konuda [daha fazla](https://vite.dev/guide/ssr) bilgi edinmek için harika bir kaynaktır. Ayrıca, resmi Vite SSR talimatlarına göre oluşturulan demo projesini [inceleyebiliriz](https://github.com/mschwarzmueller/book-react-key-concepts-e2/tree/15-ssr-next-intro/examples/02-ssr-enabled).
