import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { cls } from "../libs/utils";

const itemCategory = [
  "전체",
  "실시간",
  "게임",
  "야생동물",
  "요리 프로그램",
  "액션 어드벤처 게임",
  "요리",
  "반려동물",
  "음악",
  "최근에 업로드된 동영상",
  "믹스",
  "감상한 동영상",
  "새로운 맞춤 동영상",
];

const sidebarCategory = [
  [
    ["/", "홈"],
    ["/feed/explore", "탐색"],
    ["/shorts", "Shorts"],
    ["/feed/subscriptions", "구독"],
    ["/channel/originals", "Originals"],
    ["/music", "WeTube Music"],
  ],
  [
    ["/feed/library", "보관함"],
    ["/feed/history", "시청 기록"],
    ["/channel/me", "내 동영상"],
    ["/playlist", "나중에 볼 동영상"],
    ["/feed/downloads", "오프라인 저장 동영상"],
    ["/feed/likes", "좋아요 표시한 동영상"],
  ],
  [[null, "구독"]],
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [currentCarousel, setCurrentCarousel] = useState<number>(0);
  const [sideBar, setSideBar] = useState<boolean>(false);
  const sideRef = useRef<any>(null);
  const navRef = useRef<any>(null);
  const childRef = useRef<any>(null);
  const sideBtn = () => {
    setSideBar(!sideBar);
  };
  useEffect(() => {
    if (!sideBar) {
      sideRef.current.style.transition = "all 0.2s ease-in-out";
      sideRef.current.style.transform = `translateX(-100%)`;
      navRef.current.style.opacity = "1";
      childRef.current.style.opacity = "1";
    } else {
      sideRef.current.style.transition = "all 0.2s ease-in-out";
      sideRef.current.style.transform = `translateX(0%)`;
      navRef.current.style.opacity = "0.50";
      childRef.current.style.opacity = "0.50";
    }
  }, [sideBar]);
  const carouselRef = useRef<any>(null);
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);
  const prevBtn = () => {
    setCurrentCarousel(currentCarousel - 3);
  };
  const nextBtn = () => {
    setCurrentCarousel(currentCarousel + 3);
  };
  useEffect(() => {
    carouselRef.current.style.transition = "all 0.5s ease-in-out";
    carouselRef.current.style.transform = `translateX(-${currentCarousel}0%)`;
  }, [currentCarousel]);
  return (
    <div className="relative overflow-x-hidden">
      <nav
        ref={sideRef}
        className="absolute left-0 z-10 mx-auto h-full w-56 -translate-x-full bg-gray-900"
      >
        <div className="flex items-center space-x-5 border-b border-gray-700 py-[0.9rem] px-6">
          <button onClick={sideBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-1">
            <div className="w-7 rounded-lg bg-red-500 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </div>
            <span className="text-lg text-white">Premium</span>
            <span className="ordinal text-white">kr</span>
          </div>
        </div>
        <div>
          {sidebarCategory.map((row, i) => (
            <div key={i} className="border-b border-gray-700 py-5">
              {row.map((value, i) => (
                <a key={i}>
                  <p
                    className={cls(
                      "py-3 px-6 text-sm text-white",
                      router.pathname === value[0] ? "bg-gray-700" : ""
                    )}
                  >
                    {value[1]}
                  </p>
                </a>
              ))}
            </div>
          ))}
        </div>
      </nav>
      <nav ref={navRef} className="container z-0 mx-auto">
        <div className="flex flex-wrap items-center justify-between border-b border-gray-700 py-3 px-6">
          <div className="flex items-center space-x-5">
            <button onClick={sideBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex items-center space-x-1">
              <div className="w-7 rounded-lg bg-red-500 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <span className="text-lg text-white">Premium</span>
              <span className="ordinal text-white">kr</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <Link href="/enter">
              <a href="">
                <div className="h-8 w-8 rounded-full bg-slate-300" />
              </a>
            </Link>
          </div>
        </div>
        <div className="relative flex items-center overflow-hidden border-b border-gray-700 py-3 px-6">
          <div
            ref={carouselRef}
            className="flex items-center justify-between space-x-3"
          >
            {itemCategory.map((value, i) => (
              <div
                key={i}
                className="whitespace-nowrap rounded-2xl border-[1px] border-gray-600 bg-gray-700 px-3 py-1"
              >
                <p className="text-sm text-white">{value}</p>
              </div>
            ))}
          </div>
          {currentCarousel === 0 ? (
            ""
          ) : (
            <button
              ref={prevRef}
              onClick={prevBtn}
              className="absolute left-0 flex h-full items-center bg-gradient-to-r from-gray-900 px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          {currentCarousel === 9 ? (
            ""
          ) : (
            <button
              ref={nextRef}
              onClick={nextBtn}
              className="absolute right-0 flex h-full items-center bg-gradient-to-l from-gray-900 px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>
      <div ref={childRef} className="pt-2">
        {children}
      </div>
    </div>
  );
}
