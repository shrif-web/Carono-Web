# Carono-Web
This is a repo that demonstrates using nginx as a reverse proxy for a Golang and a Nodejs web application

### Live Demo available at [web.carono.ir](http://web.carono.ir)

Tested against a fresh Ubuntu 20.04 LTS 
## Steps
1- for simplicity we use root user and /root directory. so switch to root user and run:
```
cd /root
chmod +rx .
git clone https://github.com/shrif-web/Carono-Web/
cd Carono-Web
```
2- setup nginx configuration:
```
rm /etc/nginx/nginx.conf
cp nginx/nginx.conf /etc/nginx
```
3- setup systemd services for go and node:
```
cp services/* /etc/systemd/system
```

4- enable and start those services:
```
systemctl enable node-service
systemctl enable go-service
systemctl start node-service
systemctl start go-service
```
