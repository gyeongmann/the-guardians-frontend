import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full sm:max-w-[360px] min-w-[344px] mx-auto bg-BackGround">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
