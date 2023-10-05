"use client";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface ProviderParams {
	children: ReactNode;
}

const queryClient = new QueryClient();

const Provider: React.FC<ProviderParams> = (props) => {
	const { children } = props;

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default Provider;
