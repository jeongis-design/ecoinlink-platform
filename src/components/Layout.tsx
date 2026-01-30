import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Globe, ShieldCheck, Activity, Truck, Car } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { ROUTE_PATHS, cn } from '@/lib/index';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navItems = [
    { name: 'MediLink', path: ROUTE_PATHS.MEDILINK, color: 'text-[#E11D48]', icon: <Activity className="w-4 h-4" /> },
    { name: 'CarLink', path: ROUTE_PATHS.CARLINK, color: 'text-[#2563EB]', icon: <Car className="w-4 h-4" /> },
    { name: 'EXLink', path: ROUTE_PATHS.EXLINK, color: 'text-[#1F2937]', icon: <Truck className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" 
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2 group transition-transform active:scale-95">
            <img 
              src={IMAGES.IMAGE_48} 
              alt="ECOinLink Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  cn(
                    "relative flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary",
                    isActive ? cn("text-primary font-bold", item.color) : "text-muted-foreground"
                  )
                }
              >
                {item.icon}
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium px-4 py-2 rounded-full hover:bg-secondary transition-colors">
              로그인
            </button>
            <button className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              시작하기
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background md:hidden pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-xl bg-white shadow-sm", item.color)}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-semibold">{item.name}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <button className="w-full py-4 rounded-2xl border border-border font-medium hover:bg-secondary transition-colors">
                  로그인
                </button>
                <button className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg active:scale-95 transition-all">
                  시작하기
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to={ROUTE_PATHS.HOME} className="inline-block mb-6">
                <img 
                  src={IMAGES.IMAGE_48} 
                  alt="ECOinLink Logo" 
                  className="h-8 w-auto grayscale brightness-50 opacity-80"
                />
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                ECOinLink는 의료, 자동차, 물류를 하나의 생태계로 연결하는 차세대 통합 플랫폼입니다. 전 세계 어디서나 안전하고 신속한 정보 연결을 경험하세요.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:text-primary transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:text-primary transition-colors cursor-pointer">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">플랫폼</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                      <span className={item.color}>{item.icon}</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">회사 소개</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><button className="hover:text-primary transition-colors">회사 개요</button></li>
                <li><button className="hover:text-primary transition-colors">공지사항</button></li>
                <li><button className="hover:text-primary transition-colors">인재 채용</button></li>
                <li><button className="hover:text-primary transition-colors">기술 블로그</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">고객 지원</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><button className="hover:text-primary transition-colors">도움말 센터</button></li>
                <li><button className="hover:text-primary transition-colors">이용 약관</button></li>
                <li><button className="hover:text-primary transition-colors text-destructive">개인정보 처리방침</button></li>
                <li><button className="hover:text-primary transition-colors">API 문서</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 ECOinLink. 모든 연결의 시작. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                암호화된 데이터 관리
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-primary" />
                전세계 직배송 네트워크
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
