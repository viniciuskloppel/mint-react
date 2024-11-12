# Mint

**Mint** is a React library that provides a set of components for easy date formatting and display within JSX. It offers flexible subcomponents corresponding to common JavaScript `Date` methods, simplifying the process of rendering dates in various formats in your React applications.

## Table of Contents

- [Mint](#mint)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)
    - [Standalone Subcomponents](#standalone-subcomponents)
  - [API](#api)
    - [`<Mint>`](#mint-1)
    - [Subcomponents](#subcomponents)
  - [License](#license)

## Installation

You can install **Mint** using npm or pnpm:

```bash
npm install mint-react
```

or

```bash
pnpm add mint-react
```

## Usage

### Basic Usage

To use **Mint**, wrap your components with the `<Mint>` provider. This allows all nested subcomponents to access the provided date context.

```jsx
import React from 'react';
import Mint from 'mint-react';

const App = () => {
  const specificDate = new Date('2024-02-16');

  return (
    <Mint value={specificDate}>
      <div>
        <p>
          Date String: <Mint.ToDateString />
        </p>
        <p>
          Locale String:{' '}
          <Mint.ToLocaleString locales="en-US" options={{ weekday: 'long' }} />
        </p>
        <p>
          ISO String: <Mint.ToISOString />
        </p>
        <p>
          UTC String: <Mint.ToUTCString />
        </p>
        <p>
          Time String: <Mint.ToTimeString />
        </p>
        <p>
          Locale Date String: <Mint.ToLocaleDateString locales="en-GB" />
        </p>
      </div>
    </Mint>
  );
};

export default App;
```

### Standalone Subcomponents

You can also use subcomponents independently by providing the `value` prop directly.

```jsx
import React from 'react';
import Mint from 'mint-react';

const App = () => {
  const specificDate = new Date('2024-02-16');

  return (
    <div>
      <p>
        Date String: <Mint.ToDateString value="2024-02-16" />
      </p>
      <p>
        Locale String:{' '}
        <Mint.ToLocaleString value={specificDate} locales="en-GB" />
      </p>
    </div>
  );
};

export default App;
```

## API

### `<Mint>`

- **Props:**
  - `value` _(optional)_ - A valid date input (`string | number | Date`) to provide context to child subcomponents.
  - `children` - React nodes that can utilize the date context.

### Subcomponents

Each subcomponent corresponds to a specific `Date` method and can be used either within the `<Mint>` provider or standalone by passing the `value` prop.

- **`<Mint.ToDateString />`**

  - **Description:** Renders the date as a string using `Date.prototype.toDateString()`.
  - **Props:**
    - `value` _(optional)_ - A valid date input.

- **`<Mint.ToLocaleString locales?: string | string[], options?: Intl.DateTimeFormatOptions />`**

  - **Description:** Renders the date using `Date.prototype.toLocaleString()`.
  - **Props:**
    - `value` _(optional)_ - A valid date input.
    - `locales` _(optional)_ - A locale string or array of locale strings.
    - `options` _(optional)_ - Formatting options.

- **`<Mint.ToISOString />`**

  - **Description:** Renders the date in ISO format using `Date.prototype.toISOString()`.
  - **Props:**
    - `value` _(optional)_ - A valid date input.

- **`<Mint.ToUTCString />`**

  - **Description:** Renders the date in UTC string format using `Date.prototype.toUTCString()`.
  - **Props:**
    - `value` _(optional)_ - A valid date input.

- **`<Mint.ToTimeString />`**

  - **Description:** Renders the time portion of the date using `Date.prototype.toTimeString()`.
  - **Props:**
    - `value` _(optional)_ - A valid date input.

- **`<Mint.ToLocaleDateString locales?: string | string[], options?: Intl.DateTimeFormatOptions />`**

  - **Description:** Renders the date using `Date.prototype.toLocaleDateString()`.
  - **Props:**
    - `value` _(optional)_ - A valid date input.
    - `locales` _(optional)_ - A locale string or array of locale strings.
    - `options` _(optional)_ - Formatting options.

- **Other Subcomponents:**
  - `<Mint.GetDate />`
  - `<Mint.GetDay />`
  - `<Mint.GetFullYear />`
  - `<Mint.GetHours />`
  - `<Mint.GetMilliseconds />`
  - `<Mint.GetMinutes />`
  - `<Mint.GetMonth />`
  - `<Mint.GetSeconds />`
  - `<Mint.GetTime />`
  - `<Mint.GetTimezoneOffset />`
  - `<Mint.GetUTCDate />`
  - `<Mint.GetUTCDay />`
  - `<Mint.GetUTCFullYear />`
  - `<Mint.GetUTCHours />`
  - `<Mint.GetUTCMilliseconds />`
  - `<Mint.GetUTCMinutes />`
  - `<Mint.GetUTCMonth />`
  - `<Mint.GetUTCSeconds />`
  - `<Mint.ToString />`

Each subcomponent can accept parameters as required by their corresponding `Date` methods.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using **Mint**! If you have any questions, issues, or suggestions, feel free to open an issue on the [GitHub repository](https://github.com/viniciuskloppel/mint-react/issues).
