import React, {ReactNode} from 'react';

export default function AfterLoginLayout({children}:{children:ReactNode}) {
  return (
    <div>
      afterLogin Layout
      {children}
    </div>
  );
}

