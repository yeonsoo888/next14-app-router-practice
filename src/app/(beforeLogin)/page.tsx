import React from 'react';
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href={'/i/flow/login'}>로그인화면으로</Link>
    </div>
  );
}

