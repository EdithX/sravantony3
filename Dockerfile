#Base Image
FROM ghcr.io/sravantony2/sravantony3:master

WORKDIR /bot/

CMD ["bash", "start.sh"]
