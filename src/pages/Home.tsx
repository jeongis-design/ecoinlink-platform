import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { PlatformCard, FeatureCard, StatCard } from '@/components/Cards';
import { platforms, features, statistics } from '@/data/index';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_LOGISTICS_2} 
            alt="Logistics Technology Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>2026 Next-Gen Connectivity</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              ECOinLink:<br />
              <span className="text-primary">모든 연결의 시작.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
            >
              의료, 자동차, 물류를 하나의 생태계로 통합합니다. <br />
              전 세계 어디서나 가능한 직배송 서비스와 약사, 정비사, 전문가를 위한 <br />
              암호화된 데이터 비서 시스템을 지금 경험해보세요.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20">
                서비스 시작하기
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full backdrop-blur-sm">
                플랫폼 둘러보기
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Platform Selection Section */}
      <section id="platforms" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">통합 연결 플랫폼</h2>
              <p className="text-muted-foreground text-lg">
                세 가지 핵심 산업을 연결하여 시너지를 창출합니다. 각 분야의 전문가와 사용자가 신뢰할 수 있는 데이터 환경을 제공합니다.
              </p>
            </div>
            <Button variant="link" className="text-primary text-lg group">
              전체 생태계 보기 <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Highlight Section */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img 
                src={IMAGES.MEDICAL_TECH_6} 
                alt="Secure Medical Database"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-chart-1/20 mix-blend-multiply" />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-morphism rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-chart-1 w-6 h-6" />
                  <span className="font-bold text-chart-1">ECOin MediLink 보안 시스템</span>
                </div>
                <p className="text-sm text-foreground/80">
                  약사 전용 DB를 활용한 비서 역할. 모든 복약 정보는 암호화되어 철저하게 관리됩니다.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6">전문가를 위한 맞춤형 데이터 솔루션</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-chart-1/10 flex items-center justify-center text-chart-1">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1">약사를 위한 스마트 비서</h4>
                    <p className="text-muted-foreground">오래된 약 정보부터 질병 통계까지, 연령별 데이터를 분석하여 최적의 복약 상담을 돕습니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-chart-2/10 flex items-center justify-center text-chart-2">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1">정비사를 위한 실시간 기술 연동</h4>
                    <p className="text-muted-foreground">자동차 상태 정보를 즉각적으로 정비 네트워크에 연결하여 정밀한 진단을 가능케 합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center text-chart-3">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1">전 세계 직배송 물류 허브</h4>
                    <p className="text-muted-foreground">복잡한 절차 없이 클릭 한 번으로 전 세계 어디든 물품을 안전하게 전달합니다.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">스마트한 기능</h2>
            <p className="text-muted-foreground text-lg">
              ECOinLink가 제공하는 고도화된 기능들은 당신의 비즈니스와 일상을 더욱 효율적으로 변화시킵니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src={IMAGES.GLOBAL_NETWORK_1} 
            alt="Network Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">숫자로 보는 ECOinLink</h2>
            <p className="text-primary-foreground/80 text-lg">
              전 세계 수천 개의 파트너와 함께 매일 새로운 연결을 만들어가고 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  기술과 신뢰를 넘어<br />
                  <span className="text-primary">세상을 잇는 플랫폼</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  우리는 단순한 정보의 전달을 넘어, 각 분야의 전문가들이 최상의 성과를 낼 수 있도록 돕는 디지털 인프라를 구축합니다. 
                  2026년, ECOinLink와 함께 혁신의 중심에 서십시오.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full h-12">
                    지금 바로 문의하기
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full h-12">
                    제휴 제안서 다운로드
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-auto">
                <img 
                  src={IMAGES.AUTOMOTIVE_TECH_7} 
                  alt="Global Vision"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">"ECOinLink: 모든 연결의 시작."</h2>
            <p className="text-xl text-muted-foreground mb-10">
              당신의 건강, 당신의 안전, 당신의 물류 — 이 모든 것을 하나로 묶는 강력한 파트너십.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-12 py-7 text-xl rounded-full">
                무료로 시작하기
              </Button>
              <Button size="lg" variant="outline" className="px-12 py-7 text-xl rounded-full bg-background">
                전문가 상담 신청
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              © 2026 ECOinLink. 모든 권리 보유. 약사 전용 서비스는 별도의 인증이 필요합니다.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
