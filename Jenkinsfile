pipeline {
    agent any
    environment {
        DOCKER_REGISTRY = "docker.io"
        DOCKER_REPOSITORY = "umesh2645/pfc"
        DOCKER_LATEST_TAG = "latest"
        VERSION = "${env.BUILD_ID}"
        DOCKER_BUILD_IMAGE_LATEST = "${DOCKER_REGISTRY}/${DOCKER_REPOSITORY}:${DOCKER_LATEST_TAG}"
        DOCKER_BUILD_IMAGE_CURRENT = "${DOCKER_REGISTRY}/${DOCKER_REPOSITORY}:${VERSION}"
        DOCKER = credentials("docker")
    }
    stages {
        
        stage('Init'){
            steps {
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
                echo "DOCKER_BUILD_IMAGE_LATEST:  ${DOCKER_BUILD_IMAGE_LATEST}"
                echo "DOCKER_BUILD_IMAGE_CURRENT: ${DOCKER_BUILD_IMAGE_CURRENT}"
                sh 'docker build -t $DOCKER_BUILD_IMAGE_LATEST -t $DOCKER_BUILD_IMAGE_CURRENT .'
            }
        }
        stage('Push Docker Image to dockerhub') {
            steps {
                    sh 'docker login -u $DOCKER_USR -p $DOCKER_PSW $DOCKER_REGISTRY'
                    sh 'docker push $DOCKER_BUILD_IMAGE_LATEST'
                    sh 'docker push $DOCKER_BUILD_IMAGE_CURRENT'
            }
        }
    }
}