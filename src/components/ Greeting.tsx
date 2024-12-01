import React from 'react';

// Define the type for the props
interface GreetingProps {
  name: string; // 'name' should be a string
}

// Define the Greeting component with the type of the props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
