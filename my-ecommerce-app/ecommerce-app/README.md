## How to use Jenkins on Docker
# install Docker if not installed
sudo apt update
sudo apt install docker.io -y
# start Docker
sudo systemctl start docker
sudo systemctl enable docker
# Check the version
docker --version
# Run Jenkins 
docker run -d -p 8080:8080 -p 50000:50000 --name jenkins jenkins/jenkins:lts
# Jenkins password
docker logs jenkins
98b1ff7b066b4064b73e2c172d60a5dd

# Find What Program Is Using Port 8080
sudo lsof -i :8080
# Check real-time logs of a service.
sudo journalctl -u jenkins -f
