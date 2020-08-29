FROM alpine
RUN apk update && apk upgrade
RUN apk add nodejs
RUN apk add npm
RUN apk add curl
RUN mkdir -p /src/internet-comptuer/dfx
WORKDIR /src/internet-computer/dfx
RUN sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

WORKDIR /app
ADD . /app
RUN npm i
# FIXME
RUN sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
RUN dfx start &
RUN dfx canister create --all
RUN dfx build
RUN dfx canister install --all --mode='reinstall'

ENTRYPOINT [ "fg" ]
