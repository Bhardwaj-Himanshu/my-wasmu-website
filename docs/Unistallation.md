---
sidebar_position: 2.1
---

# 2. Unistallation

To uninstall WasmEdge, you can run the following command.

```bash
bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh)
```

If the wasmedge binary is not in PATH and it wasn't installed in the default $HOME/.wasmedge folder, then you must provide the installation path.

```bash
bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh) -p /path/to/parent/folder
```

If you wish to uninstall uninteractively, you can pass in the --quick or -q flag.

```bash
bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh) -q
```

```bash
If a parent folder of the wasmedge binary contains .wasmedge, the folder will be considered for removal. For example, the script removes the default $HOME/.wasmedge folder altogether.
```

If you used winget to install WasmEdge, run the following command.

```bash
`winget` uninstall wasmedge
```
