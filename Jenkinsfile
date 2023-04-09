pipeline {
    agent any
   environment {
            DOCKER_REGISTRY = "docker.io"
            DOCKER_REPOSITORY = "umesh2645/pfc"
            DOCKER_LATEST_TAG = "latest"
            VERSION = "${env.BUILD_ID}"
            DOCKER_BUILD_IMAGE_LATEST = "${DOCKER_REGISTRY}/${DOCKER_REPOSITORY}:${DOCKER_LATEST_TAG}"
            DOCKER_BUILD_IMAGE_CURRENT = "${DOCKER_REGISTRY}/${DOCKER_REPOSITORY}:${VERSION}"
            DOCKER = credentials("docker_hub_token")
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github_login', url: 'https://github.com/umesh2645/pfc.git'
            }
        }
        stage('Build docker image') {
            steps {
                echo "DOCKER_BUILD_IMAGE_LATEST:  ${DOCKER_BUILD_IMAGE_LATEST}"
                echo "DOCKER_BUILD_IMAGE_CURRENT: ${DOCKER_BUILD_IMAGE_CURRENT}"
                sh 'docker build -t $DOCKER_BUILD_IMAGE_LATEST -t $DOCKER_BUILD_IMAGE_CURRENT .'
            }
        }
        stage('Push to dockerhub') {
            steps {
                    sh 'echo $DOCKER_PSW | docker login -u $DOCKER_USR --password-stdin'
                    sh 'docker push $DOCKER_BUILD_IMAGE_LATEST'
                    sh 'docker push $DOCKER_BUILD_IMAGE_CURRENT'
            }
        }
        stage('Deploying app to kubernetes') {
            steps {
                echo "Deploying app to kubernetes"
                script {
                    kubernetesDeploy(configs: "deployment.yml", kubeconfigId: "kubernetes", secretName: "regcred")
                }
            }
        }
    }
    post{
        always {  
        sh 'docker logout'     
        }      
    }
}