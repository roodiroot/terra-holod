import ContentMarkdown from "@/components/utils/content-markdown";
import { getAllDocumentByTitle } from "@/data/wp-api/documents-api";
import { Download } from "lucide-react";

export const metadata = {
  title: "Оферта - ТЭРРА",
  description: "Ознакомьтесь с нашей офертой",
};
export default async function PolitycPage() {
  const doc = await getAllDocumentByTitle("Оферта для terraholod.ru");

  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" overflow-hidden flex justify-between items-start">
          <h2 className="text-3xl max-w-2xl lg:text-4xl">{doc?.title}</h2>
        </div>
        <div className="mb-40 space-y-20">
          <ContentMarkdown
            content={doc.docsContent.content}
            className="text-sm"
          />
          {doc.docsContent.file?.node?.link && (
            <a
              href={doc?.docsContent?.file?.node?.link}
              target="_blank"
              className="text-sm text-[--accent] font-bold flex items-center gap-2"
            >
              <span>Скачать фаил</span>
              <Download size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
