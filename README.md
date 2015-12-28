# react-form
[![Build Status](https://travis-ci.org/doctolib/react-form.svg?branch=master)](https://travis-ci.org/doctolib/react-form)
[![Coverage Status](https://coveralls.io/repos/doctolib/react-form/badge.svg?branch=master&service=github)](https://coveralls.io/github/doctolib/react-form?branch=master)
[![Dependency Status](https://david-dm.org/doctolib/react-form.svg?theme=shields.io)](https://david-dm.org/doctolib/react-form)
[![devDependency Status](https://david-dm.org/doctolib/react-form/dev-status.svg?theme=shields.io)](https://david-dm.org/doctolib/react-form#info=devDependencies)

Set of React form components based on react-formsy.

## Install

```
npm install @doctolib/react-form
```

## Usage

### Form

Refer to [formsy-react](https://github.com/christianalfoni/formsy-react#how-to-use).

```js
import {Form} from '@doctolib/react-form';
const Component = () => <Form/>;
```

### Input

Input component.

```js
import {Input} from '@doctolib/react-form';
const Component = () => <Input name="firstname"/>;
```

### Textarea

Textarea component.

```js
import {Textarea} from '@doctolib/react-form';
const Component = () => <Textarea name="comment"/>;
```

### Select

Select component.

```js
import {Select} from '@doctolib/react-form';
const Component = () => <Select options={{value: 'Label'}} name="select"/>;
```

## License

MIT