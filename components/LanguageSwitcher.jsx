"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function stripEnglishPrefix(pathname) {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }

  return pathname;
}

function addEnglishPrefix(pathname) {
  if (pathname === "/") {
    return "/en";
  }

  if (pathname.startsWith("/en")) {
    return pathname;
  }

  return `/en${pathname}`;
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div className="languageSwitcher" aria-label="Language selector">
      <Link className={!isEnglish ? "active" : ""} href={stripEnglishPrefix(pathname)}>
        中文
      </Link>
      <Link className={isEnglish ? "active" : ""} href={addEnglishPrefix(pathname)}>
        EN
      </Link>
    </div>
  );
}
