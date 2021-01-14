import React from 'react';
import slugify from 'utils/slugify';

interface Props {
  children?: React.ReactNode;
  text?: string;
}

const BlockQuote: React.FC<Props> = ({ text, children }) => {
  if (!text && !children) {
    return null;
  }

  return (
    <div className="BlockQuote mb1_75">
      <p className="BlockQuote__text text-article-body-md font-300 bradford italic py1_5 ml1_5 md:ml2 color-gray-dark">
        {children ? children : slugify(text || '')}
      </p>
    </div>
  );
};

export default BlockQuote;
