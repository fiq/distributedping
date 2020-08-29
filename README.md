# distributedping with Motoko

This is an experiment to test out builds for the distributed
[internet computer](https://dfinity.org/) and how its protocol works etc. The goal 
is to use it to ping response times to a particular host from across the Grid - if possible.

It is implemented in server side [Motoko](https://sdk.dfinity.org/docs/language-guide/motoko.html) and client side js/react.

Currently it runs server side motoko app in the grid and queries it from a react app.

```bash
cd distributedping/
# Install DFX SDK
sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
npm i
dfx start &
dfx canister create --all
dfx build
dfx canister install --all 

# After modifications
dfx canister install --all --mode='reinstall'
```

Access the application with the generated cansiter id. See Motoko / Dfinity [Docs](https://sdk.dfinity.org/docs/quickstart/quickstart.html)
for more info

> :warning: **The Attacked Dockerfile is still WIP**

# The Internet Computer

As someone excited by the original Grid concepts, I think there is great resemblance in the goals of the Internet Computer as I understand it.

To learn more before you start working with distributedping, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)

