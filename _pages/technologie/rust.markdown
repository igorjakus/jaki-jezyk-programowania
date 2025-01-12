---
layout: technology
title-full: Rust - zastosowanie, przyszłość, najlepsze, polecane kursy
title: Rust
permalink: /technologie/rust/
image: rust.png
no-books: true
---

{% assign stats = site.data.statistics.statistics.Rust %}

# Zastosowanie

**Rust** jest relatywnie świeżym, wieloparadygmatowym językiem programowania obecnie rozwijanym przez Mozillę. Został zaprojektowany by być bezpiecznym, szczególnie pod względem współbieżności. Rust składniowo jest podobny do C++. Oferuje automatyczne zarządzanie pamięcią, jednak w odróżnieniu do typowych rozwiązań, robi to bez garbage collectora, co wpływa na utrzymanie wysokiej wydajności.

Rust jest porównywalny często do C/C++ zarówno pod względem zastosowania jak i wydajności. Jest on więc najczęściej wykorzystywany w obszarach, gdzie wydajność jest krytycznym aspektem. 

Rust ma już wiele zastosowań komercyjnych, całą listę można zobaczyć tu [Rust - production users](https://www.rust-lang.org/production/users).

Wykorzystują go między innymi:
- Mozilla
- Dropbox
- npm
- Cloudflare
- OVH

{% include language/top10github.html %}

# Poziom skomplikowania

Rust podobnie jak inne bardziej niskopoziomowe języki takie jak C++, ma nieco większy próg wejścia od tych z wyższym poziomem abstrakcji.
Nie jest to najłatwiejszy język na początek, ale też taka jest jego specyfika zastosowania.

# Statystyki

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

# Przyszłość języka

{% assign rust = site.data.statistics.languagesVersions.Rust %}

Według ankiety przeprowadzonej przez StackOverflow Rust był najbardziej polubionym językiem wśród programistów **3 lata z rzędu** - w 2016, 2017 i 2018. Oznacza to, że ten język programowania ma naprawdę dobry potencjał. Dodatkowym plusem jest to, że jest rozwijany przez Mozillę. Jego popularność cały czas rośnie i jest całkiem możliwe, że Rust w ciągu kilku najbliższych lat będzie wysoce pożądany. Jest on stale rozwijany, a jego ostatnia wersja {{ rust.version }} została wydana {{ rust.releaseDate }}.

{% include courses.html %}




