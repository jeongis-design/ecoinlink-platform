import { Platform, Feature, Statistic } from "@/lib/index";

export const platforms: Platform[] = [
  {
    id: 'medilink',
    name: 'ECOin MediLink',
    title: '당신의 건강 파트너',
    description: '약사 전용 데이터베이스와 환자 정보를 안전하게 연결하여 최적의 복약 지도를 지원합니다.',
    slogan: '건강과 정보를 연결합니다.',
    colorClass: 'text-chart-1',
    bgClass: 'bg-chart-1',
    iconName: 'Stethoscope',
    features: ['약사 전용 DB', '암호화된 정보 관리', '질병 및 복약 통계']
  },
  {
    id: 'carlink',
    name: 'ECOin CarLink',
    title: '당신의 안전한 드라이빙',
    description: '실시간 차량 상태 정보와 정비 네트워크를 연결하여 신속하고 정확한 차량 관리를 제공합니다.',
    slogan: '차량 정보를 즉시 연결합니다.',
    colorClass: 'text-chart-2',
    bgClass: 'bg-chart-2',
    iconName: 'Car',
    features: ['차량 정보 실시간 연결', '정비소 네트워크', '안전 진단 시스템']
  },
  {
    id: 'exlink',
    name: 'ECOin EXLink',
    title: '물류의 새로운 기준',
    description: '전 세계를 잇는 직배송 시스템과 효율적인 물류 네트워크로 비즈니스의 경계를 허뭅니다.',
    slogan: '효율적인 물류와 연결을 제공합니다.',
    colorClass: 'text-chart-3',
    bgClass: 'bg-chart-3',
    iconName: 'Truck',
    features: ['전 세계 직배송', '최적 경로 최적화', '실시간 물류 추적']
  }
];

export const features: Feature[] = [
  {
    id: 'medi-db',
    title: '약사 전용 비서 시스템',
    description: '오래된 약 정보부터 최신 질병 DB까지, 약사님들의 전문적인 업무를 보조하는 스마트 비서 역할을 수행합니다.',
    iconName: 'Database',
    platformId: 'medilink',
    isSecure: true,
    targetAudience: ['약사']
  },
  {
    id: 'medi-encrypt',
    title: '암호화 데이터 관리',
    description: '모든 회원 정보와 복약 기록은 고도의 암호화 과정을 거쳐 오직 권한이 있는 약사만 접근 가능하도록 보호됩니다.',
    iconName: 'Lock',
    platformId: 'medilink',
    isSecure: true,
    targetAudience: ['약사']
  },
  {
    id: 'car-tech',
    title: '기술적 안정성 강조',
    description: '정비사와 운전자를 잇는 정밀한 데이터 전송으로 차량의 생애 주기를 완벽하게 관리합니다.',
    iconName: 'Cpu',
    platformId: 'carlink',
    targetAudience: ['정비사', '일반 유저']
  },
  {
    id: 'ex-global',
    title: '글로벌 물류 허브',
    description: '복잡한 통관 절차부터 최종 배송까지, 전 세계 어디든 연결되는 화살표와 연결 고리의 시너지.',
    iconName: 'Globe',
    platformId: 'exlink',
    targetAudience: ['물류 관계자', '일반 유저']
  },
  {
    id: 'common-ai',
    title: 'AI 기반 통합 연결',
    description: 'ECOinLink는 의료, 자동차, 물류를 하나의 알고리즘으로 연결하여 새로운 라이프스타일을 제안합니다.',
    iconName: 'Share2',
    platformId: 'common'
  },
  {
    id: 'common-stat',
    title: '연령별/통계 분석',
    description: '데이터를 시각화하여 트렌드를 분석하고 미래의 수요를 예측하는 고도화된 통계 엔진을 제공합니다.',
    iconName: 'BarChart3',
    platformId: 'common'
  }
];

export const statistics: Statistic[] = [
  {
    id: 'stat-1',
    label: '글로벌 파트너사',
    value: '2,500',
    suffix: '+',
    iconName: 'Handshake',
    colorClass: 'text-primary'
  },
  {
    id: 'stat-2',
    label: '일일 처리 데이터',
    value: '1.2',
    suffix: 'PB',
    iconName: 'Zap',
    colorClass: 'text-accent-foreground'
  },
  {
    id: 'stat-3',
    label: '전 세계 배송 국가',
    value: '180',
    suffix: '+',
    iconName: 'MapPin',
    colorClass: 'text-chart-3'
  },
  {
    id: 'stat-4',
    label: '등록 전문 인력',
    value: '45,000',
    suffix: '명',
    iconName: 'Users',
    colorClass: 'text-chart-1'
  }
];