# pnpm-example



- package.jsonのworkspacesは書かず、pnpm-workspace.yamlで管理
linter,formatter,typeなどはrootで管理
- rootのpackage.jsonは何もインストールしない,devDependencyも各ワークスペースに書く

```bash
pnpm --filter "package-a" install cowsay
pnpm --filter "package-a" install -D typescript
```

```bash
pnpm --filter "package-a" build
```

```bash
pnpm i -wD typescript prettier eslint
```

```bash
pnpm --filter "app-a" add package-a
```

```bash
cd apps/app-a
pnpm i @pnpm-example/package-a
```

https://github.com/microsoft/TypeScript/issues/30693

