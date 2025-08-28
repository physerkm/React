### SSR'ı Anlamak

React ile çalışırken, SSR, bir kullanıcı web sitemizi ziyaret ettiğinde gelen HTTP isteğini işleyen sunucuda web sayfalarını ve dolayısıyla React component'larımızı işleme (render) sürecini ifade eder.

SSR etkinleştirildiğinde, sunucu (server) React component ağacımızı işler (render eder) ve böylece component'larımız ve JSX talimatlarımız tarafından üretilen gerçek HTML kodunu oluşturur. Sonuçta, bu tamamlanmış HTML kodu client'a geri gönderilir. Sonuç olarak, web sitesi ziyaretçileri artık boş olmayan, bunun yerine gerçek sayfa içeriğini içeren bir HTML dosyası alırlar. Arama motoru tarayıcıları (crawlers) da bu içeriği görür ve sayfayı buna göre indeksler.

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Server-side%20Rendering/img/React%20SSR%20in%20action.png" alt="react-in-action">

En iyisi de, React'in client tarafındaki avantajlarını kaybetmeyiz, çünkü SSR'yi etkinleştirdiğimizde React, eskisi gibi client tarafında çalışmaya devam eder! İlk HTML belgesi alındığında kontrolü devralır ve kullanıcılara SSR olmadan sunabildiğimiz aynı SPA deneyimini sunar. Ancak teknik olarak, SSR kullanıldığında React client'ta biraz farklı şekilde başlatılır. Orada tüm DOM'u yeniden oluşturmak yerine (re-rendering), server'da oluşturulan (render edilen) sayfa içeriğini hidratlayacaktır. Hidratlama (hydration), React'in component yapımızı oluşturulan HTML koduna (tabii ki aynı yapıya göre oluşturulmuş) bağlayarak etkileşimli (interaktif) hale getireceği anlamına gelir.

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Server-side%20Rendering/img/After%20receiving%20the%20rendered%20HTML%20code%2C%20React%20hydrates%20the%20code%20on%20the%20client%20side.png" alt="react-in-action">

Sonuç olarak, her iki dünyanın da en iyisini elde edersiniz: tarayıcı tarafından gönderilen ilk HTTP isteği için boş olmayan, önceden işlenmiş (pre-rendered ) sayfalar ve kullanıcının keyif alacağı, son derece reaktif bir web uygulaması.
