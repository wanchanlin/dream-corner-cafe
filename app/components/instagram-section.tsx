"use client";

import Script from "next/script";

import { instagramPosts } from "@/app/data/instagram-posts";
import { LanguageText } from "@/app/components/language";

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24"
    >
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker text-xs text-darkgreen">Instagram</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-espresso sm:text-5xl">
            <LanguageText zh="跟著 Dream Corner 的日常" en="Life at Dream Corner" />
          </h2>
          <p className="mt-2 text-[0.72rem] uppercase tracking-[0.22em] text-darkgreen">
            <LanguageText zh="追蹤我們的日常" en="Follow Our Journey" />
          </p>
        </div>

        <a
          href="https://www.instagram.com/dreamcornertw/"
          target="_blank"
          rel="noopener noreferrer"
          className="outline-button inline-flex min-h-13 items-center justify-center px-6 py-3 text-sm tracking-[0.16em] uppercase hover:bg-[rgba(208,127,96,0.08)]"
        >
          <LanguageText zh="追蹤 @dreamcornertw" en="Follow @dreamcornertw" />
        </a>
      </div>

      <p className="max-w-3xl text-base leading-8 text-[rgba(74,58,47,0.82)] sm:text-lg">
        <LanguageText zh="「從空間籌備、飲品測試到開幕消息，追蹤我們，一起看著這個小角落慢慢成形。」" en="Follow along as our little corner takes shape, from space planning and drink testing to opening news." />
      </p>

      <div className="mt-8 grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            className="w-full max-w-[540px] overflow-x-auto"
          >
            <blockquote
              className="instagram-media mx-auto w-full"
              data-instgrm-permalink={post.url}
              data-instgrm-version="14"
              style={{
                background: "#fff",
                border: 0,
                borderRadius: 3,
                boxShadow: "0 0 1px rgba(0,0,0,.5), 0 1px 10px rgba(0,0,0,.15)",
                margin: "1px auto",
                maxWidth: 540,
                minWidth: 326,
                padding: 0,
                width: "calc(100% - 2px)",
              }}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 text-center text-sm text-darkgreen"
              >
                <LanguageText zh="在 Instagram 查看這則貼文" en="View this post on Instagram" />
              </a>
            </blockquote>
          </div>
        ))}
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={() => {
          const instagram = (
            window as Window & {
              instgrm?: { Embeds: { process: () => void } };
            }
          ).instgrm;
          instagram?.Embeds.process();
        }}
      />
    </section>
  );
}
