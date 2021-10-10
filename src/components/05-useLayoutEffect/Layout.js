import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './Layout.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const [boxSize, setBoxSize] = useState({})

  const { quote } = !!data && data[0];

  const pTag = useRef()

  useLayoutEffect(() => {
    //   console.log(pTag.current.getBoundingClientRect())
      setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className='blockquote text-end'>
        <p ref={pTag} className='blockquote'>{quote}</p>
      </blockquote>
      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button className='btn btn-dark' onClick={increment}>
        Siguiente frase
      </button>
    </>
  );
};
