import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface NewsItem {
  id: number;
  date: string;
  performance_report: string;
  retirement_status: string;
  details: string;
  attachments?: string;
  other?: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const NewsDetail = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchNews(1);
  }, []);

  const fetchNews = async (pageNum: number, append = false) => {
    try {
      if (pageNum === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const response = await fetch(`${API_URL}/api/news?page=${pageNum}&limit=5`);
      const data = await response.json();
      
      if (data.success) {
        if (append) {
          setNews(prev => [...prev, ...data.data]);
        } else {
          setNews(data.data);
        }
        setHasMore(data.pagination.page < data.pagination.totalPages);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(nextPage, true);
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
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ホームに戻る
                </Link>
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
                    className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/news/${item.id}`)}
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

