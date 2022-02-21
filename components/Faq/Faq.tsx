/* eslint-disable risxss/catch-potential-xss-react */
import { Icons } from "components/Icons";
import { useState } from "react";
import DOMPurify from "isomorphic-dompurify";

type FaqProps = {
  title: string;
  content: string;
  icon?: React.ReactNode;
};

const Faq: React.VFC<FaqProps> = ({ title, content, icon = <Icons.Plus /> }) => {
  const [showContent, setShowContent] = useState(false);
  function toggleContent(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setShowContent((pre) => !pre);
  }
  return (
    <div className="w-full max-w-[815px]  text-left mx-auto text-white text-[26px]">
      <div onClick={toggleContent} role="button" className="flex items-center justify-between px-8 py-[21px] mb-[1px] bg-[#303030]">
        <span className="flex-grow">{title}</span>
        {icon && <span>{icon}</span>}
      </div>
      <div className={showContent ? "faq__content--open" : "faq__content--closed"}>
        <div className="p-8 bg-[#303030]" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></div>
      </div>
    </div>
  );
};

export default Faq;
