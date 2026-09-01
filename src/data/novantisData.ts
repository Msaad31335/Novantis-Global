import { 
  PlatformPractice, 
  CrossCuttingService, 
  CoreValue, 
  Differentiator, 
  AssessmentOffer, 
  PriorityMarket, 
  ManagedServiceTier, 
  IndustryItem, 
  InsightArticle 
} from '../types';

export const PLATFORM_PRACTICES: PlatformPractice[] = [
  {
    id: 'sap',
    name: 'SAP Ecosystem Practice',
    shortName: 'SAP',
    category: 'erp',
    tagline: 'Enterprise Resource Planning & S/4HANA Modernization',
    heroDesc: 'Architecting end-to-end digital cores across SAP S/4HANA, Business One, and modular enterprise lines.',
    fullDesc: 'Novantis delivers full-lifecycle SAP transformation — from strategic roadmap planning and greenfield/brownfield implementations to complex functional customizations (MM, FI, SD, PP) and cloud migrations with zero operational disruption.',
    modules: ['SAP S/4HANA Cloud & On-Prem', 'SAP Business One', 'SAP ERP ECC 6.0', 'SAP SuccessFactors HCM', 'SAP Business Technology Platform (BTP)', 'SAP MM / FI / SD / CO'],
    subCapabilities: [
      'S/4HANA Greenfield & Brownfield Implementations',
      'Materials Management (MM) & Supply Chain Orchestration',
      'Financial Accounting (FI) & Controlling (CO) Modernization',
      'Sales & Distribution (SD) Workflows & Order-to-Cash',
      'Legacy ECC to S/4HANA Cloud Migration & Data Cleansing',
      'Bi-directional Integration with Salesforce, ServiceNow & NetSuite',
      '24/7 Managed Services, Hypercare & Performance Tuning'
    ],
    businessOutcomes: [
      '47% faster monthly financial closing cycles',
      'Unified multi-entity visibility across global operations',
      '30% reduction in supply chain inventory carrying cost'
    ],
    entryOffer: 'SAP S/4HANA Readiness Assessment',
    color: '#008FD3',
    iconName: 'sap',
    featuredInOrbit: true,
  },
  {
    id: 'salesforce',
    name: 'Salesforce & Agentforce Practice',
    shortName: 'Salesforce',
    category: 'crm',
    tagline: 'Autonomous AI Agents & Unified Enterprise Customer 360',
    heroDesc: 'Deploying multi-cloud Salesforce solutions, MuleSoft integrations, and autonomous Agentforce AI workflows.',
    fullDesc: 'From enterprise Sales Cloud and Service Cloud to Agentforce autonomous AI agents, Data Cloud consolidation, and MuleSoft integrations, Novantis transforms customer operations with deep Apex, LWC, and Flow engineering.',
    modules: ['Salesforce Sales Cloud', 'Service Cloud & Omni-Channel', 'Salesforce Data Cloud', 'Agentforce AI Agents', 'Marketing Cloud & Account Engagement', 'MuleSoft AnyPoint Integration', 'Experience Cloud & Portals', 'Financial Services & Health Clouds'],
    subCapabilities: [
      'Enterprise Multi-Cloud Architecture & Lightning Web Components (LWC)',
      'Agentforce AI Agent Implementation for Autonomous Support & Sales',
      'MuleSoft API-led ERP/CRM Integration (SAP ↔ Salesforce)',
      'Data Cloud Customer 360 Real-Time Identity Resolution',
      'Apex Backend Logic, Custom Flow Automation & Governor Limits Optimization',
      'Industry Cloud Deployments (FSC, Health, Automotive, Manufacturing)',
      'Salesforce Health Checks, Governance & Tier-1 Support'
    ],
    businessOutcomes: [
      '38% higher sales rep pipeline conversion velocity',
      'Sub-second unified customer data resolution across all channels',
      '50%+ routine service tickets resolved autonomously by AI agents'
    ],
    entryOffer: 'Salesforce Health Check',
    color: '#00A1E0',
    iconName: 'salesforce',
    featuredInOrbit: true,
  },
  {
    id: 'servicenow',
    name: 'ServiceNow Workflows Practice',
    shortName: 'ServiceNow',
    category: 'itsm',
    tagline: 'Enterprise Digital Workflows & Unified Service Management',
    heroDesc: 'Automating IT, employee, customer, and cybersecurity operations at global enterprise scale.',
    fullDesc: 'Novantis architecturally modernizes enterprise operations via ServiceNow ITSM, ITOM, ITAM, CSM, and HRSD. We build proactive, automated digital workflows that eliminate operational friction and connect legacy IT to modern clouds.',
    modules: ['ServiceNow ITSM Pro', 'ITOM (Service Mapping, Discovery, Event Mgmt)', 'ITAM (Hardware & Software Asset Management)', 'Customer Service Management (CSM)', 'HR Service Delivery (HRSD)', 'Security Operations (SecOps)', 'App Engine Custom Development'],
    subCapabilities: [
      'ITSM Transformation (Incident, Problem, Change, Release, Service Catalog)',
      'ITOM Infrastructure Visibility & Proactive AIOps Event Management',
      'Software & Hardware Asset License Optimization (ITAM)',
      'Omnichannel CSM Portals & Integrated Case Routing',
      'HRSD Employee Onboarding Journeys & Self-Service Knowledge Bases',
      'Custom App Engine Scoped Applications & Flow Designer Automation',
      'ServiceNow ↔ SAP S/4HANA ↔ Salesforce Bi-directional Sync'
    ],
    businessOutcomes: [
      '62% reduction in P1 / P2 incident Mean Time to Resolution (MTTR)',
      '100% audit-ready automated change management compliance',
      'Significant software license reclamation savings through ITAM'
    ],
    entryOffer: 'ServiceNow ITSM Maturity Assessment',
    color: '#81B441',
    iconName: 'servicenow',
    featuredInOrbit: true,
  },
  {
    id: 'dynamics',
    name: 'Microsoft Dynamics 365 Practice',
    shortName: 'Dynamics 365',
    category: 'erp',
    tagline: 'Intelligent Enterprise Applications & Azure Synergy',
    heroDesc: 'Unifying finance, supply chain, customer service, and Copilot workflows across the Microsoft cloud.',
    fullDesc: 'We help global mid-market and enterprise organizations implement and optimize Dynamics 365 Finance, Supply Chain Management, Business Central, and Power Platform, connecting natively with Microsoft 365 and Azure Copilot.',
    modules: ['Dynamics 365 Finance', 'Dynamics 365 Supply Chain Management', 'Dynamics 365 Business Central', 'Dynamics 365 Sales & Customer Service', 'Power Apps & Power Automate', 'Azure Data & Copilot Studio'],
    subCapabilities: [
      'Dynamics 365 Finance & Supply Chain Multi-Entity Implementation',
      'Business Central Rapid Deployment for High-Growth Subsidiaries',
      'Power Platform Custom Enterprise Solutions & Power Automate Workflows',
      'Legacy ERP Migration (Navision, AX, GP) to Dynamics 365 Cloud',
      'Integration with Azure Data Lake, Power BI & Custom Microservices',
      'Continuous Release Management, Upgrades & Support'
    ],
    businessOutcomes: [
      'Native Microsoft 365 and Copilot workflow synergy',
      '30% lower total cost of ownership vs monolithic legacy ERP',
      'Real-time global inventory replenishment visibility'
    ],
    entryOffer: 'Microsoft Dynamics 365 Assessment',
    color: '#002050',
    iconName: 'microsoft',
    featuredInOrbit: true,
  },
  {
    id: 'netsuite',
    name: 'Oracle NetSuite ERP Practice',
    shortName: 'Oracle NetSuite',
    category: 'erp',
    tagline: 'Cloud Financials, Global OneWorld & Supply Chain Scale',
    heroDesc: 'Streamlining multi-currency consolidation, revenue recognition, and omnichannel order fulfillment.',
    fullDesc: 'Novantis designs and deploys Oracle NetSuite ERP solutions for fast-scaling enterprises and multi-subsidiary global groups, featuring customized SuiteScript 2.0 logic, SuiteAnalytics dashboards, and seamless CRM integrations.',
    modules: ['NetSuite ERP Core', 'NetSuite OneWorld Multi-Currency', 'SuiteBilling & Revenue Recognition', 'SuiteCommerce & Advanced Order Mgmt', 'SuiteScript 2.0 & SuiteCloud', 'SuiteAnalytics'],
    subCapabilities: [
      'NetSuite Consulting, Scoping & Business-Process Alignment',
      'OneWorld Multi-Subsidiary Financial Consolidation & Tax Localization',
      'Inventory, Procurement & Order-to-Cash Automation',
      'SuiteScript 2.0 Customization, Workflows & Suitelets',
      'Integration with Salesforce, E-commerce Platforms & Banking APIs',
      'Post-Go-Live Managed Support & Optimization'
    ],
    businessOutcomes: [
      'Single consolidated financial truth across dozens of international subsidiaries',
      'Automated recurring billing, rev-rec (ASC 606), and tax compliance',
      'Zero on-premises hardware overhead with pure cloud architecture'
    ],
    entryOffer: 'Oracle NetSuite Assessment',
    color: '#C74634',
    iconName: 'oracle',
    featuredInOrbit: true,
  },
  {
    id: 'odoo',
    name: 'Odoo Enterprise Practice',
    shortName: 'Odoo',
    category: 'erp',
    tagline: 'Modular, High-ROI Business Applications & Rapid Deployment',
    heroDesc: 'Flexible open-core ERP implementation, module engineering, and multi-department workflow automation.',
    fullDesc: 'We implement and customize Odoo Enterprise and Community suites, delivering integrated apps for CRM, Sales, Accounting, Inventory, Manufacturing (MRP), E-commerce, HR, and Helpdesk with unmatched cost-efficiency.',
    modules: ['Odoo CRM & Sales', 'Odoo Accounting & Invoicing', 'Odoo Inventory & Barcode', 'Odoo Manufacturing (MRP)', 'Odoo E-Commerce & POS', 'Odoo HR & Payroll', 'Odoo Studio & Custom Python Modules'],
    subCapabilities: [
      'Odoo Full-Suite Architecture & Business Gap Analysis',
      'Custom Python / XML Module Development & Database Customization',
      'Manufacturing (MRP), Quality Control & Work Order Tracking',
      'E-commerce, Point of Sale (POS) & Payment Gateway Integrations',
      'Legacy System Data Migration & Schema Mapping',
      'Local Tax, Withholding & Statutory Accounting Compliance'
    ],
    businessOutcomes: [
      'Exceptional ROI with low licensing and infrastructure footprint',
      '100% customized workflows tailored to unique manufacturing/trading models',
      'Rapid 8 to 14-week deployment timeframes'
    ],
    entryOffer: 'Odoo / ERPNext Business Process Assessment',
    color: '#714B67',
    iconName: 'odoo',
    featuredInOrbit: true,
  },
  {
    id: 'erpnext',
    name: 'ERPNext Practice',
    shortName: 'ERPNext',
    category: 'erp',
    tagline: 'Agile Open-Source ERP & Frappe Framework Engineering',
    heroDesc: 'Lean, customizable enterprise operations with zero vendor lock-in and complete data sovereignty.',
    fullDesc: 'Novantis leverages ERPNext and the Frappe Framework to provide modern, lightweight, highly customizable business software covering finance, manufacturing, retail, human resources, and supply chain for growing global enterprises.',
    modules: ['ERPNext Accounting', 'ERPNext Stock & Warehouse', 'ERPNext Buying & Selling', 'ERPNext HRMS & Payroll', 'ERPNext Manufacturing', 'Frappe Framework & REST APIs'],
    subCapabilities: [
      'ERPNext Consulting, Process Blueprinting & Configuration',
      'Frappe App Development, DocTypes, Server Scripts & Custom Jinja Print Formats',
      'Third-party REST API Integrations (Payment Gateways, Shipping, CRM)',
      'Data Cleansing & Ingestion from Legacy Spreadsheets/Databases',
      'Self-Hosted Private Cloud & Managed Cloud Hosting SLA',
      'Ongoing Support, Upgrades & Automation Scripts'
    ],
    businessOutcomes: [
      'Complete ownership of business logic and source data',
      'Low total cost of ownership with zero per-user recurring fee constraints',
      'Streamlined shop-floor manufacturing and inventory tracking'
    ],
    entryOffer: 'Odoo / ERPNext Business Process Assessment',
    color: '#007FFF',
    iconName: 'erpnext',
    featuredInOrbit: true,
  }
];

