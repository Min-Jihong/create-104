import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // 대략적인 상품 상세 페이지 구현
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}