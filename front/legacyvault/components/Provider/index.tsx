'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'


export default function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [queryClient] = useState(new QueryClient({}))
    return (
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryStreamedHydration> */}
            {children}
            {/* </ReactQueryStreamedHydration> */}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    )
}