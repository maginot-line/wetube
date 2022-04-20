import Link from "next/link";

interface ItemProps {
  id: number;
  title: string;
  nickName: string;
  views: number;
  updatedAt: number;
}

export default function Item({
  id,
  title,
  nickName,
  views,
  updatedAt,
}: ItemProps) {
  return (
    <Link href={`/items/${id}`}>
      <a className="space-y-3 pb-5">
        <div className="h-40 w-full bg-slate-300" />
        <div className="flex justify-between">
          <div className="mt-1 h-8 w-8 rounded-full bg-slate-300" />
          <div className="w-10/12 space-y-2">
            <div>
              <p className="h-10 text-sm text-white">
                {title.length > 50 ? title.substring(0, 46) + "..." : title}
              </p>
            </div>
            <div className="space-y-1 text-xs text-gray-500">
              <div>
                <p>{nickName}</p>
              </div>
              <div>
                <span>조회수 {views.toFixed(1)}만회</span>
                <span> ⋅ </span>
                <span>{updatedAt}시간 전</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