export const CROSS_CUTTING_SERVICES: CrossCuttingService[] = [
  {
    id: 'cat-erp',
    title: 'Enterprise ERP Modernization',
    tagline: 'Core Digital Backbone',
    icon: 'Layers',
    description: 'Transforming legacy monolithic ERPs into agile, cloud-native operational engines across SAP, Dynamics 365, NetSuite, Odoo, and ERPNext.',
    features: ['Multi-Entity Financials', 'Supply Chain Visibility', 'Automated Month-End Close', 'Cloud Migration & Clean Core'],
    outcomes: ['45% faster reporting', 'Zero hardware maintenance', 'Unified global ledger'],
    entryOffer: 'SAP S/4HANA Readiness Assessment'
  },
  {
    id: 'cat-crm',
    title: 'Customer 360 & CRM Transformation',
    tagline: 'Revenue Acceleration',
    icon: 'Users',
    description: 'Empowering sales, marketing, and service teams with unified data, omnichannel automation, and predictive customer intelligence.',
    features: ['Lead-to-Cash Automation', 'Omnichannel Service Cloud', 'Real-Time CDP (Data Cloud)', 'Agentforce AI Workflows'],
    outcomes: ['38% higher conversion', 'Sub-second customer resolution', 'Consistent customer touchpoints'],
    entryOffer: 'Salesforce Health Check'
  },
  {
    id: 'cat-itsm',
    title: 'ITSM & Enterprise Workflows',
    tagline: 'Operational Velocity',
    icon: 'Activity',
    description: 'Modernizing enterprise service delivery with automated incident routing, CMDB discovery, asset tracking, and employee journeys.',
    features: ['Automated Incident MTTR', 'ITOM Service Mapping', 'ITAM License Reclamation', 'SecOps Incident Response'],
    outcomes: ['62% faster MTTR', 'Audit-ready compliance', 'Proactive AIOps visibility'],
    entryOffer: 'ServiceNow ITSM Maturity Assessment'
  },
  {
    id: 'cat-integration',
    title: 'Enterprise Integration & APIs',
    tagline: 'Connecting the Siloed Stack',
    icon: 'Network',
    description: 'Connecting ERP, CRM, ITSM, and cloud data lakes into synchronized, real-time, event-driven pipelines via MuleSoft, REST, and Kafka.',
    features: ['SAP ↔ Salesforce ↔ ServiceNow Bi-directional Sync', 'API Management & Governance', 'Event-Driven Message Queues', 'Automated Data Reconciliation'],
    outcomes: ['Zero double data entry', 'Sub-100ms sync latency', '100% data integrity'],
    entryOffer: 'Enterprise / ERP–CRM Integration Assessment'
  },
  {
    id: 'cat-ai',
    title: 'Artificial Intelligence & AI Agents',
    tagline: 'Applied Enterprise Intelligence',
    icon: 'Cpu',
    description: 'Deploying autonomous AI agents, Copilots, RAG knowledge vectors, and deterministic automation under the Responsible AI Framework.',
    features: ['Autonomous AI Agent Swarms', 'Enterprise RAG Document Intelligence', 'Salesforce Agentforce & Copilot Integration', 'EU AI Act & Governance Compliance'],
    outcomes: ['50%+ support tickets automated', 'Zero hallucination risk', 'Enterprise security compliance'],
    entryOffer: 'AI Automation Opportunity Workshop'
  },
  {
    id: 'cat-data',
    title: 'Data & Executive Analytics',
    tagline: 'Actionable Intelligence',
    icon: 'BarChart3',
    description: 'Master Data Management (MDM), automated ELT pipelines, and real-time executive KPI dashboards on BigQuery, Snowflake, and Power BI.',
    features: ['Master Data Management (MDM)', 'Automated ELT/ETL Pipelines', 'Executive KPI BI Dashboards', 'Predictive Demand Modeling'],
    outcomes: ['100% auditable lineage', 'Instant executive visibility', 'Zero revenue leakage'],
    entryOffer: 'Data Migration Readiness Assessment'
  },
  {
    id: 'cat-cloud',
    title: 'Custom Software & Managed Services',
    tagline: 'Engineering & Continuous Assurance',
    icon: 'Code2',
    description: 'Bespoke customer/partner portals, microservices architectures, and Bronze-to-Enterprise tier managed operations with guaranteed response SLAs.',
    features: ['Bespoke Customer Portals', 'Cloud-Native Microservices', '24/7 Managed Operations & Hypercare', 'Dedicated Solution Architects'],
    outcomes: ['Guaranteed 15-min P1 response', '99.99% uptime', 'Continuous feature release'],
    entryOffer: 'Enterprise Architecture & Roadmap Workshop'
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    number: 1,
    title: 'Customer First',
    shortDesc: 'Our clients’ success is our north star. We measure ourselves solely by the business value and outcomes delivered.',
    fullDesc: 'We deeply understand our clients’ strategic goals, business context, and operational hurdles. Every architectural decision, technology selection, and line of code is evaluated against how it advances client success.',
    icon: 'Target'
  },
  {
    number: 2,
    title: 'Integrity & Transparency',
    shortDesc: 'Open, direct, and honest communication in every engagement, roadmap milestone, and commercial relationship.',
    fullDesc: 'We maintain radical transparency in project status, architecture trade-offs, and pricing. No hidden surprises, no vendor bias, and no compromise on ethical business conduct.',
    icon: 'ShieldCheck'
  },
  {
    number: 3,
    title: 'Excellence & Quality',
    shortDesc: 'Rigorous engineering standards, clean core principles, and zero-defect delivery across all platforms.',
    fullDesc: 'Quality is non-negotiable. Our Enterprise Assurance Framework governs every phase of development, automated testing, code review, and performance validation before any deployment.',
    icon: 'Award'
  },
  {
    number: 4,
    title: 'Accountability & Ownership',
    shortDesc: 'We take end-to-end responsibility from discovery and blueprinting to long-term hypercare and support.',
    fullDesc: 'We act as true partners, taking complete ownership of solutions. When unexpected challenges arise, we step up proactively with proven remediation strategies.',
    icon: 'CheckCircle2'
  },
  {
    number: 5,
    title: 'Innovation',
    shortDesc: 'Pragmatic, cutting-edge innovation in AI, automation, and enterprise architectures that creates immediate value.',
    fullDesc: 'We do not chase technology hype. We evaluate emerging capabilities like autonomous AI agents, Copilots, and real-time data lakes for genuine business impact and operational viability.',
    icon: 'Sparkles'
  },
  {
    number: 6,
    title: 'Security & Trust',
    shortDesc: 'Enterprise-grade cybersecurity, ISO/IEC 27001-aligned controls, and rigorous privacy governance.',
    fullDesc: 'We build with security and data privacy embedded by design. From role-based access control to end-to-end data encryption and compliance, client data is guarded with zero compromise.',
    icon: 'Lock'
  },
  {
    number: 7,
    title: 'Continuous Improvement',
    shortDesc: 'Relentless refinement of delivery processes, employee certifications, and technological tooling.',
    fullDesc: 'We foster a culture of perpetual learning. Our teams continuously earn advanced platform certifications, master new architectural patterns, and refine delivery playbooks.',
    icon: 'TrendingUp'
  },
  {
    number: 8,
    title: 'Collaboration',
    shortDesc: 'Seamless co-innovation with client stakeholders, internal IT teams, and global platform vendors.',
    fullDesc: 'We integrate deeply with our clients’ internal teams, functioning as an extended engineering arm. Knowledge transfer and internal capability building are core deliverables of every project.',
    icon: 'Handshake'
  },
  {
    number: 9,
    title: 'Business Value',
    shortDesc: 'Technology as an investment driver, delivering tangible ROI in revenue, cost savings, and speed.',
    fullDesc: 'We align technical architectures directly to board-level KPIs: reducing operational cost, speeding time-to-market, streamlining compliance, and unlocking new digital revenue streams.',
    icon: 'BarChart2'
  },
  {
    number: 10,
    title: 'Long-Term Partnership',
    shortDesc: 'Standing by our clients beyond go-live through multi-year managed services, upgrades, and advisory.',
    fullDesc: 'Go-live is not the finish line — it is the start of continuous value creation. We provide multi-tier managed operations, continuous feature evolution, and strategic architecture advisory.',
    icon: 'Clock'
  }
];

