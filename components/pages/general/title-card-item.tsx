"use client";

import { Copy, CopyCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface TitleCardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  slug: string;
  title: string;
}

const TitleCardItem: React.FC<TitleCardItemProps> = ({ slug, title }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(`Terra ${title}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Убираем сообщение через 2 секунды
      })
      .catch((err) => console.error("Ошибка при копировании текста:", err));
  };
  return (
    <h4 className="font-bold flex gap-4 items-center">
      <Link href={`/catalog/${slug}`}>Terra {title}</Link>
      <button onClick={handleCopy}>
        {copied ? (
          <CopyCheck className="size-6 text-gray-400" />
        ) : (
          <Copy className="size-6 text-gray-400" />
        )}
      </button>
    </h4>
  );
};

export default TitleCardItem;
