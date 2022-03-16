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