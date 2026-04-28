import { useEffect } from "react";

export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let metaDesc: HTMLMetaElement | null = null;
    let previousDesc: string | null = null;
    if (description) {
      metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        previousDesc = metaDesc.getAttribute("content");
        metaDesc.setAttribute("content", description);
      }
    }

    return () => {
      document.title = previousTitle;
      if (metaDesc && previousDesc !== null) {
        metaDesc.setAttribute("content", previousDesc);
      }
    };
  }, [title, description]);
}