export const BRAND_DIFFERENTIATORS: Differentiator[] = [
  {
    number: 1,
    title: 'Business-Outcome Focus',
    shortDesc: 'Measurable improvements in operational efficiency, EBITDA, customer satisfaction, and risk mitigation.',
    points: ['Tied directly to C-suite ROI and KPI targets', 'Clear pre- and post-implementation benchmarks', 'Measurable cost reduction in licensing and manual labor'],
    icon: 'Gauge'
  },
  {
    number: 2,
    title: 'Multi-Platform Capability',
    shortDesc: 'Deep, certified mastery across SAP, Salesforce, ServiceNow, Dynamics 365, NetSuite, Odoo, and ERPNext.',
    points: ['Objective advisory with no vendor lock-in bias', 'Cross-platform capability under one roof', 'Unified delivery governance across disparate ecosystems'],
    icon: 'Cpu'
  },
  {
    number: 3,
    title: 'Deep Integration Expertise',
    shortDesc: 'Connecting ERP, CRM, ITSM, and cloud data into harmonious, event-driven enterprise backbones.',
    points: ['Elimination of data silos and double entry', 'High-throughput MuleSoft, REST, and Kafka architectures', 'Sub-100ms transactional data synchronization'],
    icon: 'GitFork'
  },
  {
    number: 4,
    title: 'Technical Credibility',
    shortDesc: 'Certified solution architects, structured Enterprise Assurance Framework, and battle-tested case proof.',
    points: ['Senior architects leading every major engagement', 'Rigorous code review, automated testing, and CI/CD', 'Documented delivery playbooks and reference architectures'],
    icon: 'ShieldAlert'
  },
  {
    number: 5,
    title: 'Long-Term Partnership',
    shortDesc: 'Continuous support, Bronze-to-Enterprise tier managed services, and evolutionary feature roadmaps.',
    points: ['Guaranteed SLAs down to 15-minute response', 'Proactive health checks and continuous optimization', 'Long-term client retention and shared accountability'],
    icon: 'HeartHandshake'
  }
];

