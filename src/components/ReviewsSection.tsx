import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar1 from "@/assets/review-avatar-1.jpg";
import avatar2 from "@/assets/review-avatar-2.jpg";
import avatar3 from "@/assets/review-avatar-3.jpg";
import reviewsBackground from "@/assets/シルエット男女5人富士山.jpeg";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "田中 美咲さん",
      age: "20代・女性",
      job: "事務職",
      avatar: avatar1,
      rating: 5,
      title: "安心して任せられました",
      comment:
        "パワハラで悩んでいましたが、LINE相談から退職完了までスムーズに進みました。会社に行かずに退職できて本当に助かりました。",
      situation: "パワハラに悩み退職を決意",
      result: "即日対応で円満退職を実現",
    },
    {
      name: "佐藤 健太さん",
      age: "30代・男性",
      job: "営業職",
      avatar: avatar2,
      rating: 5,
      title: "当日対応で円滑に進みました",
      comment:
        "有給が残っていたので交渉をお願いしました。労働組合として対応してくれたので、会社もすぐに承諾してくれました。",
      situation: "有給消化を希望",
      result: "全ての有給を消化して退職",
    },
    {
      name: "鈴木 愛美さん",
      age: "20代・女性",
      job: "販売職",
      avatar: avatar3,
      rating: 5,
      title: "転職支援までサポートしてくれました",
      comment:
        "退職だけでなく、次の仕事探しもサポートしてもらえて心強かったです。今は新しい職場で楽しく働いています。",
      situation: "次の仕事が不安",
      result: "退職と転職をトータルサポート",
    },
  ];

  return (
    <section id="reviews" className="reviews-section py-20 md:py-32 bg-gray-50 relative">
      <div className="reviews-section__background" style={{ backgroundImage: `url(${reviewsBackground})` }} aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-4">
          利用者レビュー
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          実際にご利用いただいた方々の声をご紹介します
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {review.age} · {review.job}
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <h4 className="font-bold mb-2">「{review.title}」</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {review.comment}
              </p>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="text-xs">
                  <span className="text-muted-foreground">状況：</span>
                  <span className="ml-1">{review.situation}</span>
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">結果：</span>
                  <span className="ml-1">{review.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            あなたも安心して新しいスタートを切りませんか？
          </p>
          <a href="/media/inquiry" target="_blank" rel="noreferrer">
              <Button size="lg">まず無料相談</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
