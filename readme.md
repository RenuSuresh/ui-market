docker build -t ui-marketplace-web -f apps/web/Dockerfile .
docker run -p 3000:3000 ui-marketplace-web
