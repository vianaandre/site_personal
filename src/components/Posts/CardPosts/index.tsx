import React from 'react';
import Link from 'next/link';

import { CardPostsProps } from '../../../types/types';
import StyledCardPosts from './styled';
import datoStructureText from '../../../utils/dato-structured-text';

const CardPosts: React.FC<CardPostsProps> = ({ title, slug, img, value }) => {

  const dataText = datoStructureText(value)

  console.log(dataText)

  console.log('alo')

  return (
    <StyledCardPosts>
      <Link href={"http://localhost:3000/blog/" + slug}>
        <a>
          <div className="content">
              <img src={img.url} alt={img.alt} />
              <div className='information'>
                <h2>{title}</h2>
                <div className='text'>
                  {dataText}
                </div>
              </div>
          </div>
        </a>
      </Link>
    </StyledCardPosts>
  )
}

export default CardPosts;
