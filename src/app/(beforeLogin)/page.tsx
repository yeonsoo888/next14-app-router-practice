'use client';

import { signIn, useSession } from 'next-auth/react';
import React, { FormEvent, useCallback } from 'react';

import { css } from '@/styled-system/css';

export default function Page() {
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    console.log('1');
    e.preventDefault();
    const { username, password } = e.currentTarget;
    const data = {
      username: username.value,
      password: password.value,
      redirect: false
    };

    await signIn('credentials', data);
  }, []);

  const session = useSession();
  console.log(session);

  return (
    <div className={css({ background: '#ff9999', display: 'flex', justifyContent: 'center' })}>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder={'username'} name={'username'} />
        </div>
        <div>
          <input placeholder={'password'} name={'password'} />
        </div>
        <button>제출</button>
      </form>
    </div>
  );
}