export const ASSESSMENT_OFFERS: AssessmentOffer[] = [
  {
    id: 'salesforce-health',
    title: 'Salesforce Health Check',
    platform: 'Salesforce',
    duration: '1–2 Weeks',
    targetRole: 'VP of Sales / CIO / Salesforce Admin Lead',
    deliverables: ['Apex Code & Limits Audit', 'Data Quality & Duplicate Analysis', 'Security & Permission Review', 'Executive Action Plan'],
    outcomes: ['Identify technical debt before it impacts users', 'Optimize storage and API utilization', 'Benchmark ready for Agentforce AI'],
    badge: 'High Demand'
  },
  {
    id: 'sap-s4hana-readiness',
    title: 'SAP S/4HANA Readiness Assessment',
    platform: 'SAP',
    duration: '2–3 Weeks',
    targetRole: 'CIO / VP of IT / Finance Systems Director',
    deliverables: ['ECC to S/4HANA Gap Matrix', 'Custom Code Compatibility Report', 'Hardware / Cloud Sizing Specs', 'TCO & Migration Roadmap'],
    outcomes: ['Choose between Greenfield vs Brownfield path', 'Quantify cost and timeline with high certainty', 'Minimize business downtime risks'],
    badge: 'Enterprise Core'
  },
  {
    id: 'integration-assessment',
    title: 'Enterprise / ERP–CRM Integration Assessment',
    platform: 'Integration & Middleware',
    duration: '1–2 Weeks',
    targetRole: 'Head of Enterprise Architecture / Integration Lead',
    deliverables: ['System Architecture Topology Map', 'Latency & Throughput Diagnostics', 'Error Handling & Retry Audit', 'Modern API Strategy Blueprint'],
    outcomes: ['Eliminate data synchronization discrepancies', 'Reduce API maintenance overhead', 'Prepare for real-time event streaming'],
    badge: 'Cross-Platform'
  },
  {
    id: 'servicenow-maturity',
    title: 'ServiceNow ITSM Maturity Assessment',
    platform: 'ServiceNow',
    duration: '1–2 Weeks',
    targetRole: 'VP of IT Operations / ITSM Director',
    deliverables: ['ITSM / ITOM Process Maturity Scorecard', 'CMDB Health & Discovery Audit', 'Service Catalog Simplification Plan', 'AIOps Implementation Guide'],
    outcomes: ['Accelerate Mean Time to Resolution (MTTR)', 'Automate repetitive tier-1 change approvals', 'Reclaim unused software license seats'],
    badge: 'Efficiency'
  },
  {
    id: 'dynamics-assessment',
    title: 'Microsoft Dynamics 365 Assessment',
    platform: 'Microsoft Dynamics 365',
    duration: '1–2 Weeks',
    targetRole: 'Chief Operating Officer / IT Director',
    deliverables: ['D365 Module Utilization Review', 'Power Platform Governance Plan', 'Azure Integration Audit', 'Copilot Readiness Blueprint'],
    outcomes: ['Maximize value from existing Microsoft licenses', 'Streamline cross-department workflows', 'Plan scalable cloud expansion'],
    badge: 'Microsoft Synergy'
  },
  {
    id: 'odoo-erpnext-assessment',
    title: 'Odoo / ERPNext Business Process Assessment',
    platform: 'Odoo & ERPNext',
    duration: '1 Week',
    targetRole: 'Managing Director / Operations Head',
    deliverables: ['As-Is vs To-Be Process Mapping', 'Module Fit-Gap Evaluation', 'Customization Scoping Matrix', 'Go-Live Timeline & Budget Plan'],
    outcomes: ['Pinpoint rapid deployment path (6–10 weeks)', 'Drastically reduce annual ERP software spend', 'Eliminate manual spreadsheet work'],
    badge: 'Rapid Value'
  },
  {
    id: 'data-migration-readiness',
    title: 'Data Migration Readiness Assessment',
    platform: 'Data & Analytics',
    duration: '1–2 Weeks',
    targetRole: 'Chief Data Officer / BI Director',
    deliverables: ['Source Data Profiling & Hygiene Score', 'Schema Mapping & Transformation Rules', 'Reconciliation Protocol Plan', 'Migration Risk Mitigation Matrix'],
    outcomes: ['Ensure 100% data fidelity on go-live day', 'Prevent costly cutover delays and rollbacks', 'Establish clean Master Data Management (MDM)'],
    badge: 'Risk Mitigation'
  },
  {
    id: 'ai-automation-workshop',
    title: 'AI Automation Opportunity Workshop',
    platform: 'Enterprise AI & Agents',
    duration: '3 Days',
    targetRole: 'Chief Digital Officer / Innovation Leader',
    deliverables: ['Top 5 High-ROI AI Use Case Blueprints', 'Responsible AI Governance Checklist', 'Agent Swarm Architecture Proof of Concept', 'ROI & TCO Projection Matrix'],
    outcomes: ['Separate high-impact AI from market hype', 'Deploy deterministic, secure AI agent swarms', 'Align with global EU AI Act standards'],
    badge: 'Innovation'
  },
  {
    id: 'enterprise-arch-workshop',
    title: 'Enterprise Architecture & Roadmap Workshop',
    platform: 'Custom & Cloud Strategy',
    duration: '1–2 Weeks',
    targetRole: 'Chief Technology Officer / Enterprise Architect',
    deliverables: ['Target State 3-Year Enterprise Map', 'Technical Debt Prioritization Matrix', 'Cloud & Microservices Strategy', 'Phased Modernization Investment Model'],
    outcomes: ['Align technology investments directly to board goals', 'Eliminate redundant software stack spend', 'De-risk large-scale cloud modernization'],
    badge: 'Executive Advisory'
  }
];

