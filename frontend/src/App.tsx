// src/App.tsx

import React from 'react';
import { User } from '@shared';
import { Button } from './components/ui/button';

const user: User = {
  username: 'john_doe',
  email: 'john_doe@example.com'
};

const App: React.FC = () => {
  return (
    <div>
      <div>
        <h1>{user.username}</h1>
        <p>{user.email}</p>
      </div>
      <div className="min-h-screen bg-gray-100 font-sans flex justify-center items-center">
        <Button>
          Click Me
        </Button>
      </div>
    </div>
  );
};

export default App;
