import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";

interface NewsItem {
  id: number;
  date: string;
  performance_report: string;
  retirement_status: string;
  details: string;
  attachments?: string | null;
  other?: string | null;
}

const ITEMS_PER_PAGE = 5;

const NewsDetail = () => {
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        setLoading(true);
        
        // First try localStorage (if admin has made changes)
        const localData = localStorage.getItem('news-data');
        let data: NewsItem[];
        
        if (localData) {
          data = JSON.parse(localData);
        } else {
          const response = await fetch('/news-data.json');
          data = await response.json();
        }
        
        // Sort by date descending
        const sorted = data.sort((a, b) => {
          const dateA = a.date.replace(/\./g, '');
          const dateB = b.date.replace(/\./g, '');
          return dateB.localeCompare(dateA);
        });
        setAllNews(sorted);
        setNews(sorted.slice(0, ITEMS_PER_PAGE));
        setHasMore(sorted.length > ITEMS_PER_PAGE);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    const startIndex = nextPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newItems = allNews.slice(startIndex, endIndex);
    
    if (newItems.length > 0) {
      setNews(prev => [...prev, ...newItems]);
      setPage(nextPage);
      setHasMore(endIndex < allNews.length);
    } else {
      setHasMore(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return dateStr.replace(/\./g, '.');
  };

  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button variant="ghost" asChild className="mb-4">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ホームに戻る
                </a>
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">News</h1>
              <p className="text-gray-600">退職代行実績の詳細をご覧いただけます</p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">読み込み中...</p>
              </div>
            ) : news.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">ニュースがありません</p>
              </div>
            ) : (
              <div className="space-y-8">
                {news.map((item) => (
                  <article
                    key={item.id}
                    className="bg-card border border-border rounded p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => window.open(`/news/${item.id}`, '_blank')}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                        {formatDate(item.date)}
                      </h2>
                      <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">
                          {item.performance_report}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-base mb-3 text-gray-800">
                        -退職代行実績-
                      </h4>
                      <div className="bg-gray-50 p-4 rounded whitespace-pre-line text-sm text-gray-700">
                        {formatText(item.retirement_status)}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-base mb-3 text-gray-800">
                        -特記事項-
                      </h4>
                      <div className="bg-gray-50 p-4 rounded whitespace-pre-line text-sm text-gray-700">
                        {formatText(item.details)}
                      </div>
                    </div>

                    {item.other && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-base mb-3 text-gray-800">
                          -その他-
                        </h4>
                        <div className="bg-gray-50 p-4 rounded whitespace-pre-line text-sm text-gray-700">
                          {formatText(item.other)}
                        </div>
                      </div>
                    )}

                    {item.attachments && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-base mb-3 text-gray-800">
                          -添付資料-
                        </h4>
                        <p className="text-sm text-gray-600">{item.attachments}</p>
                      </div>
                    )}
                  </article>
                ))}

                {hasMore && (
                  <div className="text-center pt-4">
                    <Button
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      variant="outline"
                      size="lg"
                    >
                      {loadingMore ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          読み込み中...
                        </>
                      ) : (
                        "さらに見る"
                      )}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;

