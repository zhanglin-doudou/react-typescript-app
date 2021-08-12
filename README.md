# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start

### Install VSCode plugins

- [ESlint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Install packages

```bash
yarn
```

### Scripts

```bash
yarn start # start project

yarn test  # run test cases

yarn build # build project with production
```

## Development

### Rules

- Always use **interface** for **public API’s definition** when authoring a library or 3rd-party ambient type definitions.
- Always use **type** for your React Component **Props and State**, because it is more constrained.
- Always add descriptive comments to your props using the TSDoc notation /\*_ comment _/.
- When props are optional, use **default values**.
- If add third parties must be with **@types** packages which is the TypeScript type definitions.
- Always commit by **Git commands**, as this tirggers husky hooks.

### For Example

- Function

```ts
import React from 'react';

// Written as a function declaration
function Heading(): React.ReactElement {
  return <h1>My Website Heading</h1>;
}

// Written as a function expression. React.FC is discouraged.
const OtherHeading = (props: Props) => <h1>My Website Heading</h1>;
```

- useState

```ts
type User = {
  email: string;
  id: string;
};

// together generic and union, TypeScript knows, "Ah, user can be User or null".
const [user, setUser] = useState<User | null>(null);
```

- onchange

```ts
import React from 'react';

const MyInput = () => {
  const [value, setValue] = React.useState('');

  // The event type is a "ChangeEvent"
  // We pass in "HTMLInputElement" to the input
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return <input value={value} onChange={onChange} id="input-example" />;
};
```

- type extends by &

```ts
type ButtonProps = {
  /** the background color of the button */
  color: string;
  /** the text to show inside the button */
  text: string;
};

type ContainerProps = ButtonProps & {
  /** the height of the container (value used with 'px') */
  height: number;
};
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

[React with Typescript best practices](https://www.sitepoint.com/react-with-typescript-best-practices/)

[React Typescript cheatsheets](https://github.com/typescript-cheatsheets/react)
