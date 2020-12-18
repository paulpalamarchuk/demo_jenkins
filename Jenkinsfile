pipeline {
    agent {
        options {timestamps()}
    }
    stages {
        stage('Build Docker') {
            steps {
                sh ("docker build -t nginx_node:${env.APP_VER} .")
            }
        }
        stage('Run Docker') {
            steps {
                sh ("docker run -d --rm -p ${env.APP_PORT}:80 nginx_node:${env.APP_VER}")
            }
        }
    }
}