export const PRIORITY_MARKETS: PriorityMarket[] = [
  {
    rank: 1,
    country: 'United States',
    region: 'North America',
    flag: '🇺🇸',
    platformFocus: ['Salesforce', 'SAP S/4HANA', 'ServiceNow', 'Enterprise AI', 'Dynamics 365'],
    marketRole: 'Primary Enterprise Market',
    description: 'Serving Fortune 500 and mid-market enterprises across Financial Services, Healthcare, Technology, and Retail with multi-cloud architectures and autonomous AI agents.',
    keyIndustries: ['Financial Services', 'Healthcare & Life Sciences', 'High Tech & SaaS', 'Retail & Consumer Goods']
  },
  {
    rank: 2,
    country: 'United Kingdom',
    region: 'Europe',
    flag: '🇬🇧',
    platformFocus: ['ServiceNow', 'Salesforce', 'SAP', 'NetSuite', 'Data Analytics'],
    marketRole: 'Key European Hub',
    description: 'Transforming London and regional enterprise hubs across Banking, Professional Services, and Public Sector with modern ITSM, ERP, and CRM workflows.',
    keyIndustries: ['Banking & Fintech', 'Legal & Professional Services', 'Energy & Utilities', 'Logistics']
  },
  {
    rank: 3,
    country: 'Germany',
    region: 'Europe',
    flag: '🇩🇪',
    platformFocus: ['SAP S/4HANA (#1 Focus)', 'ServiceNow', 'Dynamics 365', 'Custom Software'],
    marketRole: 'SAP & Industrial Backbone',
    description: 'Specialized SAP S/4HANA migration and clean core advisory for Mittelstand and DAX-listed manufacturing, automotive, and industrial engineering enterprises.',
    keyIndustries: ['Automotive & Mobility', 'Precision Manufacturing', 'Chemicals & Industrial', 'Medical Devices']
  },
  {
    rank: 4,
    country: 'United Arab Emirates',
    region: 'Middle East',
    flag: '🇦🇪',
    platformFocus: ['Oracle NetSuite', 'SAP', 'Salesforce', 'Odoo', 'ERPNext'],
    marketRole: 'MENA Commercial Center',
    description: 'Powering high-growth trading conglomerates, real estate leaders, and government-backed digital initiatives in Dubai and Abu Dhabi.',
    keyIndustries: ['Real Estate & Construction', 'Trading & Distribution', 'Hospitality & Tourism', 'Financial Services']
  },
  {
    rank: 5,
    country: 'Saudi Arabia',
    region: 'Middle East',
    flag: '🇸🇦',
    platformFocus: ['SAP S/4HANA', 'ServiceNow', 'Odoo', 'Enterprise AI'],
    marketRole: 'Vision 2030 Digital Transformation',
    description: 'Delivering large-scale government and enterprise digital modernization supporting Saudi Vision 2030 economic diversification and mega-projects.',
    keyIndustries: ['Energy, Oil & Gas', 'Public Sector & Smart Cities', 'Infrastructure & Mining', 'Healthcare']
  },
  {
    rank: 6,
    country: 'India',
    region: 'Asia-Pacific',
    flag: '🇮🇳',
    platformFocus: ['Salesforce', 'SAP', 'ServiceNow', 'Custom Engineering'],
    marketRole: 'Rapid Enterprise Expansion',
    description: 'Partnering with enterprise tech leaders, global capability centers (GCCs), and banking conglomerates on large-scale platform migrations.',
    keyIndustries: ['Information Technology', 'Banking & Insurance', 'Telecommunications', 'Pharmaceuticals']
  },
  {
    rank: 7,
    country: 'Canada',
    region: 'North America',
    flag: '🇨🇦',
    platformFocus: ['Salesforce', 'Dynamics 365', 'ServiceNow', 'NetSuite'],
    marketRole: 'North American Growth Corridor',
    description: 'Assisting Canadian enterprises in Toronto, Vancouver, and Montreal across Financial Services, Mining, Energy, and Retail.',
    keyIndustries: ['Natural Resources & Mining', 'Financial Services', 'Retail & E-commerce', 'Clean Tech']
  },
  {
    rank: 8,
    country: 'Australia',
    region: 'Asia-Pacific',
    flag: '🇦🇺',
    platformFocus: ['ServiceNow', 'Salesforce', 'SAP S/4HANA', 'Dynamics 365'],
    marketRole: 'APAC Enterprise Hub',
    description: 'Delivering end-to-end cloud CRM, ITSM, and mining/supply chain ERP modernization across Sydney, Melbourne, and Brisbane.',
    keyIndustries: ['Mining & Metals', 'Banking & Wealth Management', 'Healthcare & Aged Care', 'Logistics']
  },
  {
    rank: 9,
    country: 'France',
    region: 'Europe',
    flag: '🇫🇷',
    platformFocus: ['SAP S/4HANA', 'ServiceNow', 'Salesforce', 'Odoo'],
    marketRole: 'Western European Digital Core',
    description: 'Supporting French enterprise leaders in retail, luxury goods, aerospace, and energy with compliant cloud modernization.',
    keyIndustries: ['Luxury Goods & Retail', 'Aerospace & Defense', 'Energy & Utilities', 'Agriculture & Food']
  },
  {
    rank: 10,
    country: 'Pakistan',
    region: 'South Asia & Global Delivery HQ',
    flag: '🇵🇰',
    platformFocus: ['SAP', 'Odoo', 'ERPNext', 'Custom Software', 'Global Delivery Support'],
    marketRole: 'Headquarters & World-Class Delivery Center',
    description: 'Islamabad headquarters and dedicated Global Delivery Center housing certified solution architects, developers, and 24/7 managed operations engineers.',
    keyIndustries: ['Banking & Microfinance', 'Textiles & Manufacturing', 'Telecom & Tech', 'Public Sector']
  }
];

