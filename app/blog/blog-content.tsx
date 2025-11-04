import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import SEOExpandableSection from "@/components/seo-expandable-section";

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  imageUrl?: string;
  imageAlt?: string;
  publishedAt: string;
}

interface BlogContentProps {
  articles: Article[];
  isLoading?: boolean;
}

const woodenStructureImage = "/images/drewniana-konstrukcja-dokumenty-prawne-szeregu-organizacja-porzadek-artykuly-prawnicze-krs.webp";

const seoContent = `Blog – poradniki i artykuły o zmianach wpisu w KRS
Zapraszamy do naszego bloga, w którym dzielimy się praktycznymi poradami i aktualnościami dotyczącymi zmian wpisu w Krajowym Rejestrze Sądowym (KRS). Znajdziesz tutaj artykuły wyjaśniające, jak skutecznie przygotować wniosek o zmianę w KRS, jak zmienić dane spółki w KRS czy jak złożyć elektroniczne zgłoszenie zmian do KRS przez system S24.
Publikujemy praktyczne przewodniki krok po kroku, dzięki którym dowiesz się, jak przebiega zmiana zarządu w KRS, zmiana umowy spółki KRS, zmiana PKD, adresu siedziby czy kapitału zakładowego. Wyjaśniamy również zasady sporządzania uchwał do KRS oraz przygotowywania kompletnych dokumentów rejestrowych spółki.
O czym piszemy na blogu?
• zmiana wpisu w KRS – poradniki i przykłady
• wniosek o zmianę w KRS – jak go przygotować  
• elektroniczne zgłoszenie zmian do KRS – system S24
• zmiana danych spółki w KRS – PKD, adres, kapitał, wspólnicy
• przygotowanie uchwał i dokumentów do KRS
• obsługa wniosków KRS dla spółek i biur rachunkowych
• aktualności i zmiany w przepisach dotyczących KRS
Dlaczego warto czytać naszego bloga?
Naszym celem jest nie tylko oferowanie profesjonalnej obsługi wniosków KRS, ale także dzielenie się wiedzą i doświadczeniem. Chcemy, aby każdy przedsiębiorca i każde biuro rachunkowe mogło lepiej zrozumieć procesy związane z aktualizacją danych w KRS i mieć pewność, że działa zgodnie z obowiązującymi przepisami prawa.
Zachęcamy do regularnego odwiedzania naszego bloga i korzystania z naszych materiałów – pomożemy Ci lepiej przygotować się do zmiany wpisu w KRS i uniknąć kosztownych błędów.`;

const isExternalUrl = (url: string) => /^https?:\/\//.test(url);

const formatDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogContent({ articles, isLoading = false }: BlogContentProps) {
  const hasArticles = Array.isArray(articles) && articles.length > 0;

  return (
    <>
      <div className="fixed inset-0 -z-20">
        <div className="relative h-full w-full">
          <Image
            src={woodenStructureImage}
            alt="Drewniana konstrukcja z dokumentami w szeregu - organizacja i porządek w artykułach o KRS"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="fixed inset-0 -z-10 bg-slate-900/70" />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Blog KRS - Przewodnik po zmianach wpisu w KRS
          </h1>
          <h2 className="mb-6 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
            Przydatne artykuły o formalnościach i zmianach w rejestrze KRS dla przedsiębiorców, księgowych i biur rachunkowych
          </h2>
          <p className="mb-6 text-xl leading-relaxed text-gray-200">
            Na naszym blogu znajdziesz artykuły poświęcone tematyce zmian w Krajowym Rejestrze Sądowym oraz zagadnieniom związanym z funkcjonowaniem spółek. Oprócz artykułów oferujemy również{" "}
            <Link href="/uslugi" className="underline text-amber-400 transition-colors hover:text-amber-300">
              profesjonalne usługi zmian wpisu w KRS
            </Link>{" "}
            i{" "}
            <Link href="/cennik" className="underline text-amber-400 transition-colors hover:text-amber-300">
              przejrzyste cennik obsługi KRS
            </Link>
            .
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            Publikujemy treści o charakterze ogólnym, dotyczące m.in. aktualizacji danych w KRS, zmian w umowie spółki czy kwestii organizacyjnych związanych z prowadzeniem działalności w formie spółki handlowej. Zapraszamy do lektury – być może znajdziesz tu informacje, które Cię zainteresują. Poznaj także naszą{" "}
            <Link href="/o-nas" className="underline text-amber-400 transition-colors hover:text-amber-300">
              historię i doświadczenie
            </Link>{" "}
            lub{" "}
            <Link href="/kontakt" className="underline text-amber-400 transition-colors hover:text-amber-300">
              skontaktuj się z nami
            </Link>{" "}
            w sprawie konkretnego wniosku o zmianę w KRS.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={`skeleton-${index}`} className="border-white/20 bg-white/10 shadow-none backdrop-blur-sm">
                <CardContent className="gap-4 p-6">
                  <Skeleton className="mb-2 h-4 w-20 bg-white/20" />
                  <Skeleton className="mb-3 h-6 w-full bg-white/20" />
                  <Skeleton className="mb-2 h-4 w-full bg-white/20" />
                  <Skeleton className="mb-4 h-4 w-3/4 bg-white/20" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-24 bg-white/20" />
                    <Skeleton className="h-4 w-16 bg-white/20" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hasArticles ? (
              articles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden border-white/20 bg-white/10 shadow-none transition-all duration-300 hover:bg-white/15 backdrop-blur-sm">
                    <CardContent className="h-full justify-between p-6">
                      <div className="space-y-4">
                        <Badge className="bg-amber-600 text-white transition-colors duration-200 hover:bg-amber-700">
                          {article.category}
                        </Badge>
                        <h3 className="text-xl font-semibold leading-tight text-white">
                          {article.title}
                        </h3>
                        {article.imageUrl ? (
                          <Image
                            src={article.imageUrl}
                            alt={article.imageAlt ?? article.title}
                            width={800}
                            height={600}
                            loading="lazy"
                            className="h-48 w-full rounded-lg object-cover"
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            unoptimized={isExternalUrl(article.imageUrl)}
                          />
                        ) : null}
                        <p className="text-gray-200 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center justify-between text-sm text-gray-300">
                        <span>{formatDate(article.publishedAt)}</span>
                        <span className="font-medium text-amber-400 transition-colors group-hover:text-amber-300">
                          Czytaj więcej →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="md:col-span-2 lg:col-span-3">
                <div className="mx-auto max-w-md rounded-lg border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
                  <h3 className="mb-2 text-lg font-medium text-white">Brak artykułów</h3>
                  <p className="text-gray-200">Artykuły zostaną wkrótce opublikowane.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <SEOExpandableSection content={seoContent} pageId="blog" />
    </>
  );
}
