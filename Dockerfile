#Base Image
FROM github.com/sravantony2/sravantony3:master

WORKDIR /bot/

CMD ["bash", "start.sh"]
