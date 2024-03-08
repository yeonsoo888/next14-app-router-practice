import React, {ReactNode} from 'react';
import styles from './template.module.css';
export default function Layout({children,modal}:{children:ReactNode,modal:ReactNode}) {
  // template은 페이지 이동마다 mount 된다.
  //  ex ) google analytics에 용이
  return (
    <div className={styles.layout}>
      <div className={''}>
        before login template
        {children}
        {modal}
      </div>
    </div>
  );
}

