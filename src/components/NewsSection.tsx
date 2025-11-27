import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  date: string;
  performance_report: string;
  retirement_status: string;
  details: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_URL}/api/news/latest?limit=5`);
        const data = await response.json();
        if (data.success) {
          setNews(data.data);
        }
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
    <section className="news-section py-10 md:py-14 bg-gray-50">
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
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="block bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/50 cursor-pointer"
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
              </Link>
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
            <Link to="/news">
              詳細を見る <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

