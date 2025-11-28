export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'interactive' | 'quiz';
  duration: string;
  completed?: boolean;
  content?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  estimatedTime: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  modules: Module[];
  thumbnail?: string;
  totalLessons: number;
  estimatedTime: string;
  tags: string[];
}

export const courses: Course[] = [
  {
    id: 'python-fundamentals',
    title: 'Python Programming Fundamentals',
    description: 'Master Python from scratch with hands-on projects and real-world applications. Perfect for beginners with no prior coding experience.',
    category: 'Programming',
    level: 'Beginner',
    totalLessons: 24,
    estimatedTime: '8 weeks',
    tags: ['Python', 'Programming', 'Fundamentals'],
    modules: [
      {
        id: 'intro-python',
        title: 'Introduction to Python',
        description: 'Learn Python basics, setup, and your first program',
        estimatedTime: '2 weeks',
        lessons: [
          {
            id: 'what-is-python',
            title: 'What is Python?',
            type: 'video',
            duration: '15 min',
            content: 'Python is a high-level, interpreted programming language known for its simplicity and readability...'
          },
          {
            id: 'installing-python',
            title: 'Installing Python & Setting Up',
            type: 'interactive',
            duration: '20 min'
          },
          {
            id: 'first-program',
            title: 'Your First Python Program',
            type: 'video',
            duration: '25 min'
          },
          {
            id: 'quiz-intro',
            title: 'Introduction Quiz',
            type: 'quiz',
            duration: '10 min'
          }
        ]
      },
      {
        id: 'variables-datatypes',
        title: 'Variables and Data Types',
        description: 'Understanding variables, data types, and basic operations',
        estimatedTime: '2 weeks',
        lessons: [
          {
            id: 'variables',
            title: 'Variables in Python',
            type: 'video',
            duration: '18 min'
          },
          {
            id: 'numbers',
            title: 'Working with Numbers',
            type: 'interactive',
            duration: '22 min'
          },
          {
            id: 'strings',
            title: 'Strings and Text',
            type: 'video',
            duration: '20 min'
          },
          {
            id: 'quiz-datatypes',
            title: 'Data Types Quiz',
            type: 'quiz',
            duration: '10 min'
          }
        ]
      }
    ]
  },
  {
    id: 'javascript-web',
    title: 'JavaScript for Web Development',
    description: 'Learn JavaScript to build interactive websites and modern web applications with real projects.',
    category: 'Web Development',
    level: 'Beginner',
    totalLessons: 28,
    estimatedTime: '10 weeks',
    tags: ['JavaScript', 'Web', 'Frontend'],
    modules: [
      {
        id: 'js-basics',
        title: 'JavaScript Basics',
        description: 'Core concepts and fundamentals of JavaScript',
        estimatedTime: '3 weeks',
        lessons: [
          {
            id: 'intro-js',
            title: 'Introduction to JavaScript',
            type: 'video',
            duration: '20 min'
          },
          {
            id: 'dom-manipulation',
            title: 'DOM Manipulation',
            type: 'interactive',
            duration: '30 min'
          }
        ]
      }
    ]
  },
  {
    id: 'data-structures',
    title: 'Data Structures & Algorithms',
    description: 'Master essential data structures and algorithms for technical interviews and problem-solving.',
    category: 'Computer Science',
    level: 'Intermediate',
    totalLessons: 32,
    estimatedTime: '12 weeks',
    tags: ['Algorithms', 'Data Structures', 'Problem Solving'],
    modules: [
      {
        id: 'arrays-strings',
        title: 'Arrays and Strings',
        description: 'Master array and string manipulation',
        estimatedTime: '2 weeks',
        lessons: [
          {
            id: 'array-basics',
            title: 'Array Fundamentals',
            type: 'video',
            duration: '25 min'
          }
        ]
      }
    ]
  },
  {
    id: 'web-fullstack',
    title: 'Full-Stack Web Development',
    description: 'Build complete web applications from frontend to backend with modern technologies.',
    category: 'Web Development',
    level: 'Advanced',
    totalLessons: 42,
    estimatedTime: '16 weeks',
    tags: ['Full-Stack', 'React', 'Node.js', 'Databases'],
    modules: [
      {
        id: 'frontend-react',
        title: 'Frontend with React',
        description: 'Build modern UIs with React',
        estimatedTime: '4 weeks',
        lessons: []
      }
    ]
  }
];
