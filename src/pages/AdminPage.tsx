import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Edit, Trash2, Loader2, Save, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsItem {
  id: number;
  date: string;
  performance_report: string;
  retirement_status: string;
  details: string;
  attachments?: string;
  other?: string;
}

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const ITEMS_PER_PAGE = 10;

const AdminPage = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: ITEMS_PER_PAGE,
    total: 0,
    totalPages: 0
  });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    date: '',
    performanceReport: '',
    retirementStatus: '',
    details: '',
    attachments: '',
    other: ''
  });

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const fetchNews = async (page: number = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/news?page=${page}&limit=${ITEMS_PER_PAGE}`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      if (data.success) {
        setNews(data.data);
        if (data.pagination) {
          setPagination(data.pagination);
        }
      } else {
        throw new Error(data.error || 'Failed to fetch news');
      }
    } catch (error: any) {
      console.error('Error fetching news:', error);
      const errorMessage = error.message || "ニュースの取得に失敗しました。サーバーが起動しているか確認してください。";
      toast({
        title: "エラー",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (item?: NewsItem) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        date: item.date,
        performanceReport: item.performance_report,
        retirementStatus: item.retirement_status,
        details: item.details,
        attachments: item.attachments || '',
        other: item.other || ''
      });
    } else {
      setEditingItem(null);
      setFormData({
        date: '',
        performanceReport: '',
        retirementStatus: '',
        details: '',
        attachments: '',
        other: ''
      });
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingItem(null);
    setFormData({
      date: '',
      performanceReport: '',
      retirementStatus: '',
      details: '',
      attachments: '',
      other: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = editingItem
        ? `${API_URL}/api/news/${editingItem.id}`
        : `${API_URL}/api/news`;
      
      const method = editingItem ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorData.message || errorMessage;
          if (errorData.errors && Array.isArray(errorData.errors)) {
            errorMessage = errorData.errors.map((e: any) => e.msg || e.message).join(', ');
          }
        } catch {
          errorMessage = errorText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();

      if (data.success) {
        toast({
          title: "成功",
          description: editingItem ? "ニュースを更新しました" : "ニュースを追加しました",
        });
        handleCloseDialog();
        fetchNews(currentPage);
      } else {
        throw new Error(data.error || data.message || 'Failed to save');
      }
    } catch (error: any) {
      console.error('Error saving news:', error);
      const errorMessage = error.message || "保存に失敗しました。サーバーが起動しているか確認してください。";
      toast({
        title: "エラー",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await fetch(`${API_URL}/api/news/${deleteId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorData.message || errorMessage;
        } catch {
          errorMessage = errorText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();

      if (data.success) {
        toast({
          title: "成功",
          description: "ニュースを削除しました",
        });
        setIsDeleteDialogOpen(false);
        setDeleteId(null);
        fetchNews(currentPage);
      } else {
        throw new Error(data.error || data.message || 'Failed to delete');
      }
    } catch (error: any) {
      console.error('Error deleting news:', error);
      const errorMessage = error.message || "削除に失敗しました。サーバーが起動しているか確認してください。";
      toast({
        title: "エラー",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleOpenDeleteDialog = (id: number) => {
    setDeleteId(id);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">管理者ページ</h1>
                <p className="text-sm md:text-base text-gray-600">ニュースの管理</p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => handleOpenDialog()}>
                    <Plus className="w-4 h-4 mr-2" />
                    新規追加
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-4 md:p-6">
                  <DialogHeader>
                    <DialogTitle className="text-lg md:text-xl">
                      {editingItem ? 'ニュースを編集' : 'ニュースを追加'}
                    </DialogTitle>
                    <DialogDescription className="text-xs md:text-sm">
                      ニュース情報を入力してください
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                    <div>
                      <Label htmlFor="date" className="text-xs md:text-sm">日付 (YYYY.MM.DD)</Label>
                      <Input
                        id="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        placeholder="2025.11.26"
                        className="text-xs md:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="performanceReport" className="text-xs md:text-sm">実績報告</Label>
                      <Input
                        id="performanceReport"
                        value={formData.performanceReport}
                        onChange={(e) => setFormData({ ...formData, performanceReport: e.target.value })}
                        placeholder="【実績報告】本日23名の退職確定《髪型》"
                        className="text-xs md:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="retirementStatus" className="text-xs md:text-sm">退職代行実績</Label>
                      <Textarea
                        id="retirementStatus"
                        value={formData.retirementStatus}
                        onChange={(e) => setFormData({ ...formData, retirementStatus: e.target.value })}
                        placeholder="-退職代行実績-&#10;正社員：17名&#10;パート・アルバイト：5名&#10;派遣社員：1名&#10;計23名"
                        rows={5}
                        className="text-xs md:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="details" className="text-xs md:text-sm">特記事項</Label>
                      <Textarea
                        id="details"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="特記事項の詳細を入力してください"
                        rows={8}
                        className="text-xs md:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="attachments" className="text-xs md:text-sm">添付資料 (任意)</Label>
                      <Input
                        id="attachments"
                        value={formData.attachments}
                        onChange={(e) => setFormData({ ...formData, attachments: e.target.value })}
                        placeholder="添付資料の情報"
                        className="text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="other" className="text-xs md:text-sm">その他 (任意)</Label>
                      <Textarea
                        id="other"
                        value={formData.other}
                        onChange={(e) => setFormData({ ...formData, other: e.target.value })}
                        placeholder="その他の情報"
                        rows={4}
                        className="text-xs md:text-sm"
                      />
                    </div>
                    <div className="flex justify-end gap-2 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleCloseDialog}
                        disabled={saving}
                      >
                        <X className="w-4 h-4 mr-2" />
                        キャンセル
                      </Button>
                      <Button type="submit" disabled={saving}>
                        {saving ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            保存中...
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-2" />
                            保存
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
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
              <>
                {/* Desktop Table View */}
                <div className="hidden md:block bg-card border border-border rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-border">
                        <tr>
                          <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700">日付</th>
                          <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700">実績報告</th>
                          <th className="px-3 py-2.5 text-left text-xs font-semibold text-gray-700">操作</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {news.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-3 py-2.5 text-xs text-gray-900 whitespace-nowrap">{item.date}</td>
                            <td className="px-3 py-2.5 text-xs text-gray-700 max-w-md">
                              <div className="truncate">{item.performance_report}</div>
                            </td>
                            <td className="px-3 py-2.5">
                              <div className="flex gap-1.5">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-7 w-7 p-0"
                                  onClick={() => handleOpenDialog(item)}
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-7 w-7 p-0"
                                  onClick={() => handleOpenDeleteDialog(item.id)}
                                >
                                  <Trash2 className="w-3.5 h-3.5 text-red-600" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-3">
                  {news.map((item) => (
                    <div
                      key={item.id}
                      className="bg-card border border-border rounded-lg p-3 space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-gray-700 mb-1">{item.date}</div>
                          <div className="text-xs text-gray-600 break-words">{item.performance_report}</div>
                        </div>
                        <div className="flex gap-1.5 flex-shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 w-7 p-0"
                            onClick={() => handleOpenDialog(item)}
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 w-7 p-0"
                            onClick={() => handleOpenDeleteDialog(item.id)}
                          >
                            <Trash2 className="w-3.5 h-3.5 text-red-600" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs md:text-sm text-gray-600">
                      {pagination.total > 0 ? (
                        <>
                          {(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, pagination.total)} / {pagination.total}件
                        </>
                      ) : (
                        '0件'
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1 || loading}
                        className="h-8 text-xs"
                      >
                        <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                        前へ
                      </Button>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                          let pageNum: number;
                          if (pagination.totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= pagination.totalPages - 2) {
                            pageNum = pagination.totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          return (
                            <Button
                              key={pageNum}
                              variant={currentPage === pageNum ? "default" : "outline"}
                              size="sm"
                              onClick={() => setCurrentPage(pageNum)}
                              disabled={loading}
                              className="h-8 w-8 p-0 text-xs"
                            >
                              {pageNum}
                            </Button>
                          );
                        })}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(pagination.totalPages, prev + 1))}
                        disabled={currentPage === pagination.totalPages || loading}
                        className="h-8 text-xs"
                      >
                        次へ
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>削除の確認</AlertDialogTitle>
            <AlertDialogDescription>
              このニュースを削除してもよろしいですか？この操作は取り消せません。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteId(null)}>
              キャンセル
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              削除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminPage;

