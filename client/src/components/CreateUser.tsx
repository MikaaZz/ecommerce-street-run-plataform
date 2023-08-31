import * as React from 'react';

const CreateUser: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));;

      // const data = await response.json();
      // if (data.status === 'success') {
      //   // Handle success (e.g., navigate to a different page or show a success message)
      // } else {
      //   // Handle error
      // }
    } catch (error) {
      console.error('There was an error creating the user', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Create User</button>
    </form>
  )
}
export default CreateUser;
