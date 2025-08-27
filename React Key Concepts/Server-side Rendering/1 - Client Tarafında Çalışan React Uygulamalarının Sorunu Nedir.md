## Client Tarafında Çalışan React Uygulamalarının Sorunu Nedir?

**Single-page application'ların (SPA)** ve client tarafı React'ın en büyük avantajı, son derece tepkili ve etkileşimli web kullanıcı arayüzleri oluşturabilmemizdir. Kullanıcı arayüzü (UI) neredeyse anında güncellenebilir, sayfanın yeniden yüklenmesi ve geçişler önlenebilir ve böylece kullanıcılarınız mobil uygulama benzeri bir kullanıcı deneyiminden yararlanabilir.

Ancak client tarafı koduna (ve dolayısıyla JavaScript'e) bu kadar bağımlı olmanın potansiyel dezavantajları da vardır:

- Kullanıcılar JavaScript'i devre dışı bırakırsa, web sitesi neredeyse kullanılamaz hale gelir.
- İlk olarak alınan HTML belgesi neredeyse boştur; veri alma ve içerik görüntüleme, yalnızca bu ilk HTTP isteği ve yanıtından sonra gerçekleşir.

İlk nokta çok da önemli olmayabilir, çünkü tüm kullanıcıların sadece küçük bir kısmı JavaScript'i devre dışı bırakır ve `<noscript>` tag'ı aracılığıyla uygun bir uyarı mesajı gösterebilirsiniz.

Ancak ikinci nokta önemli sonuçlar doğurabilir. İlk HTML belgesi neredeyse boş olduğundan, kullanıcılar tüm JavaScript kodu getirilip çalıştırılana kadar hiçbir içerik göremezler. Çoğu kullanıcı belirgin bir gecikme görmeyebilir, ancak kullanıcının cihazına ve internet bağlantısına bağlı olarak, bazı kullanıcılar için bu birkaç saniye sürebilir.

Ayrıca, arama motoru tarayıcıları (ör. Google'ın tarayıcısı) sayfanızı indekslerken, client tarafındaki tüm JavaScript kodunuzun alınmasını ve yürütülmesini beklemeyecektir. Bu nedenle, bu tarayıcılar çoğunlukla boş bir sayfa görebilir ve dolayısıyla web sitemizi kötü bir şekilde sıralayabilir (veya hiç indekslemeyebilir).

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Server-side%20Rendering/img/The%20page%20content%20is%20nowhere%20to%20be%20found%20in%20the%20page%20source%20code.png" alt="the-page-content-is-nowhere">

Şekil, tipik bir React uygulamasının sayfa kaynak kodunu (web sitesine sağ tıklayarak incelenebilir) göstermektedir. `<body>` tag'ları arasında neredeyse hiç içerik yoktur. Title `(“Hello World!”)` ve altındaki metin bu kaynak kodunda yoktur. İçerik, ilk HTTP yanıtının bir parçası olmadığı için burada yoktur. Bunun yerine, sayfa yüklendikten sonra (ve bu kod sunucudan indirildikten sonra) dönüştürülmüş React kodu tarafından görüntülenir.

Elbette, bu dezavantajlar her durumda önemli olmayacaktır. Şirket içi bir uygulama veya bir oturum açma arkasında gizli olan (ve bu nedenle zaten indekslenmeyecek) bir kullanıcı arayüzü (UI) geliştiriyorsanız veya yalnızca hızlı cihazlara ve internet bağlantılarına sahip kullanıcıları hedefliyorsanız, bu potansiyel sorunlar hakkında endişelenmemize gerek olmayabilir.

Ancak, arama motoru indekslemesinin önemli olduğu veya yavaş cihazlara veya internet bağlantılarına sahip kullanıcılar tarafından ziyaret edilebilecek halka açık bir web sitesi geliştiriyorsak, bu dezavantajlardan kurtulmayı düşünebiliriz. İşte tam da bu noktada **SSR** yardımcı olabilir.