export const MANAGED_SERVICES_TIERS: ManagedServiceTier[] = [
  {
    name: 'Bronze',
    tagline: 'Essential Maintenance & Support',
    slaResponse: '4 Hours (P1)',
    coverageHours: '8x5 Regional Business Hours',
    idealFor: 'Mid-market businesses with stable production instances requiring scheduled patching and administrative support.',
    features: [
      'Incident & Request Management',
      'Quarterly Release & Patch Testing',
      'User Management & Role Permissions',
      'Basic Performance Monitoring',
      'Monthly Service Review Report',
      'Email & Helpdesk Ticket Portal'
    ],
    color: '#CD7F32'
  },
  {
    name: 'Silver',
    tagline: 'Proactive Operations & Enhancements',
    slaResponse: '1 Hour (P1)',
    coverageHours: '16x5 Extended Business Coverage',
    idealFor: 'Growing enterprises running critical CRM, ERP, or ITSM instances requiring continuous minor enhancements and quick resolution.',
    features: [
      'P1 Priority Response within 1 Hour',
      'Up to 30 Hours/Month Minor Enhancement Allocation',
      'Bi-Weekly Health Checks & CMDB Audits',
      'Automated Performance Alerts & Tuning',
      'Dedicated Primary Support Lead',
      'Phone, Slack/Teams & Portal Access'
    ],
    color: '#C0C0C0'
  },
  {
    name: 'Gold',
    tagline: '24/7 Mission-Critical Operations',
    slaResponse: '30 Minutes (P1)',
    coverageHours: '24x7x365 Continuous Coverage',
    idealFor: 'Global enterprises with mission-critical multi-entity platforms where downtime directly impacts top-line revenue.',
    features: [
      'Guaranteed 30-Min P1 Response Time',
      'Continuous 24/7 Monitoring & Alerting',
      'Up to 60 Hours/Month Architecture Enhancements',
      'Dedicated Technical Account Manager (TAM)',
      'Root Cause Analysis (RCA) & Defect Remediation',
      'Executive Quarterly Strategic Review'
    ],
    color: '#00F0FF',
    recommended: true
  },
  {
    name: 'Enterprise',
    tagline: 'Full-Scale Platform Co-Innovation',
    slaResponse: '15 Minutes (P1)',
    coverageHours: '24x7x365 Follow-the-Sun Global Pod',
    idealFor: 'Multi-platform global conglomerates (SAP + Salesforce + ServiceNow) requiring dedicated squads of senior engineers.',
    features: [
      '15-Minute P1 Critical Response Guarantee',
      'Dedicated Squad of Named Solution Architects',
      'Custom SLA Targets for P1–P4 Incidents',
      'Unlimited Minor & Major Enhancement Sprints',
      'Executive Steering Committee & Roadmap Co-Design',
      'Disaster Recovery & Redundancy Drills'
    ],
    color: '#FBBF24'
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'financial-services',
    name: 'Financial Services & Banking',
    icon: 'Landmark',
    summary: 'Compliant customer 360, automated loan origination, and real-time core banking integration.',
    platformsUsed: ['Salesforce Financial Services Cloud', 'SAP S/4HANA Banking', 'ServiceNow SecOps', 'MuleSoft'],
    keyChallengesSolved: ['Strict regulatory compliance (SOX, GDPR)', 'Legacy core banking data silos', 'Slow customer onboarding'],
    priorityMarkets: ['United States', 'United Kingdom', 'UAE', 'Australia']
  },
  {
    id: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    icon: 'HeartPulse',
    summary: 'HIPAA-compliant patient journeys, supply chain tracking, and clinical service automation.',
    platformsUsed: ['Salesforce Health Cloud', 'ServiceNow HRSD', 'SAP S/4HANA', 'Enterprise AI'],
    keyChallengesSolved: ['Patient data confidentiality', 'Complex medical device tracking', 'Fragmented provider portals'],
    priorityMarkets: ['United States', 'Germany', 'Canada', 'United Kingdom']
  },
  {
    id: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial',
    icon: 'Factory',
    summary: 'Shop-floor IoT telemetry, inventory optimization, and shop-floor order-to-cash.',
    platformsUsed: ['SAP S/4HANA MM/PP', 'Microsoft Dynamics 365 SCM', 'Odoo Manufacturing', 'ERPNext'],
    keyChallengesSolved: ['Supply chain disruptions', 'High inventory carrying costs', 'Unscheduled machinery downtime'],
    priorityMarkets: ['Germany', 'United States', 'Saudi Arabia', 'Pakistan']
  },
  {
    id: 'retail-consumer-goods',
    name: 'Retail & Consumer Goods',
    icon: 'ShoppingBag',
    summary: 'Unified commerce, omnichannel inventory sync, and personalized loyalty AI engines.',
    platformsUsed: ['Salesforce Commerce & Marketing Cloud', 'NetSuite OneWorld', 'Odoo POS', 'BigQuery'],
    keyChallengesSolved: ['Multi-channel stock discrepancies', 'High cart abandonment', 'Slow customer service resolution'],
    priorityMarkets: ['United States', 'United Kingdom', 'UAE', 'France']
  },
  {
    id: 'energy-oil-gas',
    name: 'Energy, Oil & Gas',
    icon: 'Flame',
    summary: 'Asset lifecycle management, field operations automation, and regulatory ESG reporting.',
    platformsUsed: ['SAP S/4HANA Asset Mgmt', 'ServiceNow ITOM', 'Dynamics 365 Field Service'],
    keyChallengesSolved: ['Remote asset tracking', 'Strict environmental health & safety', 'Complex joint-venture accounting'],
    priorityMarkets: ['Saudi Arabia', 'UAE', 'United States', 'Canada']
  },
  {
    id: 'real-estate-construction',
    name: 'Real Estate & Mega Construction',
    icon: 'Building2',
    summary: 'Tenant leasing portals, project operations accounting, and milestone billing.',
    platformsUsed: ['Oracle NetSuite', 'Microsoft Dynamics 365 Project Ops', 'Odoo', 'Salesforce'],
    keyChallengesSolved: ['Subcontractor billing delays', 'Long property sales cycles', 'Fragmented facility maintenance'],
    priorityMarkets: ['UAE', 'Saudi Arabia', 'United States', 'Pakistan']
  },
  {
    id: 'telecom-technology',
    name: 'Telecommunications & High Tech',
    icon: 'Radio',
    summary: 'High-throughput subscriber management, complex CPQ billing, and network incident ticketing.',
    platformsUsed: ['Salesforce CPQ', 'ServiceNow Telecom Service Mgmt', 'SAP S/4HANA', 'Enterprise AI'],
    keyChallengesSolved: ['Complex recurring SaaS billing', 'Network event storms', 'High churn rates'],
    priorityMarkets: ['United States', 'India', 'United Kingdom', 'Australia']
  },
  {
    id: 'logistics-supply-chain',
    name: 'Logistics & Global Supply Chain',
    icon: 'Truck',
    summary: 'Real-time fleet tracking, multi-currency customs clearance, and automated warehouse routing.',
    platformsUsed: ['SAP Extended Warehouse Mgmt (EWM)', 'Dynamics 365 SCM', 'Odoo', 'MuleSoft'],
    keyChallengesSolved: ['Cross-border customs delays', 'Warehouse bottleneck congestion', 'Manual paper freight bills'],
    priorityMarkets: ['United States', 'Germany', 'UAE', 'Pakistan']
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'agentforce-enterprise-guide',
    title: 'Deploying Salesforce Agentforce: Architectural Blueprint for Autonomous Enterprise Workflows',
    category: 'Enterprise AI',
    readTime: '6 min read',
    date: 'August 2026',
    author: 'Waseem Khan, Founder & CEO',
    excerpt: 'How leading enterprises are moving beyond conversational chatbots to autonomous, action-taking AI agents that execute complex transactions within Salesforce and SAP.',
    content: [
      'Enterprise AI is experiencing a paradigm shift from passive predictive analytics to active autonomous agency. With Salesforce Agentforce and interconnected LLM swarms, organizations can now delegate multi-step operational workflows to deterministic AI workers.',
      'Unlike legacy chatbots that simply retrieve static knowledge articles, Agentforce agents possess reasoning engines capable of inspecting data, orchestrating API calls to backend ERPs, and updating records across the enterprise stack.',
      'Key architectural considerations include defining precise Guardrails, establishing deterministic validation checkpoints, and integrating with real-time Data Cloud unified customer profiles to ensure zero hallucination risk.'
    ],
    tags: ['Salesforce', 'Agentforce', 'AI Agents', 'Enterprise Architecture']
  },
  {
    id: 'sap-clean-core-strategy',
    title: 'The Clean Core Imperative: De-risking SAP S/4HANA Cloud Transformations',
    category: 'Platform Architecture',
    readTime: '8 min read',
    date: 'July 2026',
    author: 'Novantis SAP Practice Group',
    excerpt: 'Why retaining standard SAP S/4HANA code and delegating custom business logic to SAP BTP or external microservices is the cornerstone of sustainable cloud ERP.',
    content: [
      'For decades, enterprise IT teams heavily modified SAP core tables and ABAP programs. While this delivered short-term flexibility, it generated monumental technical debt that made version upgrades agonizingly expensive.',
      'Under the modern "Clean Core" paradigm, the standard S/4HANA ERP instance remains pristine. Custom workflows, specialized UI portals, and integration logic are decoupled and deployed on SAP Business Technology Platform (BTP) or independent microservices.',
      'This architecture ensures quarterly cloud release updates apply seamlessly without breaking business operations, dramatically lowering long-term total cost of ownership (TCO).'
    ],
    tags: ['SAP S/4HANA', 'Clean Core', 'ERP Modernization', 'Cloud Strategy']
  },
  {
    id: 'servicenow-sap-integration',
    title: 'Bi-Directional ServiceNow ↔ SAP Integration: Bridging IT Operations and Enterprise Finance',
    category: 'Integration & Data',
    readTime: '5 min read',
    date: 'June 2026',
    author: 'Novantis Integration Architects',
    excerpt: 'How real-time synchronization between ServiceNow IT Asset Management (ITAM) and SAP Finance (FI) eliminates millions in ghost asset write-offs.',
    content: [
      'When IT asset lifecycles and corporate general ledgers operate in silos, enterprises suffer from "ghost assets" — paying maintenance fees and taxes on hardware and software licenses that have already been retired.',
      'By establishing an automated, event-driven link between ServiceNow ITAM and SAP FI via MuleSoft or REST APIs, hardware procurement in SAP automatically registers in ServiceNow CMDB, and retirement in ServiceNow triggers immediate asset depreciation in SAP.',
      'This single integration typically delivers full ROI within 90 days of deployment through software license reclamation and automated audit trails.'
    ],
    tags: ['ServiceNow', 'SAP', 'Integration', 'ITAM', 'Finance']
  },
  {
    id: 'responsible-ai-framework',
    title: 'Navigating the EU AI Act: A Pragmatic Governance Framework for Enterprise IT Leaders',
    category: 'Executive Strategy',
    readTime: '7 min read',
    date: 'May 2026',
    author: 'Novantis Governance Advisory',
    excerpt: 'Classifying enterprise AI models from minimal risk to high risk under EU AI Act Article 50, ensuring auditability and data sovereignty.',
    content: [
      'As regulatory scrutiny over artificial intelligence accelerates worldwide, enterprise leaders can no longer deploy generative or autonomous models without structured compliance safeguards.',
      'Novantis established an Enterprise Responsible AI Framework that categorizes all internal and customer-facing AI applications into risk tiers. High-risk systems (such as credit scoring or automated employee evaluation) require mandatory human oversight, explainability logging, and bias testing.',
      'By baking compliance into the architecture from day one, enterprises protect their brand reputation while unleashing the transformative speed of automated AI agents.'
    ],
    tags: ['AI Governance', 'EU AI Act', 'Compliance', 'Security']
  }
];
