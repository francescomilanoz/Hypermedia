const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize('postgres://user:user@localhost:5432/hypermood')
// Production
// const pg = require('pg')
// pg.defaults.ssl = true
// const db = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })

/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
  const Area = db.define(
    'area',
    {
      name: DataTypes.STRING,
      shortDescription: DataTypes.TEXT,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      whiteimage: DataTypes.STRING,
      bigImage: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Service = db.define(
    'service',
    {
      name: DataTypes.STRING,
      shortDescription: DataTypes.TEXT,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      best: DataTypes.BOOLEAN,
    },
    {
      underscored: true,
    }
  )
  const Person = db.define(
    'person',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const RoleArea = db.define(
    'roleArea',
    {
      role: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )

  const RoleService = db.define(
    'roleService',
    {
      role: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  Person.hasMany(RoleArea, { foreignKey: 'person_id' })
  Area.hasMany(RoleArea, { foreignKey: 'area_id' })
  Service.hasMany(RoleService, { foreignKey: 'service_id' })
  Person.hasMany(RoleService, { foreignKey: 'person_id' })
  RoleService.belongsTo(Person)
  RoleService.belongsTo(Service)
  Area.hasMany(Service, { foreignKey: 'area_id' })
  Service.belongsTo(Area)
  RoleArea.belongsTo(Person)
  RoleArea.belongsTo(Area)

  db._tables = {
    Area,
    Service,
    Person,
    RoleService,
    RoleArea,
  }
}

/**
 * Function to insert some fake info in the database
 */
async function insertFakeData() {
  const { Area, Service, Person, RoleArea, RoleService } = db._tables

  const firstArea = await Area.create({
    name: 'Database',
    shortDescription:
      'The broadest selection of purpose-built databases for all your application needs.',
    description:
      'Hypermood offers a choice of fully managed relational, NoSQL and in-memory databases, spanning proprietary and open-source engines, to fit the needs of modern app developers. Infrastructure management – including scalability, availability and security – is automated, saving you time and money. Focus on building applications while Hypermood managed databases make your job simpler by surfacing performance insights through embedded intelligence, scaling without limits and managing security threats.',
    image:
      'https://drive.google.com/uc?export=view&id=1aLQEuO-4dS5U3ML75hUn2_LsJ0ZjoM7j',
    whiteimage:
      'https://drive.google.com/uc?export=view&id=1CpUOWvP0l3L3fMsKDb-5xrzuH4SqPDbC',
    bigImage:
      'https://drive.google.com/uc?export=view&id=1mOqNOciKGxl4bQgblKmF96pOpklKMK6N',
  })

  const secondArea = await Area.create({
    name: 'Networking',
    shortDescription:
      'Connect and deliver your hybrid and cloud-native applications with low-latency, zero-trust-based networking services.',
    description:
      'With more than 165,000 miles of private fibre spanning 60+ regions and 170+ network PoPs across the world, Hypermood provides the scale, performance, high availability and enterprise-grade security you need to meet your most extreme workload requirements. Deliver consistent, low-latency experience to your customers through services that work across on-premises, multi-cloud and edge location seamlessly. Focus on delivering your application logic when you use network-as-a-service offerings from Hypermood Networking.',
    image:
      'https://drive.google.com/uc?export=view&id=1APIDnDykl60Fe5L2QTqvQjX5S6dqcyZf',
    whiteimage:
      'https://drive.google.com/uc?export=view&id=1Jl1aAND0cJlxaRi3HafY0KkS71zB9J_2',
    bigImage:
      'https://drive.google.com/uc?export=view&id=1uDMWzFIJeHit4d37j7LUdqijjcRwXvjY',
  })

  const thirdArea = await Area.create({
    name: 'Machine Learning',
    shortDescription:
      'Putting machine learning in the hands of every developer.',
    description:
      'Hypermood offers the broadest and deepest set of machine learning services and supporting cloud infrastructure, putting machine learning in the hands of every developer, data scientist and expert practitioner. Hypermood is helping more than one hundred thousand customers accelerate their machine learning journey.  Develop with your choice of tools with Jupyter Notebook, drag-and-drop designer, and automated machine learning. Create and deploy models at scale using automated and reproducible machine learning workflows.',
    image:
      'https://drive.google.com/uc?export=view&id=1nu7vypZl5M5ZFzPZ61H5h0Gc5eghMAEt',
    whiteimage:
      'https://drive.google.com/uc?export=view&id=1DkpC2ntDAT3ETnwwiGfdcIP1supZDD5I',
    bigImage:
      'https://drive.google.com/uc?export=view&id=1m3Ij29-nH8X_VZuRn2Fzfw3g4mJUVfFS',
  })

  const fourthArea = await Area.create({
    name: 'Security',
    shortDescription:
      'Strengthen the security of your cloud workloads with built-in services.',
    description:
      'Protect data, apps and infrastructure quickly with built-in security services in Hypermood that include unparalleled security intelligence to help identify rapidly evolving threats early – so you can respond quickly. Implement a layered, defence-in-depth strategy across identity, data, hosts and networks. Unify security management and enable advanced threat protection across hybrid cloud environments.',
    image:
      'https://drive.google.com/uc?export=view&id=1ehRLeFejqkxlWwmvfIRpCa3TDCceCUUC',
    whiteimage:
      'https://drive.google.com/uc?export=view&id=10DFZNCwSrOve-ieiU6RU6udElBkwl_CZ',
    bigImage:
      'https://drive.google.com/uc?export=view&id=1l_DmhlCdg9IsJUGxcHJU5x6dKn5Ow_VA',
  })
  const database1 = await Service.create({
    name: 'SQL Database',
    shortDescription:
      'The family of SQL cloud databases providing flexible options for application migration, modernisation and development.',
    description:
      'Spend more time innovating and less time patching, updating and backing up your databases. Azure is the only cloud with evergreen SQL that automatically applies the latest updates and patches so that your databases are always up to date – eliminating end-of-support hassles. Even complex tasks such as performance tuning, high availability, disaster recovery and backups are automated, freeing you to focus on applications.',
    image:
      'https://drive.google.com/uc?export=view&id=15EnWbY1N53Qk7qY1AU8dAKbr2dvavqev',
    best: true,
  })
  const database2 = await Service.create({
    name: 'MySQL Database',
    shortDescription: 'Fully managed, scalable MySQL database',
    description:
      'Focus on application development, not database management. Hypermood Database for MySQL is easy to set up, operate, and scale. Enjoy advanced security, single-zone or zone-redundant high availability, and a service-level agreement (SLA) up to 99.99 percent. Find out how to migrate your on-premises MySQL database to Hypermood with this Migration Guide.',
    image:
      'https://drive.google.com/uc?export=view&id=1Bw9jow0vobQS4JTKDMEr0A9LNGdIna21',
    best: false,
  })
  const database3 = await Service.create({
    name: 'noSQL Database',
    shortDescription:
      'Build apps that scale with the pace of your business with managed and intelligent noSQL in the cloud',
    description:
      'Hypermood noSQL Database is an intelligent, scalable, relational database service built for the cloud. Optimize performance and durability with automated, AI-powered features that are always up to date. With serverless compute and Hyperscale storage options that automatically scale resources on demand, you’re free to focus on building new applications without worrying about storage size or resource management.',
    image:
      'https://drive.google.com/uc?export=view&id=1dpw4QtMUqfORvGN94ZA8ILPmWUeza00Z',
    best: false,
  })
  const database4 = await Service.create({
    name: 'Database Migration service',
    shortDescription:
      'A simple tool to accelerate your data migration to Hypermood',
    description:
      'Hypermood Database Migration Service is a tool that helps you to simplify, guide and automate your database migration to Hypermood. Easily migrate your data, schema and objects from multiple sources to the cloud at scale.',
    image:
      'https://drive.google.com/uc?export=view&id=131oLdLBjVtZdT5pTVZVFN82mq1bKQ6Fr',
    best: false,
  })
  const database5 = await Service.create({
    name: 'SQL Server on virtual machines',
    shortDescription:
      'Migrate SQL Server workloads to the cloud at the lowest TCO',
    description:
      'Lift and shift your SQL Server workloads to the cloud to get the combined performance, security and analytics of SQL Server with flexibility and hybrid connectivity of Hypermood with 100 per cent code compatibility. Access the latest SQL Server updates and releases, including SQL Server 2019.',
    image:
      'https://drive.google.com/uc?export=view&id=1uSNnJ4Wb9fhxfsSduwqKBbWEQ2nI3XUN',
    best: false,
  })
  const database6 = await Service.create({
    name: 'Database per PostgreSQL',
    shortDescription:
      'Set up, operate, and scale a relational database in the cloud with just a few clicks',
    description:
      'PostgreSQL has become the preferred open source relational database for many enterprise developers and start-ups, powering leading business and mobile applications. Hypermood makes it easy to set up, operate, and scale PostgreSQL deployments in the cloud. With us, you can deploy scalable PostgreSQL deployments in minutes with cost-efficient and resizable hardware capacity. Hypermood manages complex and time-consuming administrative tasks such as PostgreSQL software installation and upgrades; storage management; replication for high availability and read throughput; and backups for disaster recovery.',
    image:
      'https://drive.google.com/uc?export=view&id=1sN--g7DjRnFMpkZdS4dkpqumVgiEAGLO',
    best: false,
  })
  const database7 = await Service.create({
    name: 'Cache per database',
    shortDescription: 'Lightning-fast and fully managed in-memory data store',
    description:
      'As traffic and demands on your app increase, scale performance simply and in a cost-effective manner. Add a quick caching layer to the application architecture to handle thousands of simultaneous users with near-instant speed – all with the benefits of a fully managed service.',
    image:
      'https://drive.google.com/uc?export=view&id=1E0cugpURHUygYvN879m7f4hbFmEP5Aah',
    best: false,
  })

  const networking1 = await Service.create({
    name: 'Virtual Network',
    shortDescription: 'Your private network in the cloud',
    description:
      'Hypermood Virtual Network gives you an isolated and highly secure environment to run your virtual machines and applications. Use your private IP addresses and define subnets, access control policies and more. Use Virtual Network to treat Hypermood the same as you would your own data centre.',
    image:
      'https://drive.google.com/uc?export=view&id=1a9cJdRAibUrsQNiNdvbwH-3JfxN16jG1',
    best: true,
  })
  const networking2 = await Service.create({
    name: 'Load balancing',
    shortDescription:
      'Explore Hypermood load balancing services and find the best solution for your workloads using an easy-to-use service selection tool',
    description:
      'Instantly scale your applications with Hypermood load balancing services for high availability and high performance. Get started with a quick needs assessment and load balancing recommendation—using the service selection tool. Get help choosing the best Hypermood cloud load balancing services for your needs. Answer a few questions about your applications, workloads, and performance requirements. You’ll get a recommendation based on architectural best practices.',
    image:
      'https://drive.google.com/uc?export=view&id=1pQSBFG3juLme9t5MImbYa6mxLC9vsYPs',
    best: false,
  })
  const networking3 = await Service.create({
    name: 'DNS',
    shortDescription:
      'Host your domain in Hypermood for outstanding performance and availability',
    description:
      'Use Hypermood DNS to host your Domain Name System (DNS) domains in Hypermood. Manage your DNS records using the same credentials and billing and support contract as your other Hypermood services. Seamlessly integrate Hypermood-based services with corresponding DNS updates and streamline your end-to-end deployment process.',
    image:
      'https://drive.google.com/uc?export=view&id=1EjjXvvm-xEZ0Rxq6qpDG1fYgUQG7LDIG',
    best: false,
  })
  const networking4 = await Service.create({
    name: 'VPN Gateway',
    shortDescription: 'Connecting your infrastructure to the cloud',
    description:
      'Hypermood VPN Gateway connects your on-premises networks to Hypermood via site-to-site VPNs in a similar way that you set up and connect to a remote branch office. The connectivity is secure and uses the industry-standard protocols Internet Protocol Security (IPsec) and Internet Key Exchange (IKE).',
    image:
      'https://drive.google.com/uc?export=view&id=1WbFsPyARVqYRI8MlDkCkAaSI6_nEghIL',
    best: false,
  })
  const networking5 = await Service.create({
    name: 'Network performance monitoring',
    shortDescription:
      'Monitor, diagnose and gain insights to your network performance and health',
    description:
      'Monitor and diagnose networking issues without logging in to your virtual machines (VMs) using Network Watcher. Trigger packet capture by setting alerts and gain access to real-time performance information at the packet level. When you see an issue, you can investigate in detail for better diagnoses.',
    image:
      'https://drive.google.com/uc?export=view&id=1Dy_pUsXSAAt_y_-cyB-3WkfgUrIOmYUL',
    best: false,
  })
  const networking6 = await Service.create({
    name: 'Traffic manager',
    shortDescription:
      'Route incoming traffic for high performance and availability',
    description:
      'Hypermood Traffic Manager operates at the DNS layer to quickly and efficiently direct incoming DNS requests based on the routing method of your choice. An example would be sending requests to the closest endpoints, improving the responsiveness of your applications.',
    image:
      'https://drive.google.com/uc?export=view&id=1UusQ9ZVxMGaV6Pygj6aM2CS6ZUoH8Bvs',
    best: false,
  })
  const networking7 = await Service.create({
    name: 'Content delivery network',
    shortDescription:
      'Secure and reliable global content delivery and acceleration',
    description:
      'In online content delivery, user experience is everything. Hypermood Content Delivery Network (CDN) lets you reduce load times, save bandwidth and speed responsiveness – whether you’re developing or managing websites or mobile apps, or encoding and distributing streaming media, gaming software, firmware updates or IoT endpoints.',
    image:
      'https://drive.google.com/uc?export=view&id=1cVtrGHhhR4bHGgm1vtIg7o0xqa1DwkV1',
    best: false,
  })
  const Machinelearning1 = await Service.create({
    name: 'SageMaker',
    shortDescription:
      'SageMaker helps data scientists and developers to prepare, build, train, and deploy high-quality machine learning (ML) models quickly by bringing together a broad set of capabilities purpose-built for ML',
    description:
      'It is built on two decades of experience developing real-world machine learning applications, including product recommendations, personalization, intelligent shopping, robotics, and voice-assisted devices. SageMaker Studio provides a single, web-based visual interface where you can perform all ML development steps required to prepare data, and build, train, and deploy models.',
    image:
      'https://drive.google.com/uc?export=view&id=1VTH1KDjV0zwLCJojilsPubsQr3vhAwcn',
    best: false,
  })
  const Machinelearning2 = await Service.create({
    name: 'Transcribe',
    shortDescription: 'Automatically convert speech to text',
    description:
      'Hypermood Transcribe makes it easy for developers to add speech to text capabilities to their applications. Audio data is virtually impossible for computers to search and analyze. Therefore, recorded speech needs to be converted to text before it can be used in applications. Historically, customers had to work with transcription providers that required them to sign expensive contracts and were hard to integrate into their technology stacks to accomplish this task. Many of these providers use outdated technology that does not adapt well to different scenarios, like low-fidelity phone audio common in contact centers, which results in poor accuracy.',
    image:
      'https://drive.google.com/uc?export=view&id=15HD3OtCGu9CgMmNdQrLwRA7Z0IVEkIoe',
    best: true,
  })
  const Machinelearning3 = await Service.create({
    name: 'Translate',
    shortDescription: 'Fluent and accurate machine translation',
    description:
      'Hypermood Translate is a neural machine translation service that delivers fast, high-quality, affordable, and customizable language translation. Neural machine translation is a form of language translation automation that uses deep learning models to deliver more accurate and more natural sounding translation than traditional statistical and rule-based translation algorithms.',
    image:
      'https://drive.google.com/uc?export=view&id=16nwiVJku7kjji7hQ3Pci-VPu2GAn4mIc',
    best: false,
  })
  const Machinelearning4 = await Service.create({
    name: 'CodeGuru',
    shortDescription:
      'Automate code reviews and optimize application performance with ML-powered recommendations',
    description:
      'Hypermood CodeGuru is a developer tool that provides intelligent recommendations to improve code quality and identify an application’s most expensive lines of code. Integrate CodeGuru into your existing software development workflow to automate code reviews during application development, continuously monitor application performance in production, provide recommendations and visual clues for improving code quality and application performance, and reduce overall cost.',
    image:
      'https://drive.google.com/uc?export=view&id=17eLX13AOustVXnHhS_kHM8RSssFjYmIm',
    best: false,
  })
  const Machinelearning5 = await Service.create({
    name: 'Comprehend',
    shortDescription: 'Discover insights and relationships in text',
    description:
      'Hypermood Comprehend is a natural-language processing (NLP) service that uses machine learning to uncover information in unstructured data. Instead of combing through documents, the process is simplified and unseen information is easier to understand.',
    image:
      'https://drive.google.com/uc?export=view&id=1ZzBJHVpxRnC6Q3KduDjdHcXfqV2LiPtL',
    best: false,
  })
  const Machinelearning6 = await Service.create({
    name: 'Fraud Detector',
    shortDescription: 'Detect more online fraud faster',
    description:
      'Globally each year, organizations lose tens of billions of dollars to online fraud. Hypermood Fraud Detector is a fully managed service that uses machine learning (ML) and more than 20 years of fraud detection expertise from Hypermood, to identify potentially fraudulent activity so customers can catch more online fraud faster. Hypermood Fraud Detector automates the time consuming and expensive steps to build, train, and deploy an ML model for fraud detection, making it easier for customers to leverage the technology.',
    image:
      'https://drive.google.com/uc?export=view&id=1adPXuc-_ya7dxnMqzFjRfgvRymS-Acy4',
    best: false,
  })
  const Machinelearning7 = await Service.create({
    name: 'Recognition',
    shortDescription:
      'Automate your image and video analysis with machine learning',
    description:
      'Hypermood Rekognition makes it easy to add image and video analysis to your applications using proven, highly scalable, deep learning technology that requires no machine learning expertise to use. With Hypermood Rekognition, you can identify objects, people, text, scenes, and activities in images and videos, as well as detect any inappropriate content. Hypermood Rekognition also provides highly accurate facial analysis and facial search capabilities that you can use to detect, analyze, and compare faces for a wide variety of user verification, people counting, and public safety use cases.',
    image:
      'https://drive.google.com/uc?export=view&id=1bs2Ww7iRzwvOKgnCfeY2rVo1NN31Jrd9',
    best: false,
  })
  const Machinelearning8 = await Service.create({
    name: 'HealthLake',
    shortDescription:
      'Store, transform, query, and analyze health data in minutes',
    description:
      'Health data is frequently incomplete and inconsistent, and is often unstructured, with information contained in clinical notes, laboratory reports, insurance claims, medical images, recorded conversations, and time series data (for example, heart ECG or brain EEG traces) across disparate formats and systems. Every health care provider, payer, and life sciences company is trying to solve the problem of structuring the data, because if they do, they can make better patient support decisions, design better clinical trials, and operate more efficiently.',
    image:
      'https://drive.google.com/uc?export=view&id=1T9V4Pk-lbLaRIV4hh6utEy_cD4VPj5m-',
    best: false,
  })
  const Machinelearning9 = await Service.create({
    name: 'Personalize',
    shortDescription:
      'Create real-time personalized user experiences faster at scale',
    description:
      'Hypermood Personalize makes it easy for developers to build applications capable of delivering a wide array of personalization experiences, including specific product recommendations, personalized product re-ranking, and customized direct marketing. Hypermood Personalize is a fully managed machine learning service that goes beyond rigid static rule based recommendation systems and trains, tunes, and deploys custom ML models to deliver highly customized recommendations to customers across industries such as retail and media and entertainment.',
    image:
      'https://drive.google.com/uc?export=view&id=1nFiIYBF5-s2ymKZR98-dpGrp9ZZ14IBK',
    best: false,
  })
  const Machinelearning10 = await Service.create({
    name: 'Lookout for Equipement',
    shortDescription:
      'Detect abnormal equipment behavior by analyzing sensor data',
    description:
      'Successfully implementing predictive maintenance requires using the specific data collected from all of your machine sensors, under your unique operating conditions and then applying machine learning (ML) to enable highly accurate predictions. However, implementing an ML solution for your equipment can be difficult and time-consuming.',
    image:
      'https://drive.google.com/uc?export=view&id=1KIIgyUsFhtQg9IQYsYnTJgyH81V35g1Y',
    best: false,
  })
  const security1 = await Service.create({
    name: 'DDos protection',
    shortDescription:
      'Protect your Hypermood resources from Distributed Denial of Service (DDoS) attacks',
    description:
      'Cover all resources on a virtual network when you enable Hypermood DDoS Protection via simplified configuration. Always-on traffic monitoring provides near real-time detection of a DDoS attack, with no intervention required. DDoS Protection automatically mitigates the attack as soon as it’s detected.',
    image:
      'https://drive.google.com/uc?export=view&id=17tPhu74kgQ4uVCzlkLtHvPXTmfGusq36',
    best: true,
  })
  const security2 = await Service.create({
    name: 'Network Firewall',
    shortDescription:
      'Explore Hypermood load balancing services and find the best solution for your workloads using an easy-to-use service selection tool',
    description:
      'Instantly scale your applications with Hypermood load balancing services for high availability and high performance. Get started with a quick needs assessment and load balancing recommendation—using the service selection tool. Get help choosing the best Hypermood cloud load balancing services for your needs. Answer a few questions about your applications, workloads, and performance requirements. You’ll get a recommendation based on architectural best practices.',
    image:
      'https://drive.google.com/uc?export=view&id=1kOPfwyh_0fQq20Ls94NCnw9BrykICout',
    best: false,
  })
  const security3 = await Service.create({
    name: 'Defender for IoT',
    shortDescription: 'Built-in protection for your hybrid cloud workloads',
    description:
      'Use Hypermood Defender, integrated with Hypermood Security Center, for Hypermood and hybrid cloud workload protection and security. With Extended Detection and Response (XDR) capabilities, stand up against threats such as remote desktop protocol (RDP) brute-force attacks, and SQL injections. Streamline security with AI and automation.',
    image:
      'https://drive.google.com/uc?export=view&id=1_2h9NfamhayEmSqS-J-2RdNeEH4ucqnd',
    best: false,
  })
  const security4 = await Service.create({
    name: 'Hypermood detective',
    shortDescription:
      'Analyze and visualize security data to rapidly get to the root cause of potential security issues',
    description:
      'Hypermood Detective makes it easy to analyze, investigate, and quickly identify the root cause of potential security issues or suspicious activities. Hypermood Detective automatically collects log data from your Hypermood resources and uses machine learning, statistical analysis, and graph theory to build a linked set of data that enables you to easily conduct faster and more efficient security investigations.',
    image:
      'https://drive.google.com/uc?export=view&id=1i4_-b9pBawQ9TBeMXiLM5f24BDpyqMlU',
    best: false,
  })
  const security5 = await Service.create({
    name: 'WAF',
    shortDescription: 'Protect your web applications from common web exploits',
    description:
      'Hypermood WAF is a web application firewall that helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources. Hypermood WAF gives you control over how traffic reaches your applications by enabling you to create security rules that control bot traffic and block common attack patterns, such as SQL injection or cross-site scripting. You can also customize rules that filter out specific traffic patterns.',
    image:
      'https://drive.google.com/uc?export=view&id=1u2YjvY-2wmV6hE3I-GhtWqQ0LhKDmuOc',
    best: false,
  })
  const security6 = await Service.create({
    name: 'Certificate Manager',
    shortDescription:
      'Easily provision, manage, and deploy public and private SSL/TLS certificates for use with this services and your internal connected resources',
    description:
      'Hypermood Certificate Manager is a service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with Hypermood services and your internal connected resources. SSL/TLS certificates are used to secure network communications and establish the identity of websites over the Internet as well as resources on private networks. Hypermood Certificate Manager removes the time-consuming manual process of purchasing, uploading, and renewing SSL/TLS certificates.',
    image:
      'https://drive.google.com/uc?export=view&id=1KMJBOFZaHoTQTwJbNHR7ODy6AhEvZZ6_',
    best: false,
  })
  const security7 = await Service.create({
    name: 'Hypermood Macie',
    shortDescription: 'Discover and protect your sensitive data at scale ',
    description:
      'As organizations manage growing volumes of data, identifying and protecting their sensitive data at scale can become increasingly complex, expensive, and time-consuming. Hypermood Macie automates the discovery of sensitive data at scale and lowers the cost of protecting your data. Macie automatically provides an inventory of Hypermood S3 buckets including a list of unencrypted buckets, publicly accessible buckets, and buckets shared with Hypermood accounts outside those you have defined in Hypermood Organizations. Then, Macie applies machine learning and pattern matching techniques to the buckets you select to identify and alert you to sensitive data, such as personally identifiable information (PII).',
    image:
      'https://drive.google.com/uc?export=view&id=1i4_-b9pBawQ9TBeMXiLM5f24BDpyqMlU',
    best: false,
  })
  const person1 = await Person.create({
    name: 'Silvana Gallo',
    email: 'silvanaGallo@teleworm.us ',
    description:
      "She's empathetic and patient. Of course she's also tolerant, calm and adventurous, but they're far less prominent, especially compared to impulses of being argumentative as well. Her empathy though, this is what she's so well-liked for. Friends tend to count on this and her sense of balance especially when they need comforting or support.",
    image:
      'https://drive.google.com/uc?export=view&id=1t5JQOUI1LuPfxdbmo3QS6zI3sjAY7paQ',
  })
  const person2 = await Person.create({
    name: 'Gregorio Harber',
    email: 'markus.Gaylord@hotmail.com',
    description:
      "A lot can be said of Gregorio, but the biggest two things to know are that he's responsible and trusting. Of course he's also confident, decisive and amusing, but they're often slightly tainted by a mindset of being blunt as well. His responsibility though, this is what he's so well-liked for. Friends frequently count on this and his reflective thinking whenever they need cheering up.",
    image:
      'https://drive.google.com/uc?export=view&id=1HowrGcOHBkONrNGM7rO-Yyb2afzab720',
  })
  const person3 = await Person.create({
    name: 'Lawrence Keeling',
    email: 'angie.Sauer24@gmail.com',
    description:
      " the two traits most people enjoy the most are that he's loyal and orderly. Of course he's also decisive, insightful and practical, but they're often slightly tainted by a mindset of being inconsiderate as well. His loyalty though, this is what he's pretty much loved for. On many occasions people will count on this and his caring nature when they're feeling down.",
    image:
      'https://drive.google.com/uc?export=view&id=1g83w8pKTOki8c0hr4knpdrJavgp5EMTY',
  })
  const person4 = await Person.create({
    name: 'Silvia Panicucci',
    email: 'silviaPanicucci@jourrapide.com ',
    description:
      "She's warm and practical. Of course she's also lovable, efficient and captivating, but they're far less prominent, especially compared to impulses of being scornful as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1GZ66Ja5qMSdsFFrS-W8FGxaw9m90wlqq',
  })
  const person5 = await Person.create({
    name: 'Antonio Castiglione',
    email: 'antonioCastiglione@armyspy.com ',
    description:
      "He's farsighted and honest. Of course he's also rational, enthusiastic and clever, but in smaller doses and they're often spoiled by habits of being disconcerting as well. His farsightedness though, this is what he's kind of cherished for. On many occasions people will count on this and his precision whenever they need help.",
    image:
      'https://drive.google.com/uc?export=view&id=19ctcB-jcCsEoRKXIjsofmCsRJZFFbBBJ',
  })
  const person6 = await Person.create({
    name: 'Chiara Siciliani',
    email: 'chiaraSiciliani@jourrapide.com',
    description:
      "She's active and energetic. Of course she's also upright, curious and respectful, but these are in a way balance by being venomous as well. Her active nature though, this is what she's often admired for. There are many times when friends count on this and her efficiency in times of need.",
    image:
      'https://drive.google.com/uc?export=view&id=17EK7xYsmj_Cn0LiWlX3uPMtiwVKYxl6T',
  })
  const person7 = await Person.create({
    name: 'Mareta Pinto',
    email: 'maretaPinto@dayrep.com ',
    description:
      "She's sensitive and precise. Of course she's also open, calm and dynamic, but they're in shorter supply, especially considering they're mixed with being uncaring as well. Her sensitive nature though, this is what she's pretty much known for. There are many times when friends count on this and her helping hand when they're feeling down.",
    image:
      'https://drive.google.com/uc?export=view&id=1r-Xb1-zddMcUuAHtGUJgPf5CD6kPQP4y',
  })
  const person8 = await Person.create({
    name: 'Basilio Lorenzo',
    email: 'basilioLorenzo@dayrep.com',
    description:
      "He's loyal and rational. Of course he's also forthright, resourceful and amusing, but in a way they're lesser traits and tained by behaviors of being inconsiderate as well. His loyalty though, this is what he's most popular for. Oftentimes people will count on this and his efficiency especially when they need comforting or support.",
    image:
      'https://drive.google.com/uc?export=view&id=1qnOlhbR52V4C5yikLIDDmDqCD-yjAngn',
  })
  const person9 = await Person.create({
    name: 'Venerando Fiorentino',
    email: 'venerandoFiorentino@teleworm.us ',
    description:
      "He's imaginative and considerate. Of course he's also persuasive, upright and passionate, but these are in a way balance by being dominating as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1m9WOmt09umJ0irDG7lXHgrT-3A_YSCtW',
  })
  const person10 = await Person.create({
    name: 'Filiberta Fiorentino',
    email: 'filibertaFiorentino@dayrep.com ',
    description:
      "She's lovable and ambitious. Of course she's also farsighted, flexible and punctual, but far less strongly and often mixed with being barbaric as well. Her loving nature though, this is what she's most well-liked for. ",
    image:
      'https://drive.google.com/uc?export=view&id=19gtdNQbkXIqaRE-c5RvVTatgSMZVhrcu',
  })
  const person11 = await Person.create({
    name: 'Antonietta Bruno',
    email: 'antoniettaBruno@jourrapide.com ',
    description:
      "She's leaderly and discreet. Of course she's also warm, cooperative and confident, but in a way they're lesser traits and tained by behaviors of being shallow as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1e5_fYZPfMKP71k0SbgOyeO12RT6c1aVH',
  })
  const person12 = await Person.create({
    name: 'Luisella Boni',
    email: 'luisellaBoni@rhyta.com ',
    description:
      "She's humble and punctual. Of course she's also incorruptible, calm and surprising, but those are often overshadowed by tendencies of being envious as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1uIJ2NMW29_zaB_MrFTR6Po_IqKdYNYhc',
  })
  const person13 = await Person.create({
    name: 'Pia Palermo',
    email: 'piaPalermo@jourrapide.com',
    description:
      "She's sociable and observant. Of course she's also courageous, helpful and forthright, but in a way they're lesser traits and tained by behaviors of being extreme as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1g-DiCXcJO5wTO0JGfrvJe6SOFh-Sf44x',
  })
  const person14 = await Person.create({
    name: 'Cornelio Davide',
    email: 'cornelioDavide@rhyta.com',
    description:
      "He's faithful, captivating and appreciative, but in smaller doses and they're often spoiled by habits of being troublesome as well. His sense of order though, this is what he's so well-liked for. People regularly count on this and his earnestness whenever they need assistance or help.",
    image:
      'https://drive.google.com/uc?export=view&id=175LF9e8FdJZl27C51GMF3nn6PU74nAsT',
  })
  const person15 = await Person.create({
    name: 'Barbara Gallo',
    email: 'barbaraGallo@rhyta.com ',
    description:
      "She's adventurous and responsible. Of course she's also insightful, perceptive and upright, but far less strongly and often mixed with being petty as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1AF7N3_ccZ9TW4K_T2JN0u3f3sfYgauNg',
  })
  const person16 = await Person.create({
    name: 'Ave Lori',
    email: 'aveLori@rhyta.com',
    description:
      "She's also contemplative, wise and imaginative, but in a way they're lesser traits and tained by behaviors of being imprudent as well. Her decisive nature though, this is what she's often adored for.",
    image:
      'https://drive.google.com/uc?export=view&id=1j-ci13KjBba9y-UlAYJ5DcdvX3NSjo02',
  })
  const person17 = await Person.create({
    name: 'Quarto Pirozzi',
    email: 'quartoPirozzi@armyspy.com ',
    description:
      "He's dynamic and anticipative. Of course he's also individualistic, energetic and methodical, but in smaller doses and they're often spoiled by habits of being egocentric as well. His dynamic nature though, this is what he's often adored for. ",
    image:
      'https://drive.google.com/uc?export=view&id=1GpTYo7bbNrkFg3LwVp32SGGBay6ic90P',
  })
  const person18 = await Person.create({
    name: 'Ludovico Colombo',
    email: 'ludovicoColombo@dayrep.com ',
    description:
      "He's also individualistic, generous and forgiving, but they're in shorter supply, especially considering they're mixed with being arrogant as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1ChVewwZ3VYtmfgt1JeawUnK2brRuIn4I',
  })
  const person19 = await Person.create({
    name: 'Salvo Costa',
    email: 'salvoCosta@armyspy.com',
    description:
      "He's punctual and helpful. Of course he's also farsighted, relaxed and responsible, but they're often slightly tainted by a mindset of being hostile as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1D2bzgaI6MpIKjtD4GMidpsdQoLstwRHz',
  })
  const person20 = await Person.create({
    name: 'Milena Zito',
    email: 'milenaZito@jourrapide.com',
    description:
      "It's hard to describe a complex person like Milena, but above else know that she's humble and lovable. Of course she's also decisive, sympathetic and determined, but in a way they're lesser traits and tained by behaviors of being troublesome as well. Her humbleness though, this is what she's most well-liked for. ",
    image:
      'https://drive.google.com/uc?export=view&id=110xyRzcm2CpRdstT__yDjnnIogJH-HJz',
  })
  const person21 = await Person.create({
    name: 'Editta Marino',
    email: 'edittaMarino@teleworm.us ',
    description:
      "She's modest and contemplative. Of course she's also wise, compassionate and good-natured, but they're in shorter supply, especially considering they're mixed with being narcissistic as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1Qb73EnifU-p24IlppqAl4cgui8bATM2Z',
  })
  const person22 = await Person.create({
    name: 'Elvia Palermo',
    email: 'elviaPalermo@jourrapide.com',
    description:
      "She's innovative and exciting. Of course she's also helpful, aspiring and resourceful, but they're in shorter supply, especially considering they're mixed with being narrow-minded as well. Her innovative nature though, this is what she's pretty much known for. ",
    image:
      'https://drive.google.com/uc?export=view&id=10pqRgU4_KFixG09mDK0iPsX0sp8JOKJT',
  })
  const person23 = await Person.create({
    name: 'Remo Milani',
    email: 'remoMilani@armyspy.com',
    description:
      "His gentleness though, this is what he's most popular for. Friends tend to count on this and his good nature whenever they need assistance",
    image:
      'https://drive.google.com/uc?export=view&id=1VaY2MEeynPDtFj7IbksM0HHB7t-50VIJ',
  })
  const person24 = await Person.create({
    name: 'Gaetana Lucchesi',
    email: 'gaetanaLucchesi@jourrapide.com',
    description:
      "She's precise and compassionate. Of course she's also reliable, honorable and courteous, but they're often slightly tainted by a mindset of being callous as well.",
    image:
      'https://drive.google.com/uc?export=view&id=16fYItcKALRy3IGS6IgfpnHQKksx87M9L',
  })
  const person25 = await Person.create({
    name: 'Virgilio Monaldo',
    email: 'virgilioMonaldo@dayrep.com ',
    description:
      "Nobody's perfect of course and Virgilio has plenty of lesser desired aspects too. His obnoxious nature and anger risk ruining pleasant moods and make things uncomfortable to say the least. Fortunately his patience helps keep them in check for at least a little.",
    image:
      'https://drive.google.com/uc?export=view&id=1IJkKBD64O0FX0k_fc19-Ov3q5Y21htFx',
  })
  const person26 = await Person.create({
    name: 'Giuliano Ricci',
    email: 'giulianoRicci@teleworm.us ',
    description:
      "Few know the true Giuliano, but most know that above all else he's faithful and confident. Of course he's also heroic, stable and dynamic, but these are in a way balance by being intolerant as well.",
    image:
      'https://drive.google.com/uc?export=view&id=1-6jTQQ3oMLosoyCtgfPXk26-Pju5ecw4',
  })
  const person27 = await Person.create({
    name: 'Generoso Castiglione',
    email: 'generosoCastiglione@rhyta.com ',
    description:
      "A lot can be assumed when you first see Isaac White, but if there's anything you should know it's that he's independent and humorous. Of course he's also trusting, forgiving and discreet, but these are in a way balance by being treacherous as well. His independence though, this is what he's pretty much known for. ",
    image:
      'https://drive.google.com/uc?export=view&id=1VW7bIUhDbHNDAc0vjgUUn_3eGWGimeoL',
  })
  const person28 = await Person.create({
    name: 'Uranio Arcuri',
    email: 'uranioArcuri@armyspy.com ',
    description:
      "He's balanced and individualistic. Of course he's also relaxed, appreciative and dynamic, but those are often overshadowed by tendencies of being disorderly as well. His insincerity and insensitivity do cause plenty of friction even at the best of times. Fortunately his individualism is there to relift spirits when needed.",
    image:
      'https://drive.google.com/uc?export=view&id=1SUSnFm_BUyoBEWbEPgKqzPJdIkIeHG9j',
  })
  const person29 = await Person.create({
    name: 'Dalila Russo',
    email: 'dalilaRusso@armyspy.com ',
    description:
      "Her upright nature though, this is what she's most popular for. Friends tend to count on this and her warmness especially when they need comforting or support.",
    image:
      'https://drive.google.com/uc?export=view&id=1-3cAa0SNFhYhICduIx3PuXQFoIHDRBlQ',
  })
  const person30 = await Person.create({
    name: 'Clizia Iadanza',
    email: 'cliziaIadanza@jourrapide.com',
    description:
      "She's clever, capable and objective, but they're tainted by and mixed with habits of being coarse as well. Her responsiveness though, this is what she's so well-liked for.",
    image:
      'https://drive.google.com/uc?export=view&id=1XYDHt5Q3GB_OdckIaOxpMCzxsS-ETjS5',
  })

  const RoleArea1 = await RoleArea.create({
    role: 'Responsible',
  })
  const RoleArea11 = await RoleService.create({
    role: 'Worker',
  })
  const RoleArea2 = await RoleArea.create({
    role: 'Responsible',
  })
  const RoleArea22 = await RoleService.create({
    role: 'Worker',
  })
  const RoleArea3 = await RoleArea.create({
    role: 'Responsible',
  })
  const RoleArea33 = await RoleService.create({
    role: 'Worker',
  })
  const RoleArea4 = await RoleArea.create({
    role: 'Responsible',
  })
  const RoleArea44 = await RoleService.create({
    role: 'Worker',
  })
  const RoleService1 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService11 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService2 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService22 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService3 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService33 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService4 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService44 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService5 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService55 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService6 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService66 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService7 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService77 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService8 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService88 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService9 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService99 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService10 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService100 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService111 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService110 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService12 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService120 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService13 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService130 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService14 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService140 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService15 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService150 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService16 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService160 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService17 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService170 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService18 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService180 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService19 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService190 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService20 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService200 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService21 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService210 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService220 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService222 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService23 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService230 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService24 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService240 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService25 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService250 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService26 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService260 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService27 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService270 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService28 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService280 = await RoleService.create({
    role: 'Reference',
  })
  const RoleService29 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService290 = await RoleService.create({
    role: 'Reference',
  })

  await firstArea.addService(database1.id)
  await firstArea.addService(database2.id)
  await firstArea.addService(database3.id)
  await firstArea.addService(database4.id)
  await firstArea.addService(database5.id)
  await firstArea.addService(database6.id)
  await firstArea.addService(database7.id)
  await firstArea.addRoleArea(RoleArea1.id)
  await firstArea.addRoleArea(RoleArea2.id)

  await secondArea.addService(networking1.id)
  await secondArea.addService(networking2.id)
  await secondArea.addService(networking3.id)
  await secondArea.addService(networking4.id)
  await secondArea.addService(networking5.id)
  await secondArea.addService(networking6.id)
  await secondArea.addService(networking7.id)

  await thirdArea.addService(Machinelearning1.id)
  await thirdArea.addService(Machinelearning2.id)
  await thirdArea.addService(Machinelearning3.id)
  await thirdArea.addService(Machinelearning4.id)
  await thirdArea.addService(Machinelearning5.id)
  await thirdArea.addService(Machinelearning6.id)
  await thirdArea.addService(Machinelearning7.id)
  await thirdArea.addService(Machinelearning8.id)
  await thirdArea.addService(Machinelearning9.id)
  await thirdArea.addService(Machinelearning10.id)

  await fourthArea.addService(security1.id)
  await fourthArea.addService(security2.id)
  await fourthArea.addService(security3.id)
  await fourthArea.addService(security4.id)
  await fourthArea.addService(security5.id)
  await fourthArea.addService(security6.id)
  await fourthArea.addService(security7.id)

  await firstArea.addRoleArea(RoleArea1.id)
  await firstArea.addRoleArea(RoleArea11.id)
  await secondArea.addRoleArea(RoleArea2.id)
  await secondArea.addRoleArea(RoleArea22.id)
  await thirdArea.addRoleArea(RoleArea3.id)
  await thirdArea.addRoleArea(RoleArea33.id)
  await fourthArea.addRoleArea(RoleArea4.id)
  await fourthArea.addRoleArea(RoleArea44.id)

  await database1.addRoleService(RoleService1.id)
  await database1.addRoleService(RoleService11.id)
  await database2.addRoleService(RoleService2.id)
  await database2.addRoleService(RoleService22.id)
  await database3.addRoleService(RoleService3.id)
  await database3.addRoleService(RoleService33.id)
  await database4.addRoleService(RoleService4.id)
  await database4.addRoleService(RoleService44.id)
  await database5.addRoleService(RoleService5.id)
  await database5.addRoleService(RoleService55.id)
  await database6.addRoleService(RoleService6.id)
  await database6.addRoleService(RoleService66.id)
  await database7.addRoleService(RoleService7.id)
  await database7.addRoleService(RoleService77.id)

  await networking1.addRoleService(RoleService8.id)
  await networking1.addRoleService(RoleService88.id)
  await networking2.addRoleService(RoleService9.id)
  await networking2.addRoleService(RoleService99.id)
  await networking3.addRoleService(RoleService10.id)
  await networking3.addRoleService(RoleService100.id)
  await networking4.addRoleService(RoleService111.id)
  await networking4.addRoleService(RoleService110.id)
  await networking5.addRoleService(RoleService12.id)
  await networking5.addRoleService(RoleService120.id)
  await networking6.addRoleService(RoleService13.id)
  await networking6.addRoleService(RoleService130.id)
  await networking7.addRoleService(RoleService12.id)
  await networking7.addRoleService(RoleService120.id)

  await Machinelearning1.addRoleService(RoleService13.id)
  await Machinelearning1.addRoleService(RoleService130.id)
  await Machinelearning2.addRoleService(RoleService14.id)
  await Machinelearning2.addRoleService(RoleService140.id)
  await Machinelearning3.addRoleService(RoleService15.id)
  await Machinelearning3.addRoleService(RoleService150.id)
  await Machinelearning4.addRoleService(RoleService16.id)
  await Machinelearning4.addRoleService(RoleService160.id)
  await Machinelearning5.addRoleService(RoleService17.id)
  await Machinelearning5.addRoleService(RoleService170.id)
  await Machinelearning6.addRoleService(RoleService18.id)
  await Machinelearning6.addRoleService(RoleService180.id)
  await Machinelearning7.addRoleService(RoleService19.id)
  await Machinelearning7.addRoleService(RoleService190.id)
  await Machinelearning8.addRoleService(RoleService20.id)
  await Machinelearning8.addRoleService(RoleService200.id)
  await Machinelearning9.addRoleService(RoleService21.id)
  await Machinelearning9.addRoleService(RoleService210.id)
  await Machinelearning10.addRoleService(RoleService220.id)
  await Machinelearning10.addRoleService(RoleService222.id)

  await security1.addRoleService(RoleService23.id)
  await security1.addRoleService(RoleService230.id)
  await security2.addRoleService(RoleService24.id)
  await security2.addRoleService(RoleService240.id)
  await security3.addRoleService(RoleService25.id)
  await security3.addRoleService(RoleService250.id)
  await security4.addRoleService(RoleService26.id)
  await security4.addRoleService(RoleService260.id)
  await security5.addRoleService(RoleService27.id)
  await security5.addRoleService(RoleService270.id)
  await security6.addRoleService(RoleService28.id)
  await security6.addRoleService(RoleService280.id)
  await security7.addRoleService(RoleService29.id)
  await security7.addRoleService(RoleService290.id)

  await person1.addRoleService(RoleService1.id)
  await person1.addRoleService(RoleService22.id)
  await person1.addRoleArea(RoleArea4.id)
  await person2.addRoleService(RoleService11.id)
  await person3.addRoleService(RoleService2.id)
  await person3.addRoleArea(RoleArea1.id)
  await person4.addRoleService(RoleService22.id)
  await person4.addRoleArea(RoleArea1.id)
  await person5.addRoleService(RoleService3.id)
  await person5.addRoleArea(RoleArea1.id)
  await person6.addRoleService(RoleService33.id)
  await person6.addRoleArea(RoleArea1.id)
  await person7.addRoleService(RoleService4.id)
  await person7.addRoleArea(RoleArea1.id)
  await person8.addRoleService(RoleService44.id)
  await person8.addRoleArea(RoleArea1.id)
  await person9.addRoleService(RoleService5.id)
  await person9.addRoleArea(RoleArea1.id)
  await person10.addRoleService(RoleService55.id)
  await person10.addRoleArea(RoleArea1.id)
  await person11.addRoleService(RoleService6.id)
  await person11.addRoleArea(RoleArea1.id)
  await person12.addRoleService(RoleService66.id)
  await person12.addRoleArea(RoleArea1.id)
  await person13.addRoleService(RoleService7.id)
  await person13.addRoleArea(RoleArea1.id)
  await person14.addRoleService(RoleService77.id)
  await person14.addRoleArea(RoleArea1.id)
  await person15.addRoleService(RoleService8.id)
  await person15.addRoleArea(RoleArea1.id)
  await person16.addRoleService(RoleService88.id)
  await person16.addRoleArea(RoleArea1.id)
  await person17.addRoleService(RoleService9.id)
  await person17.addRoleArea(RoleArea1.id)
  await person18.addRoleService(RoleService99.id)
  await person18.addRoleArea(RoleArea1.id)
  await person19.addRoleService(RoleService100.id)
  await person19.addRoleArea(RoleArea1.id)
  await person20.addRoleArea(RoleArea1.id)
  await person21.addRoleArea(RoleArea1.id)
  await person22.addRoleArea(RoleArea1.id)
  await person23.addRoleArea(RoleArea1.id)
  await person24.addRoleArea(RoleArea1.id)
  await person25.addRoleArea(RoleArea1.id)
  await person26.addRoleArea(RoleArea1.id)
  await person27.addRoleArea(RoleArea1.id)
  await person28.addRoleArea(RoleArea1.id)
  await person29.addRoleArea(RoleArea1.id)
  await person30.addRoleArea(RoleArea1.id)
}
/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition
  defineDatabaseStructure()
  // Synchronize Sequelize with the actual database
  await db.sync({ force: true })
  // Call the function to insert some fake data
  await insertFakeData()
  return db
}

export default initializeDatabase
