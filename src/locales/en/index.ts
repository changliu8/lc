export default {
  download: 'Download PDF',
  anchor: {
    a1: 'Education',
    a2: 'Professional',
    a3: 'Experience',
    a4: 'Project',
  },
  avatar: {
    p1: 'ALWAYS',
    p2: '永远都在路上永远下个山脚见!',
    //p3: '很多东西今生只可给你\n保守至到永久\n别人如何明白透'
  },
  baseinfo: {
    title: 'Basic information',
    r1: 'Name',
    r1v: 'Chang Liu',
    r2: 'Education',
    r2v: 'Master of Computer Science in Concentration Applied Artificial Intelligence',
    //r3: 'Experience',
    //r3v: '1.5 years',
    //r4: 'location',
    //r4v: 'Chengdu High-tech Zone',
    r5: 'Job intention',
    r5v: 'Machine Learning Engineer',
  },
  contact: {
    title: 'Contact',
    r1: 'Telphone',
    r2: 'Email',
    r4: 'Blog',
  },
  hobbies: 'Hobbies',
  education: {
    title: 'Education',
    r2: 'Bachlor: Carleton University / Computer Science (GPA: 10.18/12)',
    r2v: 'September 2017 - August 2022',
    r1: 'Master: University of Ottawa / Applied Artificial Intelligence (GPA: 9.6/10)',
    r1v: 'September 2022 - September 2024',
  },
  skill: {
    title: 'Professional skills',

    p1: `2+ years research experience in Applied AI, DL, DRL and Query Optimization.`,

    p2: `Skilled in Python, Java, C++, and SQL.`,

    p3: `Familiar with python libaries such as :PyTorch, TensorFlow, Scikit-Learn, NumPy, and Pandas.`,

    p4: `In-depth knowledge of GNNs, RNNs, CNNs and MLP.`,

    p5: `Practical experience with Reinforcement Learning algorithms such as DQN, Dueling-DQN, Double-DQN, and Actor-Critic.`,

    p6: `Familiar with data visulization tool, espicailly Matplotlib.`,

    p7: `Proven ability to work effectively in team settings, contributing to projects with strong teamwork and communication skills.`,

    p8: `Passionate about leveraging AI to create practical solutions that benefit industries.`,
  },
  work: 'Work Experience',
  responsibilities: 'Job content and responsibilities',
  wskp: {
    name: 'Ford Motor Company - Test Automation (Co-op)',
    time: 'September 2020 - December 2022',
    d1: 'Collaborate with development, engineering, and test teams to create test in Python from software requirements and architecture.',
    d2: 'Conduct automated software testing for ECUs (Electronic control units) in Ford vehicles through Jenkins.',
    d3: 'Participate in continuous quality improvement initiatives, including root cause analysis, defects triage, fix validation.',
    d4: 'Maintaining automated test libraries and tools for team convience.',
    d5: 'Acquired working proficiencies in issue tracking and project management with Jira and Dashboard.',
    d6: 'Delivered induction training to other co-op interns.',
  },
  ford: 'Automation',
  ibm: 'Query Optimization',
  ta: 'Communication skills',
  refactor: 'Refactor',
  contributions: 'Contributions',
  hard: 'Difficulties',
  proEdr: {
    name: 'Automation Scripts',
    description:
      'Writing automation scripts to significantly enhance productivity by automating repetitive tasks using Python and Bash, and hosting them on Jenkins to execute on multiple machines.',
      
    c1: `Reduce the time spent on repetitive tasks by automating the process of loading tokens for multiple ECUs.`,

    c2: `Avoid remote in the machine to manually load tokens, which is time-consuming and error-prone.`,
    
    c3: `Adapt versions changes of the realeased build.`,
    
    c4: `Building neat and clean interfaces for the scripts, making them easy to use and understand.`,
    
    c5: `Conducting documentation for the scripts, making them easy to maintain and update, even for new team members.`,
    
    c6: `Integrate the scripts into pipelines, ensure the process is smooth and efficient.`,   
  },
  uni: {
    name: 'Carleton University / University of Ottawa - Teaching Assistant',
    time: 'September 2020 - April 2024',
    description:
      'Supporting the professor in the delivery of the course, including preparing and delivering lectures, grading assignments, and providing feedback to students.',
    c1: `Conduct seminars, discussions and laboratory sessions to suppplement the course content.`,
    c2: `Grade exaiminations and assignments, provide feedback to students.`,
  },
  aili: {
    name: 'IBM - CAS Project Student',
    time: 'February 2023 - September 2024',
    r1: "Evolving database optimization technology using AI.",
    r2: 'Using representation learning to capture the representation of queries, tables and columns.',
    r3: 'Using reinforcement learning to select join orders for queries.',
    r4: 'Trying to use different frameworks, architectures and algorithms to improve the performance of the model.',
    r5: 'Collaborated with DBMS experts to improve my work.',
    r6: 'Delivering ideas and results to the team and improve based on feedback.',
    pj: 'Join Order Enumerator',
    pjDesc:
      'Select the join order for a query to minimize the cost of executing the query using DRL.',
    para: `Join order selection is a critical problem in query optimization. The number of possible join orders grows factorially with the number of tables in the query, making it infeasible to enumerate all possible join orders. In this project, we propose a novel approach to this problem using deep reinforcement learning (DRL). We train an agent to select the join order for a query.`,
    c1: 'Employ multiple distinct neural networks to capture the representation of queries, tables, and columns.',
    c2: 'Compare the performance of different DRL algorithms, including DQN, Dueling-DQN, Double-DQN, and Actor-Critic.',
    c3: 'Conduct extensive experiments on real-world datasets to evaluate the performance of the model.',
    h1: 'Unstable training process in reinforcement learning.',
    h2: 'Extract information from queries and convert them into a format that can be used by neural networks.',
    g1: '- From the traditional static page development model to the modern front-end engineering development model.',
    g2: '-Learn BootStrap, customize UI components, and re-encapsulate.',
    g3: '- Master the application of responsive layout, transition and animation.',
    g4: '- Change the way of thinking of traditional DOM operations and understand the core idea of state change view.',
    g5: '- Understand and master the idea of componentization through learning and using React.',
  },
  personal: {
    title: 'Project',
    r1: 'Animal Saving Shelter Android App',
    recommend: 'Recommend',
    b1: 'Android Studio',
    b3: 'Java',
    b5: 'Paypal API',
    b6: 'FireBase',
    open: 'Open source',
    article: 'Recent articles',
  },

  thanks: {
    title: 'Acknowledgments',
    p1: 'Thank you for taking the time to read my resume. My name is Yinsheng Fu.  ^_^ ',
    p2: 'A front-end engineer who likes badminton, I look forward to the opportunity to work with you!'
  }
}
