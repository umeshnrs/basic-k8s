pipeline {
    agent any
    environment {
        DOCKER_REGISTRY = "docker.io"
        DOCKER_REPOSITORY = "umesh2645/pfc"
        DOCKER_TAG = "latest"
        DOCKER = credentials("docker")
    }
    stages {
        stage('Check docker'){
            steps{
                echo 'checking docker version'
                sh 'docker --version'
            }
        }
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'git', url: 'https://github.com/umesh2645/pfc.git']]])
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_REGISTRY/$DOCKER_REPOSITORY:$DOCKER_TAG .'
            }
        }
        stage('Push Docker Image') {
            steps {
                    sh 'docker login -u $DOCKER_USR -p $DOCKER_PSW $DOCKER_REGISTRY'
                    sh 'docker push $DOCKER_REGISTRY/$DOCKER_REPOSITORY:$DOCKER_TAG'
            }
        }
    }
}