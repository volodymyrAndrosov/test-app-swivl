import { useEffect } from "react";

const useDocumentTitle = title => {
  const setTitle = title => {
    if (title) {
      document.title = title;
    }
  };

  useEffect(() => {
    setTitle(title);
  }, [title]);
};

export default useDocumentTitle;
