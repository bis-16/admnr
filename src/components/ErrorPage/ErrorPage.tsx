import React, {FC} from 'react';

interface ErrorProps{
  message: string
}

const ErrorPage:FC<ErrorProps> = ({message}) => {
  return (
    <div>
      Error: {message}
    </div>
  );
};

export default ErrorPage;