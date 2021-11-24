# CHANGELOG

## 2021.11.24

- Field Array Structure Implementation

  - FieldArrayInput
  - FieldArrayInputRender
  - Component Type enabled: `'text' | 'switch' | 'check-group' | 'checkbox' | 'file-dropzone' | 'number' | 'radio' | 'select'`
  - sample field array page

## 2021.11.22

- Update of dependencies due Vercel indicated bugs
- TextInput improved to render based on types `text | password | mask |"text-area`, being the `text` the default render
  - add `antd-mask-input` dependency
- update checkbox and select inputs
- add `Less` support to improve Ant Design customization
- improve header with dropdown menu implementation
  - possibility of indicate if the menu appears on header or dropdown

## 2021.11.20

- Add `Tsrynge` and `reflect metadata` to implement server container dependencies
  - Enable to implement Repositories / Services classes used on backend
- Implementation of basic CRUD Value Repository and api endpoints
- add base context api code for context hook implementations
- add axios for http requests
- add base client api based on axios
- implement value resource hook from sample api with crud client calls
  - included provider of this on SampleApi provider
- implement Index values page consuming values from context hook
- Crud functionalities pages based on crud api for `ValueDTO`
- enforces input attributes from form interface based on React Hook Form integration
- add label to inputs
- password input
- improve File Dropzone implementation
- Select input implementations
- suffix and prefix text input enable
- radio input implementation
- check box and check group components
- switch components
- base layout fix
- input number
- add tooltip to inputs
- header and layout updates

## 2021.11.16

- `yarn create next-app --typescript`: bootstrap nextjs project
- `yarn add -D prettier`: add prettier
- add editorconfig
- fix default project structure by arranging `pages` and `styles` folders inside `src`
- [tailwindcss configuration css class utilities](https://tailwindcss.com/docs/guides/nextjs)
- test tailwind configuration on index.ts referencing [with tailwind sample](https://github.com/vercel/next.js/blob/canary/examples/with-tailwindcss/pages/index.js)
- [add ant design for built UI components](https://ant.design/components/overview/)
- add [react hook form](https://react-hook-form.com) for forms implementation
- nextjs link usage samples
- header and footer layouts
- header link component
- header navigation links updates
- add react dropzone
- integration of react dropzone with react hook form
