FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM node:alpine AS runner
WORKDIR /app
COPY --from=builder /app/build . 
RUN yarn global add serve
CMD ["serve", "-p", "3000", "-s", "."]