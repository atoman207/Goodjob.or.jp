import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
  attachments?: string;
  other?: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const NewsItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      if (!id) {
        setError('ニュースIDが指定されていません');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/news/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('ニュースが見つかりませんでした');
          }
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.success && data.data) {
          setNews(data.data);
        } else {
          throw new Error(data.error || 'ニュースの取得に失敗しました');
        }
      } catch (error: any) {
        console.error('Error fetching news item:', error);
        setError(error.message || 'ニュースの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">読み込み中...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-4">
                <Link to="/news">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ニュース一覧に戻る
                </Link>
              </Button>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-600 mb-4">{error || 'ニュースが見つかりませんでした'}</p>
                <Button onClick={() => navigate('/news')} variant="outline">
                  ニュース一覧に戻る
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 md:mb-8">
              <Button variant="ghost" asChild className="mb-4">
                <Link to="/news">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ニュース一覧に戻る
                </Link>
              </Button>
            </div>

            <article className="bg-card border border-border rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  {formatDate(news.date)}
                </h1>
                <div className="bg-primary/10 border-l-4 border-primary p-3 md:p-4 rounded">
                  <h2 className="font-semibold text-base md:text-lg mb-2 text-gray-900">
                    {news.performance_report}
                  </h2>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-sm md:text-base mb-3 text-gray-800">
                  -退職代行実績-
                </h3>
                <div className="bg-gray-50 p-3 md:p-4 rounded whitespace-pre-line text-xs md:text-sm text-gray-700">
                  {formatText(news.retirement_status)}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm md:text-base mb-3 text-gray-800">
                  -特記事項-
                </h3>
                <div className="bg-gray-50 p-3 md:p-4 rounded whitespace-pre-line text-xs md:text-sm text-gray-700">
                  {formatText(news.details)}
                </div>
              </div>

              {news.other && (
                <div className="mt-4">
                  <h3 className="font-semibold text-sm md:text-base mb-3 text-gray-800">
                    -その他-
                  </h3>
                  <div className="bg-gray-50 p-3 md:p-4 rounded whitespace-pre-line text-xs md:text-sm text-gray-700">
                    {formatText(news.other)}
                  </div>
                </div>
              )}

              {news.attachments && (
                <div className="mt-4">
                  <h3 className="font-semibold text-sm md:text-base mb-3 text-gray-800">
                    -添付資料-
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">{news.attachments}</p>
                </div>
              )}
            </article>

            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link to="/news">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ニュース一覧に戻る
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsItemDetail;

