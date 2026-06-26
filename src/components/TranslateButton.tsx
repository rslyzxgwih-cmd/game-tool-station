"use client";

import { useEffect, useRef, useState } from "react";

const TRANSLATE_API = "https://api.mymemory.translated.net/get";
const CACHE_KEY = "poe2_translate_cache_v1";

type TextNode = Text;

function snapshotOriginal(): Map<TextNode, string> {
  const map = new Map<TextNode, string>();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const p = n.parentNode as HTMLElement | null;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let node: Node | null;
  while ((node = walker.nextNode())) {
    map.set(node as TextNode, (node as TextNode).nodeValue || "");
  }
  return map;
}

function loadCache(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveCache(c: Record<string, string>) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(c));
  } catch {}
}

async function translateText(text: string, target: string): Promise<string> {
  const cache = loadCache();
  const key = target + "::" + text;
  if (cache[key]) return cache[key];
  if (text.length <= 480) {
    const url = TRANSLATE_API + "?q=" + encodeURIComponent(text) + "&langpair=en|" + target;
    try {
      const r = await fetch(url);
      const j = await r.json();
      const out = (j && j.responseData && j.responseData.translatedText) || text;
      cache[key] = out;
      saveCache(cache);
      return out;
    } catch {
      return text;
    }
  } else {
    const chunks = text.match(/.{1,450}(\s|$)/g) || [text];
    let out = "";
    for (const c of chunks) {
      out += await translateText(c, target);
    }
    cache[key] = out;
    saveCache(cache);
    return out;
  }
}

export function TranslateButton() {
  const [isChinese, setIsChinese] = useState(false);
  const [busy, setBusy] = useState(false);
  const originalTexts = useRef<Map<TextNode, string> | null>(null);

  async function translatePage(target: string) {
    if (!originalTexts.current) {
      originalTexts.current = snapshotOriginal();
    }
    const nodes = Array.from(originalTexts.current.keys());
    setBusy(true);
    let i = 0;
    const batchSize = 5;
    async function worker() {
      while (i < nodes.length) {
        const my = i++;
        const node = nodes[my];
        if (!node.isConnected) continue;
        const orig = originalTexts.current!.get(node);
        if (!orig || !orig.trim()) continue;
        const translated = await translateText(orig, target);
        node.nodeValue = translated;
      }
    }
    await Promise.all(Array.from({ length: batchSize }, () => worker()));
    setBusy(false);
    setIsChinese(target === "zh-CN");
  }

  function restoreOriginal() {
    if (!originalTexts.current) return;
    for (const [node, text] of originalTexts.current.entries()) {
      if (node.isConnected) node.nodeValue = text;
    }
    setIsChinese(false);
  }

  function onClick() {
    if (busy) return;
    if (isChinese) restoreOriginal();
    else translatePage("zh-CN");
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isChinese ? "Switch to English" : "Translate to Chinese"}
      className="ml-2 border border-ink bg-paper px-3 py-2 text-xs font-bold text-ink transition hover:bg-ink hover:text-white disabled:opacity-50"
    >
      {busy ? "翻译中…" : isChinese ? "🌐 English" : "🌐 中文"}
    </button>
  );
}
