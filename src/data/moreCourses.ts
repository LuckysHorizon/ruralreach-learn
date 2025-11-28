import { Course } from './courses';

export const additionalCourses: Course[] = [
  {
    id: 'react-frontend',
    title: 'React Frontend Development',
    description: 'Build modern, interactive user interfaces with React. Learn hooks, state management, and component architecture.',
    category: 'Web Development',
    level: 'Intermediate',
    totalLessons: 30,
    estimatedTime: '10 weeks',
    tags: ['React', 'Frontend', 'JavaScript', 'UI/UX'],
    modules: [
      {
        id: 'react-basics',
        title: 'React Fundamentals',
        description: 'Learn the core concepts of React',
        estimatedTime: '3 weeks',
        lessons: [
          {
            id: 'intro-react',
            title: 'Introduction to React',
            type: 'video',
            duration: '20 min',
            youtubeVideos: [
              {
                id: 'Tn6-PIqc4UM',
                title: 'React in 100 Seconds',
                description: 'Quick introduction to React framework',
                duration: '2:25'
              },
              {
                id: 'SqcY0GlETPk',
                title: 'React Tutorial for Beginners',
                description: 'Complete React tutorial from scratch',
                duration: '2:25:48'
              }
            ]
          },
          {
            id: 'jsx-components',
            title: 'JSX and Components',
            type: 'code',
            duration: '30 min',
            codeLanguage: 'javascript',
            codeTemplate: `// React Component Example
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="React Learner" />
    </div>
  );
}

export default App;`
          },
          {
            id: 'react-quiz',
            title: 'React Basics Quiz',
            type: 'quiz',
            duration: '15 min'
          }
        ]
      }
    ]
  },
  {
    id: 'nodejs-backend',
    title: 'Node.js Backend Development',
    description: 'Master server-side JavaScript with Node.js, Express, and RESTful API development.',
    category: 'Backend',
    level: 'Intermediate',
    totalLessons: 28,
    estimatedTime: '10 weeks',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    modules: [
      {
        id: 'node-intro',
        title: 'Node.js Fundamentals',
        description: 'Understanding Node.js runtime and npm',
        estimatedTime: '2 weeks',
        lessons: [
          {
            id: 'what-is-node',
            title: 'What is Node.js?',
            type: 'video',
            duration: '18 min',
            youtubeVideos: [
              {
                id: 'TlB_eWDSMt4',
                title: 'Node.js Tutorial for Beginners',
                description: 'Learn Node.js from scratch',
                duration: '1:02:03'
              }
            ]
          },
          {
            id: 'first-server',
            title: 'Your First Node Server',
            type: 'code',
            duration: '25 min',
            codeLanguage: 'javascript',
            codeTemplate: `// Simple Node.js HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`
          }
        ]
      }
    ]
  },
  {
    id: 'mobile-flutter',
    title: 'Mobile Development with Flutter',
    description: 'Build beautiful cross-platform mobile apps for iOS and Android using Flutter and Dart.',
    category: 'Mobile Development',
    level: 'Intermediate',
    totalLessons: 35,
    estimatedTime: '12 weeks',
    tags: ['Flutter', 'Dart', 'Mobile', 'Cross-platform'],
    modules: [
      {
        id: 'flutter-basics',
        title: 'Flutter Fundamentals',
        description: 'Getting started with Flutter development',
        estimatedTime: '3 weeks',
        lessons: [
          {
            id: 'intro-flutter',
            title: 'Introduction to Flutter',
            type: 'video',
            duration: '22 min',
            youtubeVideos: [
              {
                id: 'VPvVD8t02U8',
                title: 'Flutter Course for Beginners',
                description: 'Complete Flutter tutorial for beginners',
                duration: '37:17:27'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ml-python',
    title: 'Machine Learning with Python',
    description: 'Learn machine learning algorithms, data science, and AI with Python, NumPy, Pandas, and Scikit-learn.',
    category: 'Data Science',
    level: 'Advanced',
    totalLessons: 40,
    estimatedTime: '14 weeks',
    tags: ['Machine Learning', 'Python', 'AI', 'Data Science'],
    modules: [
      {
        id: 'ml-intro',
        title: 'Introduction to Machine Learning',
        description: 'Understanding ML concepts and workflows',
        estimatedTime: '3 weeks',
        lessons: [
          {
            id: 'what-is-ml',
            title: 'What is Machine Learning?',
            type: 'video',
            duration: '25 min',
            youtubeVideos: [
              {
                id: 'i_LwzRVP7bg',
                title: 'Machine Learning Tutorial Python',
                description: 'Complete machine learning course',
                duration: '10:46:10'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'devops-basics',
    title: 'DevOps Fundamentals',
    description: 'Learn DevOps practices, CI/CD pipelines, Docker, Kubernetes, and cloud deployment.',
    category: 'DevOps',
    level: 'Advanced',
    totalLessons: 32,
    estimatedTime: '12 weeks',
    tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
    modules: [
      {
        id: 'devops-intro',
        title: 'Introduction to DevOps',
        description: 'Understanding DevOps culture and practices',
        estimatedTime: '2 weeks',
        lessons: [
          {
            id: 'what-is-devops',
            title: 'What is DevOps?',
            type: 'video',
            duration: '20 min',
            youtubeVideos: [
              {
                id: 'j5Zsa_eOXeY',
                title: 'DevOps Tutorial for Beginners',
                description: 'Complete DevOps course',
                duration: '2:21:00'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sql-databases',
    title: 'SQL and Database Design',
    description: 'Master SQL queries, database design, normalization, and work with PostgreSQL and MySQL.',
    category: 'Database',
    level: 'Beginner',
    totalLessons: 25,
    estimatedTime: '8 weeks',
    tags: ['SQL', 'Database', 'PostgreSQL', 'MySQL'],
    modules: [
      {
        id: 'sql-basics',
        title: 'SQL Fundamentals',
        description: 'Learn SQL queries and database basics',
        estimatedTime: '3 weeks',
        lessons: [
          {
            id: 'intro-sql',
            title: 'Introduction to SQL',
            type: 'video',
            duration: '18 min',
            youtubeVideos: [
              {
                id: 'HXV3zeQKqGY',
                title: 'SQL Tutorial - Full Database Course',
                description: 'Complete SQL course for beginners',
                duration: '4:20:26'
              }
            ]
          },
          {
            id: 'first-query',
            title: 'Your First SQL Query',
            type: 'code',
            duration: '20 min',
            codeLanguage: 'sql',
            codeTemplate: `-- Your First SQL Query
-- Select all columns from a table
SELECT * FROM students;

-- Select specific columns
SELECT name, grade FROM students;

-- Filter with WHERE clause
SELECT name, grade 
FROM students 
WHERE grade >= 90;`
          }
        ]
      }
    ]
  }
];
