import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  date: string;
  performance_report: string;
  retirement_status: string;
  details: string;
  attachments?: string | null;
  other?: string | null;
}

const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // First try localStorage (if admin has made changes)
        const localData = localStorage.getItem('news-data');
        let data: NewsItem[];
        
        if (localData) {
          data = JSON.parse(localData);
        } else {
          const response = await fetch('/news-data.json');
          data = await response.json();
        }
        
        // Sort by date descending and get latest 5
        const sorted = data.sort((a, b) => {
          const dateA = a.date.replace(/\./g, '');
          const dateB = b.date.replace(/\./g, '');
          return dateB.localeCompare(dateA);
        });
        setNews(sorted.slice(0, 5));
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateStr: string) => {
    return dateStr.replace(/\./g, '.');
  };

  const getTotalCount = (status: string) => {
    const match = status.match(/計(\d+)名/);
    return match ? match[1] : '0';
  };

  return (
    <section className="news-section py-6 md:py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6 md:mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
            <Newspaper className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">News</h2>
          </div>
          <p className="text-gray-600 text-xs md:text-sm">
            退職代行の実績を日次でご報告いたします
          </p>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">読み込み中...</p>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">ニュースがありません</p>
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {news.map((item, index) => (
              <a
                key={item.id}
                href={`/news/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded border border-gray-200 p-4 md:p-6 shadow-sm md:hover:shadow-md transition-all md:hover:border-primary/50 cursor-pointer mobile-card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 mb-1.5 md:mb-2">
                      <span className="text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        {formatDate(item.date)}
                      </span>
                      <span className="text-xs text-gray-500 break-words">
                        {item.performance_report}
                      </span>
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {index === 0 ? (
                        <span>
                          本日{getTotalCount(item.retirement_status)}名の退職手続きが完了しました
                        </span>
                      ) : (
                        <span className="text-gray-400">...</span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="/news" target="_blank" rel="noopener noreferrer">
              詳細を見る <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

