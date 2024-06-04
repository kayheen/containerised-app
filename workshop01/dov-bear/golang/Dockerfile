# create first container for building (jdk if java)
FROM golang:1.22.3-alpine3.20 AS builder


WORKDIR /app

# when buidling, don't need the artifacts (public, template)
COPY go.mod . 
COPY go.sum . 
COPY main.go .

# build an executable called main 
RUN go build -o main main.go 

# creating a second container (jre if java)
FROM alpine:3.20 

WORKDIR /app 

# copy the executable called main. 
COPY --from=builder /app/main main
COPY public public 
COPY templates templates

RUN apk update && apk add curl

ENV PORT=3000

EXPOSE ${PORT}

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
   CMD curl -s http://localhost:${PORT}/healthz || exit 1

ENTRYPOINT /app/main

