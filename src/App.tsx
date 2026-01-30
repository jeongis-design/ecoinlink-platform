import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, MotionConfig } from "framer-motion";
import { ROUTE_PATHS } from "@/lib/index";
import Home from "@/pages/Home";

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

/**
 * App Component
 * ECOinLink 플랫폼의 루트 컴포넌트로 라우팅 및 전역 컨텍스트를 관리합니다.
 * 2026년 기준 글로벌 물류, 의료, 자동차 정보 연결 플랫폼의 핵심 구조를 담고 있습니다.
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* MotionConfig to handle reduced motion and standard spring physics */}
        <MotionConfig transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <HashRouter>
            <Routes>
              {/* 메인 홈 및 각 하위 플랫폼 라우트 */}
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />
              <Route path={ROUTE_PATHS.MEDILINK} element={<Home />} />
              <Route path={ROUTE_PATHS.CARLINK} element={<Home />} />
              <Route path={ROUTE_PATHS.EXLINK} element={<Home />} />

              {/* 404 처리: 홈으로 리다이렉트하거나 메인 페이지로 유도 */}
              <Route path="*" element={<Navigate to={ROUTE_PATHS.HOME} replace />} />
            </Routes>
          </HashRouter>

          {/* 알림 시스템 구성 */}
          <Toaster />
          <Sonner position="top-right" expand={false} richColors />
        </MotionConfig>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
