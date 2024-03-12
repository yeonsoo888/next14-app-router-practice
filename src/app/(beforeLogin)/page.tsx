'use client';

import { signIn, useSession } from 'next-auth/react';
import React, { FormEvent } from 'react';

import { css } from '@/styled-system/css';

export default function Page() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = e.currentTarget;
    const data = {
      username: username.value,
      password: password.value,
      redirect: false
    };
    const res = await signIn('credentials', data);
    console.log(res);
  };

  const session = useSession();

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
