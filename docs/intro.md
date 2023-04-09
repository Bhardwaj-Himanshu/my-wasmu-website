---
sidebar_position: 1
---

# 1. Tutorial

Let's discover **WasmEdge in less than 5 minutes**.

## Quick Install

The easiest way to install WasmEdge is to run the following command. Your system should have git and curl as prerequisites.

```bash
curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash
```

For Windows 10, you could use Windows Package Manager Client (aka winget.exe) to install WasmEdge with a single command in your terminal.

```bash
winget install wasmedge
```

For vcpkg users there is a wasmedge port that can be installed with the following command or by adding it to dependencies section of your vcpkg.json file. The port is useful in both scenarios: it can be embedded into a C/C++ application and it can also be run as a standalone tool.

```bash
vcpkg install wasmedge
```

If you would like to install WasmEdge with its Tensorflow and image processing extensions, please run the following command. It will attempt to install WasmEdge with the tensorflow and image extensions on your system.

```bash
curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -e all
```

Run the following command to make the installed binary available in the current session.

```bash
source $HOME/.wasmedge/env
```

That's it! You can now use WasmEdge from the CLI, or launch it from an application. To update WasmEdge to a new release, just re-run the above command to write over the old files.
