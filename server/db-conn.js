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
  const security1 = await Service.create({
    name: 'DDos protection',
    shortDescription:
      'Protect your Hypermood resources from Distributed Denial of Service (DDoS) attacks',
    description:
      'Cover all resources on a virtual network when you enable Hypermood DDoS Protection via simplified configuration. Always-on traffic monitoring provides near real-time detection of a DDoS attack, with no intervention required. DDoS Protection automatically mitigates the attack as soon as it’s detected.',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: true,
  })
  const security2 = await Service.create({
    name: 'Network Firewall',
    shortDescription:
      'Explore Hypermood load balancing services and find the best solution for your workloads using an easy-to-use service selection tool',
    description:
      'Instantly scale your applications with Hypermood load balancing services for high availability and high performance. Get started with a quick needs assessment and load balancing recommendation—using the service selection tool. Get help choosing the best Hypermood cloud load balancing services for your needs. Answer a few questions about your applications, workloads, and performance requirements. You’ll get a recommendation based on architectural best practices.',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: false,
  })
  const security3 = await Service.create({
    name: 'Defender for IoT',
    shortDescription: 'Built-in protection for your hybrid cloud workloads',
    description:
      'Use Hypermood Defender, integrated with Hypermood Security Center, for Hypermood and hybrid cloud workload protection and security. With Extended Detection and Response (XDR) capabilities, stand up against threats such as remote desktop protocol (RDP) brute-force attacks, and SQL injections. Streamline security with AI and automation.',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: false,
  })
  const security4 = await Service.create({
    name: 'Hypermood detective',
    shortDescription:
      'Analyze and visualize security data to rapidly get to the root cause of potential security issues',
    description:
      'Hypermood Detective makes it easy to analyze, investigate, and quickly identify the root cause of potential security issues or suspicious activities. Hypermood Detective automatically collects log data from your Hypermood resources and uses machine learning, statistical analysis, and graph theory to build a linked set of data that enables you to easily conduct faster and more efficient security investigations.',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: false,
  })
  const security5 = await Service.create({
    name: 'WAF',
    shortDescription: 'Protect your web applications from common web exploits',
    description:
      'Hypermood WAF is a web application firewall that helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources. Hypermood WAF gives you control over how traffic reaches your applications by enabling you to create security rules that control bot traffic and block common attack patterns, such as SQL injection or cross-site scripting. You can also customize rules that filter out specific traffic patterns.',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: false,
  })
  const security6 = await Service.create({
    name: 'Certificate Manager',
    shortDescription:
      'Easily provision, manage, and deploy public and private SSL/TLS certificates for use with this services and your internal connected resources',
    description:
      'Hypermood Certificate Manager is a service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with Hypermood services and your internal connected resources. SSL/TLS certificates are used to secure network communications and establish the identity of websites over the Internet as well as resources on private networks. Hypermood Certificate Manager removes the time-consuming manual process of purchasing, uploading, and renewing SSL/TLS certificates.',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: false,
  })
  const security7 = await Service.create({
    name: 'Hypermood Macie',
    shortDescription: 'Discover and protect your sensitive data at scale ',
    description:
      'As organizations manage growing volumes of data, identifying and protecting their sensitive data at scale can become increasingly complex, expensive, and time-consuming. Hypermood Macie automates the discovery of sensitive data at scale and lowers the cost of protecting your data. Macie automatically provides an inventory of Hypermood S3 buckets including a list of unencrypted buckets, publicly accessible buckets, and buckets shared with Hypermood accounts outside those you have defined in Hypermood Organizations. Then, Macie applies machine learning and pattern matching techniques to the buckets you select to identify and alert you to sensitive data, such as personally identifiable information (PII).',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
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
  const firstPerson = await Person.create({
    name: 'ciao',
    email: 'ciao',
    description: 'ciao',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const secondPerson = await Person.create({
    name: 'ciao2',
    email: 'ciao2',
    description: 'ciao2',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const thirdPerson = await Person.create({
    name: 'ciao2',
    email: 'ciao2',
    description: 'ciao2',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const Person4 = await Person.create({
    name: 'ciao2',
    email: 'ciao2',
    description: 'ciao2',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const Person5 = await Person.create({
    name: 'ciao2',
    email: 'ciao2',
    description: 'ciao2',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const firstRoleArea = await RoleArea.create({
    role: 'Responsible',
  })
  const firstRoleService = await RoleService.create({
    role: 'ciao',
  })
  const secondRoleArea = await RoleArea.create({
    role: 'Team',
  })
  const thirdRoleArea = await RoleArea.create({
    role: 'Team',
  })
  const secondRoleService = await RoleService.create({
    role: 'ciao2',
  })

  const RoleService1 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService2 = await RoleService.create({
    role: 'Reference',
  })

  await firstArea.addService(database1.id)
  await firstArea.addService(database2.id)
  await firstArea.addService(database3.id)
  await firstArea.addService(database4.id)
  await firstArea.addService(database5.id)
  await firstArea.addService(database6.id)
  await firstArea.addService(database7.id)

  await secondArea.addService(networking1.id)
  await secondArea.addService(networking2.id)
  await secondArea.addService(networking3.id)
  await secondArea.addService(networking4.id)
  await secondArea.addService(networking5.id)
  await secondArea.addService(networking6.id)
  await secondArea.addService(networking7.id)

  await thirdArea.addService(security1.id)
  await thirdArea.addService(security2.id)
  await thirdArea.addService(security3.id)
  await thirdArea.addService(security4.id)
  await thirdArea.addService(security5.id)
  await thirdArea.addService(security6.id)
  await thirdArea.addService(security7.id)

  await fourthArea.addService(Machinelearning1.id)
  await fourthArea.addService(Machinelearning2.id)
  await fourthArea.addService(Machinelearning3.id)
  await fourthArea.addService(Machinelearning4.id)
  await fourthArea.addService(Machinelearning5.id)
  await fourthArea.addService(Machinelearning6.id)
  await fourthArea.addService(Machinelearning7.id)
  await fourthArea.addService(Machinelearning8.id)
  await fourthArea.addService(Machinelearning9.id)
  await fourthArea.addService(Machinelearning10.id)

  await firstArea.addRoleArea(secondRoleArea.id)
  await firstArea.addRoleArea(thirdRoleArea.id)
  await firstArea.addRoleArea(firstRoleArea.id)
  await firstPerson.addRoleService(firstRoleService.id)
  await firstPerson.addRoleService(RoleService1.id)
  await firstPerson.addRoleService(RoleService2.id)
  await firstPerson.addRoleArea(firstRoleArea.id)
  await secondPerson.addRoleService(secondRoleService.id)
  await secondPerson.addRoleArea(secondRoleArea.id)
  await firstPerson.addRoleArea(thirdRoleArea.id)
  await thirdPerson.addRoleService(secondRoleService.id)
  await thirdPerson.addRoleArea(secondRoleArea.id)
  await Person4.addRoleService(secondRoleService.id)
  await Person4.addRoleArea(secondRoleArea.id)
  await Person5.addRoleService(secondRoleService.id)
  await Person5.addRoleArea(secondRoleArea.id)
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
