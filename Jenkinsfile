pipeline {
    agent any

    environment {
        IMAGE_NAME = "akwasi84/jenkins-cicd-app"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/champcloud514/jenkins-docker-cicd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'akwasi84',
                    passwordVariable: 'PerezAndJesse@2016'
                )]) {
                    sh 'docker login -u $USERNAME -p $PASSWORD'
                }
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy to Server') {
            steps {
                sh '''
                ssh user@SERVER_IP docker pull $IMAGE_NAME
                ssh user@SERVER_IP docker stop app || true
                ssh user@SERVER_IP docker rm app || true
                ssh user@SERVER_IP docker run -d -p 80:5000 --name app $IMAGE_NAME
                '''
            }
        }
    }
}
