---
sidebar_position: 1
---

# What's Installed

Check, **What is installed in your system?**

After installation, you have the following directories and files. Here we assume that you installed into the `$HOME/.wasmedge` directory. You could also change it to `/usr/local` if you did a system-wide install. If you used `winget` to install `WasmEdge`, the files are located at `C:\Program Files\WasmEdge`.

For the full options of the `WasmEdge` installer, please refer to the document here.

- The `$HOME/.wasmedge/bin` directory contains the `WasmEdge Runtime CLI` executable files. You can copy and move them around on your file system.
  - The wasmedge tool is the standard WasmEdge runtime. You can use it from the CLI.
    - Execute a WASM file: `wasmedge --dir .:. app.wasm`
  - The wasmedgec tool is the `ahead-of-time (AOT) compiler` to compile a `.wasm` file into a native `.so` file (or `.dylib` on MacOS, `.dll` on Windows, or `.wasm` as the universal WASM format on all platforms). The wasmedge can then execute the output file.
    - Compile a WASM file into a AOT-compiled WASM: `wasmedgec app.wasm app.so`
    - Execute the WASM in AOT mode: `wasmedge --dir .:. app.so`
  - The `wasmedge-tensorflow`, `wasmedge-tensorflow-lite` tools are runtimes that support the `WasmEdge tensorflow extension`.
- The `$HOME/.wasmedge/lib` directory contains WasmEdge shared libraries, as well as dependency libraries. They are useful for WasmEdge SDKs to launch WasmEdge programs and functions from host applications.
- The `$HOME/.wasmedge/include` directory contains the WasmEdge header files. They are useful for WasmEdge SDKs.
- The `$HOME/.wasmedge/plugin` directory contains the plug-ins for WasmEdge.
