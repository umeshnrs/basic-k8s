pipeline {
    agent any
    environment {
        DOCKER_REGISTRY = "docker.io"
        DOCKER_REPOSITORY = "umesh2645/pfc"
        DOCKER_TAG = "latest"
    }
    stages {
        stage('Git code checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'b7c98940-a88a-4960-bdb8-6585edcb9ba3', url: 'https://github.com/umesh2645/pfc.git']]])
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_REGISTRY/$DOCKER_REPOSITORY:$DOCKER_TAG .'
            }
        }
        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: '9ac28815-a224-4848-8e3d-01a252cc01c8')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD $DOCKER_REGISTRY'
                    sh 'docker push $DOCKER_REGISTRY/$DOCKER_REPOSITORY:$DOCKER_TAG'
                }
            }
        }
        stage('Pull Docker Image and Run'){
            echo 'This will be done in some time'
        }
    }
}
